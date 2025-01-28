function calculateTip() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    
    if (!billAmount || !tipPercentage) {
      alert('Please enter valid numbers for both bill amount and tip percentage.');
      return;
    }
  
    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;
  
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
  }
  