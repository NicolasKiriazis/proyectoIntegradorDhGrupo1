window.onload = function () {

    //------DESDE AQUÍ CONTINUE CON LAS VALIDACIONES DEL FORMULARIO -------//    
    let form = document.querySelector('.loginForm');
    form.email.focus();
    form.addEventListener('submit', (e) => {

        let errors = [];

        let email = document.querySelector('#mail');
        let password = document.querySelector('#password');

        if (email.value == "") {
            errors.push('El email es obligatorio');
        };
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.value.match(validRegex)) {
            form.password.focus();
        } else {
            errors.push('El email no es un formato válido');
        };
        if (password.value == "") {
            errors.push('No se a ingresado una contraseña');
        };
        
        //Aquí controlo que es lo que debo hacer si hay o no errores en el formulario

        if (errors.length > 0) {
            e.preventDefault();
            let ulErrors = document.querySelector('.errores');
            ulErrors.classList.add('alert-warning');
            ulErrors.innerHTML = '';
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += `<li >  ${errors[i]} </li>`;
            };

            // for (const error of errors) {
            //     ulErrors.innerHTML += `<li >  ${errors[i]} </li>`;

            // }
        } else {
            form.submit();
        }

    });


}