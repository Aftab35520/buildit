"use client"
import { useEffect } from "react";
import HomeComponent from "./Components/HomeComponent/HomeComponent";
import MainHeader from "./MainHeader";




export default function Home() {
useEffect(()=>{
  (
    async ()=>{
      const LocomotiveScroll=(await import("locomotive-scroll")).default
      const locomotive=new LocomotiveScroll()

        }
  )
},[])
  
  return (
    <div data-scroll data-scroll-speed="0.3">
    <MainHeader/>
    <HomeComponent/>
    </div>
  );
}
