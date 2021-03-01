import {freshAdvertisements} from './advertisements.js';
// import {getCapacityText} from './capacity-generation';
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
  onRoomsQuantityChange();
  SYNCHRONIZE_TIME();
  TYPE_PRICE_SYNC();
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

  const createCustomPopup = () => {
    const balloonTemplate = document.querySelector('#card').content.querySelector('.popup');
    const popupElement = balloonTemplate.cloneNode(true);
    popupElement.querySelector('.popup__avatar').src = poinAuthor.avatar;
    popupElement.querySelector('.popup__title').textContent = pointOffer.title;
    popupElement.querySelector('.popup__text--address').textContent = `Координаты: ${pointLocation.x}, ${pointLocation.y}`;
    popupElement.querySelector('.popup__text--price').textContent = `${pointOffer.price}₽/ночь`;
    popupElement.querySelector('.popup__type').textContent = pointOffer.type;
    // popupElement.querySelector('.popup__type--capacity').textContent = pointOffer.rooms+'комнат';
    // popupElement.querySelector('.popup__type--time').textContent = `Заезд после ${pointOffer.checkin}, выезд до ${pointOffer.checkout}`;
    // popupElement.querySelector('.popup__feature--wifi').textContent = pointFeatures.wifi;
    // popupElement.querySelector('.popup__feature--dishwasher').textContent = pointFeatures.dishwasher;
    // popupElement.querySelector('.popup__feature--parking').textContent = pointFeatures.parking;
    // popupElement.querySelector('.popup__feature--washer').textContent = pointFeatures.washer;
    // popupElement.querySelector('.popup__feature--elevator').textContent = pointFeatures.elevator;
    // popupElement.querySelector('.popup__feature--conditioner').textContent = pointFeatures.conditioner;
    // popupElement.querySelector('.popup__description').textContent = pointOffer.description;

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