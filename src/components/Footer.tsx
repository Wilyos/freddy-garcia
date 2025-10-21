import { useEffect, useState } from "react";

const Footer = () => {

  const [contador, setContador] = useState(null);

  useEffect(() => {
    // Función para obtener el contador
    const fetchContador = () => {
      fetch("https://script.google.com/macros/s/AKfycbzCawKIfv3fwUMJjOG6R8zPgHLUrcVJT0rwXfymE0SgIQyjFfttYQ669QhqYZ_qdeK6/exec")
        .then(res => res.text())
        .then(num => setContador(num))
        .catch(() => setContador(null));
    };
    fetchContador();
    // Escuchar evento personalizado para actualizar en tiempo real
    const handler = (e: any) => setContador(e.detail);
    window.addEventListener('contador-actualizado', handler);
    return () => window.removeEventListener('contador-actualizado', handler);
  }, []);

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-sm text-background/80">
            © 2025 Freddy Garcia — All rights reserved.
            {contador && (
              <span className="ml-2 text-xs opacity-40 select-none">| Formularios enviados: {contador}</span>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;