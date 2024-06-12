import { LucideIcon } from 'lucide-react';
import { FC } from 'react';


interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ icon: Icon, title }) => {
  return (
    <div className="rounded-md p-2 border flex">
      <div className="w-1/4">
        <Icon size={36} color="#284485" />
      </div>
      <div className="w-full text-center">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
