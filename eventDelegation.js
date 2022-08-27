const fNameRegEx = /^[a-z]{1,20}$/
const lNameRegEx = /^[a-zA-Z]{1,20}$/
const emailRegEx = /^[a-z0-9A-Z\.\_]{1,15}@[a-z]{1,15}\.[a-z]{3}$/
const contactRegEx = /[0-9]/
const passwordRegEx = /^([0-9a-zA-Z\W]{8,20})$/
let fNameError = document.querySelector("#fNameError");
let lNameError = document.querySelector("#lNameError");
let emailError = document.querySelector("#emailError");
let passwordError = document.querySelector("#passwordError");
let contactError = document.querySelector("#contactError");
const bubble = document.querySelector("#bubble");


bubble.addEventListener('keyup', (e) => {
    idEvent(e);
})


const arrOfInputs = document.getElementsByClassName('input');
Array.from(arrOfInputs).forEach(ele => {
    ele.addEventListener("blur", (e) => {
        idEvent(e);
    })
});


function idEvent(e) {
    if (e.target.id == 'fName') {
        checkValidation(fNameRegEx, e, fNameError);
    }
    if (e.target.id == 'lName') {
        checkValidation(lNameRegEx, e, lNameError);
    }
    if (e.target.id == 'email') {
        checkValidation(emailRegEx, e, emailError);
    }
    if (e.target.id == 'contact') {
        checkValidation(contactRegEx, e, contactError);
    }
    if (e.target.id == 'password') {
        checkValidation(passwordRegEx, e, passwordError);
    }
}


function checkValidation(regEx, element, error) {
    if (!(regEx.test(element.target.value))) {
        error.innerHTML = "*required*";
    }
    else {
        error.innerHTML = "";
    }
}


submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    submit();
})


const array = [];
function submit() {



    let isValidate = fNameRegEx.test(fName.value) && lNameRegEx.test(lName.value) && emailRegEx.test(email.value) && contactRegEx.test(contact.value) && passwordRegEx.test(password.value) && dob.value

    let user = {};

    if (!(fNameRegEx.test(fName.value))) {
        fNameError.innerHTML = "*required*"
        window.scrollTo(top);
    }

    if (!(lNameRegEx.test(lName.value))) {
        lNameError.innerHTML = "*required*"
        window.scrollTo(top);
    }
    if (!(emailRegEx.test(email.value))) {
        emailError.innerHTML = "*required*"
        window.scrollTo(top);
    }
    if (!(contactRegEx.test(contact.value))) {
        contactError.innerHTML = "*required*"
        window.scrollTo(0, 300);
    }
    if (!(passwordRegEx.test(password.value))) {
        passwordError.innerHTML = "*required*"
        window.scrollTo(top);
    }




    if (isValidate) {


        user = {
            firstName: fName.value,
            lName: lName.value,
            email: email.value,
            password: password.value,
            contact: contact.value,
            dob: dob.value,
            createdAt: new Date().toLocaleDateString(),
            timeOfCreation: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
        }


        let arr = JSON.parse(localStorage.getItem("users"));
        if (arr?.length > 0) {
            array.push(...arr, user);
        }
        else {
            array.push(user);
        }

        localStorage.setItem("users", JSON.stringify(array));
        console.log(array);


    }

    location.href = "index.html"

}

