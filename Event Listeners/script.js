// Syntax: element.addEventListener(event, callback);

const btn2 = document.querySelector('.btn2');

btn2.addEventListener('dblclick', function () {
  alert('I also love JS');
});

const btn3 = document.querySelector('.btn3');

btn3.addEventListener('mouseover', function () {
  // 'this' refers to btn3
  this.parentElement.style.backgroundColor = 'lightgreen';
});

btn3.addEventListener('mouseout', function () {
  this.parentElement.style.backgroundColor = 'transparent';
});
