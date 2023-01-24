window.onload = function () {

    //------DESDE AQUÍ CONTINUE CON LAS VALIDACIONES DEL FORMULARIO -------//    
    let form = document.querySelector('.login-register');
    form.name.focus();
    form.addEventListener('submit', (e) => {

        let errors = [];

        let name = document.querySelector('#nombre');
        let apellido = document.querySelector('#apellido');
        let email = document.querySelector('#mail');
        let password = document.querySelector('#password');
        let passwordRepite = document.querySelector('#passwordRepite');
        let image = document.querySelector('#image');

        if (name.value < 2) {
            errors.push('El nombre debe tener al menos 2 caracteres');
        } else {
            form.lastname.focus();
        };
        if (apellido.value < 2) {
            errors.push('El apellido debe tener al menos 2 caracteres');
        } else {

            form.email.focus();
        };
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.value.match(validRegex)) {
            form.password.focus();
        } else {
            errors.push('El email no es un formato válido');
        };
        if (password.value < 8) {
            errors.push('La contraseña debe ser de al menos 8 caracteres');
        } else {
            form.passwordRepite.focus();
        };
        if (passwordRepite.value < 8) {
            errors.push('La confirmación de contraseña debe ser de al menos 8 caracteres');
        } else {
            form.image.focus();
        };
               if (image.value == "") {
            errors.push('Tienes que subir una imagen en formato valido');
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