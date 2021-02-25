import {LATITUDE_MIN, LATITUDE_MAX, LONGITUDE_MIN, LONGITUDE_MAX, ROUNDING_DEGREE} from './advertisements-data.js';
import {getRandomNumber} from './util.js';
import {createAdvert, createAdverts} from'./offer-generation.js';
import {freshAdvertisements, createAdvertisement} from './advertisements.js';
// //Неактивное состояние
// const AD_FORM = document.querySelector('.ad-form');
// AD_FORM.classList.add('ad-form--disabled');

// AD_FORM.querySelectorAll('fieldset').setAttribute('disabled', 'disabled');

// const MAP_FILTERS = document.querySelector('.map__filters');
// MAP_FILTERS.classList.add('map__filters--disabled');

// MAP_FILTERS.querySelectorAll('select').setAttribute('disabled', 'disabled');

//Вставка карты
const map = L.map('map-canvas')
  .on('load', () => {
    // AD_FORM.classList.remove('ad-form--disabled');
    // MAP_FILTERS.classList.remove('map__filters--disabled');
  })
  .setView({
    lat: 35.6895,
    lng: 139.69171,
  }, 10);

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
    lat: 35.6895,
    lng: 139.69171,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  console.log(evt.target.getLatLng());
});

const createCustomPopup = (point) => {
  const balloonTemplate = document.querySelector('#card').content.querySelector('.popup');
  const popupElement = balloonTemplate.cloneNode(true);
  const pointOffer = point.offer;

  popupElement.querySelector('.popup__title').textContent = pointOffer.title;
  popupElement.querySelector('.popup__text').textContent = "Координаты:";

  return popupElement;
};

freshAdvertisements.forEach(({offer, location}) => {
  const lat = location.x;
  const lng = location.y;
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
    );
});