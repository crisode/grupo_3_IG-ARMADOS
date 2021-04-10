let qs = function (element) {
    return document.querySelector(element);
  };
  
  window.addEventListener("load", () => {
    console.log("Vinculadoo!")

let $nombrePerfil = qs("#nombrePerfil"),
    $apellidoPerfil = qs("#apellidoPerfil"),
    $imgPerfil = qs("#imgPerfil"),
    $imgPreview = qs("#img-preview-perfil"),
    $nombrePerfilError = qs("#nombrePerfilError"),
    $apellidoPerfilError = qs("#apellidoPerfilError"),
    regExAlpha = /^[a-zA-Z\sñáéíóúü]*$/,
    $errorimg = qs("#imgErrorPerfil"),
    $form = qs("#formPerfil"),
    $errorFormPerfil = qs("#errorFormPerfil")

    $nombrePerfil.addEventListener('blur', function(){
        switch (true) {
            case !$nombrePerfil.value.trim():
                $nombrePerfilError.innerHTML = 'El campo nombre es obligatorio';
                $nombrePerfil.classList.add('invalido')
                break;
            default:
                $nombrePerfil.classList.remove('invalido');
                $nombrePerfil.classList.add('valido');
                $nombrePerfilError.innerHTML = ''
                break;
        }
    })

    $apellidoPerfil.addEventListener('blur', function(){
        switch (true) {
            case !$apellidoPerfil.value.trim():
                $apellidoPerfilError.innerHTML = 'El campo apellido es obligatorio';
                $apellidoPerfil.classList.add('invalido')
                break;
            default:
                $apellidoPerfil.classList.remove('invalido');
                $apellidoPerfil.classList.add('valido');
                $apellidoPerfilError.innerHTML = ''
                break;
        }
    })

    $imgPerfil.addEventListener("change", function fileValidation() {
        let filePath = $imgPerfil.value, //capturo el valor del input
          allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i //Extensiones permitidas
        if (!allowedExtensions.exec(filePath)) { //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
          $errorimg.innerHTML = "Carga un archivo de img valido, con las extensiones (.jpg - .jpeg - .png - .gif)"
          $imgPerfil.value = "";
          $imgPreview.innerHTML = "";
          return false;
        } else {
          //image preview
          if ($imgPerfil.files && $imgPerfil.files[0]) {
            let reader = new FileReader();
            reader.onload = function (e) {
              $imgPreview.innerHTML = "";
              $imgPreview.innerHTML = '<img src="' + e.target.result + '"/>';
            };
            reader.readAsDataURL($imgPerfil.files[0]);
            $errorimg.innerHTML = "";
            $imgPerfil.classList.remove("invalido")
          }
        }
      });


    $form.addEventListener("submit", function(event){
        let error = false;
        event.preventDefault()
        console.log($form.elements)
        let elementosForm = this.elements
    
        for (let index = 1; index < 3; index++) {
          if (elementosForm[index].value == "") {
            elementosForm[index].classList.add("invalido")
            $errorFormPerfil.innerHTML = "Los campos señalados son obligatorios";
            $errorFormPerfil.classList.add("errorFormulario")
            error = true;
          }
        }
    
        if (!error) {
          $form.submit()
        }
      })
});

