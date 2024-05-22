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
for (var index = 1; index <= 20; index++) {
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
