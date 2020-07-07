async function signupFormHandler(event) {
	const full_name = document.querySelector('#name-signup').value.trim();
	const email = document.querySelector('#email-signup').value.trim();
	const password = document.querySelector('#password-signup').value.trim();
	if (full_name && email && password) {
		const response = await fetch('/api/users', {
			method: 'post',
			body: JSON.stringify({
				full_name,
				email,
				password
			}),
			headers: { 'Content-Type': 'application/json' }
		});

		// check the response status
		if (response.ok) {
			const res = await response.json();
			document.location.assign('/welcome');
		} else {
			console.log("Something went wrong");
		}
	}
}

document.querySelector('#signup').addEventListener('click', signupFormHandler);
document.querySelector('#signup-form').addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    event.preventDefault();
    signupFormHandler(e);
  }
});