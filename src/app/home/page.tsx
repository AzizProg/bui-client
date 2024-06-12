'use client';

import NavBar from '@/components/navbar';

import VideoSection from '@/components/video-section';
import { Activity, ArrowBigLeft, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import ServiceSection from './components/service-section';
import BuiPaySection from './components/bui-pay';
import BuiSendSection from './components/bui-send';

const Home = () => {
  const router = useRouter();
  function goToLoginPage(): void {
    router.push('/login');
  }
  return (
    <div>
      <NavBar onClick={goToLoginPage} />
      <VideoSection />
      <div>
      <ServiceSection />
      <BuiSendSection
        title="Bui Send - adapted to business realities"
        description="Perform single or bulk payments to mobile money accounts instantly."
        imageSrc="/bui_send.png"
        icon={Activity}
        bgColor="m-2"
        subtitle={''}
      />
      <br />
      <BuiPaySection
        title="Bui Pay - Collect mobile money payments in complete security"
        description="Collect mobile money payments from your customers from your website or mobile application."
        imageSrc="/bui_pay.png"
        icon={ArrowBigLeft}
        bgColor="bg-[#f1f4f8] p-2"
        subtitle={''}
      />
      <br />
      <br />
      <br />
      <section className="p-8">
        <div className="w-full mx-auto flex flex-col items-center text-center">
          <Activity
            size={36}
            color="#284bc1"
          />
          <br />
          <h2 className="font-extrabold text-3xl">
            Unicorn of payments and money transfers in Africa
          </h2>
          <br />
          <p className="text-gray-600 font-light text-lg">
            A vision of payments and transfers in the center of technology to
            satisfy businesses.
          </p>
        </div>
        <br />
        <br />
        <hr className="h-1/2 w-full bg-gray-400" />
        <br />
        <br />
        <div className='w-full mx-auto flex flex-col  items-center justify-center'>
        <h4 className="font-extrabold text-xl text-[#284bc1]  ">
          Discover our payment and transfer API
        </h4>
        <br />
        <h2 className="font-extrabold text-4xl">
          Designed for developers and easy to use
        </h2>
        <br />
        <p className="text-gray-600 font-light text-lg">
          We design optimized and easy-to-use solutions offering a unique and
          simple integration experience.
        </p>
        </div>
        
      </section>
      <br />
      <br />
      </div>
      
      
    </div>
  );
};

export default Home;
