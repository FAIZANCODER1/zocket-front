import Swal from "sweetalert2"
export const deleteModal = () => {
    Swal.fire({
        icon: 'error',
        title: 'Delete',
        text: 'Are U Sure Want To Delete!'
      })
      
}