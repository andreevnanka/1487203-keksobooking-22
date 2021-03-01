const wordSetRooms = {
  one: 'комната для ',
  few: 'комнаты для ',
  many: 'комнат для ',
};

const wordSetGuests = {
  one: 'гостя',
  many: 'гостей',
};

const getCapacityRoomsText = ({one, few, many}, count) => {
  if (count===1) {
    return(one);
  } else{ 
    if (count <=4) {
      return(few);
    } else {
      return(many)
    }
  }
};

const getCapacityGuestsText = ({one,many}, count) => {
  if (count===1) {
    return(one);
  } else {
    return(many);
  }
};

export {getCapacityRoomsText, getCapacityGuestsText, wordSetRooms, wordSetGuests};