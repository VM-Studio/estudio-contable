import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NosotrosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="grow">
        {/* Hero Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-serif font-bold text-gray-900 mb-4">
                Nuestro Estudio
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                Más de 20 años de experiencia brindando servicios contables de excelencia
              </p>
              <div className="w-24 h-1 mx-auto mt-6" style={{ backgroundColor: '#ff85ab' }}></div>
            </div>
          </div>
        </section>

        {/* Ubicación y Mapa Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left - Info */}
              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Visitanos en nuestra oficina</h2>
                <p className="text-gray-600 mb-8 font-light leading-relaxed">
                  Nuestro estudio está ubicado en el corazón de Buenos Aires, con fácil acceso 
                  desde cualquier punto de la ciudad. Te esperamos para conocer tus necesidades 
                  y ofrecerte soluciones personalizadas.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(78, 68, 133, 0.1)' }}>
                      <svg className="w-6 h-6" fill="none" stroke="#4e4485" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-gray-900 mb-1">Dirección</h3>
                      <p className="text-gray-600 font-light">
                        Av. Corrientes 1234, Piso 5<br />
                        C1043 CABA, Buenos Aires<br />
                        Argentina
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255, 166, 191, 0.1)' }}>
                      <svg className="w-6 h-6" fill="none" stroke="#ff85ab" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-gray-900 mb-1">Horarios de atención</h3>
                      <p className="text-gray-600 font-light">
                        Lunes a Viernes: 9:00 - 18:00 hs<br />
                        Sábados y Domingos: Cerrado
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(78, 68, 133, 0.1)' }}>
                      <svg className="w-6 h-6" fill="none" stroke="#4e4485" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-gray-900 mb-1">Contacto</h3>
                      <p className="text-gray-600 font-light">
                        Tel: +54 11 XXXX-XXXX<br />
                        Email: info@estudiocarrizo.com.ar
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Mapa */}
              <div className="rounded-2xl overflow-hidden shadow-xl h-[500px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878484226!2d-58.38375908477026!3d-34.60373098045948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacf8c29cf1d%3A0x7e25f02996e0bdd3!2sAv.%20Corrientes%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1638472858471!5m2!1ses!2sar"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="Ubicación del Estudio"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Historia Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Nuestra Historia</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4 font-light leading-relaxed">
                Fundado en 2004, nuestro estudio contable nació con la misión de brindar 
                servicios profesionales de alta calidad a empresas de todos los tamaños. 
                Con el paso de los años, nos hemos consolidado como un referente en el sector, 
                manteniendo siempre nuestro compromiso con la excelencia y la satisfacción del cliente.
              </p>
              <p className="mb-4 font-light leading-relaxed">
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
