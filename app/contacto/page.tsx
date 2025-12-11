'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="grow">
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-serif font-bold text-gray-900 mb-4">
                Contacto
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                Estamos aquí para ayudarte. Primera consulta gratuita
              </p>
              <div className="w-24 h-1 mx-auto mt-6" style={{ backgroundColor: '#ff85ab' }}></div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Formulario */}
              <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                  Envianos tu consulta
                </h2>
                <p className="text-gray-600 mb-8 font-light">
                  Completá el formulario y nos pondremos en contacto a la brevedad
                </p>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-serif font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      className="w-full px-4 py-3 border-2 rounded-lg outline-none transition-all font-light"
                      style={{ borderColor: '#e5e7eb' }}
                      onFocus={(e) => e.target.style.borderColor = '#4e4485'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-serif font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border-2 rounded-lg outline-none transition-all font-light"
                        style={{ 
                          borderColor: '#e5e7eb'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#4e4485'}
                        onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-serif font-medium text-gray-700 mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        className="w-full px-4 py-3 border-2 rounded-lg outline-none transition-all font-light"
                        style={{ 
                          borderColor: '#e5e7eb'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#4e4485'}
                        onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                        placeholder="+54 11 XXXX-XXXX"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="empresa" className="block text-sm font-serif font-medium text-gray-700 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      className="w-full px-4 py-3 border-2 rounded-lg outline-none transition-all font-light"
                      style={{ 
                        borderColor: '#e5e7eb'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#4e4485'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                      placeholder="Nombre de tu empresa (opcional)"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-serif font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={5}
                      className="w-full px-4 py-3 border-2 rounded-lg outline-none transition-all resize-none font-light"
                      style={{ 
                        borderColor: '#e5e7eb'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#4e4485'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                      placeholder="Contanos cómo podemos ayudarte..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full text-white px-8 py-4 rounded-lg transition-opacity font-serif font-medium text-lg hover:opacity-90"
                    style={{ backgroundColor: '#4e4485' }}
                  >
                    Enviar Consulta
                  </button>
                </form>
              </div>
              
              {/* Información de contacto */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                    Información de contacto
                  </h2>
                  <p className="text-gray-600 font-light mb-8">
                    Encontranos en nuestra oficina o contactanos por los siguientes medios
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl border-l-4 shadow-sm" style={{ borderColor: '#4e4485' }}>
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
                          C1043 CABA, Argentina
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border-l-4 shadow-sm" style={{ borderColor: '#ff85ab' }}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255, 166, 191, 0.1)' }}>
                        <svg className="w-6 h-6" fill="none" stroke="#ff85ab" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-serif font-semibold text-gray-900 mb-1">Teléfono</h3>
                        <p className="text-gray-600 font-light">
                          +54 11 XXXX-XXXX
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border-l-4 shadow-sm" style={{ borderColor: '#4e4485' }}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(78, 68, 133, 0.1)' }}>
                        <svg className="w-6 h-6" fill="none" stroke="#4e4485" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-serif font-semibold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600 font-light">
                          info@estudiocontable.com
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border-l-4 shadow-sm" style={{ borderColor: '#ff85ab' }}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255, 166, 191, 0.1)' }}>
                        <svg className="w-6 h-6" fill="none" stroke="#ff85ab" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-serif font-semibold text-gray-900 mb-1">Horario de atención</h3>
                        <p className="text-gray-600 font-light">
                          Lunes a Viernes: 9:00 - 18:00<br />
                          Sábados y Domingos: Cerrado
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 rounded-xl relative overflow-hidden mt-8" style={{ backgroundColor: '#4e4485' }}>
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 bg-white -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <h3 className="font-serif font-semibold text-white mb-3 text-xl">Consulta inicial gratuita</h3>
                    <p className="text-white/90 font-light leading-relaxed">
                      Ofrecemos una primera consulta sin cargo para conocer tus necesidades 
                      y elaborar una propuesta personalizada adaptada a tu situación.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
