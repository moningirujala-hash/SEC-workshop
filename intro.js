var a = "rujala" ;
console.log(typeof(a));
var a=10;
console.log(typeof(a));
let b ="Anju";
console.log(typeof(b));
//let b;
b=10;
console.log(typeof(b));
/*even or odd */
let c=9;
if(c%2==0){
    console.log(c +" is even");
}
else{
    console.log( c+" is odd number");
}
/*for loop*/
for(let i=0;i<10;i++){
    console.log(i);
}
/*while loop*/
var i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
/*Array*/
var d=[96,83,75,64,8,90,78,2];
for( var j=0;j<d.length;j++){
    console.log(d[j]);
}
/*largest number in an array*/
var d = [96, 83, 75, 64, 8, 90, 78, 2];

var largest = d[0];

for (var j = 1; j < d.length; j++) {
    if (d[j] > largest) {
        largest = d[j];
    }
}

console.log("Largest number is:", largest);
/*Factorial of a number*/
var n = 5;
var fact = 1;

for (var i = 1; i <= n; i++) {
    fact = fact * i;
}

console.log("Factorial is:", fact);
/*strong number*/
var n = 145;
var temp = n;
var sum = 0;

while (temp > 0) {
    var digit = temp % 10;

    var fact = 1;
    for (var i = 1; i <= digit; i++) {
        fact = fact * i;
    }

    sum = sum + fact;
    temp = Math.floor(temp / 10);
}

if (sum == n) {
    console.log("Strong Number");
} else {
    console.log("Not a Strong Number");
}
/*Amstrong number*/
var n = 153;
var temp = n;
var sum = 0;

while (temp > 0) {
    var digit = temp % 10;
    sum = sum + digit * digit * digit;
    temp = Math.floor(temp / 10);
}

if (sum == n) {
    console.log("Armstrong Number");
} else {
    console.log("Not an Armstrong Number");
}
/*Prime numbers in a range*/
var start = 1;
var end = 20;
console.log("Prime numbers in a range are:",)
while (start <= end) {
    var count = 0;
    var i = 1;

    while (i <= start) {
        if (start % i == 0) {
            count++;
        }
        i++;
    }

    if (count == 2) {
        console.log(start);
    }

    start++;
    
}
