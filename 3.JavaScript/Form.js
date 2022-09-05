
function handleNameChange() {
    const name = document.getElementById("inputName").value;
    console.log(name); 
    document.getElementById("formNameField").innerText = name;
}

function handleUserNameChange() {
    const userName = document.getElementById("inputUserName").value;
    console.log(userName); 
    document.getElementById("formUserNameField").innerText = userName;
}

function handleEmailChange() {
    const email = document.getElementById("inputEmail").value;
    console.log(email);
    document.getElementById("formEmailField").innerText = email;
}

function handleCountryChange() {
    const country = document.getElementById("ddlCountry").value;
    console.log(country);
    document.getElementById("formCountryField").innerText = country;
}

function handleGenderChange() {
    const gender = document.getElementsByName("gender");
    const isMale = gender[0].checked;
    const isFeMale = gender[1].checked;
    document.getElementById("formGenderField").innerText = isMale ? "Male" : "FeMale";
}

function handleButtonClick() {
    document.getElementsByClassName("container")[0].style.backgroundColor = "lightblue";
    alert("Form is submitted");
}

function handlePasswordChange() {
    // 1. Reset error.
    document.getElementById("error").innerText = "";

    // 2. Read Password.
    const passwrod = document.getElementById("inuputPassword").value;
    console.log(passwrod);
    var error = "";

    // 3. Get length of password.
    const length = passwrod.length;
    // 4. Checking for length error.
    if(length<6 || length>10) {
        error = "Password should contain 6 - 10 characters.";
    }
    // 5. Check for digits.
    else if (!/\d/.test(passwrod)) {
        error = "Password must contain a number.";
    }
    document.getElementById("error").innerText = error;
}