console.log ('Howdy Ho!');

const form = document.querySelector('.signup-form');
const feedbackU = document.querySelector('.feedbackUser');
const feedbackP = document.querySelector('.feedbackPass');
const usernamePattern = /^[a-zA-Z]{6,12}$/; 

form.addEventListener('submit', e => {
    e.preventDefault();
    
    const username = form.username.value;
    const password = form.password.value;
    
    const passwordPattern = /^[a-zA-Z]{6,}$/;

    if (usernamePattern.test(username)) {
        feedbackU.textContent = 'That username is valid!';
        feedbackU.classList.remove('is-danger');
        feedbackU.classList.add('is-primary')
    } else {
        feedbackU.textContent = 'Username must contain letter only & be between 6 & 12 letters!';
        feedbackU.classList.remove("is-primary");
        feedbackU.classList.add('is-danger')
    }
    
    if (passwordPattern.test(password)) {
        feedbackP.textContent = 'That password is valid!';
        feedbackP.classList.remove('is-danger');
        feedbackP.classList.add('is-primary')
    } else {
        feedbackP.textContent = 'Password must contain altleast 6 letters!';
        feedbackP.classList.remove('is-primary');
        feedbackP.classList.add('is-danger')
    }
});

//Live Feedback
form.username.addEventListener('keyup', e => {
    if (usernamePattern.test(e.target.value)) {
        e.target.classList.remove('is-danger');
        e.target.classList.add('is-success');
    } else {
        e.target.classList.add('is-danger');
    }
});


