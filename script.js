// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = 23;
// const calcAge = birthYear => 2037 - birthYear;
// console.log(calcAge(1991));
/*
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let index = 0; index < temps.length; index++) {
    const curTemp = temps[index];

    if (typeof curTemp !== "number") continue;

    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// ------------------------------

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let index = 0; index < temps.length; index++) {
    const curTemp = temps[index];

    if (typeof curTemp !== "number") continue;

    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 2, 0], [6, 5, 9]);
console.log(amplitudeNew);

const measureKelvin = function () {
  const measurment = {
    type: "temp",
    unit: "celsius",
    // value: Number(prompt("Degrees celsius:")),
    value: 10,
  };

  console.table(measurment);

  const kelvin = measurment.value + 273;
  return kelvin;
};

console.log(measureKelvin());

//Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let index = 0; index < temps.length; index++) {
    const curTemp = temps[index];

    if (typeof curTemp !== "number") continue;

    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);

let startingNubmer = 0;

const findingHighestNumber = function (array) {
  let currentNumber = 0;
  for (let index = 0; index < array.length; index++) {
    if (startingNubmer < array[index]) {
      currentNumber = startingNubmer = array[index];
    }
  }
  return currentNumber;
};

console.log(findingHighestNumber([1, 2, 3, 4, 5]));
*/

const tempArr = [17, 21, 23];
const tempArr2 = [12, 5, -5, 0, 4];

let newString = "";

const printForecast = function (arr) {
  for (let index = 0; index < arr.length; index++) {
    newString += ` ... ${arr[index]} in ${index + 1} days`;
  }
  newString += " ...";
};

printForecast(tempArr2);
console.log(newString);
