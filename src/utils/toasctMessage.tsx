import { toast } from 'react-toastify';

export function toastMessage(
  type: 'success' | 'error' | 'info' | 'warning',
  message: string,  
  position: 'top-center' | 'top-right' | 'top-left' | 'bottom-center' | 'bottom-right' | 'bottom-left',
  theme: 'light' | 'colored' | 'dark',
  autoClose:  number
) {
  const options = {
    position: position,
    theme: theme,
    autoClose: autoClose
  };

  switch(type) {
    case 'error':
      toast.error(message, options);
      break;
    case 'success':
      toast.success(message, options);
      break;
  }
}

export default toastMessage


