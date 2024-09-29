console.log(2>1);
console.log(1>=1);
console.log(2<1);


console.log("2">1); //true
console.log("02">1); //true

console.log(null>0); //false
console.log(null ==0); //false
console.log(null >=0); //true

//Equality check and comparison work differently
// comparisons convert null into a number , treating it as 0.

// undefined ko kisi se bi compare kro tho false deta

console.log(undefined ==0); // false

// Strict check ===  datatype check krta
console.log("2" ==2); //true
console.log("2" ===2); //false

