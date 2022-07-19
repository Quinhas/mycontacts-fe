import { useEffect, useState } from 'react';
import ToastMessage from '../ToastMessage';
import { Container } from './styles';

export default function ToastContainer() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    function handleAddToast(event) {
      const { type, text } = event.detail;
      setToasts((prevState) => [...prevState, { ìd: Math.random, type, text }]);
    }

    document.addEventListener('addtoast', handleAddToast);

    return () => {
      document.removeEventListener('addtoast', handleAddToast);
    };
  }, []);
  return (
    <Container>
      {toasts.map((toast) => (
        <ToastMessage
          key={toast.id}
          text={toast.text}
          type={toast.type}
        />
      ))}
    </Container>
  );
}
