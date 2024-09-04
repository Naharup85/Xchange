// Toggle between login and register forms
document.getElementById('show-login').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

document.getElementById('show-register').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
});

// Register new user
document.getElementById('register').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('register-username').value;
    var email = document.getElementById('register-email').value;
    var password = document.getElementById('register-password').value;
    
    if (localStorage.getItem(username)) {
        alert('Username already exists!');
    } else {
        var userData = {
            email: email,
            password: password
        };
        localStorage.setItem(username, JSON.stringify(userData));
        alert('Registration successful!');
        document.getElementById('register-form').reset();
    }
});

// Login user
document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;
    
    var storedData = localStorage.getItem(username);
    
    if (!storedData) {
        alert('No such user found!');
    } else {
        var userData = JSON.parse(storedData);
        if (userData.password === password) {
            alert('Login successful!');
            // Redirect or load user dashboard here
        } else {
            alert('Incorrect password!');
        }
    }
});
