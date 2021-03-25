//Синхронизация типа жилья с ценой
const BuildingMinPrice = {
  BUNGALOW: 0,
  FLAT: 1000,
  HOUSE: 5000,
  PALACE: 10000,
};

const buildingType = document.getElementById('type');
const priceInput = document.getElementById('price');
const onTypeInputChange = function (evt) {
  const minPrice = BuildingMinPrice[evt.target.value.toUpperCase()];
  priceInput.min = minPrice;
  priceInput.placeholder = minPrice.toString();
};
const TYPE_PRICE_SYNC = function () {
  buildingType.addEventListener('change', onTypeInputChange);
}


//Синхронизация полей заезда/выезда
const timeIn = document.getElementById('timein');
const timeOut = document.getElementById('timeout');

const onTimeInInputChange = function (evt) {
  timeOut.value = evt.target.value;
};
const onTimeOutInputChange = function (evt) {
  timeIn.value = evt.target.value;
};

const SYNCHRONIZE_TIME = function() {
  timeIn.addEventListener('change', onTimeInInputChange);
  timeOut.addEventListener('change', onTimeOutInputChange);
};

//синхронизация количества комнат и количества мест
/*const ROOM_GUEST_CONFORMITY = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

const roomsQuantity = document.getElementById('room_number');
const guestsCapacity = document.getElementById('capacity');

const disableСapacityOptions = function (inputValue) {
  const capacityOptions = guestsCapacity.querySelectorAll('option');
  capacityOptions.forEach(function (item) {
    item.disabled = true;
  });
  ROOM_GUEST_CONFORMITY[inputValue].forEach(function (item) {
    guestsCapacity.querySelector(`option ${[value="'item'"]}`).disabled = false;
    guestsCapacity.value = item;
  });
};

const onRoomsQuantityChange = function (evt) {
  disableСapacityOptions(roomsQuantity.value);
};*/

SYNCHRONIZE_TIME();
TYPE_PRICE_SYNC();