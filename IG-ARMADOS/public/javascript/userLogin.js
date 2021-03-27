let qs = function(element) {
    return document.querySelector(element)

}

window.addEventListener('load', function() {


    let $inputEmail = qs('#email'),
    $emailErrors = qs('#emailErrors'),
    $Pass = qs('#pass'),
    $passErrors = qs('#passErrors'),
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^.{6,12}$/;

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
            $passErrors.innerHTML = 'El campo contraseña es obligatorio.';
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

})