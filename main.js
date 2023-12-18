const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
let uppass = [];
let inpass = [];

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});


signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});
// adding and removing border
function upimg(element) {
    var Image = element.querySelector('img');
    if (Image) {
        if (Image.classList.contains('clicked')) {
            Image.classList.remove('clicked');
            uppass.splice(uppass.indexOf(element.id), 1);
            // console.log(element.id);
            // console.log(uppass);
        }
        else {
            Image.classList.add('clicked');
            uppass.push(element.id);
            // console.log(element.id);
            // console.log(uppass);
        }
    }
}

function inimg(element) {
    var Image = element.querySelector('img');
    if (Image) {
        if (Image.classList.contains('clicked')) {
            Image.classList.remove('clicked');
            inpass.splice(inpass.indexOf(element.id), 1);
            // console.log(element.id);
            // console.log(inpass);
        }
        else {
            Image.classList.add('clicked');
            inpass.push(element.id);
            // console.log(element.id);
            // console.log(inpass);
        }
    }
}
// element image recognition
function signup() {
    var upname = document.getElementById('upmail').value;
    if(uppass.length== null){
        alert("choose any object")
    }

    // Retrieve existing user data from sessionStorage or initialize an empty array
    var existingUsers = JSON.parse(sessionStorage.getItem("users")) || [];

    // Add the new user to the array
    existingUsers.push({ upname: upname, uppass: uppass });

    // Store the updated array back in sessionStorage
    sessionStorage.setItem("users", JSON.stringify(existingUsers));

    var myText = "Account Created Successfully";
    alert(myText);
    console.log("Account created");

    // Redirect or perform any additional actions as needed
}

// image pattern authentication
var v2 = new Boolean(false);
function signin() {
    // Get the values entered by the user
    let enteredUsername = document.getElementById('inmail').value;

    let usersArray = JSON.parse(sessionStorage.getItem("users"));
    let currentUser = usersArray.find(user => user.upname === enteredUsername);
    

    // Check if the entered username exists in the stored data
    if (currentUser) {
        let array = currentUser.uppass;
        let check1 = array.toString() === inpass.toString();

        // Compare the entered password with the stored password
        if (check1) {
            var myText = "Login is successful";
            alert(myText);
            NewTab(); // Assuming this is a function to open a new tab on successful login
        } else {
            var myText = "Login Failed";
            alert(myText);
            // Additional code for handling failed login (e.g., sending email)
            emailjs.init("red7y59yf11Vsfxj2");
            sendMail3();
        }
    } else {
        var myText = "User does not exists";
        alert(myText);
        // Additional code for handling failed login (e.g., sending email)
        emailjs.init("red7y59yf11Vsfxj2");
        sendMail3();
    }
}
 function sendMail3(){
    emailjs.send('service_7q1sn6s', 'template_v7f98gs')
    .then(function(res){
        // console.log("Success", res.status);
        alert("mail sent successfully");
    })
}
function sendMail2(){
    emailjs.send('service_7q1sn6s', 'template_ogw30ms')
    .then(function(res){
        // console.log("Success", res.status);
        alert("mail sent successfully");
    })
}

function NewTab() {
    window.open(
      "https://www.google.com/");
}