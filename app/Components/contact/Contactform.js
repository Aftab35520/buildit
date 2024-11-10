"use client"
export default function Contactform({ref}) {
  return (
    <div className="w-full mb-[100px] flex justify-end h-[600px]">
      <form className=" backdrop-blur-lg flex flex-col p-7 w-3/4 rounded-2xl border-2 border-black ">
      <input type="text" className=" border-b-2 w-full border-black p-2 mb-5 outline-none" placeholder="Full Name..." ref={ref}/>
      <input type="text" className=" border-b-2 w-ull border-black p-2 mb-5 outline-none"  placeholder="Email..."/>
      <input type="text" className=" border-b-2 w-full border-black p-2 mb-5 outline-none"  placeholder="Country.."/>
      <input type="number" className=" border-b-2 w-full border-black p-2 mb-5 outline-none"  placeholder="Contact no..."/>
      <textarea className=" border-b-2 w-full border-black p-2  outline-none max-h-[200px] min-h-[200px] mb-10" placeholder="Massage..."/>
      <input type="submit" className=" border-2 w-full border-black p-2 mb-5 outline-none pointer rounded-lg cursor-pointer text-white bg-[#1E1B1B]"  placeholder="Contact no..."/>
      </form>
    </div>
  )
}
