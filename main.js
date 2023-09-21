let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
    menu.classList.remove('bx-x');

}

function handleGetFormData() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const city = document.getElementById('city').value;
  const zipCode = document.getElementById('zipCode').value;
  const status = document.getElementById('status').value;

 return formData = {
   name,
   email,
   city,
   zipCode,
   status
 };
}

function isNumber(inputString) {
 return !isNaN(inputString);
}

function checkboxIsChecked() {
   var checkbox = document.getElementById("status");
   if (checkbox) {
       return checkbox.checked;
   } else {
       return false; 
   }
}
if (checkboxIsChecked()) {
   // Checkbox "status" telah dicentang
   console.log("Checkbox dicentang.");
} else {
   // Checkbox "status" tidak dicentang
   console.log("Checkbox tidak dicentang.");
}

function validateFormData(formData) {
 return (
   formData !== null &&
   isNumber(formData.zipCode) &&
   formData.status
 );
}

function submit(event) {
 const formData =handleGetFormData();
 const isValid = validateFormData(formData);

 const warningDiv = document.getElementById("warning");

 warningDiv.textContent = "";

 if (!isValid) {
   warningDiv.textContent = "Periksa form anda sekali lagi";
 }
}
document.getElementById('submit-form').addEventListener('click', (event)=> { 
 event.preventDefault();
 submit()
})