import React from "react";
import Heading from "./Heading";
import tarot3_blur2 from "../assets/tarot3_blur2.png"

export default function AboutUs() {
  return (
    <>
      <div style={{
          backgroundImage: `url(${tarot3_blur2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          overflow: "auto",
          // filter: "blur(8px)",
        }}
      className="container min-h-screen bg-fixed">
        <Heading head="ABOUT US" />
        <div className="mt-8 px-2 flex justify-center items-center">
          <div className="mx-2 w-2/5 bg-[#000000] pt-2 px-4 text-white text-justify bg-[url('https://images.unsplash.com/photo-1605434939526-d237502a6f16?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  h-[450px] bg-cover bg-center bg-no-repeat">
            
          </div>
          <div className="mx-2 w-3/5 bg-[#000000] pt-2 px-4 text-white text-justify ">
            OUR TALENTED AND COMPASSIONATE TAROT READERS BRING YEARS OF
            EXPERIENCE TO THE TABLE) THEY ARE NOT JUST INTERPRETERS OF THE CARDS
            BUT ARE COMMITTED TO CREATING Å CONNECTION WITH YOU, ENSURING A
            READING THAT GOES BEYOND THE SURFACE.
          </div>
        </div>
      </div>
    </>
  );
}
