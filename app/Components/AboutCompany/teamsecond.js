import Image from "next/image";
import designer from "../Images/designer.jpg";
export default function Team2() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-24 mb-24 home-flex">
    <div className="w-[full] h-[500px]  overflow-hidden  relative">
        <Image src={""} className="w-[100%] h-[410px] rounded-lg cursor-pointer  " alt=""/>
        <div className=" "  >
            <p className=" text-2xl font-medium mb-[20px] mt-4">Aftab Alam <br/><span className="text-lg">Founder</span></p>    
        </div>
     </div>
     
     <div className="w-[full] h-[500px]  overflow-hidden  ">
        <Image src={designer} className="w-[100%] h-[410px] rounded-lg cursor-pointer  " alt=""/>
        <div className=" "  >
            <p className=" text-2xl font-medium mb-[20px] mt-4">Aftab Alam <br/><span className="text-lg">Designer</span></p>    
        </div>
     </div>

 </div>
  )
}
