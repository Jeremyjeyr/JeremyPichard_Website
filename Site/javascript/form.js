var firstName = document.getElementByName('firstName');
var lastName = document.getElementByName('lastName');
var emailSubject = document.getElementByName('emailSubject');
var email = document.getElementByName('email');
var textarea = document.getElementsByName('textarea');
var submitbutton = document.getElementById('submit_button')
if (Boolean(firstName) == false & Boolean(lastName) == false & Boolean(email) == false & Boolean(emailSubject) == false & Boolean(textarea) == false) {
    submitbutton.style.marginTop = "-8%";
    firstName.style.backgroundColor = "blue";
} else {
    submitbutton.style.marginTop = "0";
}