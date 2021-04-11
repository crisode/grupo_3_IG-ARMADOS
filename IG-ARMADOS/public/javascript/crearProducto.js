let qs = function (element) {
  return document.querySelector(element);
};

window.addEventListener("load", () => {
  console.log("Vinculado!")

  let $errorImagen = qs("#errorImagen"),
    $errorTitulo = qs("#errorTitulo"),
    $errorPrecio = qs("#errorPrecio"),
    $errorOferta = qs("#errorOferta"),
    $errorGarantia = qs("#errorGarantia"),
    $errorComponente = qs("#errorComponente"),
    $errorMarca = qs("#errorMarca"),
    $errorCategoria = qs("#errorCategoria"),
    $errorModelo = qs("#errorModelo"),
    $errorStock = qs("#errorStock"),
    $errorDescripcion = qs("#errorDescripcion"),
    $errorCaracteristicas = qs("#errorCaracteristicas"),
    $errorForm = qs("#errorBoton"),
    $form = qs("#form"),
    $imagen = qs("#imagen"),
    $titulo = qs("#titulo"),
    $precio = qs("#precio"),
    $oferta = qs("#oferta"),
    $garantia = qs("#garantia"),
    $componente = qs("#componente"),
    $marca = qs("#marca"),
    $categoria = qs("#categoria"),
    $modelo = qs("#modelo"),
    $stock = qs("#stock"),
    $descripcion = qs("#descripcion"),
    $caracteristicas = qs("#caracteristicas"),
    $imagenPreview = qs("#imagenPreview"),
    $esNumero = /^([0-9])*$/,
    $esTexto = /.{1,500}$/,
    $esTexto5 = /.{5,500}$/


  $imagen.addEventListener("change", function fileValidation() {
    let filePath = $imagen.value, //capturo el valor del input
      allowedExtensions = /(.jpg|.jpeg|.png|.gif|.jfif|.webp)$/i //Extensiones permitidas
    if (!allowedExtensions.exec(filePath)) { //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
      $errorImagen.innerHTML = "Carga un archivo de imagen valido, con las extensiones (.jpg - .jpeg - .png - .gif - .jfif - .webp)"
      $imagen.value = "";
      $imagenPreview.innerHTML = "";
      return false;
    } else {
      //image preview
      if ($imagen.files && $imagen.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
          $imagenPreview.innerHTML = "";
          $imagenPreview.innerHTML = '<img src="' + e.target.result + '"/>';
        };
        reader.readAsDataURL($imagen.files[0]);
        $errorImagen.innerHTML = "";
        $imagen.classList.remove("invalido")
        
      }
    }
  });


  $titulo.addEventListener('blur', function () {
    switch (true) {
      case !$titulo.value.trim():
        $errorTitulo.innerHTML = '* ¡Debes ingresar el título del producto! '
        $titulo.classList.remove("valido")
        $titulo.classList.add('invalido')
        break;
      case !$esTexto5.test($titulo.value):
        $errorTitulo.innerHTML = "* ¡El título debe tener al menos 5 caracteres!"
        $titulo.classList.remove("valido")
        $titulo.classList.add("invalido")
        break;
      default:
        $titulo.classList.remove('invalido');
        $titulo.classList.add('valido');
        $errorTitulo.innerHTML = ''
        break;
    }
  });

  $precio.addEventListener("blur", function() {
    switch (true) {
      case !$precio.value.trim():
        $errorPrecio.innerHTML = "* ¡Debes ingresar el precío del producto!"
        $precio.classList.remove("valido")
        $precio.classList.add("invalido")
        break;
      case !$esNumero.test($precio.value):
        $errorPrecio.innerHTML = "* ¡El precío debe ser un numero!"
        $precio.classList.remove("valido")
        $precio.classList.add("invalido")
        break;
      default:
        $errorPrecio.innerHTML = "";
        $precio.classList.remove("invalido")
        $precio.classList.add("valido")
        break;
    }
  });

  $oferta.addEventListener("blur", function() {
    switch (true) {
      case !$oferta.value.trim():
        $errorOferta.innerHTML = "* ¡El campo oferta es obligatorio!"
        $oferta.classList.remove("valido")
        $oferta.classList.add("invalido")
        break;
      case !$esNumero.test($oferta.value):
        $errorOferta.innerHTML = "* ¡El campo oferta debe ser numerico!"
        $oferta.classList.remove("valido")
        $oferta.classList.add("invalido")
        break;
      default:
        $errorOferta.innerHTML = "";
        $oferta.classList.remove("invalido")
        $oferta.classList.add("valido")
        break;
    }
  });

  $garantia.addEventListener("blur", function() {
    if (!$garantia.value.trim()) {
      $errorGarantia.innerHTML = "* ¡Debes ingresar el tipo de garantia que tendra el producto!"
      $garantia.classList.remove("valido")
      $garantia.classList.add("invalido")
    }else{
      $errorGarantia.innerHTML = "";
      $garantia.classList.remove("invalido")
      $garantia.classList.add("valido")
    }
  });

  $componente.addEventListener("blur", function() {
    if (!$componente.value.trim()) {
      $errorComponente.innerHTML = "* ¡Debes ingresar que tipo de componente es!"
      $componente.classList.remove("valido")
      $componente.classList.add("invalido")
    }else{
      $errorComponente.innerHTML = "";
      $componente.classList.remove("invalido")
      $componente.classList.add("valido")
    }
  });

  $marca.addEventListener("blur", function() {
    if (!$marca.value.trim()) {
      $errorMarca.innerHTML = "* ¡Debes ingresar la marca del producto!"
      $marca.classList.remove("valido")
      $marca.classList.add("invalido")
    }else{
      $errorMarca.innerHTML = "";
      $marca.classList.remove("invalido")
      $marca.classList.add("valido")
    }
  });

  $modelo.addEventListener('blur', function () {
    switch (true) {
      case !$modelo.value.trim():
        $errorModelo.innerHTML = '* ¡Debes ingresar el modelo del producto!'
        $modelo.classList.remove("valido")
        $modelo.classList.add('invalido')
        break;
      default:
        $modelo.classList.remove('invalido');
        $modelo.classList.add('valido');
        $errorModelo.innerHTML = ''
        break;
    }
  });

  $stock.addEventListener("blur", function() {
    if (!$stock.value.trim()) {
      $errorStock.innerHTML = "* ¡Confirma el stock del producto!"
      $stock.classList.remove("valido")
      $stock.classList.add("invalido")
    }else{
      $errorStock.innerHTML = "";
      $stock.classList.remove("invalido")
      $stock.classList.add("valido")
    }
  });

  $categoria.addEventListener("blur", function() {
    if (!$categoria.value.trim()) {
      $errorCategoria.innerHTML = "* ¡Debes ingresar en que categoria se agregara el producto!"
      $categoria.classList.remove("valido")
      $categoria.classList.add("invalido")
    }else{
      $errorCategoria.innerHTML = "";
      $categoria.classList.remove("invalido")
      $categoria.classList.add("valido")
    }
  });

  $descripcion.addEventListener("blur", function() {
    switch (true) {
      case !$descripcion.value:
        $errorDescripcion.innerHTML = "* ¡Ingresa una descripción del producto !"
        $descripcion.classList.remove("valido")
        $descripcion.classList.add("invalido")
        break;
      case !$esTexto.test($descripcion.value):
        $errorDescripcion.innerHTML = "* ¡La descripcion debe tener al menos 5 caracteres!"
        $descripcion.classList.remove("valido")
        $descripcion.classList.add("invalido")
        break;
      default:
        $errorDescripcion.innerHTML = "";
        $descripcion.classList.remove("invalido")
        $descripcion.classList.add("valido")
        break;
    }
  });

  $caracteristicas.addEventListener("blur", function() {
    switch (true) {
      case !$caracteristicas.value:
        $errorCaracteristicas.innerHTML = "* ¡Ingresa las caracteristicas del producto!"
        $caracteristicas.classList.remove("valido")
        $caracteristicas.classList.add("invalido")
        break;
      case !$esTexto.test($caracteristicas.value):
        $errorCaracteristicas.innerHTML = "* ¡El campo caracteristicas debe tener al menos 5 caracteres!"
        $caracteristicas.classList.remove("valido")
        $caracteristicas.classList.add("invalido")
        break;
      default:
        $errorCaracteristicas.innerHTML = "";
        $caracteristicas.classList.remove("invalido")
        $caracteristicas.classList.add("valido")
        break;
    }
  });

  $form.addEventListener("submit", function(event){
    let error = false;
    event.preventDefault()
    console.log($form.elements)
    let elementosForm = this.elements

    for (let index = 1; index < 12; index++) {
      if (elementosForm[index].value == "") {
        elementosForm[index].classList.add("invalido")
        $errorForm.innerHTML = "* Debes ingresar todos los datos ";
        $errorForm.classList.add("errorFormulario")
        error = true;
      }
    }

    if (!error) {
      $form.submit()
    }
  })


});