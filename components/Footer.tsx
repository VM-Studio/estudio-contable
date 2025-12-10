import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1: Información */}
          <div className="md:col-span-2">
            <h3 className="text-white text-lg font-semibold mb-3">Estudio Carrizo</h3>
            <p className="text-sm mb-4 leading-relaxed">
              Servicios profesionales de contabilidad, auditoría y asesoramiento empresarial 
              con más de 20 años de experiencia.
            </p>
          </div>
          
          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-sm hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-sm hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>info@estudiocarrizo.com.ar</li>
              <li>+54 11 XXXX-XXXX</li>
              <li>Buenos Aires, Argentina</li>
              <li>Lun-Vie: 9:00-18:00</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {currentYear} Estudio Carrizo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
