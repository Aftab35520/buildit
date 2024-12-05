import Link from "next/link";

export default function HomeTocontact() {
  return (
    <div className="w-full  bg-[#1E1B1B] flex justify-center  ">
        <div className="w-[calc(100%-80px)] max-w-[1500px] pt-32">
            <p className="text-white text-6xl font-medium max-w-[1000px]  bigtext  ">Like Our Style? Let's Make an <span className=" text-revel-red ">IMPACT</span> <span className="">ToGether</span></p>
            <p className="text-white max-w-[500px] mt-11 mb-11 smalltext">If you're working on something exceptional and believe it has the potential to make a real difference, we want to hear about it.</p>
            <div className="mb-32"><Link href={"/contact"} className=" bg-blue-50 p-4 rounded-3xl">Get in touch <span className="text-[16px] p-1 rounded-[50%]">➨</span> </Link></div>
        </div>
    </div>
  )
}
