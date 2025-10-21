
import { useEffect, useState } from "react";
import { obtenerContador } from "@/lib/contadorSheets";

const Footer = () => {
  const [contador, setContador] = useState<number | null>(null);

  useEffect(() => {
    obtenerContador().then((data) => {
      if (data && typeof data.contador === 'number') setContador(data.contador);
    });
  }, []);

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-sm text-background/80">
            © 2025 Freddy Garcia — All rights reserved.<br />
            {contador !== null && (
              <span className="block mt-2">Visitas/Acciones: <b>{contador}</b></span>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;