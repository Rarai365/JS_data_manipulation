//div DOM

var resultTag = document.getElementById("container");
// resultTag.style.border = "2px solid black";
resultTag.style.height = "100vh";
resultTag.style.width = "60vw";
resultTag.style.marginLeft = "20%";
resultTag.style.background = "lightwheat";
//H1 DOM
var resultTag = document.getElementById("heading");
resultTag.textContent = "Data Manipulation in JavaScript";

resultTag.style.textAlign = "center";

//intro-para
var resultTag = document.getElementById("intro-para");
resultTag.textContent =
  "Data manipulation in JavaScript refers to the process of working with and modifying data to suit specific needs, solve problems, or prepare it for further processing or display. This often involves operations like transforming, filtering, adding, removing, or reorganizing data. JavaScript provides a variety of tools and methods for manipulating different types of data, such as arrays, objects, strings, numbers, and more.";

resultTag.style.textAlign = "center";
resultTag.style.fontSize = "x-large";

var resultTag = document.getElementById("introImg");
// resultTag.style.height = "50%";
resultTag.style.width = "100%";

//number
var resultTag = document.getElementById("number");
resultTag.textContent = "Numbers";

//number-para

var resultTag = document.getElementById("numberPara");
resultTag.style.whiteSpace = "pre-wrap";
resultTag.style.fontSize = "x-large";
resultTag.innerHTML =
  "Javascript provides several methods to manipulate numbers.\n 1. Rounding numbers : Math.round(), Math.floor(), Math.ceil(), Math.min(), Math.max(). \n 2. Exponential Operations: Math.exp(), Math.log(). \n 3. Power Operation: Math.pow(), Math.sqrt(). \n 4. Trigonometric Operation: Math.sin(), Math.cos(), Math.tan() \n \n Here are some examples: \n \n const num =4.7 \n console.log(Math.round(num)) //Output: 5 \n console.log(Math.floor(num))  //Output:4";

var resultTag = document.getElementById("numberImg");
resultTag.style.height = "70%";
resultTag.style.width = "80%";
// resultTag.insertAdjacentElement("beforeend", '<img src=""');

//string
var resultTag = document.getElementById("string");
resultTag.textContent = "String ";

//string-para
var resultTag = document.getElementById("stringPara");
resultTag.style.whiteSpace = "pre-wrap";
resultTag.style.fontSize = "x-large";
resultTag.innerText =
  "JavaScript provides several methods to manipulate strings. Here are a few: \n 1. Concatenation: + operator, concat() method \n 3. Substring extraction: slice() method, substring() method \n 2.  String replacement: replace() method \n 3. String splitting: split() method \n 4. String trimming: trim() method \n \n Example: \n \n const str = 'Hello, World!' ; console.log(str + ' How are you?'); // Output: 'Hello, World! How are you? \n console.log(str.slice(0, 5)); // Output: 'Hello' \n console.log(str.replace('World', 'Universe')); // Output: 'Hello, Universe!' ";

var resultTag = document.getElementById("stringImg");
resultTag.style.height = "50%";
resultTag.style.width = "100%";

//array
var resultTag = document.getElementById("array");
resultTag.textContent = "Array";

//array-para
var resultTag = document.getElementById("arrayPara");
resultTag.style.whiteSpace = "pre-wrap";
resultTag.style.fontSize = "x-large";
resultTag.innerText =
  "JavaScript provides several methods to manipulate arrays. Here are a few: \n 1. Array concatenation: concat() method \n 2. Array merging: merge() method (not a standard method, but can be implemented using concat() and spread operator)\n 3. Array slicing: slice() method\n 4. Array splicing: splice() method\n 5. Array sorting: sort() method\n 6. Array filtering: filter() method\n 7. Array mapping: map() method\n 8. Array reducing: reduce() method \n \n Ecample: \n \n const arr1 = [1, 2, 3];\n const arr2 = [4, 5, 6]; \n console.log(arr1.concat(arr2)); // Output: [1, 2, 3, 4, 5, 6]\n console.log(arr1.slice(1, 3)); // Output: [2, 3]\n console.log(arr1.splice(1, 1, 'a)); // Output: [2], arr1 becomes [1, 'a, 3] ";

// object
var resultTag = document.getElementById("object");
resultTag.textContent = "Object ";

//object para
var resultTag = document.getElementById("objectPara");
resultTag.style.whiteSpace = "pre-wrap";
resultTag.style.fontSize = "x-large";
resultTag.innerText =
  "JavaScript is designed on a simple object-based paradigm. An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything. \n An empty object can be created using one of two syntaxes: \n let user = (){}; \n We can access object properties in teo different ways. One of them is bracket notaion. \n object[key] \n \n and the other is the dot notation \n object.key \n \n 1. object.values(): Return an array of the values of an object. \n 2. object.keys (): Return an array of the keys of an object. \n 3. Object.entries(): creates an array which containes arrays of key/value pairs of an object. \n 4. Object.assign(): it allows objects to be combined together.";

//date and time
var resultTag = document.getElementById("dateTime");
resultTag.textContent = "Date and Time";

//date and time -para
var resultTag = document.getElementById("dateTimePara");
resultTag.style.whiteSpace = "pre-wrap";
resultTag.style.fontSize = "x-large";
resultTag.innerText =
  "JavaScript provides the Date object to manipulate date and time. Here are a few methods:\n 1. Date creation: new Date() constructor\n 2. Date formatting: toISOString() method, toLocaleString() method\n 3. Date parsing: Date.parse() method\n 4. Date arithmetic: getTime() method, setTime() method \n \n Example: \n \n const date = new Date();\n console.log(date.toISOString()); // Output: '2024-12-12T00:00:00.000z'\n console.log(date.toLocaleString()); // Output: '12/12/2024, 12:00:00 AM' \n  const timestamp = Date.parse('2024-12-12T00:00:00.000Z'); \n console.log(new Date(timestamp)); // Output: Thu Dec 12 2024 00:00:00 GMT+1100 (Australian Eastern Standard Time) ";
