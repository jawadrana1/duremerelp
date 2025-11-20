import Image from 'next/image';


const FourthPage = () => {
  return (
    <section className="w-full  justify-center bg-black">
        <div className="mt-40 mb-20 ml-10 w-4xl">
           <h2 className="text-5xl md:text-5xl w-4xl font-bold leading-tight mb-4">
             <span className="text-gray-400">Lets</span>{' '}
             <span className="text-white">Turn Your Idea Into Reality</span>{' '}
             <span className="text-gray-400">With Custom</span>{' '}
             <span className="text-white">AI Solutions and Enterprise Grade Software</span>{' '}
             <span className="text-gray-400">Designed For The Saudi & Dubai Markets</span>
           </h2>
         </div>
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