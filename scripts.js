document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Replace the following with your desired username and password
  const correctUsername = 'drong';
  const correctPassword = 'dataemporium';

  if (username === correctUsername && password === correctPassword) {
    alert('Login successful!');
    // Redirect to the next page or perform any other action after successful login
  } else {
    alert('Incorrect username or password!');
  }
});

