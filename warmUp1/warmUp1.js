// 1-using + operator combine your partner first and last name .

// 2-find if the number 13 is a multiple of 3 or not.

// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]

// 4-calculate your age in seconds.

// your code is here

// question 1
function fullName (firstName,lastName){

var fullName=firstName+' '+lastName;
return fullName;
}
fullName('belgacem','zabbes');
// question 2
function multiple() {
if ((13%3)===0){
  return  "13 is a multiple of 3";
} else {
  return "13 is not a multiple of 3";
}
}
// question 3

function average (arr) {
    var s=0;
    for (var i in arr){
        s+=arr[i];
    }
    return 'The average of the following ages is : ' + s/arr.length;
}
average([13,14,13,15,16,17,19,13,16,15])

// question 4
function ageInsecond (age) {
 ageS=age*365*24*3600;
return ageS 
}
ageInsecond(25);
