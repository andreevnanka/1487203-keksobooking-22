import {getRandomInteger, getRandomNumber, getRandomArrayElement, shuffleArr} from './util.js';
import {
  AVATAR_INDEX_MIN,
  AVATAR_INDEX_MAX,
  TYPES,
  FEATURES,
  PHOTOS,
  DESCRIPTIONS,
  ADVERTISEMENTS_COUNT, 
  LATITUDE_MIN,
  LATITUDE_MAX,
  LONGITUDE_MIN,
  LONGITUDE_MAX,
  ROUNDING_DEGREE,
  MAX_ROOMS,
  MAX_GUESTS
} from './advertisements-data.js';

const x = getRandomNumber(LATITUDE_MIN, LATITUDE_MAX, ROUNDING_DEGREE);
const y = getRandomNumber(LONGITUDE_MIN, LONGITUDE_MAX, ROUNDING_DEGREE);
const avatarIndex = getRandomInteger(AVATAR_INDEX_MIN, AVATAR_INDEX_MAX); 
const address = `${x},${y}`;
const price = getRandomInteger(1, PRICE_MAX);
const type = getRandomArrayElement(TYPES);
const rooms = getRandomInteger(1, MAX_ROOMS);
const guests = getRandomInteger(1, MAX_GUESTS);
const checkIn = `${getRandomInteger(CHECK_IN_MIN, CHECK_IN_MAX)}:00`;
const checkOut = `${getRandomInteger(CHECK_OUT_MIN, CHECK_OUT_MAX)}:00`;
const shuffledFeatures = shuffleArr(FEATURES);
const features = shuffledFeatures.splice(0, getRandomInteger(1, FEATURES.length));
const description = getRandomArrayElement(DESCRIPTIONS);
const shuffledPhotos = shuffleArr(PHOTOS);
const photos = shuffledPhotos.splice(0, getRandomInteger(1, PHOTOS.length));

const createAdvertisement = function() {
  const author = {
    avatar: `img/avatars/user0${avatarIndex}.png`,
  }
  const  offer = {
    title: 'Добро пожаловать!',
    address: address,
    price: price,
    type: type,
    rooms: rooms,
    guests: guests,
    checkin: checkIn,
    checkout: checkOut,
    features: features,
    description: description,
    photos: photos,
  }
  const  location = {
    x: x,
    y: y,
  };

  const advertisement = {author, offer, location};
  return(advertisement);
}

const freshAdvertisements = new Array(ADVERTISEMENTS_COUNT).fill(null).map(() => createAdvertisement());

export {freshAdvertisements, createAdvertisement};