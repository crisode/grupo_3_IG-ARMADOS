let qs = function(element) {
    return document.querySelector(element)

}

window.addEventListener('load', function() {


    let $inputNombre = qs('#nombre'),
    $nombreErrors = qs('#nombreErrors'),
    $inputApellido = qs('#apellido'),
    $apellidoErrors = qs('#apellidoErrors'),
    $inputEmail = qs('#email'),
    $emailErrors = qs('#emailErrors'),
    $Pass = qs('#pass'),
    $passErrors = qs('#passErrors'),
    $Pass2 = qs('#pass2'),
    $pass2Errors = qs('#pass2Errors'),
    $img = qs('#img'),
    $imgErrors = qs('#imgErrors'),
    $form = qs('#form'),
    $terms = qs('#flexCheckDefault'),
    $termsErrors = qs('#termErrors'),
    submitErrors = qs('#submitErrors'),
    regExAlpha = /^[a-zA-Z\sñáéíóúü]*$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^.{6,12}$/;


    /* VALIDACIÓN NOMBRE */

    $inputNombre.addEventListener('blur', function(){
        switch (true) {
            case !$inputNombre.value.trim():
                $nombreErrors.innerHTML = 'El campo nombre es obligatorio';
                $inputNombre.classList.add('invalido')
                break;
            case !regExAlpha.test($inputNombre.value):
                $nombreErrors.innerHTML = 'Debes ingresar un nombre válido'
                $inputNombre.classList.add('invalido')
                break;
            default:
                $inputNombre.classList.remove('invalido');
                $inputNombre.classList.add('valido');
                $nombreErrors.innerHTML = ''
                break;
        }
    })

    /* VALIDACIÓN APELLIDO */

    $inputApellido.addEventListener('blur', function(){
        switch (true) {
            case !$inputApellido.value.trim():
                $apellidoErrors.innerHTML = 'El campo apellido es obligatorio';
                $inputApellido.classList.add('invalido')
                break;
            case !regExAlpha.test($inputApellido.value):
                $apellidoErrors.innerHTML = 'Debes ingresar un nombre válido'
                $inputApellido.classList.add('invalido')
                break;
            default:
                $inputApellido.classList.remove('invalido');
                $inputApellido.classList.add('valido');
                $apellidoErrors.innerHTML = ''
                break;
        }
    })

    /* VALIDACIÓN EMAIL */

    $inputEmail.addEventListener('blur', function(){
        switch (true) {
            case !$inputEmail.value.trim():
                $emailErrors.innerHTML = 'El campo email es obligatorio';
                $inputEmail.classList.add('invalido')
                break;
            case !regExEmail.test($inputEmail.value):
                $emailErrors.innerHTML = 'Debes ingresar un Email válido'
                $inputEmail.classList.add('invalido')
                break;
            default:
                $inputEmail.classList.remove('invalido');
                $inputEmail.classList.add('valido');
                $emailErrors.innerHTML = ''
                break;
        }
    })

    /* VALIDACIÓN PASSWORD  */

    $Pass.addEventListener('blur', function(){
        switch (true) {
            case !$Pass.value.trim():
                $passErrors.innerHTML = 'El campo contraseña es obligatorio';
                $Pass.classList.add('invalido')
                break;
                case !regExPass.test($Pass.value):
                $passErrors.innerHTML = 'Debe tener entre 6 y 12 caracteres'
                $Pass.classList.add('invalido')
                break; 
            default:
                $Pass.classList.remove('invalido');
                $Pass.classList.add('valido');
                $passErrors.innerHTML = ''
                break;
        }
    })

    /* VALIDACIÓN PASSWORD 2 */

    $Pass2.addEventListener('blur', function(){
        switch (true) {
            case !$Pass2.value.trim():
                $pass2Errors.innerHTML = 'Debes reingresar la contraseña';
                $Pass2.classList.add('invalido')
                break;
            case $Pass2.value != $Pass.value:
                $pass2Errors.innerHTML = 'Las contraseñas no coinciden'
                $Pass2.classList.add('invalido')
                break;
            default:
                $Pass2.classList.remove('invalido');
                $Pass2.classList.add('valido');
                $pass2Errors.innerHTML = ''
                break;
        }
    });

    /* VALIDACION IMAGEN */

    $img.addEventListener("change", function fileValidation() {
        let filePath = $img.value,
          allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i 
        if (!allowedExtensions.exec(filePath)) { 
          $imgErrors.innerHTML = "Carga un archivo de imagen valido, con las extensiones (.jpg - .jpeg - .png - .gif)"
          $img.value = "";
          return false

        }
    })

    /* VALIDACIÓN CAMPO TERMINOS Y CONDICIONES */

    $form.addEventListener('submit', function(event) {
        let error = false;
        event.preventDefault()
        console.log($form.elements)
        let elementosForm = this.elements

        for (let index = 0; index < 6; index++){
        if(elementosForm[index].value == ""){
            elementosForm[index].classList.add('invalido');
            submitErrors.innerHTML = "Los campos señalados son obligatorios.";
            error = true;
            }
        }
        
        if(!$terms.checked){
            $terms.classList.add('invalido');
            $termsErrors.innerHTML = "Debes aceptar las bases y condiciones"
            error = true
        }

        if(!error){
            console.log('Todo bien');
            $form.submit()
        }

    })



})
