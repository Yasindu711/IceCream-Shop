var selectingDelivery;
var selectingPayment;
var creditCardTypeDiv;


/*I have created this function that shows or hides the delivery address based on the selected delivery option*/
function showingDeliveryAddressBasedOnSelection() {
  var deliveryOption = selectingDelivery.value;
  var deliveryAddress = document.getElementById("delivery-address");

  if (deliveryOption === "delivery") {
    deliveryAddress.style.display = "block";
  } else {
    deliveryAddress.style.display = "none";
  }
}

/*I have created this function that shows or hides the billing address based on the selected delivery option*/
function showingBillingAddressBasedOnSelection() {
  var deliveryOption = selectingDelivery.value;
  var billingAddress = document.getElementById("billing-address");

  if (deliveryOption === "delivery") {
    billingAddress.style.display = "block";
  } else {
    billingAddress.style.display = "none";
  }
}

/*I have created this function shows or hides the credit card type and credit card info based on the selected payment option*/
function showingCreditCardInfo() {
  var paymentOption = selectingPayment.value;
  var creditCardInfo = document.getElementById("credit-card-info");

  if (paymentOption === "online") {
    creditCardType.style.display = "block";
    creditCardInfo.style.display = "block";
  } else {
    creditCardType.style.display = "none";
    creditCardInfo.style.display = "none";
  }
}



/*I have created this function to check for form validation*/
function validateOrderForm() {
  var name = document.getElementById("name").value;
  var contactNumber = document.getElementById("contact-number").value;
  var email = document.getElementById("email").value;
  var deliveryOption = document.getElementById("delivery").value;
  var deliveryAddress = document.getElementById("delivery-address-input").value;
  var billingAddress = document.getElementById("billing-address").value;
  var postcode = document.getElementById("postcode").value;
  var paymentMethod = document.getElementById("payment-method").value;
  var creditCardType = document.querySelector('input[name="credit_card_type"]:checked');
  var creditCardNumber = document.getElementById("credit-card-number").value;


  var errMsg = "";
  var result = true;
  var postcodePattern = /^\d{4}$/; /*regular expression pattern for postcode*/

  /*The below if statements, i have created to check if all the fields that are there in the form are entered b4 user submssion*/
  if (name === "") {
    errMsg += "- Customer name cannot be empty\n";
  }
  if (contactNumber === "") {
    errMsg += "- Contact number cannot be empty\n";
  }
  if (email === "") {
    errMsg += "- Email for receipt cannot be empty\n";
  }
  if (deliveryOption === "delivery" && deliveryAddress === "") {
    errMsg += "- Delivery address cannot be empty\n";
  }
  if (billingAddress === "") {
    errMsg += "- Billing address cannot be empty\n";
  }
  if (postcode === "") {
    errMsg += "- Postcode cannot be empty\n";
  }
  if (paymentMethod === "online" && !creditCardType) {
    errMsg += "- Credit card type must be selected\n";
  }

  /*I have added additional functionality for this if statement as it checks if the correct length of the credit card is implmented for the correct type*/
  if (paymentMethod === "online" && creditCardNumber === "") {
    errMsg += "- Credit card number cannot be empty\n";
  } else if (creditCardType) {
    if (creditCardType.value === "visa" && creditCardNumber.length !== 16) {
      errMsg += "- Invalid credit card number length for Visa. Must be 16 digits\n";
    } else if (creditCardType.value === "mastercard" && creditCardNumber.length !== 16) {
      errMsg += "- Invalid credit card number length for MasterCard. Must be 16 digits\n";
    } else if (creditCardType.value === "americanexpress" && creditCardNumber.length !== 15) {
      errMsg += "- Invalid credit card number length for American Express. Must be 15 digits\n";
    }
  }

  /*Checks that the postcode is only 4 digits*/
  if (!postcodePattern.test(postcode)) {
        errMsg += "-postcode must be 4 digits only\n";
    }



 /* Display error message if any error(s) are detected */
  if (errMsg !== "") {
    alert(errMsg);
    result = false;
  }

  return result;
}



function init() {
  selectingDelivery = document.getElementById("delivery");
  selectingPayment = document.getElementById("payment-method");
  creditCardType = document.getElementById("credit-card-type");

  // Show or hide delivery address and billing address on page load
  showingDeliveryAddressBasedOnSelection();
  showingBillingAddressBasedOnSelection();

  selectingDelivery.addEventListener("change", function () {
    showingDeliveryAddressBasedOnSelection();
    showingBillingAddressBasedOnSelection();
  });

  selectingPayment.addEventListener("change", function () {
    showingCreditCardInfo();
  });

  var orderForm = document.getElementById("orderform");
  orderForm.onsubmit = validateOrderForm;
}

window.onload = init;
