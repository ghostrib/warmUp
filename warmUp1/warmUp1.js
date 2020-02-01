// 1-using + operator combine your partner first and last name .

// 2-find if the number 13 is a multiple of 3 or not.

// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]


// 4-calculate your age in seconds.

// your code is here
function  fullName(firstName, lastName){
    return firstName+" "+lastName;
}

function multipleOfThree (number){
    if (Math.floor(number/3)=Math.ceil(number/3)){
        return number +" is a multiple of three !";
    }
    return number+ "is not a multiple of three !";
}
function averageOfAge (array){
    var sum=0;
    for (var i=0; i<array.length; i++){
        sum =sum+array[i];
    }
    return "The average of ages is "+ sum/array.length;
}
function ageInSecond(age){
    return "Your age is "+(age*365**86400+ Math.floor(age/4)*86400) +" seconds";
}