import { Factory, Layers, Beaker } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Factory,
      title: "Inyección Técnica",
      description: "Ofrecemos inyección técnica en materiales de ingeniería para crear productos como estuches, cajas blíster, hieleras, ganchos legajadores y organizadores multiusos con divisiones, entre otros. Nuestro servicio garantiza precisión, durabilidad y acabados de alta calidad, diseñados para cubrir tus necesidades de funcionalidad y personalización."
    },
    {
      icon: Layers,
      title: "Recubrimiento sobre plásticos",
      description: "Nos especializamos en la aplicación de recubrimientos sobre sustratos plásticos, generando productos con acabados innovadores y de alto desempeño."
    },
    {
      icon: Beaker,
      title: "Laboratorio",
      description: "Contamos con un laboratorio completamente dotado para garantizar la calidad de nuestros productos y procesos."
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
            nos especializamos en la inyección de componentes plásticos y en la aplicación de recubrimientos de alto desempeño, ofreciendo soluciones innovadoras y de alta calidad para diversas industrias.
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