import Link from "next/link";
export default function Headerlink() {
    
  return (
    <div className=" mt-24 grid grid-cols-4 headerlink bg-[#1E1B1B] pb-4  rounded-b-xl ">
    <div className="  p-5 ">
        <p className=" border-b-[1px] pb-4 border-gray-400 text-gray-400">About Us</p>
        <Link href={"/"}  className="control-arrow"><p className="text-white text-2xl mt-6 cursor-pointer rightss">Home <span className="Arrow-head">➨</span></p></Link>
        <Link href={"/ourmission"} className="control-arrow"><p className="text-white text-2xl  cursor-pointer rightss">Our Mission <span className="Arrow-head">➨</span></p></Link>
    </div>
    <div className="  p-5 ">
        <p className=" border-b-[1px] pb-4 border-gray-400 text-gray-400">Build with us</p>
        <Link href={"/creater"} className="control-arrow"><p className="text-white text-2xl mt-6 cursor-pointer rightss">Creater <span className="Arrow-head">➨</span></p></Link>
        <Link href={"/invester"} className="control-arrow"><p className="text-white text-2xl  cursor-pointer rightss">Invester <span className="Arrow-head">➨</span></p></Link>
        <Link href={"/colleboration"} className="control-arrow"><p className="text-white text-2xl  cursor-pointer rightss">Collaboration <span className="Arrow-head">➨</span></p></Link>
    </div>
    <div className="  p-5 ">
        <p className=" border-b-[1px] pb-4 border-gray-400 text-gray-400">Contact  Us</p>
        <Link href={"/contact"} className="control-arrow"><p className="text-white text-2xl mt-6 cursor-pointer rightss">Build with us <span className="Arrow-head">➨</span></p></Link>
    </div>
    <div className="  p-5 ">
        <p className=" border-b-[1px] pb-4 border-gray-400 text-gray-400">More</p>
        <Link href={"/blog"} className="control-arrow"><p className="text-white text-2xl mt-6 cursor-pointer rightss">Blogs <span className="Arrow-head">➨</span></p></Link>
    </div>
</div>
  )
}
