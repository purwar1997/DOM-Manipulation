const ul = document.querySelector('#list-items');

// creating an element
const li = document.createElement('li');
li.innerText = 'Fast and Furious';
li.className = 'list-item';

// adding an element => append() and appendChild()
ul.append(li);

// removing an element => remove() and removeChild()
let listItem = document.querySelector('.list-item');
listItem.remove();

listItem = document.querySelector('li');

console.log(listItem.innerText); // only text
console.log(listItem.textContent); // text and indentation
console.log(listItem.innerHTML); // text, child elements and indentation

// attribute methods => setAttribute(name, value), getAttribute(name), removeAttribute(name)
const h1 = document.querySelector('#main-heading');
h1.setAttribute('class', 'header');
h1.setAttribute('title', 'Movies');

console.log(h1.getAttribute('class'));
console.log(h1.getAttribute('id'));

h1.removeAttribute('class');
h1.removeAttribute('title');

// classList methods => add(), remove(), contains()
li.classList.add('one', 'two', 'three', 'four');
console.log(li.classList); // returns a DOMTokenList

li.classList.remove('three', 'four');

console.log(li.classList.contains('one'));
console.log(li.classList.contains('four'));
