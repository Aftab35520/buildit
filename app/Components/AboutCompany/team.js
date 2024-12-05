import Team2 from "./teamsecond";

export default function Team() {
  return (
    <div className="w-[calc(100%-80px)] max-w-[1500px] mt-40">
      <p className="text-[50px] font-medium max-w-[1000px] ">Our Team & Culture</p>
      <p className="max-w-[550px]">Meet the visionaries behind ! Our founders and leadership team combine extensive experience, innovation, and passion to revolutionize the industry. Together, we are committed to empowering users with intuitive tools and resources. Join us as we transform the way websites are designed and built!.</p>
      <p className="w-full border-b-[1px] border-black mt-32 mb-10"></p>
      <div className="flex items-center mb-11">
        <div className="bg-red-400 w-[20px] h-[20px] rounded-[50%]"></div>
        <p className="text-[20px] font-bold ml-3">Founders & Leadership</p>
      </div>
      <div className="w-full flex">
        <Team2/>
      </div>
    </div>
  )
}
