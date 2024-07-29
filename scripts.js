document.addEventListener('DOMContentLoaded', function () {
    // Tooltip initialization
    $('[data-toggle="tooltip"]').tooltip();

    // Password visibility toggle
    //const passwordField = document.getElementById('password');
    const showPasswordCheckbox = document.getElementById('show-password');

    showPasswordCheckbox.addEventListener('change', function () {
        if (showPasswordCheckbox.checked) {
            passwordField.type = 'text';
        } else {
            passwordField.type = 'password';
        }
    });

    // Password strength indicator
    const passwordStrengthDiv = document.getElementById('password-strength');
    const passwordField = document.getElementById('password');

    passwordField.addEventListener('input', function () {
        const value = passwordField.value;
        let strength = 0;

        if (value.length > 8) strength += 1;
        if (/[A-Z]/.test(value)) strength += 1;
        if (/[0-9]/.test(value)) strength += 1;
        if (/[^A-Za-z0-9]/.test(value)) strength += 1;

        const strengthBar = passwordStrengthDiv.querySelector('div') || document.createElement('div');
        passwordStrengthDiv.innerHTML = ''; // Clear previous content
        passwordStrengthDiv.appendChild(strengthBar);

        switch (strength) {
            case 0:
                strengthBar.style.width = '0%';
                strengthBar.style.backgroundColor = 'transparent';
                passwordStrengthDiv.style.display = 'none';
                break;
            case 1:
                strengthBar.style.width = '25%';
                strengthBar.style.backgroundColor = 'red';
                passwordStrengthDiv.style.display = 'block';
                break;
            case 2:
                strengthBar.style.width = '50%';
                strengthBar.style.backgroundColor = 'orange';
                passwordStrengthDiv.style.display = 'block';
                break;
            case 3:
                strengthBar.style.width = '75%';
                strengthBar.style.backgroundColor = 'yellow';
                passwordStrengthDiv.style.display = 'block';
                break;
            case 4:
                strengthBar.style.width = '100%';
                strengthBar.style.backgroundColor = 'green';
                passwordStrengthDiv.style.display = 'block';
                break;
        }
    });

    // Form validation
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Form validation logic
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm-password');

        let isValid = true;

        if (username.value.trim() === '') {
            username.classList.add('is-invalid');
            isValid = false;
        } else {
            username.classList.remove('is-invalid');
        }

        if (email.value.trim() === '') {
            email.classList.add('is-invalid');
            isValid = false;
        } else {
            email.classList.remove('is-invalid');
        }

        if (password.value.trim() === '') {
            password.classList.add('is-invalid');
            isValid = false;
        } else {
            password.classList.remove('is-invalid');
        }

        if (password.value !== confirmPassword.value) {
            confirmPassword.classList.add('is-invalid');
            isValid = false;
        } else {
            confirmPassword.classList.remove('is-invalid');
        }

        if (isValid) {
            document.getElementById('form-progress').innerHTML = '<div style="width: 100%; background-color: green;"></div>';
            // Form submission logic here
        }
    });
});
