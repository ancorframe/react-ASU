import { toast } from "react-toastify";

export const notifySuccess = (e = 'success') =>
  toast.success(e, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });

export const notifyError = (e = 'error') =>
  toast.error(e, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });

export const notifyWarning = (e='warning') =>
  toast.warning(e, {
    theme: 'dark',
  });
