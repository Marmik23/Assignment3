document.addEventListener('DOMContentLoaded', function () {
    const amountInput = document.getElementById('amount');
    const quartersInput = document.getElementById('quarters');
    const dimesInput = document.getElementById('dimes');
    const nickelsInput = document.getElementById('nickels');
    const penniesInput = document.getElementById('pennies');
    const calculateButton = document.getElementById('calculate');
    const errorDisplay = document.getElementById('error');

    function processEntry() {
        const amount = parseInt(amountInput.value);

        if (isNaN(amount) || amount < 0 || amount > 99) {
            alert('Please enter a valid amount between 0 and 99.');
        } else {
            makeChange(amount);
        }
    }

    function makeChange(amount) {
        const quarters = Math.floor(amount / 25);
        const dimes = Math.floor((amount % 25) / 10);
        const nickels = Math.floor(((amount % 25) % 10) / 5);
        const pennies = amount % 5;

        quartersInput.value = quarters;
        dimesInput.value = dimes;
        nickelsInput.value = nickels;
        penniesInput.value = pennies;
    }

    calculateButton.addEventListener('click', processEntry);
});  