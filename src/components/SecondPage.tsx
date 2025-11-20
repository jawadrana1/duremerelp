import Image from "next/image";
import card1img from "../../public/card1img.png";
import serviceimg from "../../public/serviceimg.png"
export const SecondPage = () => {
  return (
    <section className='py-16 mx-auto px-4 sm:px-6 lg:px-8 w-full bg-white  '>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center  ml-30 mr-30 mb-12'>
             <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your Digital Transformation Partner in SaudiaArabia and UAE.</h2>
             <p className="mt-4 text-base text-gray-600">
            We deliver AI solutions in Saudi Arabia and custom software in Dubai, driving secure and scalable digital transformation across the GCC.
        </p>
        </div>
     <div className="grid-container grid grid-cols-3  gap-3 max-w-7xl mx-auto px-4 ml-30 mr-30">
        <div className="feature-card col-start-1 col-end-2 bg-black rounded-3xl p-8 relative overflow-hidden h-full text-white ">
         <Image src={card1img} alt="Description" className='rotate-[-30deg] absolute z-0 left-[-90] top-[-40]' width={200} height={100} />
            <h3 className="text-white text-xl font-bold mb-2 z-10 relative mt-20">
                 Local Expertise, Global Standards
            </h3>
            <p className="text-gray-400 text-sm z-10 relative">
                 Deep knowledge of GCC business needs.
            </p>
         </div>

    <div className="feature-card bg-black col-start-2 col-end-4 rounded-3xl w-2xl p-15 relative overflow-hidden h-full text-white">
           <Image src={card1img} alt="Description" className='rotate-[-30deg] absolute z-0 right-[-90] top-[-40]' width={300} height={200} />
            <h3 className="text-white text-xl font-bold mb-2 z-10 relative">
                 AI Powered Growth 
            </h3>
            <p className="text-gray-400 text-sm z-10 relative">
                 Deliever Real-Time insight,enabling smarter desicions and measurable business outcome 
            </p>
         </div>
         <div className="feature-card bg-black col-start-1 col-end-3 rounded-3xl  p-20 w-2xl relative overflow-hidden h-full text-white">
           <Image src={serviceimg} alt="Description" className='rotate-[-30deg] absolute z-0 left-[-90] top-[-40]' width={250} height={200} />

            <h3 className="text-white text-xl font-bold ml-5 mb-2 z-10 relative">
                 Scalable and Secure
            </h3>
            <p className="text-gray-400 ml-5 text-sm z-10 relative">
                 Design infrastructure that grows with your bussiness while ensuring enterprise grade security and compliance
            </p>
         </div>
         <div className="feature-card col-start-3 col-end-4 bg-black rounded-3xl w-xsm p-15 ml-1  relative overflow-hidden h-full text-white">
            <h3 className="text-white text-xl font-bold mb-2 z-10 relative">
                 Proven Track Record
            </h3>
            <p className="text-gray-400 text-sm z-10 relative">
                 Trusted by enterprises and Fast growing startups
            </p>
         </div>
        </div>
    </section>
  )
}
