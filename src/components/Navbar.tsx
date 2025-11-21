// import Link from 'next/link';
 

// import Image from 'next/image';
// const Navbar = () => {
  
//   const navLinks = [
//     { name: 'What We Do', href: '/whatwedo' },
//     { name: 'Why Us', href: '/whyus' },
//     { name: 'About Us', href: '/about' },
//   ];

//   return (
//     <nav className="fixed top-10 left-10 right-10 z-10 bg-black justify-around rounded-4xl border-black outline-white border-2 opacity-[6] text-white shadow-md">
      
//       <div className="max-w-7xl mx-auto pt-3 pb-3 px-4 sm:px-6 lg:px-8">
        
//         <div className="flex items-center justify-between h-16">
          
//           <Link href="/" className="flex items-center space-x-2 text-xl z-20 font-bold text-white hover:text-indigo-600 transition-colors">
//             <Image src="/duremeicon.png" alt="Duremere.Ai Logo" width={40} height={40} />
//             <span >Duremere.<span className='text-teal-600'>Ai</span></span>
//           </Link>

//           <div className="hidden md:flex flex-grow justify-center space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className="text-white hover:text-indigo-600 font-medium transition-colors duration-150"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           <div className="flex items-center space-x-4">
            
//             <button className="px-8 pb-4 py-3 z-5  text-sm flex gap-1 justify-center align-center font-semibold text-white bg-teal-800 rounded-4xl hover:bg-app-seagreen-dark transition-colors shadow-xl">
//                           <Image src="/consultationicon.png" alt="Duremere.Ai Logo" width={20} height={20} />  Get a Free Consultation
//                         </button>
//           </div>
          
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    
    const navLinks = [
        { name: 'What We Do', href: '/whatwedo' },
        { name: 'Why Us', href: '/whyus' },
        { name: 'About Us', href: '/about' },
    ];

    return (
        // 1. Navbar Container: Fixed, Floating, Glass Effect (backdrop-blur)
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 
                        w-[calc(100%-4rem)] max-w-7xl
                        bg-black/30 backdrop-blur-xs 
                        rounded-3xl border border-white/20 
                        text-white shadow-xl">
            
            <div className="mx-auto pt-3 pb-3 px-4 sm:px-6 lg:px-8">
                
                <div className="flex items-center justify-between h-16">
                    
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-white hover:text-gray-300 transition-colors">
                        <Image src="/duremeicon.png" alt="Duremere.Ai Logo" width={40} height={40} />
                        <span >Duremere.<span className='text-teal-500'>Ai</span></span>
                    </Link>

                    {/* Navigation Links: Centered and hidden on small screens */}
                    <div className="hidden md:flex flex-grow justify-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-white hover:text-teal-500 font-medium transition-colors duration-150"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="flex items-center space-x-4">
                        <button className="px-6 py-3 
                                           text-sm font-semibold 
                                           flex items-center gap-2 
                                           text-white bg-teal-600 
                                           rounded-lg hover:bg-teal-700 transition-colors shadow-lg">
                            <Image src="/consultationicon.png" alt="Icon" width={16} height={16} className='w-4 h-4' /> 
                            Get a Free Consultation
                        </button>
                    </div>
                    
                </div>
            </div>
        </nav>
    );
};

export default Navbar;