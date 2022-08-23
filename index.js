// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
  const blockNumber = (streetNumber - 42 );
  if (streetNumber >= 42) {
      return blockNumber;
  } else {
      return (blockNumber * -1);
  }
}

function distanceFromHqInFeet(streetNumber) {
  return (distanceFromHqInBlocks(streetNumber) * 264);
}

function distanceTravelledInFeet(streetNumber1, streetNumber2) {
  const feetDifference = (distanceFromHqInFeet(streetNumber1) - distanceFromHqInFeet(streetNumber2))
  if (feetDifference >= 0) {
      return feetDifference;
  } else {
      return (feetDifference * -1);
  }
}

function calculatesFarePrice(start, destination) {
  const feetTravelled = (distanceTravelledInFeet(start, destination))
  if (feetTravelled <= 400) {
    return 0;
  } else if (feetTravelled >= 400 && feetTravelled <= 2000) {
      return ((feetTravelled - 400) * 0.02);
  } else if (feetTravelled >= 2000 && feetTravelled <= 2500) {
      return 25;
  } else {
    return 'cannot travel that far';
  }
}

