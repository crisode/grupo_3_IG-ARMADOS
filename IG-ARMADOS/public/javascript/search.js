let $form = document.querySelector('#busqueda');
let $input = document.querySelector('#input');



$form.onsubmit = (e) => {
    if(!$input.value){
        e.preventDefault();

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
