document.addEventListener('DOMContentLoaded', function () {
    // Handle profile update
    document.getElementById('profile-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('profile-name').value;
        const email = document.getElementById('profile-email').value;
        const phone = document.getElementById('profile-phone').value;

        alert(`Profile updated: \nName: ${name} \nEmail: ${email} \nPhone: ${phone}`);

        // In a real-world application, this would send a request to update the profile data in the backend.
    });

    // Handle password change
    document.getElementById('security-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const currentPassword = document.getElementById('current-password').value;
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (newPassword !== confirmPassword) {
            alert('New password and confirm password do not match.');
            return;
        }

        alert('Password changed successfully.');

        // In a real-world application, this would send a request to update the password in the backend.
    });

    // Handle 2FA settings update
    document.getElementById('2fa-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const status = document.getElementById('2fa-status').value;

        alert(`Two-Factor Authentication is now ${status}.`);

        // In a real-world application, this would send a request to update the 2FA settings in the backend.
    });
});
