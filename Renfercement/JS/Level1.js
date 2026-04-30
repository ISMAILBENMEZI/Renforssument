
let array = [14, 3, 89, 27, 56, 3, 41, 100, 7, 56];

array.push(200); //add element end 
array.pop(); //remove element from end 
array.unshift(0); // add element in first
array.shift(); //remove element of first
const test = array.find(ele => ele > 50);
// console.log(test);
const ind = array.indexOf(3);
// console.log(ind);
const fi = array.findIndex(ele => ele > 20);
// console.log(fi);
const fil = array.filter(ele => ele > 20);
// console.table(fil);
const taha = array.map(ele => ele * 2);
// console.table(taha);
const sum = array.reduce((acc , ele) => acc + ele);
// console.log(sum);
const sort = array.toSorted((a , b) => a - b);
// console.log(sort);
array.sort((a , b) => a - b);
// console.log(array);
array.splice(3,0,66);
// console.table(array);
const slice = array.slice(3,2);
// console.table(slice);
array.reverse();
// console.table(array);
// ----------------------------------
const max = array.reduce((acc , ele) => (ele * 2) + acc);
// console.log(max);
