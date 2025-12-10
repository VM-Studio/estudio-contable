import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NosotrosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="grow">
        {/* Hero Section */}
        <section className="bg-gray-50 py-12 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Sobre Nosotros
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Más de 20 años de experiencia brindando servicios contables de excelencia
              </p>
            </div>
          </div>
        </section>

        {/* Historia Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                Fundado en 2004, nuestro estudio contable nació con la misión de brindar 
                servicios profesionales de alta calidad a empresas de todos los tamaños. 
                Con el paso de los años, nos hemos consolidado como un referente en el sector, 
                manteniendo siempre nuestro compromiso con la excelencia y la satisfacción del cliente.
              </p>
              <p className="mb-4">
                A lo largo de más de dos décadas, hemos acompañado a cientos de empresas en 
                su crecimiento, adaptándonos a los cambios normativos y tecnológicos para 
                ofrecer siempre el mejor servicio.
              </p>
            </div>
          </div>
        </section>

        {/* Valores Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Nuestros Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Profesionalismo</h3>
                <p className="text-gray-600">
                  Contamos con un equipo altamente capacitado y en constante actualización 
                  para brindar el mejor servicio a nuestros clientes.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Confianza</h3>
                <p className="text-gray-600">
                  Construimos relaciones duraderas basadas en la transparencia, la ética 
                  y el cumplimiento de nuestros compromisos.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovación</h3>
                <p className="text-gray-600">
                  Incorporamos las últimas tecnologías y metodologías para optimizar 
                  nuestros procesos y brindar un servicio más eficiente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipo Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Nuestro Equipo
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-600 text-center mb-12">
                Nuestro equipo está conformado por contadores públicos matriculados, 
                especialistas en impuestos, auditores y asesores empresariales con 
                amplia experiencia en el mercado argentino. Trabajamos de forma coordinada 
                para ofrecer soluciones integrales a nuestros clientes.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-gray-900">Dr. Juan Pérez</h3>
                  <p className="text-gray-600">Contador Público - Socio Fundador</p>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-gray-900">Dra. María González</h3>
                  <p className="text-gray-600">Contadora Pública - Socia</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Querés formar parte de nuestra historia?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contactanos y descubrí cómo podemos ayudarte a alcanzar tus objetivos empresariales.
            </p>
            <a 
              href="/contacto"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Contactar
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
