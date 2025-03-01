import Swal from 'sweetalert2';
import {SweetAlertOptions} from 'sweetalert2';

export default function popUpAlert(message: string, icon: SweetAlertOptions['icon']) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });
    Toast.fire({
        icon: icon,
        title: message
    });
}