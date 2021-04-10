let $suscription = document.querySelector('#suscription');
let $enviarSuc = document.querySelector('#enviarSuc');

$suscription.onsubmit = (evento) => {
    if(!$enviarSuc.value){
        evento.preventDefault();
    }
}