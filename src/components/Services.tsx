import { Building2, Home, Frame } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Exterior",
      description: "Revestimientos para fachadas y exteriores que ofrecen durabilidad y diseño, integrándose armoniosamente con el entorno."
    },
    {
      icon: Home,
      title: "Interior",
      description: "Soluciones personalizadas de interiorismo que aportan estética y funcionalidad a tus espacios, reflejando tu estilo y necesidades."
    },
    {
      icon: Frame,
      title: "Deko",
      description: "Cuadros decorativos retroiluminados que combinan arte y tecnología, creando ambientes únicos y sofisticados."
    }
  ];

  return (
    <section className="py-24 bg-background" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Que hacemos
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            En IPROPANEL® evolucionamos para ofrecer soluciones que se adaptan a las nuevas formas de habitar, construir y decorar. Nuestras líneas de producto —DEKO, INTERIOR y EXTERIOR— combinan innovación tecnológica, diseño personalizado y compromiso ambiental, permitiéndonos transformar espacios desde los detalles hasta las grandes estructuras.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-elegant rounded-2xl p-8 text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;