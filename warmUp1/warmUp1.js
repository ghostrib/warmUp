// 1-using + operator combine your partner first and last name .

function makeName(first, last) {
  return first + ' ' + last;
}
// 2-find if the number 13 is a multiple of 3 or not.

function isMultipleOf13(n) {
  return n % 13 === 0;
}

// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]

function average(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / 2;
}

// 4-calculate your age in seconds.

function calculateAgeInSeconds(age) {
  var seconds = 60;
  var minutes = 60;
  var hours = 24;
  var days = 364.25;
  var result = age * seconds * minutes * hours * days;
  return result;
}
