async function signupFormHandler(event) {
    event.preventDefault();
  
    const full_name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    // Whichever oil type radio button is selected 'Conventional' or 'Synthetic'
    // const synthOil = document.getElementById('#synth-radio');
    // const convOil = document.getElementById('#conv-radio');
  
    // if (synthOil.checked) {
    //   const oil_type = synthOil.value;
    //   return oil_type;
    // }
    // else {
    //   oil_type = convOil.value;
    // };
    const oil_type = document.querySelector('input[name="oilRadios"]:checked').value;
  
  
    if (full_name && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          full_name,
          email,
          password,
          oil_type
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // check the response status
      if (response.ok) {
        const res = await response.json();
        localStorage.setItem('user', JSON.stringify(res.user));
        document.location.assign('/welcome');
      } else {
        console.log("Something went wrong");
      }
    }
  }
  
  async function loginFormHandler(event) {
    event.preventDefault();
  
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
        document.location.assign('/welcome');
      } else {
        console.log("Something went wrong");
      }
    }
  }
  
  document.querySelector('#signup').addEventListener('click', signupFormHandler);
  document.querySelector('.signup-form').addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      event.preventDefault();
      signupFormHandler(e);
    }
  });
  
  document.querySelector('#login').addEventListener('click', loginFormHandler);
  document.querySelector('.login-form').addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      event.preventDefault();
      loginFormHandler(e);
    }
  });
  