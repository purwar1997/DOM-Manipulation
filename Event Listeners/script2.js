const revealBtn = document.querySelector('.revealBtn');
const box = document.querySelector('.box2');

revealBtn.addEventListener('click', function () {
  if (this.innerText === 'Reveal More') {
    this.innerText = 'Reveal Less';
    box.style.display = 'flex';
  } else {
    this.innerText = 'Reveal More';
    box.style.display = 'none';
  }
});
