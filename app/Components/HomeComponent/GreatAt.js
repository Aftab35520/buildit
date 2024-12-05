import Image from "next/image";
import growth from "../Images/growth.jpg";
import innovative from "../Images/Inovative.jpg";
import Logo from "../Images/laptop.jpg";
import management from "../Images/management.jpg";
import strategic from "../Images/Strategic.jpg";
export default function GreatAt() {
  return (
    <div className="w-full  bg-[#1E1B1B] text-white mt-24 flex justify-center">
      <div className="w-[calc(100%-80px)] max-w-[1500px] mt-24">
        <p className=" text-2xl smalltext">What we are great at</p>
        <p className="text-6xl font-medium max-w-[1000px] mt-4 reveal-text  bigtext" >Navigating the Brand Journey<br/> Creation to Exit</p>
        <div className="grid grid-cols-2 gap-4 mt-24 home-flex">
           <div className="w-[full] h-[410px] Image-On overflow-hidden  relative">
               <Image src={innovative} className="w-[100%] h-[410px] rounded-lg cursor-pointer  " alt=""/>
               <div className="mouse-onAnimation "  >
                   <p className=" text-2xl font-medium mb-[20px] ">Innovative Design</p>
                   <p className="mt-8 text-[16px] leading-[20px] ">We create visually stunning brand identities that resonate with your audience, combining creativity with market insights to tell your unique story.</p>
               </div>
            </div>
            
            <div className="w-[full] h-[410px] Image-On overflow-hidden  relative">
               <Image src={strategic} className="w-[100%] h-[410px] rounded-lg cursor-pointer  " alt=""/>
               <div className="mouse-onAnimation "  >
                   <p className=" text-2xl font-medium mb-[20px] ">Strategic Building</p>
                   <p className="mt-8 text-[16px] leading-[20px] ">Our expertise lies in developing robust brand strategies that align with your business goals, ensuring every element of your brand supports long-term success.</p>
               </div>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4 mb-28 home-flex">
        <div className="w-[full] h-[410px] Image-On overflow-hidden  relative">
               <Image src={growth} className="w-[100%] h-[410px] rounded-lg cursor-pointer  " alt=""/>
               <div className="mouse-onAnimation moredeep "  >
                   <p className=" text-2xl font-medium mb-[20px] ">Accelerated Growth </p>
                   <p className="mt-8 text-[16px] leading-[20px] ">We drive brand growth through data-driven marketing strategies and innovative campaigns that boost visibility, engage customers, and increase revenue.</p>
               </div>
            </div>
            <div className="w-[full] h-[410px] Image-On overflow-hidden  relative">
               <Image src={Logo} className="w-[100%] h-[410px] rounded-lg cursor-pointer  " alt=""/>
               <div className="mouse-onAnimation moredeep "  >
                   <p className=" text-2xl font-medium mb-[20px] "> Strategic Exiting </p>
                   <p className="mt-8 text-[16px] leading-[20px] ">We guide you through the exit process, maximizing your brand’s value whether you’re selling, merging, or transitioning ownership, all while aligning with your goals.</p>
               </div>
            </div>
            <div className="w-[full] h-[410px] Image-On overflow-hidden  relative">
               <Image src={management} className="w-[100%] h-[410px] rounded-lg cursor-pointer  " alt=""/>
               <div className="mouse-onAnimation moredeep "  >
                   <p className=" text-2xl font-medium mb-[20px] ">Holistic Brand Management </p>
                   <p className="mt-8 text-[16px] leading-[20px] ">Our comprehensive brand management approach ensures your brand evolves seamlessly throughout its lifecycle, adapting to market changes while staying true to its core values.</p>
               </div>
            </div>
        </div>
      </div>
    </div>
  )
}
