document.addEventListener('DOMContentLoaded', function () {
    const subtotalInput = document.getElementById('subtotal');
    const taxRateInput = document.getElementById('taxrate');
    const salesTaxInput = document.getElementById('salestax');
    const totalInput = document.getElementById('total');
    const calculateButton = document.getElementById('calculate');
    const clearButton = document.getElementById('clear');
    const errorDisplay = document.getElementById('error');
  
    function processEntries() {
      const subtotal = parseFloat(subtotalInput.value);
      const taxRate = parseFloat(taxRateInput.value);
  
      if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
        alert('Subtotal must be > 0 and < 10000');
        return;
      }
  
      if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
        alert('Tax Rate must be > 0 and < 12');
        return;
      }
  
      const salesTax = (subtotal * taxRate) / 100;
      const total = subtotal + salesTax;
  
      salesTaxInput.value = salesTax.toFixed(2);
      totalInput.value = total.toFixed(2);
    }
  
    function clearInputs() {
      subtotalInput.value = '';
      taxRateInput.value = '';
      salesTaxInput.value = '';
      totalInput.value = '';
      errorDisplay.textContent = '';
      subtotalInput.focus();
    }
  
    calculateButton.addEventListener('click', function () {
      processEntries();
      subtotalInput.focus();
    });
  
    clearButton.addEventListener('click', clearInputs);
  
    subtotalInput.addEventListener('click', function () {
      this.value = '';
    });
  
    taxRateInput.addEventListener('click', function () {
      this.value = '';
    });
  
    clearInputs();
  });  