const getCapacityText = function(advertisement) {
  const offer = advertisement.offer;
  const wordSetRooms = {
    one: `${offer.rooms} комната для `,
    few: `${offer.rooms} комнаты для `,
    many: `${offer.rooms} комнат для `,
  };
  const wordSetGuests = {
    one: `${offer.guests} гостя`,
    many: `${offer.guests} гостей`,
  };
  let wordSet;
  if(offer.rooms>=5) {
    wordSet = `${wordSetRooms.many} ${wordSetGuests.many}`;
  } else {
    if (offer.rooms === 1) {
      wordSet = `${wordSetRooms.one} ${wordSetGuests.many}`;
    } else {
      wordSet = `${wordSetRooms.few} ${wordSetGuests.many}`;
    }}

  if (offer.guests === 1) {
    wordSet = `${wordSetRooms.few} ${wordSetGuests.one}`;
    if (offer.rooms === 1) {
      wordSet = `${wordSetRooms.few} ${wordSetGuests.one}`;
    } else {
      wordSet = `${wordSetRooms.many} ${wordSetGuests.one}`;
    }
  }
  let capacityText= document.createTextNode(wordSet);
  return(capacityText);
};

export {getCapacityText};