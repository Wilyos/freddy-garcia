import { Globe, Linkedin, Mail, Instagram } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    { icon: Globe, href: "https://ipropanel.com.co", label: "Sitio Web", username: "iprocom.com.co" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/iprocom-s-a/?originalSubdomain=co", label: "LinkedIn", username: "IPROCOM S.A." },
    { icon: Instagram, href: "https://www.instagram.com/ipropanel", label: "Instagram", username: "@iprocom_col" },
    { icon: Mail, href: "mailto:Fgarcia@iprocom.co", label: "Email", username: "Fgarcia@iprocom.co" }
  ];

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
        
        <div className="max-w-2xl mx-auto">
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
        </div>
      </div>
    </section>
  );
};

export default Contact;