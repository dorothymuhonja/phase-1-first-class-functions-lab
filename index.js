// Code your solution in this file!
const returnFirstTwoDrivers = function() {
    return ['Antonia', 'Nuru']
}

const returnLastTwoDrivers = function() {
    return ['Amari', 'Mo']
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare) {

    return function fareMultiplier(num) {
        return fare * num
    }
     
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers([], returnFirstTwoDrivers) {
    return returnFirstTwoDrivers()

}






