import Image from "next/image";
import box from "../Images/laptop.jpeg";
export default function Blog() {
  return (
    <div className="w-full flex flex-col items-center mt-[200px]">
        <p className="max-w-[1500px] w-[calc(100%-80px)] text-3xl mb-6 font-medium">All blogs</p>
        <p className=" max-w-[1500px] w-[calc(100%-80px)] border-b-[1px] border-black mb-16"></p>
      <div className="max-w-[1500px] w-[calc(100%-80px)] grid grid-cols-3  gap-y-6 home-flex">
        <div className="p-3">
            <Image src={box} className="w-full h-[500px] rounded-2xl"/>
            <p className="mt-3">April 1, 2023</p>
            <p className="text-2xl">Title</p>
            <p className="">The Discovery phase is an assessment process to understand all of the potential challenges.</p>
        </div>
        <div className="p-3">
            <Image src={box} className="w-full h-[500px] rounded-2xl"/>
            <p className="mt-3">April 1, 2023</p>
            <p className="text-2xl">Title</p>
            <p className="">The Discovery phase is an assessment process to understand all of the potential challenges.</p>
        </div>
        <div className="p-3">
            <Image src={box} className="w-full h-[500px] rounded-2xl"/>
            <p className="mt-3">April 1, 2023</p>
            <p className="text-2xl">Title</p>
            <p className="">The Discovery phase is an assessment process to understand all of the potential challenges.</p>
        </div>
        <div className="p-3">
            <Image src={box} className="w-full h-[500px] rounded-2xl"/>
            <p className="mt-3">April 1, 2023</p>
            <p className="text-2xl">Title</p>
            <p className="">The Discovery phase is an assessment process to understand all of the potential challenges.</p>
        </div>
        <div className="p-3">
            <Image src={box} className="w-full h-[500px] rounded-2xl"/>
            <p className="mt-3">April 1, 2023</p>
            <p className="text-2xl">Title</p>
            <p className="">The Discovery phase is an assessment process to understand all of the potential challenges.</p>
        </div>
        <div className="p-3">
            <Image src={box} className="w-full h-[500px] rounded-2xl"/>
            <p className="mt-3">April 1, 2023</p>
            <p className="text-2xl">Title</p>
            <p className="">The Discovery phase is an assessment process to understand all of the potential challenges.</p>
        </div>

      </div>
    </div>
  )
}
