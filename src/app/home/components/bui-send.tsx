/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';
import Image from 'next/image';
import { Activity, LucideIcon, MoveRight } from 'lucide-react';
import BuiInfoProps from '../../../lib/bui-info-props';

const BuiSendSection: FC<BuiInfoProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  icon: Icon,
  bgColor = 'white',
}) => {
  return (
    <section className={`px-5 ${bgColor} md:px-20 md:grid md:grid-cols-2`}>
      <div >

      <Activity
        size={25}
        color="#284bc1"
      />
      <br />
      <h2 className="font-extrabold text-5xl">{title}</h2>
      <br />
      <p className="text-gray-600 font-light text-lg">{description}</p>
      <br />
      <div className="flex w-2/3 items-center justify-start">
        <p className="text-appcolors-third-olor  mr-4">Plus d'infos</p>
        <MoveRight
          size={25}
          color="#284bc1"
        />
      </div>
      <br />
        
      <br />
      </div>
      
      
      <div className="p-4 w-full min-h-48 sm:h-80 relative">
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          style={{ objectFit: 'contain' }}
        />
      </div>
   
   
    </section>
  );
};

export default BuiSendSection;
