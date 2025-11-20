 import Link from 'next/link';

  import Image from 'next/image';
  import heroback1 from "../../public/herobackupd.png";



export const LastPage = () => {
  return (
    <section className="  w-full border-t pt-30   bg-white overflow-hidden ">
        <div className="flex w-full  justify-between ml-10 mr-10 text-sm text-zinc-600 dark:text-zinc-400">
             <div><p className="text-6xl mr-5 pl-5 font-sans max-w-2xl font-bold leading-20 text-black">What Is Your Biggest Challenge Right Now?</p>
             <p className="mt-4 text-xl pl-5">Lets talk and findout why the person who referred us rates us so highly.</p>
             </div>
            <div className="mr-10  pr-30 flex flex-col gap-4">
               <div className=" ">
                <p className="text-xl text-black mt-5">Call Us</p>
                <a className="text-lg text-black font-bold" href="tel:+1234567890">+1234567890</a>
              </div>
              <div>
               <p className="text-xl text-black mt-3">Email</p>
              <a className="text-lg text-black font-bold" href="mailto:Info@Duremere.Ai">Info@Duremere.Ai</a>
              </div>
            </div>
          </div>
          <div className='bg-white pl-10'>
             <h1 className=" underline w-full bg-white text-[200px]  text-teal-800">Lets Talk!</h1>
           </div>

           <div className='relative min-h-[300] w-full bg-white z-10 '>
            <div className='bg-white pl-10'>
           <Link href="/" className="flex items-center space-x-2 text-xl z-20 font-bold text-white hover:text-indigo-600 transition-colors">
             <Image src="/duremeicon.png" alt="Duremere.Ai Logo" width={40} height={40} />
             <span className='text-black' >Duremere.<span className='text-teal-600'>Ai</span></span>
           </Link>
           </div>
           <div className='mt-3 text-black pl-10 mb-15'>
             <p>Empowering GCC enterprises with secure,future-ready <br />
                  software and Ai solutions</p>
           </div>
           <p className='text-black mt-10 pt-10 ml-10'><span className='font-bold'>2025 Duremere AI Solutions. </span><span className='text-black'> All Rights Reserved. </span><span className='text-teal-800'>| Privacy Policy | Terms of Service</span></p>
            <Image src={heroback1} alt="Description" className=' rotate-[-2190deg] scale-100  absolute z-10 right-[-100] bottom-[-140]' width={1100} height={400} />
           </div>
          
    </section>
  )
}
