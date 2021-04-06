
let $form2 = document.querySelector('#busqueda');
let $input3 = document.querySelector('#input');



$form2.onsubmit = (evento) => {
    if(!$input3.value){
        evento.preventDefault();

    }
    
}

/*
$input.addEventListener('change',function(){
    console.log($input)
    /*
    if(!e.value){
        $form.onsubmit = (e) => {
            e.preventDefault();
        }
    }
})
*/
