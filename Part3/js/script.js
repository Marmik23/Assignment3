document.addEventListener('DOMContentLoaded', function () {
    const incomeInput = document.getElementById('income');
    const taxInput = document.getElementById('tax');
    const calculateButton = document.getElementById('calculate');
    const errorDisplay = document.getElementById('error');

    function processEntry() {
        const income = parseFloat(incomeInput.value);

        if (isNaN(income) || income <= 0) {
            showError('Please enter a valid income amount.');
        } else {
            const tax = calculateTax(income);
            taxInput.value = tax.toFixed(2);
        }

        incomeInput.focus();
    }

    function calculateTax(income) {
        let tax = 0;

        if (income > 518400) {
            tax = 156235 + (income - 518400) * 0.37;
        } else if (income > 207350) {
            tax = 47367.50 + (income - 207350) * 0.35;
        } else if (income > 163300) {
            tax = 33271.50 + (income - 163300) * 0.32;
        } else if (income > 85525) {
            tax = 14605.50 + (income - 85525) * 0.24;
        } else if (income > 40125) {
            tax = 4617.50 + (income - 40125) * 0.22;
        } else if (income > 9875) {
            tax = 987.50 + (income - 9875) * 0.12;
        } else {
            tax = income * 0.10;
        }

        return tax;
    }

    function showError(message) {
        errorDisplay.textContent = message;
    }

    calculateButton.addEventListener('click', processEntry);
});  