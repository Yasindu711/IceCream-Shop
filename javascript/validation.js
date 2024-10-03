function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var icecream = document.getElementById("icecream").value;

    var errMsg = "";                   /* stores the error message that is promted to the user */
    var result = true;                 /* assumes no errors have occrued*/
    var pwdPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{9,}$/; /*regular expresssion used to check the password criteria*/


    /*Below code checks using if statements that all required fields are filled */
    if (username === "") {
        errMsg += "-Username cannot be empty\n";
    }
    if (password === "") {
        errMsg += "-Password cannot be empty\n";
    }
    if (!gender) {
        errMsg += "-A gender must be selected\n";
    }
    if (email === "") {
        errMsg += "-Email cannot be empty\n";
    }
    if (mobile === "") {
        errMsg += "-Mobile number cannot be empty\n";
    }
    if (icecream === "") {
        errMsg += "-Favorite ice cream flavor must be selected\n";

    }

    /*Checks that the password is correctly inputed*/
    if (!pwdPattern.test(password)) {
        errMsg += "-Password must be at least 9 characters long, contain at least one uppercase letter, one lowercase letter, and one special character (!@#$%^&*)\n";
    }

    /* Display error message if any errors are detected */
    if (errMsg !== "") {
        alert(errMsg);
        result = false;
    }
  
    return result;
}

/* link HTML form to the validateForm function */
function init() {
    var regForm = document.getElementById("regform");
    regForm.onsubmit = validateForm;
}

/* execute the initialization function once the window loads */
window.onload = init;