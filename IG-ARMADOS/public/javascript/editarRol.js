console.log("edit rol");


function rolEdit (evento, formulario){
    evento.preventDefault()

    Swal.fire({
        title: '¿Seguro quiere cambiar el rol a este Usuario?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Cambiar',
        cancelButtonText: "No cambiar",
        backdrop: `rgba(0,0,123,0.4)`

      }).then((result) => {
        if (result.isConfirmed) {
            formulario.submit()
            Swal.fire(
                'Se le asigno el nuevo rol al usuario!')
        }
       
      })
}