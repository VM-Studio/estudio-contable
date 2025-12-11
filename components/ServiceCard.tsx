import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border-l-4 hover:-translate-y-2" style={{ borderColor: '#ff85ab' }}>
      {/* Image placeholder area */}
      <div className="w-full h-32 rounded-xl mb-4 flex items-center justify-center" style={{ backgroundColor: '#f5f3f0' }}>
        <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#4e4485' }}>
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
      </div>
      
      <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-opacity-90 transition-colors" style={{ color: '#4e4485' }}>
        {service.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed font-light">
        {service.description}
      </p>
    </div>
  );
}
