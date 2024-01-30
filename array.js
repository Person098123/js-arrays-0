/* 
Organizing and strong data is a foundational concept of programming.
One way we organize data in real life is by making lists. lets make one:
New Year's Resolutions:
1. Keep a journal 
2. Take a falconry class
3. Learn Kubernetes
*/
//lets write that in JavaScript
let newYearsResolutions=['keep a journal', 'Take afalconry class',
'Learn Kubernetes'];

/* 
Arrays are JavaScript;s way of making lists. Arrays can store any data type
(including strings, numbers, and booleans). like lists, arrays are ordered,
meaning each item has a numbered position
*/
/* 
Creatin an Array

one way to create an array is to use an array literal. Array literal 
creates an array by wrapping items in square brackets[]. Also remember that the 
previous exercise, array can store any data type. We can have it hold the same
or different data types.
*/

//lets practice by making an array of our own:
const hobbies=['video games', 'reading', 'watching movies/shows']
console.log(hobbies)

/* 
Accessing Elements

Each element in an array has a numbered position known as its index.
We can access individual items using their index, which is similar to referencing
an items in a list based on the items's posiotion(or number). Arrays in 
JavaScript are zero-indexed, meaning the positions start from zero and not one.
Which means the first item in an arrqay will be atr position zero.

Cities in an array that has three ekements. We're using braket notation, with
the index after the nakme of th earray to access the element.
Cities[0] will access the element at index 0 in the array cities.
*/

let listItem = hobbies[0];
console.log(listItem);
console.log(hobbies[2]);
console.log(hobbies[3]);

/* 
Updating Elements

Once you have access to an element in an array, you can update its
value
*/
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
seasons[3]= 'Autumn';
console.log(seasons);

newYearsResolutions[0]= 'learn how to code a website better';
newYearsResolutions[1]= 'learn how to animate';
newYearsResolutions[2]= 'Get into college';
console.log(newYearsResolutions);

