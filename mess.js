const username = document.querySelector('.username');

const password = document.querySelector('.password');
const email = document.querySelector('.email');
const error = document.querySelector('.shown');
const login = document.querySelector('.login');
const page = document.querySelector('.page');
const perDetails = JSON.parse(localStorage.getItem('USER_INFO'));
console.log(perDetails);

login.addEventListener('click', i => {
  if (username.value !== perDetails.username) {
    error.textContent = 'Invalid username, password or email';
    error.classList.add('visible');
  } else if (email.value !== perDetails.email) {
    error.textContent = 'Invalid username, password or email.';
    error.classList.add('visible');
  } else if (password.value !== perDetails.password) {
    error.textContent = 'Invalid username, password or email.';
    error.classList.add('visible');
  } else {
    window.location.pathname = '/chat.html';
    // alert('welcome' + ' ' + username.value + ' ' + perDetails.firstname);
  }
});
