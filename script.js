// // prgm1:
// // array manipulation


// //create array

// let cars=["bmw","benz","audi","volks","chev"];
// console.log(...cars);  


// //add element to array
// cars.push("coopie");
// console.log(cars);

// // remove element
// cars.pop();
// console.log(cars);

// // shift 
// cars.shift();
// console.log(cars);

// // unshift
// cars.unshift("coopie");
// console.log(cars);



// prgm2:

// //  array searching indexOf()
// const arr=[1,2,3,4,5,6,7,8,9];
// const index=arr.indexOf(5);
// console.log(index);

// // array search includes()
// const arr1=[1,2,3,4,5,6,7,8,9];
// const index1=arr1.includes(5);
// console.log(index1)




// // prgm 3:
// array spreading
// let arr2=[1,2,3];
// let arr3=[4,5,6];

// // spread arr1 and arr2 into new
// let arr4=[...arr2,...arr3];
// console.log(arr4);


// prgm 4:
// array merging
// let arr5 = [1,2,3];
// let arr6 = [4,5,6];
// let arr7 = [7,8,9];
// let arr8=[...arr5,...arr6,...arr7];
// console.log(arr8);





// prgm 5:
// // array mapping

const numbers=[1,2,3,4,5];
const sqrnum=numbers.map((num)=>num*num);
console.log(sqrnum);