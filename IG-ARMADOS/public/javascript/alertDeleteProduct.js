console.log("vvvvvvvvvvvvvvvvvv");


function confirmar (evento, formulario){
    evento.preventDefault()

    
    Swal.fire({
        title: '¿Seguro quiere eliminar este producto?',
        text: "No podra revertir esta acción",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar",
        background: "white",
        backdrop: `rgba(0,0,123,0.4)`,


      }).then((result) => {
        if (result.isConfirmed) {
            formulario.submit()
            Swal.fire(
    
                'Borrado!',
                'El producto fue eliminado',
                'success'

          )
        }
       
      })
}