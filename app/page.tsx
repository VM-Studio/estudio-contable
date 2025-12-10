'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="grow">
        {/* Hero Section - Simple */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div>
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  Estudio Contable Profesional
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                  Más de 20 años brindando servicios contables, impositivos y de asesoramiento 
                  empresarial con excelencia y compromiso.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contacto"
                    className="text-white px-8 py-4 rounded-lg transition-opacity font-serif font-medium text-center hover:opacity-90"
                    style={{ backgroundColor: '#4e4485' }}
                  >
                    Contactar
                  </Link>
                  <Link 
                    href="/servicios"
                    className="bg-white px-8 py-4 rounded-lg border-2 transition-all font-serif font-medium text-center hover:bg-gray-50"
                    style={{ borderColor: '#ffa6bf', color: '#4e4485' }}
                  >
                    Ver Servicios
                  </Link>
                </div>
              </div>
              
              {/* Right Side - Image */}
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="/herouno.png" 
                  alt="Estudio Contable" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 pb-10 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                Nuestros Servicios
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
                Brindamos diferentes servicios de acuerdo a cada necesidad, con más de 20 años 
                de experiencia en el mercado
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Service Card 1 */}
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(78, 68, 133, 0.1)' }}>
                  <svg className="w-10 h-10" fill="none" stroke="#4e4485" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold mb-4" style={{ color: '#4e4485' }}>
                  Servicios Contables
                </h3>
                <p className="text-gray-600 font-light mb-6 leading-relaxed">
                  Gestión integral de contabilidad, balances, estados contables y cumplimiento de obligaciones fiscales para tu empresa.
                </p>
                <Link 
                  href="/servicios"
                  className="inline-block text-white px-6 py-2 rounded-full font-serif font-medium transition-opacity hover:opacity-90 text-sm"
                  style={{ backgroundColor: '#4e4485' }}
                >
                  MÁS
                </Link>
              </div>

              {/* Service Card 2 */}
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(78, 68, 133, 0.1)' }}>
                  <svg className="w-10 h-10" fill="none" stroke="#4e4485" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold mb-4" style={{ color: '#4e4485' }}>
                  Servicios de Liquidación
                </h3>
                <p className="text-gray-600 font-light mb-6 leading-relaxed">
                  Liquidación de impuestos nacionales, provinciales y municipales. Optimización de la carga tributaria de tu negocio.
                </p>
                <Link 
                  href="/servicios"
                  className="inline-block text-white px-6 py-2 rounded-full font-serif font-medium transition-opacity hover:opacity-90 text-sm"
                  style={{ backgroundColor: '#4e4485' }}
                >
                  MÁS
                </Link>
              </div>

              {/* Service Card 3 */}
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(78, 68, 133, 0.1)' }}>
                  <svg className="w-10 h-10" fill="none" stroke="#4e4485" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold mb-4" style={{ color: '#4e4485' }}>
                  Consultante
                </h3>
                <p className="text-gray-600 font-light mb-6 leading-relaxed">
                  Asesoramiento profesional personalizado en materia contable, impositiva y laboral para tu tranquilidad.
                </p>
                <Link 
                  href="/servicios"
                  className="inline-block text-white px-6 py-2 rounded-full font-serif font-medium transition-opacity hover:opacity-90 text-sm"
                  style={{ backgroundColor: '#4e4485' }}
                >
                  MÁS
                </Link>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href="/servicios"
                className="inline-block bg-white px-8 py-3 rounded-lg font-serif font-medium transition-all hover:bg-gray-50 border-2"
                style={{ borderColor: '#ffa6bf', color: '#4e4485' }}
              >
                Ver todos los servicios
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-10 pt-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-serif font-bold mb-8" style={{ color: '#4e4485' }}>
                  ¿Por qué elegirnos?
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 pl-4" style={{ borderColor: '#ffa6bf' }}>
                    <h3 className="font-serif font-semibold text-gray-900 mb-2 text-lg">Experiencia comprobada</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Más de 20 años brindando servicios contables de excelencia, respaldados por 
                      cientos de clientes satisfechos en diversos rubros.
                    </p>
                  </div>
                  
                  <div className="border-l-4 pl-4" style={{ borderColor: '#ffa6bf' }}>
                    <h3 className="font-serif font-semibold text-gray-900 mb-2 text-lg">Atención personalizada</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Cada cliente recibe un servicio adaptado a sus necesidades específicas, 
                      con un contador asignado para su tranquilidad.
                    </p>
                  </div>
                  
                  <div className="border-l-4 pl-4" style={{ borderColor: '#ffa6bf' }}>
                    <h3 className="font-serif font-semibold text-gray-900 mb-2 text-lg">Tecnología de vanguardia</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Utilizamos las últimas herramientas tecnológicas y software especializado 
                      para optimizar procesos y garantizar eficiencia.
                    </p>
                  </div>
                  
                  <div className="border-l-4 pl-4" style={{ borderColor: '#ffa6bf' }}>
                    <h3 className="font-serif font-semibold text-gray-900 mb-2 text-lg">Cumplimiento normativo</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Garantizamos el cumplimiento de todas las obligaciones fiscales y legales, 
                      manteniéndote siempre actualizado con la normativa vigente.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Image */}
              <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
                <Image 
                  src="/porqueelegirnos.png" 
                  alt="¿Por qué elegirnos?" 
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section - Estudio Carrizo & Carrizo */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto pl-4 sm:pl-6 lg:pl-8">
            <div className="text-center mb-8 pr-4 sm:pr-6 lg:pr-8">
              <h2 className="text-5xl font-serif font-bold text-gray-900 mb-4">
                Sobre Nosotros
              </h2>
              <p className="text-2xl font-serif text-gray-700 mb-2">
                Estudio Carrizo & Carrizo
              </p>
              <div className="w-24 h-1 mx-auto mt-6" style={{ backgroundColor: '#ffa6bf' }}></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center pr-0">
              {/* Left Column - Main Content */}
              <div className="space-y-6 pr-12">
                <p className="text-lg text-gray-700 leading-relaxed font-light">
                  Somos un <span className="font-semibold" style={{ color: '#4e4485' }}>estudio contable impositivo</span> con 
                  más de 20 años de trayectoria en el mercado, especializado en brindar soluciones integrales 
                  para empresas y particulares.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed font-light">
                  Nuestro equipo está conformado por profesionales altamente capacitados, comprometidos con 
                  la excelencia y la actualización permanente en materia contable, impositiva y laboral.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed font-light">
                  Nos distinguimos por ofrecer un <span className="font-semibold" style={{ color: '#4e4485' }}>servicio personalizado</span>, 
                  adaptado a las necesidades particulares de cada cliente, garantizando el cumplimiento de todas 
                  las obligaciones legales y fiscales.
                </p>

                <div className="pt-4">
                  <Link 
                    href="/nosotros"
                    className="inline-block bg-white px-8 py-3 rounded-lg font-serif font-medium transition-all hover:bg-gray-50 border-2"
                    style={{ borderColor: '#ffa6bf', color: '#4e4485' }}
                  >
                    Conocer más
                  </Link>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative h-[600px] rounded-l-[200px] overflow-hidden shadow-xl ml-0 mr-0 w-full lg:w-[calc(100%+2rem)]">
                <Image 
                  src="/sobrenosotrosuno.png" 
                  alt="Sobre Nosotros - Estudio Carrizo & Carrizo" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                Preguntas Frecuentes
              </h2>
              <p className="text-lg text-gray-600 font-light">
                Respondemos las dudas más comunes sobre nuestros servicios
              </p>
            </div>

            <div className="space-y-4">
              <details className="group bg-white rounded-xl p-6 shadow-sm border-l-4" style={{ borderColor: '#4e4485' }}>
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-serif font-semibold text-gray-900 text-lg">
                    ¿Ofrecen una primera consulta gratuita?
                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="#4e4485" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 font-light leading-relaxed">
                  Sí, ofrecemos una primera consulta sin cargo para conocer tus necesidades y elaborar 
                  una propuesta personalizada adaptada a tu situación empresarial o personal.
                </p>
              </details>

              <details className="group bg-white rounded-xl p-6 shadow-sm border-l-4" style={{ borderColor: '#ffa6bf' }}>
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-serif font-semibold text-gray-900 text-lg">
                    ¿Qué tipo de empresas atienden?
                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="#ffa6bf" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 font-light leading-relaxed">
                  Trabajamos con monotributistas, responsables inscriptos, personas físicas y todo tipo de sociedades. 
                  Nos adaptamos a las necesidades de cada cliente, desde emprendedores hasta empresas consolidadas.
                </p>
              </details>

              <details className="group bg-white rounded-xl p-6 shadow-sm border-l-4" style={{ borderColor: '#4e4485' }}>
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-serif font-semibold text-gray-900 text-lg">
                    ¿Cuáles son los horarios de atención?
                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="#4e4485" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 font-light leading-relaxed">
                  Nuestro horario de atención es de lunes a viernes de 9:00 a 18:00 hs. 
                  También podés contactarnos por email o WhatsApp y te responderemos a la brevedad.
                </p>
              </details>

              <details className="group bg-white rounded-xl p-6 shadow-sm border-l-4" style={{ borderColor: '#ffa6bf' }}>
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-serif font-semibold text-gray-900 text-lg">
                    ¿Realizan liquidación de sueldos?
                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="#ffa6bf" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 font-light leading-relaxed">
                  Sí, ofrecemos servicios laborales completos incluyendo liquidación de sueldos, altas y bajas de empleados, 
                  obras sociales, ART y cumplimiento de todas las normativas laborales vigentes.
                </p>
              </details>

              <details className="group bg-white rounded-xl p-6 shadow-sm border-l-4" style={{ borderColor: '#4e4485' }}>
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-serif font-semibold text-gray-900 text-lg">
                    ¿Cómo puedo empezar a trabajar con ustedes?
                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="#4e4485" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 font-light leading-relaxed">
                  Es muy simple: contactanos por teléfono, email o a través del formulario de contacto. 
                  Coordinamos una primera reunión para conocer tus necesidades y te presentamos una propuesta personalizada.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              ¿Listo para optimizar tu gestión contable?
            </h2>
            <p className="text-lg text-gray-600 mb-8 font-light">
              Contactanos hoy y descubrí cómo podemos ayudarte.
            </p>
            <Link 
              href="/contacto"
              className="inline-block text-white px-8 py-3 rounded-lg transition-opacity font-serif font-medium hover:opacity-90"
              style={{ backgroundColor: '#4e4485' }}
            >
              Contactar
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
