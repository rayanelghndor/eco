function validation(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter Username*"
        return false;
    }
    else  if(document.Formfill.Username.value.length<6){
        document.getElementById("result").innerHTML="Atleast six letter*"
        return false;
    }
    else  if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML="Enter your Email*"
        return false;
    }
    else  if(document.Formfill.Password.value==""){
        document.getElementById("result").innerHTML="Enter your Password*"
        return false;
    }
    
    else  if(document.Formfill.Cpassword.value==""){
        document.getElementById("result").innerHTML="Enter Confirm Password*"
        return false;
    }
    else  if(document.Formfill.Password.value!==document.Formfill.Cpassword.value){
        document.getElementById("result").innerHTML="Password does 'nt matched*"
        return false;
    }
    else  if(document.Formfill.Password.value.length<6){
        document.getElementById("result").innerHTML="Password must be 6-digi*"
        return false;
    }
    else  if(document.Formfill.Password.value == document.Formfill.Cpassword.value){
        popup.classList.add("open-slide")
        return false;
    }
    
   
}
var popup=document.getElementById('popup')
function CloseSlide(){
    popup.classlist.remove("open-slide")
}














function validation() {
    // Existing validation checks...

    // If all validations pass, proceed with local storage
    if (document.Formfill.Password.value == document.Formfill.Cpassword.value) {
        // Get form data
        const username = document.Formfill.Username.value;
        const email = document.Formfill.Email.value;
        const password = document.Formfill.Password.value;

        // Store data in local storage
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        // Show popup
        popup.classList.add("open-slide");
        return false;
    }
}

// Existing CloseSlide function...

// Function to retrieve data from local storage and pre-fill the form
function prefillForm() {
    const storedUsername = localStorage.getItem("username");
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (storedUsername) {
        document.Formfill.Username.value = storedUsername;
    }
    if (storedEmail) {
        document.Formfill.Email.value = storedEmail;
    }
    if (storedPassword) {
        document.Formfill.Password.value = storedPassword;
        document.Formfill.Cpassword.value = storedPassword;
    }
}

// Call prefillForm on page load to prefill the form
window.addEventListener("load", prefillForm);












 // document.getElementById('signupForm').addEventListener('submit', function(event) {
    //     event.preventDefault();
    
    //     const username = document.getElementById('Username').value;
    //     const password = document.getElementById('Password').value;
      
    
    //     localStorage.setItem(username, JSON.stringify({ password, broductes: [] }));
    // });
