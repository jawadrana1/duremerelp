import Image from 'next/image';
import serviceimg from "../../public/serviceimg.png";
const Service = () => {
  return (
    <section className=" relative w-full  mt-60 overflow-hidden ">
        <div className="mb-20 ml-10 mt-10">
           <h2 className="text-5xl md:text-5xl w-4xl font-bold leading-tight mb-4">
             <span className="text-gray-400">We Design</span>{' '}
             <span className="text-white">Enterprise-Grade Software</span>{' '}
             <span className="text-gray-400">And</span>{' '}
             <span className="text-white">AI Platforms</span>{' '}
             <span className="text-gray-400">That Enable Efficiency, Sustainability, And Long-Term Success</span>
           </h2>
         </div>
<div className="flex wrap w-5xl grid grid-cols-3  gap-6 ml-10">
            

<div className="bg-neutral-primary-soft block max-w-sm  p-6  w-6xl rounded-base shadow-xs">
    <h5 className="mb-10 text-gray-400">01</h5>
    <h5 className="mb-3 pt-15 text-2xl font-semibold tracking-tight text-heading leading-8">Custom CRM/ERP Development</h5>
    <p className="text-body pt-5 text-gray-400 mb-6">Custom-built web,mobile,and enterprise platforms designed for performance and growth.</p>
    
</div>
<div className="bg-neutral-primary-soft block max-w-sm p-6 ml-10  w-4xl rounded-base shadow-xs">
    <h5 className="mb-10 text-gray-400">02</h5>
    <h5 className="mb-3 pt-15 text-2xl font-semibold tracking-tight text-heading leading-8">Artificial Intelligence</h5>
    <p className="text-body pt-12 text-gray-400 mb-6">AI-powered solutions that enhance decision-making, automate processes, and drive business growth.</p>
    
</div>
<div className="bg-neutral-primary-soft block max-w-sm p-6 ml-10   w-4xl rounded-base shadow-xs">
    <h5 className="mb-10 text-gray-400">03</h5>
    <h5 className="mb-3 pt-15 text-2xl font-semibold tracking-tight text-heading leading-8">Backend Infrastructure</h5>
    <p className="text-body pt-12 text-gray-400 mb-6">Robust,scalable and secure infrastructure to support enterprise systems and digital platforms.</p>
    
</div>
<div className="bg-neutral-primary-soft  block max-w-sm p-6  w-4xl rounded-base shadow-xs">
    <h5 className="mb-10 text-gray-400">04</h5>
    <h5 className="mb-3 pt-15 text-2xl font-semibold tracking-tight text-heading leading-8">Systems Integration</h5>
    <p className="text-body pt-6 text-gray-400 mb-6">Seamless integration of legacy systems with modern platforms for efficiency and performance.</p>
    
</div>
<div className="bg-neutral-primary-soft  block max-w-sm p-6  w-4xl rounded-base shadow-xs">
    <button className="px-8 py-3 mt-50 ml-5 z-5 flex gap-2 text-sm font-semibold text-white bg-teal-800 rounded-4xl hover:bg-app-seagreen-dark transition-colors shadow-xl">
          <Image src="/consultationicon.png" alt="Duremere.Ai Logo" width={20} height={20} />      Get a Free Consultation 
     </button>    
</div>

         </div>
         <Image src={serviceimg} alt="Description" className='rotate-30 scale-145  absolute z-0 right-[-320] bottom-[-200]' width={700} height={400} />
                  
    </section>
  )
}

export default Service
