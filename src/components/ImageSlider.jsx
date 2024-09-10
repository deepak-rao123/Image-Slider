import { useEffect, useState } from "react"
import {data} from "../constant"

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ImageSlider = ()=>{

    const[currentImage,setCurrentImage]=useState(0);

    const handlePrevClick= ()=>{

        setCurrentImage(!currentImage?data.length-1:currentImage-1)


    };
        
    const handleNextClick =()=>{
        setCurrentImage((currentImage+1)%data.length);
    };

    useEffect(()=>{
       const timer =  setTimeout(()=>{handleNextClick()},3000)
        return ()=>{
            clearTimeout(timer)
        }
    },[currentImage]);
    

    return (
    <div className="w-full h-screen">
        
    <h1 className=" text-6xl ">Image Slider</h1>
    
   
     
    
     <div className="flex items-center justify-center gap-10 my-10 ">
     <button onClick={handlePrevClick}
     className="  text-center rounded-full   w-[45px] h-[45px] bg-gradient-to-r from-[#303439] to-[#161718] text-md flex items-center justify-center  drop-shadow-arrow-shadow">
     <FaArrowLeft className="text-[#6F787C]" />
     </button>
       
       { data.map((data,index)=>{
        return <img key={index} src={data} alt="image" className={"w-[700px] h-[500px] rounded-3xl   " +
            (currentImage===index?"block":" hidden")

        } />
       })}
        <button onClick={handleNextClick}
        className="  text-center rounded-full   w-[45px] h-[45px] bg-gradient-to-r from-[#303439] to-[#161718] text-md flex items-center justify-center  drop-shadow-arrow-shadow"
        >
        
        <FaArrowRight className="text-[#6F787C]" />
        </button>
           
     </div>
     </div>

    )
}
export default ImageSlider


