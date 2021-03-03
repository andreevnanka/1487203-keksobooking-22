import {freshAdvertisements} from './advertisements.js';
import {getCapacityRoomsText, getCapacityGuestsText, wordSetRooms, wordSetGuests} from './capacity-text-generation.js';
import {makeElement} from './util.js';

const L = window.L;
const TOKIO_LATITUDE = 35.6895;
const TOKIO_LANGITUDE = 139.69171;
const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('.ad-form__element');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelects = mapFilters.querySelectorAll('select');

//Неактивное состояние
//const deactivating = function() {
adForm.classList.add('ad-form--disabled');
adFormFieldsets.forEach(function (it) {
  it.disabled = true;
});

mapFilters.classList.add('map__filters--disabled');
mapFiltersSelects.forEach(function (it) {
  it.disabled = true;
});
//};

// Активное состояние
const activating = function() {
  adForm.classList.remove('ad-form--disabled');
  adFormFieldsets.forEach(function (it) {
    it.disabled = false;
  });

  mapFilters.classList.remove('map__filters--disabled');
  mapFiltersSelects.forEach(function (it) {
    it.disabled = false;
  });
};

//Вставка карты
const map = L.map('map-canvas')
  .on('load', () => {
    activating();
  })
  .setView({
    lat: TOKIO_LATITUDE,
    lng: TOKIO_LANGITUDE,
  }, 12,
  );

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [0, 0],
});

const mainPinMarker = L.marker(
  {
    lat: TOKIO_LATITUDE ,
    lng: TOKIO_LANGITUDE,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  return(evt.target.getLatLng());
});

freshAdvertisements.forEach((item) => {
  const pointOffer = item.offer;
  const pointLocation = item.location;
  const poinAuthor = item.author;
  const pointFeatures = pointOffer.features;
  const pointPhotos = pointOffer.photos;

  const createCustomPopup = () => {
    const balloonTemplate = document.querySelector('#card').content.querySelector('.popup');
    const popupElement = balloonTemplate.cloneNode(true);
    
    popupElement.querySelector('.popup__avatar').src = poinAuthor.avatar;
    popupElement.querySelector('.popup__title').textContent = pointOffer.title;
    popupElement.querySelector('.popup__text--address').textContent = `Координаты: ${pointLocation.x}, ${pointLocation.y}`;
    popupElement.querySelector('.popup__text--price').textContent = `${pointOffer.price}₽/ночь`;
    popupElement.querySelector('.popup__type').textContent = pointOffer.type;
    popupElement.querySelector('.popup__text--capacity').textContent = `${pointOffer.rooms} ${getCapacityRoomsText(wordSetRooms,pointOffer.rooms)} ${pointOffer.guests} ${getCapacityGuestsText(wordSetGuests,pointOffer.guests)}`;
    popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${pointOffer.checkin}, выезд до ${pointOffer.checkout}`;
    
    const createFeatureFragment = function (pointFeatures) {
      const featureFragment = makeElement('ul', 'popup__features');
      pointFeatures.forEach((item) => {
        const featureItem = document.createElement('li');
        featureItem.className = `popup__feature popup__feature--${item}`;
        featureFragment.appendChild(featureItem);
      });
      return (featureFragment);
    };
    
    popupElement.replaceChild(createFeatureFragment(pointFeatures), popupElement.querySelector('.popup__features'));
    popupElement.querySelector('.popup__description').textContent = pointOffer.description;

    const createPhotoFragment = function (pointPhotos) {
      const photoFragment = makeElement('div', 'popup__photos');
      pointPhotos.forEach((item) => {
        const photoItem = makeElement('img', 'popup__photos');
        photoItem.src = `${item}`;
        photoItem.width = 45;
        photoItem.height = 40;
        photoFragment.appendChild(photoItem);
      });
      return (photoFragment);
    };
    popupElement.replaceChild(createPhotoFragment(pointPhotos), popupElement.querySelector('.popup__photos'));

    return(popupElement);
  };

  const lat = pointLocation.x;
  const lng = pointLocation.y;
  const icon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(
      createCustomPopup(freshAdvertisements),
      {
        keepInView: true,
      },
    )
});