import {makeElement} from './util.js';

//Функция,создающая одно объявление
const createAdvert = function (offerArr) {
  const advertisement = offerArr.offer;
  let listItem = makeElement('article', 'popup');

  const title = makeElement('h3', 'popup__title', advertisement.title);
  listItem.appendChild(title);

  const address = makeElement('p', 'popup__text--address', advertisement.address);
  listItem.appendChild(address);

  const price = makeElement('p', 'popup__text--price', advertisement.price+'₽/ночь');
  listItem.appendChild(price);

  const  type = makeElement('h4', 'popup__type', advertisement.type);
  listItem.appendChild(type);

  const capacity = makeElement('p', 'popup__text--capacity');
  const getCapacityText = function() {
    const wordSetRooms = {
      one: `${advertisement.rooms} комната для `,
      few: `${advertisement.rooms} комнаты для `,
      many: `${advertisement.rooms} комнат для `,
    };
    const wordSetGuests = {
      one: `${advertisement.guests} гостя`,
      many: `${advertisement.guests} гостей`,
    };

    let wordSet;
    if(advertisement.rooms>=5) {
      wordSet = `${wordSetRooms.many} ${wordSetGuests.many}`;
    } else {
      if (advertisement.rooms === 1) {
        wordSet = `${wordSetRooms.one} ${wordSetGuests.many}`;
      } else {
        wordSet = `${wordSetRooms.few} ${wordSetGuests.many}`;
      }}

    if (advertisement.guests === 1) {
      wordSet = `${wordSetRooms.few} ${wordSetGuests.one}`;
      if (advertisement.rooms === 1) {
        wordSet = `${wordSetRooms.few} ${wordSetGuests.one}`;
      } else {
        wordSet = `${wordSetRooms.many} ${wordSetGuests.one}`;
      }
    }
    let capacityText= document.createTextNode(wordSet);
    return capacityText;
  };
  capacity.appendChild(getCapacityText());
  listItem.appendChild(capacity);

  const time = makeElement('p', 'popup__text--time', 'Заезд после ' + advertisement.checkin + ', выезд до ' + advertisement.checkout);
  listItem.appendChild(time);

  const  features = makeElement('ul', 'popup__features');
  
  advertisement.features.forEach((item) => {
    const featuresItem = makeElement('li', 'popup__feature--item', item);
    features.appendChild(featuresItem);
  });
  listItem.appendChild(features);

  const description = makeElement('p', 'popup__description', advertisement.description);
  listItem.appendChild(description);

  const photos = makeElement('div', 'popup__photos');
  advertisement.photos.forEach((item) => {
    const photo = makeElement('img', 'popup__photo');
    photo.src = item;
    photos.appendChild(photo);
  });
  listItem.appendChild(photos);

  const author = offerArr.author;
  const avatar = makeElement('img', 'popup__avatar');
  avatar.src = author.avatar;
  listItem.appendChild(avatar);
  
  return(listItem);
};

//Функция,создающая объявления из сгенерированного обьекта

const createAdverts = function(advertisementsArray) {
  const cards = document.getElementById('card');
  advertisementsArray.forEach(function(item) {
    const popupOffer = createAdvert(item);
    cards.appendChild(popupOffer);
  });
  return(cards);

};

export {createAdvert, createAdverts};