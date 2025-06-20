import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' }); // ou 'smooth' se preferir
  }, [pathname]);

  return children;  // <<< aqui é o essencial para renderizar o conteúdo dentro dele
}

export default ScrollToTop;
