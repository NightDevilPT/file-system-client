import { toast, Bounce, ToastPosition, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastOptions:ToastOptions = {
  position: "top-right" as ToastPosition,
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
//   theme: "light",
  transition: Bounce,
};

export const showErrorToast = (message: string) => {
  toast.error(message, toastOptions);
};

export const showUpdateToast = (message: string) => {
  toast.info(`🔄 ${message}`, toastOptions);
};

export const showSaveToast = (message: string) => {
  toast.success(`💾 ${message}`, toastOptions);
};

export const showInfoToast = (message: string) => {
  toast.info(message, toastOptions);
};

export const showWarningToast = (message: string) => {
  toast.warn(message, toastOptions);
};
