// JavaScript source code
const first_name = document.getElementById("FirstName")
const last_name = document.getElementById("LastName")
const phone_num = document.getElementById("PhoneNumber")
const email = document.getElementById("Email")
const address = document.getElementById("Address")
const form = document.getElementById("user_reg_form")

function SetError(id, error) {
    element = getElementById(id)
    element.getElementByClassName("error")[0].innerHTML = error
}

form.addEventListener("submit", (e) => {

    form_submit = true
    let f_name = first_name.value
    let l_name = last_name.value
    let p_num = phone_num.value
    let email_value = email.value
    let addr = address.value

    let name_format = /^[A-Za-z ]+$/

    if (!name_format.test(f_name)) {
        SetError("first_name", "The first name should only contain letters and space")
        form_submit = false
    }
    if (!name_format.test(l_name)) {
        SetError("last_name", "The last name should only contain letters and space")
        form_submit = false
    }

    let num_format = /^[0-9]{10}$/
    if (!num_format.test(p_num)) {
        SetError("phone_num", "Please enter valid phone number")
        form_submit = false
    }

    if ((email_value == "" || email_value == null) && (p_num == "" || p_num == null)) {
        alert("You must enter either a phone number or the email address")
        form_submit = false
    }

    if (!form_submit) {
        e.preventDefault()
    }

})
