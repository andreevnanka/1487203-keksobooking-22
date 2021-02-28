//Функция,выдающая случайные целочисленные значения в заданном интервале

const getRandomInteger = function (min, max) {
  const from = Math.ceil(min);
  const to = Math.floor(max)+1;
  const randomInt = Math.random()*(to-from)+from;
  return Math.floor(randomInt);
}

//Функция,выдающая случайные значения с плавающей точкой в заданном интервале
const getRandomNumber = function (min, max, roundingDegree) {
  const randomNum = Math.random()*(max-min)+min;
  const roundedValue  = Math.round(Math.pow(10, roundingDegree)*randomNum)/Math.pow(10, roundingDegree);
  return (roundedValue);
}

//Функция,выдающая случайный элемент массива
const getRandomArrayElement = (elemets) => {
  return elemets[getRandomInteger(0, elemets.length - 1)];
};

//Функция,генерирующая массив случайных значений из заданного массива
const shuffleArr = function (arr) {
  for (let j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
  return arr;
};

//Функция создающая элемент с заданными тегом,классом и текстом
const makeElement = function (tagName, className, text) {
  let element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};


export {getRandomInteger, getRandomNumber, getRandomArrayElement, shuffleArr, makeElement};
