import Image from 'next/image';
import backlines from "../../public/backlines.png";

const FourthPage = () => {
  return (
    <section className="w-full relative justify-center bg-black">
        <div className="mt-40 flex relative mb-20 ml-10 w-full">
           <h2 className="text-4xl md:text-4xl w-4xl font-bold leading-tight mb-4">
             <span className="text-gray-400">Lets</span>{' '}
             <span className="text-white">Turn Your Idea Into Reality</span>{' '}
             <span className="text-gray-400">With Custom</span>{' '}
             <span className="text-white">AI Solutions and Enterprise Grade Software</span>{' '}
             <span className="text-gray-400">Designed For The Saudi & Dubai Markets</span>
           </h2>
           
            {/* <Image className='absolute top-[-80] right-10' src="/backlines.png" alt="backlines Logo" width={800} height={600} /> */}
         </div>
         <div 
          className="absolute w-full  inset-0 scale-100 z-20 bg-[500%] top-[130] right-[-90] bg-no-repeat opacity-80"
          // Tailwind CSS arbitrary value for background image URL
          style={{ backgroundImage: `url(${backlines.src})`,backgroundSize: 'cover',backgroundPosition: 'right ' }} 
        ></div>
         <div className="mb-20 ml-10 w-4xl" >
            <h2 className="text-3xl ml-5 mb-10">Ready To Build Smarter?</h2>
            
            <button className="px-8 ml-5 flex gap-2 py-3 z-5 text-sm font-semibold text-white bg-teal-800 rounded-4xl hover:bg-app-seagreen-dark transition-colors shadow-xl">
             <Image src="/consultationicon.png" alt="Duremere.Ai Logo" width={20} height={20} />   Get a Free Consultation
            </button>
         </div>
    </section>
  )
}

export default FourthPage