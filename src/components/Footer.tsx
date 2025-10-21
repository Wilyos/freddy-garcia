
import { useEffect, useState } from "react";
import { obtenerContador } from "@/lib/contadorSheets";

const Footer = () => {
  const [contador, setContador] = useState(null);

  useEffect(() => {
    obtenerContador()
      .then(num => setContador(num))
      .catch(() => setContador(null));
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