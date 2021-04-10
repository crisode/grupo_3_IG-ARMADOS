console.log("vvvvvvvvvvvvvvvvvv");
/* :root{
  --orange:#ff6600;
  --white:#ffffff;
  --black:#1f1f1f;
  --red:#e30909;
  } */

function funar (evento, formulario){
    evento.preventDefault()

    Swal.fire({
        title: '¿Seguro quiere eliminar este Usuario?',
        text: "No podra revertir esta acción",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar",
        background: "white",
        backdrop: `rgba(0,0,123,0.4)`
        
      }).then((result) => {
        if (result.isConfirmed) {
            formulario.submit()
            Swal.fire(
                'Borrado!',
                'El usuario fue funado',
                'success'

          )
        }
       
      })
}