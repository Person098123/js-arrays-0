/* 
Arrays with let and const

You may recall that you can declare variables with both the let and const keywords.
Variables declared with let can be reassigned. Variables declared with the const ketword cannot be
reassigned. However, elements in an array declared with const remain mutable.
meaning that we can change the content of a const array, but cannot reassign a new array
or a different value.
*/

let condiments= ['Ketchup', 'Mustard', 'Relish'];
condiments[0]=='Mayo';
console.log(condiments);

condiments=['Mayo'];
console.log(condiments);
console.log(condiments.length);

let utensils=['fork', 'spoon', 'knife'];
utensils[2]='spork';
console.log(utensils);

/* 
The .lengh property

One of an array's built-in properties is length and it returns the number of items
in the array. We acces the .length property just like we do with styrings.

.length -1 takes the number from the last array and plays that item
*/
const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];
console.log(newYearsResolutions.length);
console.log(newYearsResolutions[newYearsResolutions.length -1])

/* 
We use dot notation, chaining a period with the property name to the array, to access the length
 property of the newYearsResolutions array. Then we log the length of newYearsResolution to the console.
Since newYearsResolution has two elements, 2 would be logged to the console.
When we want to know how many elements are in an array, we can access the .length property.
*/

/* 
The .push() Method
.push() allows us to add items to the end of an array.

We access the push method by using dot notation, connecting push on itemTracker with a period. Then we 
call it like a function becuase .push() is a funct5ion and one that Java allows us to use right on an array.
.push() can take a single argument or multiple arguments separated by commas. .push() changes, or mutates
itemTracker. You might also see .push() referred to as a destructive array method since it changes the initial array.
If you’re looking for a method that will mutate an array by adding elements to it, then .push() is the method for you!
*/

const itemTracker = ['item 0', 'item 1', 'item 2'];
itemTracker.push('item 3', 'item 4');
console.log(itemTracker);
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

let chores=['clean the living room', 'take out trash'];
chores.push('put away dishes', 'sweep the floor');
console.log(chores);

/* 
The .pop() Method

Another array method, .pop(), removes the last item of an array:
In the example below, calling .pop() on the newItemTracker array 
removed item 2 from the end of the array.
*/
const newItemTracker = ['item 0', 'item 1', 'item 2'];
const removed = newItemTracker.pop();
console.log(newItemTracker);
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2

/* 
.pop() does not take any arguments, it simply removes the last element of an array. 
.pop() returns the value of the last element. In the example, we store the returned 
value in a variable removed to be used for later..pop() is a method that mutates the 
initial array. When you need to mutate an array by removing the last element, use .pop().
*/

chores.pop('sweep the floor');
console.log(chores);