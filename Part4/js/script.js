document.addEventListener('DOMContentLoaded', function() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Move focus to the Arrival Date text box
    document.getElementById('arrival-date').focus();

    // Event handler for form submission
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form inputs
        const arrivalDate = document.getElementById('arrival-date').value.trim();
        const numberOfNights = document.getElementById('nights').value.trim();
        const email = document.getElementById('email').value.trim();

        // Validate inputs
        if (arrivalDate === '' || numberOfNights === '' || email === '' || isNaN(numberOfNights) || !emailPattern.test(email)) {
            alert('Please fill in all fields correctly.');
            return; // Exit the function if any field is invalid
        }

        // Put trimmed entries back into controls
        document.getElementById('arrival-date').value = arrivalDate;
        document.getElementById('nights').value = numberOfNights;
        document.getElementById('email').value = email;

    });
});
