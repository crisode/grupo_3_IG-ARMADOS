
/* Custom modal */
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger',
    },
    buttonsStyling: false
  })
/*  */
  function confirmar (form,event){
    event.preventDefault()
    swalWithBootstrapButtons.fire({
    title: '¿Esta seguro?',
    text: "Esto no se podra revertir!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, eliminar!',
    cancelButtonText: 'No, cancelar',
    reverseButtons: true
  }).then((result) => {
    console.log(result);
    if (result.isConfirmed) {
      event.submit()
      swalWithBootstrapButtons.fire(
        'Eliminado!',
        'Producto eliminado.',
        'success'
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelado',
        'Producto no eliminado',
        'error'
      )
    }
  })
}