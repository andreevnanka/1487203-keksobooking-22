import {getRandomInteger} from './util.js';

const AVATAR_INDEX_MIN = 1;
const AVATAR_INDEX_MAX = 8;

const LATITUDE_MIN = 35.65;
const LATITUDE_MAX = 35.70;
const LONGITUDE_MIN = 139.7;
const LONGITUDE_MAX = 139.8;
const ROUNDING_DEGREE =  2;

const ADVERTISEMENTS_COUNT = 10;

const MIN_LENGTH_PHOTO_ARRAY = 1;
const MAX_LENGTH_PHOTO_ARRAY = 5;
const PHOTO_LENGTH = getRandomInteger(MIN_LENGTH_PHOTO_ARRAY, MAX_LENGTH_PHOTO_ARRAY);
const PHOTOS = (PHOTO_LENGTH) => Array.from({length:PHOTO_LENGTH}, ((item, index) => 'http://o0.github.io/assets/images/tokyo/hotel'+(index+1)+'.jpg'));

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'Светло,уютно и идеально для отдыха и командировок!',
  'Проведите незабываемые выходные с комфортом!',
  'Комфортное жильё по доступной цене!',
];

export {AVATAR_INDEX_MIN, 
  AVATAR_INDEX_MAX, 
  TYPES, 
  PHOTO_LENGTH,
  PHOTOS,
  FEATURES, 
  DESCRIPTIONS, 
  ADVERTISEMENTS_COUNT, 
  LATITUDE_MIN, 
  LATITUDE_MAX, 
  LONGITUDE_MIN, 
  LONGITUDE_MAX, 
  ROUNDING_DEGREE} ;