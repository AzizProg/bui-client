/* eslint-disable react/no-unescaped-entities */


import { ArrowUpRight, CreditCard, DollarSign, Check } from 'lucide-react';
import Image from "next/image"
import ServiceCard from './service-card';


const ServiceSection = () => {
  return (
    <section className="my-20 p-5 w-full md:grid md:grid-cols-2 md:gap-8  md:px-20">
      <Image src="/bg_globe.jpg" className="hidden" alt="Bui logo" fill />
     <div>
     <p className="font-extralight text-6xl text-slate-700">
        <span className="font-extrabold">3</span> Universe
      </p>
      <p className="text-2xl font-bold text-slate-700">available</p>
      <hr className="my-2 w-20" />
      <div className="grid gap-4 grid-cols-2 *:items-center *:border-gray-500">
       
       <ServiceCard icon={ArrowUpRight} title="Mobile money" />
       <ServiceCard icon={CreditCard} title="Wallet" />
       <ServiceCard icon={DollarSign} title="Bank" />
     </div>
     </div>
     

      <div className="my-4 ">
        <Check size={36} color="#284bc1" />
        <h2 className="font-extrabold text-5xl">
        Operational and active support service
        </h2>
        <br />
        <p className="text-gray-600 font-light text-lg">
        We have a support team available 12 hours a day, 7 days a week with a 99.98% availability rate on our services
        </p>
      </div>
    </section>
  );
};

export default ServiceSection;
