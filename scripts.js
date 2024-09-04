document.addEventListener('DOMContentLoaded', function() {
    // Dynamic Hero Text Animation
    var heroText = document.getElementById('hero-text');
    var text = heroText.textContent;
    var index = 0;

    function animateText() {
        if (index < text.length) {
            heroText.textContent += text[index++];
            setTimeout(animateText, 50);
        }
    }

    setTimeout(animateText, 500); // Start animation after 0.5s delay

    // Handle logout
    const logoutLink = document.getElementById('logout-link');
    if (logoutLink) {
        logoutLink.addEventListener('click', function (event) {
            event.preventDefault();
            localStorage.removeItem('loggedIn');
            window.location.href = 'login/login.html'; // Redirect to login page after logout
        });
    }
});
