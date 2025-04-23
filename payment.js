function toggleFormFields() {
    const paymentMethod = document.getElementById('payment-method-select').value;
  
    // Hide all form fields initially
    document.getElementById('card-fields').style.display = 'none';
    document.getElementById('upi-fields').style.display = 'none';
  
    // Show the relevant fields based on the selected payment method
    if (paymentMethod === 'debit-card' || paymentMethod === 'credit-card') {
      document.getElementById('card-fields').style.display = 'block';
    } else if (paymentMethod === 'upi') {
      document.getElementById('upi-fields').style.display = 'block';
    }
  }
  