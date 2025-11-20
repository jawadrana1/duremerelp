import Image from 'next/image';
import thirdpageimg from "../../public/thirdpageimg.png";

const pagethird = () => {
  return (
    <section>
        <h1 className="text-9xl p-12 ">Start Your Digital Transform <span className='text-teal-600'>78%</span></h1>
      <div className='w-full h-screen '> <Image src={thirdpageimg} alt="Description" className='w-full h-fit'   />
      </div> 
    </section>
  )
}

export default pagethird