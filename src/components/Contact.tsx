import { Globe, Linkedin, Mail, Instagram } from "lucide-react";
import { incrementarContador } from "@/lib/contadorSheets";

const Contact = () => {
  const socialLinks = [
    { icon: Globe, href: "https://ipropanel.com.co", label: "Sitio Web", username: "iprocom.com.co" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/iprocom-s-a/?originalSubdomain=co", label: "LinkedIn", username: "IPROCOM S.A." },
    { icon: Instagram, href: "https://www.instagram.com/ipropanel", label: "Instagram", username: "@iprocom_col" },
    { icon: Mail, href: "mailto:Fgarcia@iprocom.co", label: "Email", username: "Fgarcia@iprocom.co" }
  ];

  // Función para enviar mensaje por WhatsApp
  const handleWhatsApp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nombre = (form.elements.namedItem("nombre") as HTMLInputElement)?.value;
    const telefono = (form.elements.namedItem("telefono") as HTMLInputElement)?.value;
    const correo = (form.elements.namedItem("correo") as HTMLInputElement)?.value;
    const mensaje = (form.elements.namedItem("mensaje") as HTMLTextAreaElement)?.value;
    const numeroWhatsApp = "3164661249";
  // Mensaje en formato WhatsApp, sin saltos de línea ni caracteres especiales
  const texto = `Mi nombre es ${nombre}. ${mensaje} Mis datos de contacto: correo: ${correo}, teléfono: ${telefono}`;
  // Prueba con api.whatsapp.com como alternativa
  const url = `https://api.whatsapp.com/send?phone=57${numeroWhatsApp}&text=${encodeURIComponent(texto)}`;
  console.log("WhatsApp URL:", url);
  window.open(url, "_blank");
  // Incrementar contador en Google Sheets
  incrementarContador();
    // Detectar si es escritorio (no móvil)
    const isDesktop = !/Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
    if (isDesktop) {
      // Copiar mensaje al portapapeles
      navigator.clipboard.writeText(texto).then(() => {
        alert("El mensaje ha sido copiado al portapapeles. Si WhatsApp Desktop no lo muestra automáticamente, pégalo manualmente en el chat.");
      });
    }
  };

  return (
    <section className="py-24 bg-secondary/30" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Contacto
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conéctate conmigo a través de estos medios para conversar sobre oportunidades de negocio y colaboración.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Enlaces sociales */}
          <div className="space-y-6">
            {socialLinks.map(({ icon: Icon, href, label, username }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mr-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground text-lg">{label}</div>
                  <div className="text-muted-foreground">{username}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Formulario de contacto */}
          <form className="bg-card border border-border rounded-xl p-8 shadow space-y-6" onSubmit={handleWhatsApp}>
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-1">Nombre</label>
              <input type="text" id="nombre" name="nombre" required className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground" />
            </div>
            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-1">Teléfono</label>
              <input type="tel" id="telefono" name="telefono" required className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground" />
            </div>
            <div>
              <label htmlFor="correo" className="block text-sm font-medium text-foreground mb-1">Correo</label>
              <input type="email" id="correo" name="correo" required className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground" />
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-1">Mensaje</label>
              <textarea id="mensaje" name="mensaje" rows={4} required className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground" />
            </div>
            <button type="submit" className="w-full bg-primary text-background font-semibold py-2 px-4 rounded hover:bg-primary/90 transition">Enviar mensaje</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;