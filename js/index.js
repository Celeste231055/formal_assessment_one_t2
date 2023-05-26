registerStudent = () =>{
    let fullName = document.getElementById("fullName").value
    let email = document.getElementById("email").value
    let phoneNum = +document.getElementById("phoneNum").value
    let subject = document.getElementById("subject").value
    
    if(spam.checked){
        alert("Welcome " + fullName + "! Thank you for your interest in " + subject + "! We will contact you via the email provided: " + email + ", or alternatively on the phone number: " + phoneNum + ".")
    } else {
        alert("Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested " + fullName + "!  If you want to sign up, you better CHECK that newsletter box! ")
    }
}