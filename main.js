console.log ('Howdy Ho!');

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    const username = form.username.value;
    const usernamePattern = /^[a-zA-Z]{6,12}$/;
    if (usernamePattern.test(username)) {
        feedback.textContent = 'That username is valid!';
        feedback.classList.remove("is-danger");
        feedback.classList.add('is-primary')
    } else {
        feedback.textContent = 'Username must contain letter only & be between 6 & 12 letters!';
        feedback.classList.remove("is-primary");
        feedback.classList.add('is-danger')
    }
    
});


