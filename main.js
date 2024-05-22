//lab1

//1
let num =0;
for (let index = 0; index <= 11; index++) {
num +=2 
console.log(num)
}

//2
for (let index = 1; index <= 10; index++) {
console.log(Math.pow(index ,2))
}
//3
for (let index = 1; index <= 20; index++) {
    if (index % 2 != 0) {
      console.log(index)
    }
  }
//4
let n1 = 0,n2 = 1, nextTerm;
for (let i = 1; i <= 10; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

//5
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 10; j++) {
      console.log(i + " x " + j + " = " + (i * j));
  }
  console.log(); 
}


////lab2
///sum//
const sum = function (num1, num2) {
return num1+num2
}
console.log(sum(7,3));
///mult///
function mult(num1,num2) {
  return num1*num2
}
console.log(mult(5,3))
////dev////
function dev(num1,num2) {
  return num1-num2
}
console.log(dev(10,2))
////divide/////
let divide = (num1, num2) => num1 / num2;
console.log(divide(20, 2))
