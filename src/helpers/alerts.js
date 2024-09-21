import Swal from 'sweetalert2'

export const sweetAlert = (options)=>{
    const {title,text,icon} = options;
     Swal.fire({
        title,
        text,
        icon
     })

}