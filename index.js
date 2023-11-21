// function findMax(...numbers) {
//   // Using the spread operator to gather parameters into an array
//   if (numbers.length === 0) {
//     // Return an appropriate value when no numbers are provided
//     return undefined;
//   }

//   // Using the spread operator to find the maximum value
//   return Math.max(...numbers);
// }

// // // Example usage:
// const maxNumber = findMax(5, 10, 3, 8, 1);
// console.log(maxNumber); // Should print: 10

// const noNumbers = findMax();
// console.log(noNumbers); 

// ----------------->>>>>>>>>>>>>>

// const originArrays = [1,2,3]
// function data(clon){
//   return [...clon];
// };
// const clonedArrays = data(originArrays);
// console.log(clonedArrays)

// function mergeArrays(a,b,c){
//   return [...a,...b,...c];

// }
// const resultArray = mergeArrays([1, 2], [3, 4], [5, 6]);
// console.log(resultArray); 

// ---------------->>>>>>>>>>>>>>..

// function removeElement(originalArray) {
//   const newElement = originalArray.slice(0, 2).concat(originalArray.slice(3))
//   return [...newElement]
// }

// const originalArray = [1, 2, 3, 4, 5];
// const modifiedArray = removeElement(originalArray, 3);
// console.log(modifiedArray);

// or

// function removeElement(originalArray, elementToRemove) {
// Using the spread operator to create a new array without the specified element
// return originalArray.filter((element) => element !== elementToRemove);
// }

// Example usage:
// const originalArray = [1, 2, 3, 4, 5];
// const modifiedArray = removeElement(originalArray, 5);
// console.log(modifiedArray);

// -------------------->>>>>>>>>>>>....

function updateObject(originalObject, UpdateKey, UpdateValue) {
    return {
      ...originalObject,
      [UpdateKey]: UpdateValue
    }
  }
  const originalObject = { name: 'John', age: 2, city: 'New York' };
  const updatedObject = updateObject(originalObject, 'age', 26);
  console.log(updatedObject);
  
  
  function concatenateStrings(string1, string2,) {
    return `${string1 + string2}`;
  }
  
  const resultString = concatenateStrings('Hello', ' ', 'World', '!');
  console.log(resultString);
  
  
  