// document.querySelector('.login').addEventListener('click', promptMe);
// const username = document.querySelector('.username');

// function promptMe() {
//   alert(' Welcome ' + username.value + 'To ChatBox.');
// }

var menuBurger = document.querySelector('.menu');

var showModal = document.querySelector('.module');

var close = document.querySelector('.close');

menuBurger.addEventListener('click', function () {
  showModal.classList.add('show');
});
close.addEventListener('click', function () {
  showModal.classList.remove('show');
});

showModal.addEventListener('click', function () {
  showModal.classList.remove('show');
});
