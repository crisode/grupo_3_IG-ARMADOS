let qs = function (element) {
    return document.querySelector(element)
}

window.addEventListener('load', function () {


    let $inputEmail = qs('#email'),
        $emailErrors = qs('#emailErrors'),
        $Pass = qs('#pass'),
        $passErrors = qs('#passErrors'),
        regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
        regExPass = /^.{6,12}$/,
        $formLogin = qs("#formLogin"),
        $errorFormLogin = qs("#errorFormLogin")

    /* VALIDACIÓN EMAIL */
    

    $inputEmail.addEventListener('blur', function(){
        switch (true) {
            case !$inputEmail.value.trim():
                $emailErrors.innerHTML = '* Debes ingresar un email';
                $inputEmail.classList.add('invalido')
                break;
            case !regExEmail.test($inputEmail.value):
                $emailErrors.innerHTML = 'Este correo electronico no es válido. Por favor usa el formato: tucorreo@ejemplo.com'
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
                $passErrors.innerHTML = '* Debes ingresar una contraseña';
                $Pass.classList.add('invalido')
                break;
                case !regExPass.test($Pass.value):
                $passErrors.innerHTML = 'Tu contraseña debe tener entre 6 y 12 caracteres'
                $Pass.classList.add('invalido')
                break; 
            default:
                $Pass.classList.remove('invalido');
                $Pass.classList.add('valido');
                $passErrors.innerHTML = ''
                break;
        }
    })
    /* VALIDACION FORMULARIO */
    
    console.log($formLogin)

    $formLogin.addEventListener("submit", function (event) {
        let error = false;
        
        event.preventDefault()
        console.log($formLogin.elements)
        let elementosForm = $formLogin.elements

        for (let index = 0; index < 2; index++) {
            if (!elementosForm[index].value) {
                elementosForm[index].classList.add("invalido")
                $errorFormLogin.innerHTML = "Los campos señalados son obligatorios"
                $errorFormLogin.classList.add("errorFormularioLogin")
                error = true;
            }
        }

        if (!error) {
            $formLogin.submit()
        }
    })

})