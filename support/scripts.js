document.addEventListener('DOMContentLoaded', function () {
    // Toggle FAQ answer display
    const faqItems = document.querySelectorAll('.faq-question');
    faqItems.forEach(item => {
        item.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });

    // Handle support form submission
    document.getElementById('support-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('support-email').value;
        const message = document.getElementById('support-message').value;

        alert(`Support request sent from ${email}: ${message}`);

        // In a real-world application, this would send the support request to the backend.
    });
});
