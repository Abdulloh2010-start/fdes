const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submitButton');
const togglePassword = document.getElementById('togglePassword');
const errorMessage = document.getElementById('errorMessage');
const LogOut = document.getElementById('logout');

function a() {
    localStorage.clear();
    window.location.href = "index.html";
}


function setDefaultCredentials() {
    const defaultUsername = 'Abdulloh';
    const defaultPassword = '2010';

    if (!localStorage.getItem('username') || !localStorage.getItem('password')) {
        localStorage.setItem('username', defaultUsername);
        localStorage.setItem('password', defaultPassword);
    }
}

function checkFields() {
    if (usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
        submitButton.style.backgroundColor = 'rgb(255, 94, 0)';
        submitButton.disabled = false;
    } else {
        submitButton.style.backgroundColor = '#F69E86';
        submitButton.disabled = true;
    }
}

togglePassword.addEventListener('click', function () {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePassword.textContent = '👁';
    } else {
        passwordInput.type = 'password';
        togglePassword.textContent = '👁';
    }
});

function validateCredentials(username, password) {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    return username === storedUsername && password === storedPassword;
}

submitButton.addEventListener('click', function () {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (validateCredentials(username, password)) {
        window.location.href = 'index2.html';
    } else {
        errorMessage.textContent = 'Логин или пароль неправильный!';
        errorMessage.style.display = 'block';
        errorMessage.style.margin = '0 60px'
    }
});

// function setDefaultCredentials() {
//     const storedUsername = localStorage.getItem('username');
//     const storedPassword = localStorage.getItem('password');
//     const defaultUsername = 'Abdulloh';
//     const defaultPassword = '2010';

//     if (storedUsername !== defaultUsername || storedPassword !== defaultPassword) {
//         localStorage.setItem('username', defaultUsername);
//         localStorage.setItem('password', defaultPassword);
//     }
// }

passwordInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        submitButton.click();
    }
});

setDefaultCredentials();
usernameInput.addEventListener('input', checkFields);
passwordInput.addEventListener('input', checkFields);