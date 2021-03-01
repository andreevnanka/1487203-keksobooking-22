// import {createAdvert, createAdverts} from'./offer-generation.js';
// import {freshAdvertisements, createAdvertisement} from './advertisements.js';
import './map.js';
// import {getCapacityText} from './capacity-generation';
// getCapacityText(freshAdvertisements);
// console.log(freshAdvertisements[0].offer.features)

const val1 = document.getElementById('timein');

const val2 = document.getElementById('timeout');

 var onTimeInInputChange = function (evt) {
    val2.value = evt.target.value;
  };

  var onTimeOutInputChange = function (evt) {
    val1.value = evt.target.value;
  };

const sync = function() {
	val1.addEventListener('change', onTimeInInputChange);
    val2.addEventListener('change', onTimeOutInputChange);
};