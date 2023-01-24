window.onload = function () {

    //------DESDE AQUÍ CONTINUE CON LAS VALIDACIONES DEL FORMULARIO -------//    
    let form = document.querySelector('#createProduc');
    form.name.focus();
    form.addEventListener('submit', (e) => {

        let errors = [];

        let name = document.querySelector('#name');
        let description = document.querySelector('#description');
        let image = document.querySelector('#image');

        if (name.value < 5) {
            errors.push('El nombre debe tener al menos 5 caracteres');
        } else {
            form.description.focus();
        };
        if (description.value < 20) {
            errors.push('La descripción debe tener al menos 20 caracteres');
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