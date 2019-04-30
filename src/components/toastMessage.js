import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const toastData = {
  autoClose: 3000,
  closeButton: false,
  position: toast.POSITION.BOTTOM_RIGHT,
}

const notificationWarn = (msg) => {
  toast.warn(msg, toastData)
}

const notificationSuccess = (msg) => {
  toast.success(msg, toastData)
}

const notificationError = (msg) => {
  toast.error(msg, toastData)
}

export { notificationWarn, notificationError, notificationSuccess };