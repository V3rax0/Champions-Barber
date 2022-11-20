//validación del correo
let inputEmail = document.getElementById("email");
const buttonEnviar = document.getElementById("newsletter__button");


/*
buttonEnviar.addEventListener("click", (event) => {
    event.preventDefault();
    sendEmail(inputEmail.value);
});

function sendEmail(email) {
    let expReg =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if (expReg.test(email) == true) {
        inputEmail.style.border = "1px solid black";

    } else {
        inputEmail.style.border = "1px solid red";
    }
}
*/

//EmailJS
document.getElementById('newsletter__form')
    .addEventListener('submit', function(event) {
        event.preventDefault();
       
        const serviceID = 'default_service';
        const templateID = 'template_65ao7yk';     
       
          emailjs.sendForm(serviceID, templateID, this)
           .then(() => {
            buttonEnviar.value = 'Enviar';
             console.log('Sent!');
           }, (err) => {
            buttonEnviar.value = 'Enviar';
             alert(JSON.stringify(err));
           });
});