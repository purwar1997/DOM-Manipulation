const ul = document.querySelector("#list-items");
const li_1 = document.createElement("li");
li_1.innerText = "Fast and Furious";
li_1.className = "list-item";

ul.append(li_1);

const li_2 = document.querySelector(".list-item");
li_2.remove();

const h1 = document.querySelector("#main-heading");
h1.setAttribute("class", "header");
h1.setAttribute("title", "Movies");

console.log(h1.getAttribute("class"));
console.log(h1.getAttribute("id"));

h1.removeAttribute("class");
h1.removeAttribute("title");

li_1.classList.add("one", "two", "three", "four");
console.log(li_1.classList);

li_1.classList.remove("three", "four");

console.log(li_1.classList.contains("one"));
console.log(li_1.classList.contains("four"));
