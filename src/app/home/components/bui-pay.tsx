/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';
import Image from 'next/image';
import { Activity, LucideIcon, MoveRight } from 'lucide-react';

import BuiInfoProps from '../../../lib/bui-info-props';

const BuiPaySection: FC<BuiInfoProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  icon: Icon,
  bgColor = 'white',
}) => {
  return (
    <section className={`p-2 ${bgColor} md:grid md:grid-cols-2 md:gap-2`}>
   
      <div className="p-4 w-full min-h-48 sm:h-80 relative">
        <Image
          src={imageSrc}
          alt={title}
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>

      <div>
        <Activity
          size={25}
          color="#284bc1"
        />
        <br />
        <h2 className="font-extrabold text-5xl">{title}</h2>
        <br />

        <br />

        <p className="text-gray-600 font-light text-lg">{description}</p>
        <br />
        <div className="flex w-2/3 items-center">
          <p className="text-appcolors-third-olor  mx-4">Plus d'infos</p>
          <MoveRight
            size={25}
            color="#284bc1"
          />
        </div>
        <br />
      </div>
    </section>
  );
};

export default BuiPaySection;
