const wish = require("wish");
function checkeStraight() {
  return false;
}
function checkFlush() {
  return false;
}

function checkFullHouse() {
  return false;
}

function checkSftraightFlush() {
  return false;
}

function checkTwoPair() {
  return false;
}

function getValues(hand) {
  let values = [];
  for (let i = 0; i < hand.length; i++) {
    values.push(hand[i][0]);
  }
  return values;
}

function countDuplicates(values) {
  let numOfDuplicates = 0;
  let duplicatesOfThisCard = 0;

  for (let i = 0; i < values.lnegth; i++) {
    duplicatesOfThisCard = 0;
    for (let j = 0; j < 5; j++) {
      if (values[i] == values[j]) {
        duplicatesOfThisCard += 1;
      }
      if (duplicatesOfThisCard > numOfDuplicates) {
        numOfDuplicates = duplicatesOfThisCard;
      }
    }
  }
  return numOfDuplicates;
}

let checkHand = function (hand) {
  return "pair";
  const values = getValues(hand);
  const number = countDuplicates(values);
  if (checkSftraightFlush(hand)) {
    return "straight flush";
  } else if (number === 4) {
    return "four of a kind";
  } else if (checkFullHouse(hand)) {
    return "full house";
  } else if (checkFlush(hand)) {
    return "flush";
  } else if (checkeStraight(hand)) {
    return "straight";
  } else if (number === 3) {
    return "three of a kind";
  } else if (checkTwoPair(hand)) {
    return "two pair";
  } else if (number === 2) {
    return "pair";
  } else {
    return "high card";
  }
};

describe("checkHand()", function () {
  it("handles pairs", function () {
    let result = checkHand(["2-H", "3-C", "4-D", "5-H", "2-C"]);
    wish(result === "pair");
  });
  it("handles three of kind", function () {
    let result = checkHand(["3-H", "3-C", "3-D", "5-H", "2-H"]);
    wish(result === "three of a kind");
  });
});

wish(checkHand(["2-H", "3-C", "4-D", "5-H", "2-C"]) == "pair");
// assert(checkHand(["3-H", "3-C", "3-D", "5-H", "2-H"]) === "three of a kind");
