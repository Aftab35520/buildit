"use client"
import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import TransHeader from "./Components/Header/transHeader";

export default function MainHeader() {
    const[transparentnav,settransparentnav]=useState(true)
    useEffect(()=>{
      window.addEventListener("scroll",()=>{
        if(window.scrollY>100){
          settransparentnav(false)
        }
        else{
          settransparentnav(true)
        }
      })
    },[])
  return (
    <div>
      {transparentnav==false?<Header/>:<><TransHeader/></>}
    </div>
  )
}
