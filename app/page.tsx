import Hero from "@/src/components/Hero";

import {LastPage}  from "@/src/components/LastPage";
import Service  from "@/src/components/Service";
// import heroback1 from "../public/herobackupd.png";

import { SecondPage } from "@/src/components/SecondPage";
import Pagethird from "@/src/components/pagethird";
import FourthPage from "@/src/components/FourthPage";
import SecondLast from "@/src/components/SecondLast";
export default function Home() {
  return (
    <div className="flex min-h-screen w-[100vw] items-center -z-10 justify-center bg-black font-sans bg-black overflow-x-hidden">
      <main className="flex min-h-screen w-full  flex-col z-0 items-center justify-between py-16  bg-black sm:items-start">
       
       <Hero/>
       <Service/>

       <SecondPage/>
       <Pagethird/>
       <FourthPage/>
       <SecondLast/>
       <LastPage/>
      
      </main>
    </div>
  );
}
