
"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Logo from "../Images/Logo.png"
import Menu from "../Images/menu.png"
import Logo2 from "../Images/reject.png"
import whiteLogo from "../Images/whitelogo.png"
import Headerlink from "./Headerlink"

function TransHeader() {
     const router = useRouter()
    const [nav,changenav]=useState({height:"70px",bg:"transparent",mainheight:"0"})


  return (
    <div className="w-full flex justify-center bg-black bg-opacity-50 backdrop-blur-lg fixed top-0 z-[999]" style={{height:[nav.mainheight]}} >
        <div className={`
        w-[calc(100%-80px)]
        max-w-[1500px]
        rounded-lg
         rounded-t-none
         
         pt-5
        headermobile
         ease-in-out
        `}
        style={{height:[nav.height],background:[nav.bg]}}>
        <div className="flex justify-between bg-t">
            <Image src={nav.bg=="transparent"?Logo:whiteLogo} onClick={() => router.push('/')}  width={120} className="h-8 cursor-pointer pl-5" alt="Logo"/>
            <Image src={nav.mainheight==0?Menu:Logo2} width={40} className="h-6 w-6 cursor-pointer mr-5" alt="Logo"
            onClick={()=>nav.height=="70px"?changenav({height:"400px",bg:"#1E1B1B",mainheight:"100dvh"}):changenav({height:"70px",bg:"transparent",mainheight:"0"})}/>
        </div>
        {
            nav.height=="400px"?
        
            <Headerlink/>
        :<></>}
        </div>
    </div>
  )
}

export default TransHeader
