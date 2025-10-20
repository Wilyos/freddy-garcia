import profileAbout from "@/assets/iprocomlogo.png";

const About = () => {
  return (
  <section className="py-24 bg-secondary/30 relative" id="about">
      {/* Gradiente azul superior para transición visual */}
      <div
        className="hidden md:block pointer-events-none absolute left-0 right-0 top-0 h-8 md:h-10 lg:h-12 z-20"
        style={{
          background: typeof window !== 'undefined' && document.documentElement.classList.contains('dark')
            ? 'linear-gradient(180deg, rgba(23,37,84,0.95) 80%, rgba(23,37,84,0.0) 100%)'
            : 'linear-gradient(180deg, rgba(37,99,235,0.95) 80%, rgba(37,99,235,0.0) 100%)'
        }}
      />
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <img
              src={profileAbout}
              alt="Logo IPROCOM - Empresa especializada en inyección de componentes plásticos"
              className="rounded-2xl shadow-2xl w-full h-[300px] md:h-[350px] object-contain bg-white/50 dark:bg-black/50"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/10 to-transparent"></div>
          </div>
          
          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Sobre Nosotros
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
               Somos una empresa orgullosamente Colombiana especializada en la inyección de componentes plásticos y en la aplicación de recubrimientos de alto desempeño.
              </p>
              
              <p>
               Desarrollamos soluciones competitivas e innovadoras de la mano de nuestros aliados para suplir las exigentes necesidades del mercado nacional e internacional.
              </p>
              
              <p>
                
              </p>
            </div>
            
            {/* Skills/Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 text-center md:text-left">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">19+</h3>
                <p className="text-muted-foreground">Años de Experiencia</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2"></h3>
                <p className="text-muted-foreground"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;