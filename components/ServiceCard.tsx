import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group bg-white p-6 rounded-lg border-2 border-gray-200 hover:shadow-lg transition-all" style={{ borderColor: '#ffa6bf' }}>
      <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
        {service.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed font-light">
        {service.description}
      </p>
    </div>
  );
}
