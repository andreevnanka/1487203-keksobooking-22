// import {getRandomInteger} from './util.js';

const AVATAR_INDEX_MIN = 1;
const AVATAR_INDEX_MAX = 8;

const LATITUDE_MIN = 35.65;
const LATITUDE_MAX = 35.70;
const LONGITUDE_MIN = 139.7;
const LONGITUDE_MAX = 139.8;
const ROUNDING_DEGREE =  2;

const MAX_ROOMS = 10;
const MAX_GUESTS = 10;
const CHECK_IN_MIN = 12;
const CHECK_IN_MAX = 14;
const CHECK_OUT_MIN = 12;
const CHECK_OUT_MAX = 14;
const PRICE_MAX = 10000;

const ADVERTISEMENTS_COUNT = 10;

const PHOTO_LENGTH = 3;/*getRandomInteger(1,3);*/
const PHOTOS = Array.from({length: PHOTO_LENGTH}, ((value,index) => 'http://o0.github.io/assets/images/tokyo/hotel'+(index+1)+'.jpg'));

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];


const TIME = [
  '12:00',
  '13:00',
  '14:00',
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

export {
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
  MAX_GUESTS,
  CHECK_IN_MIN,
  CHECK_IN_MAX,
  CHECK_OUT_MIN,
  CHECK_OUT_MAX,
  PRICE_MAX
};