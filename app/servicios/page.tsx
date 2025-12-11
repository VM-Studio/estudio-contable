import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { Service } from '@/types';
import Image from 'next/image';

const services: Service[] = [
  {
    id: '1',
    title: 'Monotributo',
    description: 'Asesoramiento integral para monotributistas. Inscripción, recategorización, facturación electrónica y cumplimiento de todas las obligaciones del régimen simplificado.',
  },
  {
    id: '2',
    title: 'Responsable Inscripto',
    description: 'Gestión completa para responsables inscriptos en IVA. Liquidación de impuestos, presentación de declaraciones juradas y optimización de la carga tributaria.',
  },
  {
    id: '3',
    title: 'Personas Físicas y Sociedades',
    description: 'Servicios contables e impositivos para personas físicas y sociedades comerciales. Desde la constitución hasta la gestión diaria de obligaciones fiscales.',
  },
  {
    id: '4',
    title: 'Liquidación de Impuestos',
    description: 'Liquidación profesional de todos los impuestos nacionales, provinciales y municipales. IVA, Ganancias, Bienes Personales, Ingresos Brutos y más.',
  },
  {
    id: '5',
    title: 'Servicios Laborales',
    description: 'Gestión completa de nóminas y liquidaciones de haberes. Altas, bajas, cargas sociales, aguinaldos, vacaciones y toda la documentación laboral necesaria.',
  },
  {
    id: '6',
    title: 'Seguros',
    description: 'Asesoramiento en seguros de ART, vida obligatorio, y otros seguros necesarios para el cumplimiento de obligaciones laborales y comerciales.',
  },
  {
    id: '7',
    title: 'Administración',
    description: 'Servicios de administración de empresas. Gestión de cuentas, conciliaciones bancarias, control de pagos y cobros, y organización administrativa.',
  },
  {
    id: '8',
    title: 'Recursos Humanos',
    description: 'Asesoramiento en gestión de recursos humanos. Contratos de trabajo, convenios colectivos, conflictos laborales y optimización de la gestión del personal.',
  },
  {
    id: '9',
    title: 'Jurídico Tributario',
    description: 'Asesoramiento legal en materia tributaria. Defensa ante fiscalizaciones, recursos de apelación, planes de pago y representación ante organismos fiscales.',
  },
  {
    id: '10',
    title: 'Otros',
    description: 'Servicios adicionales personalizados según las necesidades específicas de cada cliente. Consultoría, auditoría, pericias contables y más.',
  },
];

export default function ServiciosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="grow">
        {/* Hero Section */}
        <section className="bg-gray-50 py-12 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <h1 className="text-4xl font-serif font-bold text-gray-900">
                  Nuestros Servicios
                </h1>
                <Image 
                  src="/icono-doc.gif" 
                  alt="Servicios" 
                  width={70}
                  height={70}
                  className="object-contain"
                  unoptimized
                />
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto font-light">
                Ofrecemos una completa gama de servicios contables y de asesoramiento empresarial
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              ¿No encontrás lo que buscás?
            </h2>
            <p className="text-gray-600 mb-8 font-light">
              Contactanos para una consulta personalizada.
            </p>
            <a 
              href="/contacto"
              className="inline-block text-white px-8 py-3 rounded-lg transition-opacity hover:opacity-90 font-serif font-medium"
              style={{ backgroundColor: '#4e4485' }}
            >
              Consultar Ahora
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
