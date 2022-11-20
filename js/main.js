const buttonEnviar = document.getElementById("newsletter__button");
//EmailJS
document.getElementById('newsletter__form')
    .addEventListener('submit', function(event) {
        event.preventDefault();
       
        const serviceID = 'default_service';
        const templateID = 'template_65ao7yk';     
       
          emailjs.sendForm(serviceID, templateID, this)
           .then(() => {
            buttonEnviar.value = 'Enviar';
            console.log('Enviado!')
            inputEmail.value = '';

           }, (err) => {
            buttonEnviar.value = 'Enviar';
             alert(JSON.stringify(err));
           });
});