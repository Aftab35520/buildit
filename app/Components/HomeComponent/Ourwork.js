import Image from "next/image"
import image2 from "../Images/bloging.jpg"
import image from "../Images/ecom.jpg"
import image3 from "../Images/portfolio.jpg"
export default function Ourwork() {
  return (
    <div className="w-[calc(100%-80px)] max-w-[1500px] relative">
        <p className="text-6xl font-medium max-w-[1000px] mt-[150px] bigtext ">From Vision to Website<br/> Build Your<br/> Online Presence</p>
        <p className="font-medium mb-[100px] mt-[40px] sticky top-24 z-10 w-full border-[1px] p-6 rounded-[8px] backdrop-blur-3xl bg-white ">Our Works</p>
 
        <p className="w-full border-b-[1px] border-black mb-16 "></p>
        <div className="grid grid-cols-2 mb-[200px] home-flex remextra">
            <div className=" ">
                <div className="sticky  top-48 mb-4">
                    <p className="text-8xl font-normal bigtextlarge">O1</p>
                    <p className=" text-2xl font-bold  smalltext">E-commerce Website </p>
                </div>
            </div>
            <div>
                <Image src={image} alt="" className="w-full h-[410px] rounded-lg"/>
                <p className="mt-8 text-[16px] leading-[20px]">Introducing [Luxigro], an innovative, fully-responsive e-commerce platform designed to offer users a smooth, intuitive, and visually appealing online shopping experience. The website has been thoughtfully crafted to not only showcase a wide array of products but also prioritize user experience, ease of navigation, and seamless functionality across all devices...</p>
            </div>
        </div >
        <p className="w-full border-b-[1px] border-black mb-16 "></p>
        <div className="grid grid-cols-2 mb-[200px] home-flex remextra">
            <div className=" ">
                <div className="sticky  top-48 mb-4">
                    <p className="text-8xl font-normal bigtextlarge">O2</p>
                    <p className=" text-2xl font-bold  smalltext">Blogging Application </p>
                </div>
            </div>
            <div>
                <Image src={image2} alt="" className="w-full h-[410px] rounded-lg"/>
                <p className="mt-8 text-[16px] leading-[20px]">Introducing [Blogting], a clean, user-friendly, and fully responsive blogging platform designed for both novice and experienced writers. The application enables users to create, manage, and share their blog posts effortlessly, with a seamless interface and a variety of features that enhance content creation and user engagement..</p>
            </div>
        </div >
        <p className="w-full border-b-[1px] border-black mb-16"></p>
        <div className="grid grid-cols-2 mb-[200px] home-flex ">
            <div className=" ">
                <div className="sticky  top-48 mb-4">
                    <p className="text-8xl font-normal bigtextlarge">O3</p>
                    <p className=" text-2xl font-bold smalltext ">Personal portfolio </p>
                </div>
            </div>  
            <div>
                <Image src={image3} alt="" className="w-full h-[410px] rounded-lg"/>
                <p className="mt-8 text-[16px] leading-[20px]">We start with a vision—identifying market gaps and emerging trends to craft brands that fill a void in the nutrition space. Our foundation is built on in-depth research and a passion for health and wellness, ensuring each brand has the potential to make a meaningful impact.</p>
            </div>
        </div >
        
        
    </div>
  )
}
