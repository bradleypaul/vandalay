async function loginFormHandler(event) {
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      const res = await response.json();
      localStorage.setItem('user', JSON.stringify(res.user));
      document.location.assign('/');
    } else {
      console.log("Something went wrong");
    }
  }
}



document.querySelector('#login').addEventListener('click', loginFormHandler);
document.querySelector('#login-form').addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    event.preventDefault();
    loginFormHandler(e);
  }
});
