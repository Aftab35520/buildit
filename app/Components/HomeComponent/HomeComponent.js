import { lazy, Suspense } from "react";
import GreatAt from "./GreatAt";
import HomeTocontact from "./HomeTocontact";
import Ourwork from "./Ourwork";
import Whatwedoanim from "./whatwedoanim";
const Homeanim=lazy(()=>import("./Homeanimation"))
export default function HomeComponent() {
  return (
    <div>
      <div className="w-full h-[150px] bg-white">
      </div>
      <div className="w-full flex flex-col items-center  justify-center bg-white text-black">
        <div className="w-[calc(100%-80px)] max-w-[1500px]">
            <p className=" text-6xl font-medium max-w-[1000px] mt-4 bigtext   ">Empower Your Brand Design <br/> Websites That Captivate</p>
            <p className="mt-5 text-black text-[16px]">From Idea to Impact, Designing High-Quality website for Brands That Stand Out</p>
            <p className="mt-14 text-[16px] font-bold border-b-[1px] w-[160px] pb-4  cursor-pointer border-black" onClick={()=>window.location.assign("/contact")}>Build With Us <span className="text-[16px] bg-red-600 p-1 rounded-[50%]">➨</span></p>
        </div>
        <Suspense fallback="Video Loading...">
       <Homeanim/>
       </Suspense>
        <div className="w-[calc(100%-80px)] max-w-[1500px] mt-24 grid grid-cols-2 home-flex ">
              <div>
                <p className=" font-bold mt-[100px]"> What we do</p>
                <p className=" text-6xl font-medium max-w-[1000px] mt-4    bigtext">Crafting Success<br/> from Creative<br/> Concepts</p>
                <p className=" mt-8 mb-8 text-[16px] leading-[20px]">Unlock your creativity by transforming your ideas into a powerful website. Take bold steps to bring your vision to life, and together, we’ll turn your aspirations into reality!.</p>
              </div>
              <div className="w-full overflow-hidden flex justify-end mt-[100px]">
                <Whatwedoanim/>
              </div>
        </div>
        <GreatAt/>
       <Ourwork/>
       <HomeTocontact/>
    </div>
    </div>
  )
}
