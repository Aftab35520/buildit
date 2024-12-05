import Image from "next/image";
import Hero from "../Images/hero.webp";
import Team from "./team";
export default function About() {
  return (
    <div className="bg-white text-black ">
      <div className="w-full h-dvh relative overflow-hidden mb-20 ">
        <Image src={Hero} className="h-full w-full" />
        <div className=" absolute top-[40%] left-0 w-full h-dvh p-6 ">
          <div className="flex flex-col items-center">
          <p className="text-6xl text-white font-medium max-w-[1000px] mt-4  text-center bigtext reveal-text-start" >Transforming Vision <br/>Empowering Dreams</p>
          <p className="text-white text-center">Shaping Inspiring Websites for Tomorrow's Innovators</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-[calc(100%-80px)] max-w-[1500px] " >

        <p className="w-full border-b-[1px] border-black mt-32 mb-10"></p>
        <div className="grid grid-cols-2 home-flex">
          <div>
            <p className="text-2xl font-medium mb-5" >Introduction to<br/> Our Mission</p>
          </div>
          <div>
            <p className="text-[16.4px]">At BUILDIT, our mission is to empower businesses by crafting stunning, user-friendly websites that reflect their unique identity. We believe in the power of design to connect, engage, and inspire. Our dedicated team collaborates closely with clients to transform their visions into reality. Committed to innovation and excellence, we aim to create lasting digital experiences. Together, let’s build a brighter online future..</p>
          </div>
        </div>
        <p className="w-full border-b-[1px] border-black mt-32 mb-10"></p>
        <div className="grid grid-cols-2 home-flex">
          <div>
            <p className="text-2xl font-medium mb-5">Design with <br/>Purpose</p>
          </div>
          <div>
            <p className="text-[16.4px]">we empower users to create stunning websites that serve clear objectives. Our intuitive application combines functionality and aesthetics, ensuring a seamless user experience. Whether for business or personal use, we help you build an impactful online presence. Join us in crafting websites that truly resonate and drive results..</p>
          </div>
        </div>
      
        </div>
      </div>

      <div className="flex justify-center bg-[#1E1B1B] text-white mt-60">
        <div className="w-[calc(100%-80px)] max-w-[1500px] ">
          <p className="text-[50px] font-medium max-w-[1000px] mt-[150px] leading-[55px] mb-[50px]  bigtext reveal-text">Embracing Wholeness for<br/> Effective Solutions Together</p>
          <p className="max-w-[600px] mb-36">We believe in examining the entire landscape to create effective solutions. By considering all aspects of your project, we ensure that every element aligns with your goals. This comprehensive vision allows us to deliver results that are not only impactful but also sustainable. Join us in embracing a complete perspective for your success.</p>
        </div>
      </div>
      <div className="flex justify-center">
        <Team/>
      </div>
    </div>
  )
}
