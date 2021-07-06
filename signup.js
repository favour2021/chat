const username = document.querySelector('.username');
const firstname = document.querySelector('.firstname');
const lastname = document.querySelector('.lastname');
const email = document.querySelector('.email');
const age = document.querySelector('.age');
const password = document.querySelector('.password');
const error = document.querySelector('.shown');
const signup = document.querySelector('.signup');
const page = document.querySelector('.page');

signup.addEventListener('click', e => {
  if (!username.value) {
    error.textContent = 'Enter your username.';
    error.classList.add('visible');
  } else if (!firstname.value) {
    error.textContent = 'Enter your firstname.';
    error.classList.add('visible');
    ('visible');
  } else if (!lastname.value) {
    error.textContent = 'Enter your lastname.';
    error.classList.add('visible');
    ('visible');
  } else if (!age.value) {
    error.textContent = 'Enter your age.';
    error.classList.add('visible');
    ('visible');
  } else if (!email.value) {
    error.textContent = 'Enter your email.';
    error.classList.add('visible');
    ('visible');
  } else if (!password.value) {
    error.textContent = 'put a strong password.';
    error.classList.add('visible');
    ('visible');
  } else {
    page.innerHTML = 'Done with signing up';
    error.textContent = '';
    error.classList.remove('visible');

    const userInfo = {
      username: username.value,
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      age: age.value,
      password: password.value,
    };

    localStorage.setItem('USER_INFO', JSON.stringify(userInfo));
  }
});

// if (window.localStorage) {
//   const username = document.querySelector('.username');
//   const firstname = document.querySelector('.firstname');
//   const lastname = document.querySelector('.lastname');
//   const email = document.querySelector('.email');
//   const age = document.querySelector('.age');
//   const password = document.querySelector('.password');

//   username.value = localStorage.getItem('username');
//   firstname.value = localStorage.getItem('firstname');
//   lastname.value = localStorage.getItem('lastname');
//   email.value = localStorage.getItem('email');
//   age.value = localStorage.getItem('age');
//   password.value = localStorage.getItem('password');

//   username.addEventListener('input', function () {
//     localStorage.setItem('username', username.value);
//   });
//   firstname.addEventListener('input', function () {
//     localStorage.setItem('firstname', firstname.value);
//   });
//   lastname.addEventListener('input', function () {
//     localStorage.setItem('lastname', lastname.value);
//   });
//   email.addEventListener('input', function () {
//     localStorage.setItem('email', email.value);
//   });
//   age.addEventListener('input', function () {
//     localStorage.setItem('age', age.value);
//   });
//   password.addEventListener('input', function () {
//     localStorage.setItem('password', password.value);
//   });
// }
