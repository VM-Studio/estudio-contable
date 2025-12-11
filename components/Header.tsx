'use client';

import Link from 'next/link';
import Image from 'next/image';
import Topbar from './Topbar';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Topbar />
      <header className="sticky top-0 z-50 border-b border-gray-700" style={{ backgroundColor: '#4e4485' }}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="shrink-0">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/logo.png" 
                  alt="Estudio Carrizo" 
                  width={200}
                  height={50}
                  className="h-16 w-auto"
                />
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8 ">
                <Link 
                  href="/" 
                  className="text-white/90 hover:text-white text-base font-serif font-medium transition-colors"
                >
                  Inicio
                </Link>
                <Link 
                  href="/servicios" 
                  className="text-white/90 hover:text-white text-base font-serif font-medium transition-colors"
                >
                  Servicios
                </Link>
                <Link 
                  href="/nosotros" 
                  className="text-white/90 hover:text-white text-base font-serif font-medium transition-colors"
                >
                  Nuestro Estudio
                </Link>
                <Link 
                  href="/contacto" 
                  className="text-white px-5 py-2 rounded-lg text-base font-serif font-medium transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#ff85ab' }}
                >
                  Contacto
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-4">
                <Link 
                  href="/" 
                  className="text-white/90 hover:text-white text-sm font-serif font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Inicio
                </Link>
                <Link 
                  href="/servicios" 
                  className="text-white/90 hover:text-white text-sm font-serif font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Servicios
                </Link>
                <Link 
                  href="/nosotros" 
                  className="text-white/90 hover:text-white text-sm font-serif font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Nuestro Estudio
                </Link>
                <Link 
                  href="/contacto" 
                  className="text-white px-5 py-2 rounded-lg text-sm font-serif font-medium transition-opacity hover:opacity-90 text-center"
                  style={{ backgroundColor: '#ff85ab' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contacto
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
