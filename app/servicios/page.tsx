import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { Service } from '@/types';

const services: Service[] = [
  {
    id: '1',
    title: 'Contabilidad General',
    description: 'Llevamos la contabilidad completa de tu empresa, desde el registro de operaciones hasta la elaboración de estados contables. Garantizamos el cumplimiento de todas las normativas vigentes y te brindamos información financiera clara y precisa para la toma de decisiones.',
  },
  {
    id: '2',
    title: 'Auditoría',
    description: 'Realizamos auditorías internas y externas con los más altos estándares profesionales. Analizamos tus procesos y controles internos para identificar oportunidades de mejora y garantizar la transparencia de tus operaciones financieras.',
  },
  {
    id: '3',
    title: 'Impuestos',
    description: 'Asesoramiento integral en materia impositiva. Te ayudamos con la planificación tributaria, liquidación de impuestos (IVA, Ganancias, Bienes Personales, etc.), presentación de declaraciones juradas y representación ante organismos fiscales.',
  },
  {
    id: '4',
    title: 'Asesoramiento Empresarial',
    description: 'Consultoría estratégica para el crecimiento de tu negocio. Análisis financiero, presupuestos, proyecciones, evaluación de proyectos de inversión y apoyo en la toma de decisiones empresariales importantes.',
  },
  {
    id: '5',
    title: 'Liquidación de Sueldos',
    description: 'Gestión completa de nóminas y liquidaciones de haberes. Nos ocupamos del cálculo de salarios, cargas sociales, aguinaldos, vacaciones, presentación de formularios 931 y toda la documentación laboral necesaria.',
  },
  {
    id: '6',
    title: 'Constitución de Sociedades',
    description: 'Te acompañamos en todo el proceso de creación de tu empresa. Asesoramiento en la elección del tipo societario más conveniente, redacción de estatutos, inscripción registral y todos los trámites necesarios para iniciar tu actividad.',
  },
  {
    id: '7',
    title: 'Reorganizaciones Societarias',
    description: 'Asesoramiento en fusiones, escisiones, transformaciones y otros procesos de reorganización empresarial. Análisis de viabilidad, aspectos legales, contables e impositivos.',
  },
  {
    id: '8',
    title: 'Pericias Contables',
    description: 'Servicios periciales para procesos judiciales y arbitrajes. Elaboración de informes técnicos, valuaciones de empresas y análisis de documentación contable.',
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
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Nuestros Servicios
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              ¿No encontrás lo que buscás?
            </h2>
            <p className="text-gray-600 mb-8">
              Contactanos para una consulta personalizada.
            </p>
            <a 
              href="/contacto"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
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
