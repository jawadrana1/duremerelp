import Image from 'next/image';
import thirdpageimg from "../../public/thirdpageimg.png";

const pagethird = () => {
  return (
    <section>
        <h1 className="text-8xl p-12 ">Start Your Digital Transform </h1>
        <h1 className='text-teal-600 text-9xl p-6 ml-6'>78%</h1>
      <div className='w-full h-screen '> <Image src={thirdpageimg} alt="Description" className='w-full h-fit'   />
      </div> 
    </section>
  )
}

export default pagethird