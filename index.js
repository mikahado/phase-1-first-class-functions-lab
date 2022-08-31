const driverArray = [];

const returnFirstTwoDrivers = function(driverArray) {
  return driverArray.slice(0,2);
}

const returnLastTwoDrivers = function (driverArray) {
  return driverArray.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function (fareMulti) {
  return function(value) {
    return fareMulti * value;
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driverArray, funct) {
  return funct(driverArray);
} 