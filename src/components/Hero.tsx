import heroback1 from "../../public/herobackupd.png";
import Navbar from "@/src/components/Navbar";
import Image from "next/image";

const HeroSection = () => {
  return (
    // 1. Full-width container with a minimum height
    <section className="relative w-full h-screen  flex items-center justify-center py-80  bg-black  overflow-visible">
        <Navbar/>
        <div 
          className="absolute w-full rotate-[-15deg] inset-0 scale-120 z-0 bg-[500%] top-[-100] bg-no-repeat opacity-35"
          // Tailwind CSS arbitrary value for background image URL
          style={{ backgroundImage: `url(${heroback1.src})`,backgroundSize: 'cover',backgroundPosition: 'right center' }} 
        >
        </div>
         
        {/* 4. Content Layer (Your main text and buttons) */}
        <div className="relative z-10 text-center  mt-150 mb-50 max-w-4xl px-8">
            <div >
            <p className="border mx-auto flex gap-3 mt-5 pl-7 rounded-4xl p-2 w-lg"><button className="px-8 py-3 z-5 text-sm ml-5 mt-2 mb-2 font-semibold text-white bg-teal-800 rounded-3xl hover:bg-app-seagreen-dark transition-colors shadow-xl">
                AI & Software
            </button><span className="ml-3 text-center mt-5 ">Software Solutions for GCC</span><span><Image className="mt-6" src="/arrowicon.png" alt="Duremere.Ai Logo" width={20} height={10} /></span>  </p>
            <h1 className="text-2xl md:text-6xl font-extrabold text-white mb-4 mt-7">
               <span className="text-gray-400 leading-5"> Custom Software & AI </span> Solutions for GCC Digital Era
            </h1>
            </div>
            <p className="text-xl z-5 text-gray-100  pt-10 pb-10 mb-8">
                We Design future ready platforms,AI powered tool and scalable backend systems that help enterprises,startups,and innovators across the GCC thrive in the digital Era.
            </p>
            
            {/* Using your custom Seagreen button */}
            <div className="flex justify-center">
            <button className="px-8 pb-4 py-3 z-5  text-sm flex gap-1 justify-center align-center font-semibold text-white bg-teal-800 rounded-4xl hover:bg-app-seagreen-dark transition-colors shadow-xl">
              <Image src="/consultationicon.png" alt="Duremere.Ai Logo" width={20} height={20} />  Get a Free Consultation
            </button>
            </div>
            <div className="mb-5 pb-5">
              <h4 className=" mt-20 pt-3 pb-3">Trusted by 4000+ companies</h4>
              <div className="flex w-4xl justify-center list-none gap-6">
              <li className="flex justify-center "><span className="pr-2"><Image className="" src="/Bolticon.png" alt="Duremere.Ai Logo" width={20} height={10} /></span>Boltshift</li>
              <li className="flex justify-center"><span className="pr-2"><Image className="" src="/lighticon.png" alt="Duremere.Ai Logo" width={20} height={10} /></span>LightBox</li>
              <li className="flex justify-center"><span className="pr-2"><Image className="" src="/duremeicon.png" alt="Duremere.Ai Logo" width={20} height={10} /></span>FeatherDev</li>
              <li className="flex justify-center"><span className="pr-2"><Image className="" src="/globalicon.png" alt="Duremere.Ai Logo" width={20} height={10} /></span>GlobalBank</li></div>
            </div>
        </div>
    
    </section>
  );
};

export default HeroSection;