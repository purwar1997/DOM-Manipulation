// Traversing the DOM

// Parent node traversal
const ul = document.querySelector('ul');

console.log(ul.parentElement.parentElement.parentElement.parentNode);
console.log(ul.parentNode.parentNode.parentNode);

// to get an html element
const html = document.documentElement;

console.log(html.parentElement); // null
console.log(html.parentNode); // document

// Child node traversal

// child elements
console.log(ul.children); // returns an HTMLCollection
console.log(ul.childElementCount);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

// ul.firstElementChild.style.backgroundColor = 'lightgreen';
ul.children[2].style.backgroundColor = 'lightgreen';

// child nodes
console.log(ul.childNodes); // returns a NodeList
console.log(ul.firstChild);
console.log(ul.lastChild);

ul.childNodes[1].style.backgroundColor = 'lightgreen';
ul.childNodes[9].style.backgroundColor = 'lightgreen';

/*
  - HTMLCollection only contains HTML elements
  - NodeList contains all the nodes(HTML elements, text and comments)
  - line breaks and spaces are also considered as text
*/

// Sibling node traversal
console.log(ul.previousElementSibling); // returns an element
console.log(ul.previousSibling); // returns a node

const h1 = document.querySelector('#main-heading');

console.log(h1.nextElementSibling);
console.log(h1.nextSibling);

console.log(h1.previousElementSibling);
console.log(ul.nextElementSibling);
console.log(h1.previousSibling);
console.log(ul.nextSibling);
