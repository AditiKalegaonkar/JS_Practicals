function error(id, message) {
    var target = id + "_error";
    var err = document.getElementById(target);
    err.style.display = "block";
    err.innerHTML = message;
    err.style.color = "red";
    err.style.fontFamily = "Quicksand";
    err.style.fontWeight = "600";
    err.style.fontSize = "15px";
}

function clearErrors() {
    const errorIds = ['fname', 'mname', 'lname', 'add', 'states', 'city', 'pincode', 'Gender', 'ph_no', 'email'];
    errorIds.forEach(id => {
        const err = document.getElementById(id + "_error");
        if (err) {
            err.innerHTML = '';
            err.style.display = "none";
        }
    });
}

function validateName() {
    let fname = document.getElementById("fname").value.trim();
    let mname = document.getElementById("mname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    const regex = /^[A-Za-z]+$/;
    let isValid = true;
    if (!fname || !regex.test(fname)) {
        error("fname", "First name is required and must contain only letters.");
        isValid = false;
    }
    if (!lname || !regex.test(lname)) {
        error("lname", "Last name is required and must contain only letters.");
        isValid = false;
    }
    if (mname && !regex.test(mname)) {
        error("mname", "Middle name must contain only letters.");
        isValid = false;
    }
    return isValid;
}

function validateAddress() {
    let location = document.getElementById("add").value.trim();
    let state = document.getElementById("states").value;
    let city = document.getElementById("city").value;
    let pincode = document.getElementById("pincode").value.trim();
    let isValid = true;
    if (!location) {
        error("add", "Location is required.");
        isValid = false;
    }
    if (state === "none") {
        error("states", "Please select a state.");
        isValid = false;
    }
    if (city === "none") {
        error("city", "Please select a city.");
        isValid = false;
    }
    const re = /^\d{6}$/;
    if (!pincode || !re.test(pincode)) {
        error("pincode", "Pincode must be 6 digits.");
        isValid = false;
    }
    return isValid;
}

function validateGender() {
    const genderOptions = document.getElementsByName("Gender");
    let isSelected = Array.from(genderOptions).some(option => option.checked);
    if (!isSelected) {
        error("Gender", "Please select a gender.");
        return false;
    }
    return true;
}

function validatePhone() {
    const phoneInput = document.getElementById("ph_no").value.trim();
    if (!phoneInput) {
        error("ph_no", "Phone number is required.");
        return false;
    }
    const phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(phoneInput)) {
        error("ph_no", "Enter a valid 10-digit phone number starting with 6-9.");
        return false;
    }
    return true;
}

function validateMail() {
    let email = document.getElementById("email").value.trim();
    if (!email) {
        error("email", "Email address is required.");
        return false;
    }
    const re = /^(?!\.)[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!re.test(email)) {
        error("email", "Enter a valid email address.");
        return false;
    }
    return true;
}

function validateForm() {
    clearErrors();
    const isNameValid = validateName();
    const isAddressValid = validateAddress();
    const isGenderValid = validateGender();
    const isMailValid = validateMail();
    const isPhoneValid = validatePhone();

    if (isNameValid && isAddressValid && isGenderValid && isMailValid && isPhoneValid) {
        window.open("success.html", "_self");
    }
}

function Reset() {
    document.getElementById('fname').value = '';
    document.getElementById('mname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('add').value = '';
    document.getElementById('states').value = 'none';
    document.getElementById('city').value = 'none';
    document.getElementById('pincode').value = '';
    document.getElementById('ph_no').value = '';
    document.getElementById('email').value = '';
    const radioButtons = document.getElementsByName('Gender');
    Array.from(radioButtons).forEach(radio => radio.checked = false);
    clearErrors();
}