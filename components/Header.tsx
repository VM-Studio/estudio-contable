import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-700" style={{ backgroundColor: '#4e4485' }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src="/navbaruno.png" 
                alt="Estudio Carrizo" 
                width={200}
                height={50}
                className="h-14 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link 
                href="/" 
                className="text-white/90 hover:text-white text-sm font-serif font-medium transition-colors"
              >
                Inicio
              </Link>
              <Link 
                href="/servicios" 
                className="text-white/90 hover:text-white text-sm font-serif font-medium transition-colors"
              >
                Servicios
              </Link>
              <Link 
                href="/nosotros" 
                className="text-white/90 hover:text-white text-sm font-serif font-medium transition-colors"
              >
                Nosotros
              </Link>
              <Link 
                href="/contacto" 
                className="bg-white text-gray-900 hover:bg-gray-100 px-5 py-2 rounded-lg text-sm font-serif font-medium transition-colors"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
