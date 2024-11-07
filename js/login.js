document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const userData = JSON.parse(localStorage.getItem('data'));




  if (username === userData.username && password === userData.password) {
    localStorage.setItem('currentUser', username);
    window.location.href = 'index.html';
  }
  else if (username && password) {
    let getUsers = async function (username, password) {

      let response = await fetch(`https://fakestoreapi.com/users`);
      let users = await response.json();

      for (user1 of users) {
        if (username === user1.username && password === user1.password) {
          alert("login Successfully  for api ");
          localStorage.setItem('currentUser', username);
          window.location.href = 'index.html';
        }
      }
    }
    getUsers(username, password)

  } else {
    alert('Invalid username or password!');

  }
});
