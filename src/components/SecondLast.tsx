
import serviceimg from "../../public/serviceimg.png"


import Image from "next/image";
import card1img from "../../public/card1img.png"; 

export const SecondLast = () => {
    return (
        <section className='py-16 mx-auto px-4 sm:px-6 lg:px-8 w-full bg-black'>
            
            {/* Header Section */}
            <div className="mb-12 ml-4 md:ml-10 max-w-4xl">
                <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
                    <span className="text-gray-400">Explore Some Of The </span>{' '}
                    <span className="text-white block">Transformative Journeys In GCC</span>{' '}
                </h2>
            </div>
            
            {/* --- Main Card Grid: Top Block (Sapling + Right Stack) --- */}
            {/* Using margin-bottom (mb-6) here to control the space BEFORE the Recurate card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto px-4 mb-6"> 
                
                {/* 1. Sapling Card (Left Column - Spans 2 Rows vertically) */}
                <div className="md:row-span-2 bg-white rounded-xl p-8 relative overflow-hidden flex flex-col justify-end min-h-[330px]">
                    <Image 
                        src={card1img} 
                        alt="Abstract graphic" 
                        className='absolute z-0 opacity-80 left-[-80px] top-[-100px] transform rotate-[30deg]' 
                        width={350} 
                        height={350} 
                    />
                    
                    <h3 className="text-black text-4xl font-extrabold pb-6 mb-2 z-10 relative">
                        Sapling (Kallidus)
                    </h3>
                    <p className="text-gray-600 text-lg z-10 relative">
                        US HR Tech Platforms Engineering Scale-Up Drives $10M PE Acquisition
                    </p>
                </div>

                {/* --- Right Column Stack Container --- */}
                <div className="flex flex-col gap-6">
                    {/* 2. Intellirent Card (Top Right) */}
                    <div className="bg-neutral-800 rounded-xl min-h-[150px] p-6 relative overflow-hidden">
                        <h3 className="text-white text-xl pt-10 font-bold mb-2">
                            Intellirent
                        </h3>
                        <p className="text-gray-400 text-sm">
                            US PropTech Startups AI Revolution Cuts Manual Work 98%
                        </p>
                    </div>

                    {/* 3 & 4. Nested Grid for HoneyBricks and X-QUIC (Bottom half of the stack) */}
                    <div className="grid grid-cols-2 gap-6">
                         {/* HoneyBricks Card */}
                        <div className="bg-neutral-900 min-h-[180px] rounded-xl p-6 relative overflow-hidden">
                            <h3 className="text-white text-lg font-bold pt-10 mb-2">
                                HoneyBricks
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Blockchain Real Estate Platform Manages $9M+ Investments Before Acquisition them.
                            </p>
                        </div>
                        {/* X-QUIC Card */}
                        <div className="bg-white min-h-[180px] rounded-xl  p-6 relative overflow-hidden">
                            <Image 
                        src={card1img} 
                        alt="Abstract graphic" 
                        className='absolute z-0 opacity-80 right-[-100px] top-[-10px] transform  rotate-y-[-200deg]' 
                        width={220} 
                        height={150} 
                    />
                            <h3 className="text-black text-lg font-bold pt-10 mb-2">
                                X-QUIC
                            </h3>
                            <p className="text-gray-500 w-30 text-xs">
                                Hospitality AI Platform Reconciles $300M+ In OTA Commissions Automatically
                            </p>
                        </div>
                    </div>
                </div>
            </div> 
            
            {/* --- Full-Width Card (Recurate) - Now positioned OUTSIDE the row-spanning grid to eliminate unwanted gap --- */}
            <div className="max-w-7xl  mx-auto px-4">
                 <div className="bg-white rounded-xl flex min-h-[200px] p-8 relative overflow-hidden">
                    <div className="w-3xl">
                     <Image 
                        src={serviceimg} 
                        alt="Abstract graphic" 
                        className='absolute z-0 opacity-80 left-[-20px] top-[-60px] transform rotate-[-30deg]' 
                        width={360} 
                        height={350} 
                    />
                    </div>
                    <div className="w-4xl">
                    <h3 className="text-black text-4xl  font-bold mb-4 z-10 relative">
                        Recurate
                    </h3>
                    <p className="text-gray-400 text-base z-10 relative">
                        US Fashion Resale Platform Scales to 100K Monthly Transactions
                    </p>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default SecondLast;