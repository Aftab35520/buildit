"use client"
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
export default function Contact() {
  const ref=useRef()
  const form = useRef();
  const[show,changeshow]=useState("")

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_b4j5g7m', 'template_c0lfjdm', form.current, {
        publicKey: 'rdwNKDnyWwB-Ams6n',
      })
      .then(
        () => {
          changeshow("Massage send successfully X")
        },
        (error) => {
          alert('FAILED...', error.text);
        },
    
      );
  };
  return (
    <div className="Aboutpage  flex  justify-center w-full items-end pb-[50px]  s">
 
      <div className="w-[calc(100%-80px)] max-w-[1500px] grid grid-cols-2 home-flex">
        <div className="min-w-[100px] hidecont">
          <p className="text-6xl font-medium max-w-[1000px] mt-[100px] mb-[50px] reveal-text-start">Build with us</p>
          <p className="mb-[100px] max-w-[600px]" >We're on a mission to build exceptional websites and are seeking Creators, Investors, and Collaborators who share our passion and ambition to craft something remarkable.</p>
          <p className="bg-[#1E1B1B] w-[150px] text-white text-center p-3  rounded-3xl  cursor-pointer" onClick={()=>ref.current.focus()}>Get tarted</p>
        </div>
        <div className="flex justify-start p-5 anim-left">
        <div className="w-full mb-[100px] flex justify-end h-[600px] anim-left">

      <form className=" backdrop-blur-lg flex flex-col p-7 w-3/4 rounded-2xl border-2 border-black makecontfll"ref={form} onSubmit={sendEmail}>
      <input type="text" className=" border-b-2 w-full border-black p-2 mb-5 outline-none" name="Name" placeholder="Full Name..." ref={ref} />
      <input type="text" className=" border-b-2 w-ull border-black p-2 mb-5 outline-none" name="Email" placeholder="Email..."/>
      <input type="text" className=" border-b-2 w-full border-black p-2 mb-5 outline-none" name="Country" placeholder="Country.."/>
      <input type="number" className=" border-b-2 w-full border-black p-2 mb-5 outline-none" name="Contact" placeholder="Contact no..."/>
      <textarea className=" border-b-2 w-full border-black p-2  outline-none max-h-[200px] min-h-[200px] mb-10" name="Massage" placeholder="Massage..."/>
      <input type="submit" className=" border-2 w-full border-black p-2 mb-5 outline-none pointer rounded-lg cursor-pointer text-white bg-[#1E1B1B]"  />
      <p className='text-center text-blue-500 mt-[-10px]  cursor-pointer' onClick={()=>changeshow("")}>{show}</p>
      
      </form>

    </div>
        </div>
      </div>
     
    </div>
  )
}
