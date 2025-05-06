const form = document.getElementById('form-report');
const username = document.getElementById('username');
const email = document.getElementById('email');
const server = document.getElementById('server');
const details = document.getElementById('details');
const agree = document.getElementById('agree');
const overlay = document.getElementById('success-overlay')

function showError(input, message) {
    let errorElement = input.nextElementSibling;
    if (!errorElement || !errorElement.classList.contains('error-message')) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.style.color = 'red';
        errorElement.style.fontSize = '14px';
        errorElement.style.marginTop = '4px';
        input.insertAdjacentElement('afterend', errorElement);
    }
    errorElement.textContent = message;
}

function clearError(input) {
    const errorElement = input.nextElementSibling;
    if (errorElement && errorElement.classList.contains('error-message')) {
        errorElement.remove();
    }
}

function validate() {
    let isValid = true;

    clearError(username);
    clearError(email);
    clearError(server);
    clearError(details);

    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const detailsVal = details.value.trim();
    const wordCount = detailsVal.split(/\s+/).filter(word => word.length > 0).length;

    if (usernameVal === '') {
        showError(username, 'Username is required');
        isValid = false;
    } else if (usernameVal.length < 5) {
        showError(username, 'Username must be at least 5 characters');
        isValid = false;
    }

    if (emailVal === '') {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!emailVal.endsWith('@email.com')) {
        showError(email, 'Email must end with "@email.com"');
        isValid = false;
    }

    if (server.value === '') {
        showError(server, 'Please select a server');
        isValid = false;
    }

    if (detailsVal === '') {
        showError(details, 'Please provide details');
        isValid = false;
    } else if (wordCount < 5) {
        showError(details, 'Details must contain at least 5 words');
        isValid = false;
    }

    if (!agree.checked) {
        alert("You must agree to the terms and follow-up email.");
        isValid = false;
    }

    return isValid;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validate()) {
        console.log("Valid! Showing overlay...");
        console.log(overlay);
        overlay.classList.remove("hidden");
        overlay.classList.add("show");
        setTimeout(() => {
            overlay.classList.add("hidden");
        }, 3000);

        form.reset();
        clearError(username);
        clearError(email);
        clearError(server);
        clearError(details);
    } else {
        console.log("Form not valid.");
        alert("Please fill the form correctly!");
    }
});
