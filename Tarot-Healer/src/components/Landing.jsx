import React from "react";
import Navbar from "./Navbar";
import WhatWeDo from "./WhatWeDo";
import AboutUs from "./AboutUs";
import Testimonials from "./Testimonials";
import Meet from "./Meet";
import Faq from "./Faq";
import tarot1 from "../assets/tarot1_blur.png"


export default function Landing() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${tarot1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          overflow: "auto",
          // filter: "blur(8px)",
        }}
        className="min-h-screen flex flex-col space-y-48 bg-fixed"  loading= "lazy"
      >
        <Navbar />
        <div className="container text-slate-50">
          <div className=" text-center">
            <h1 className="text-4xl font-medium">IN PERSON & ONLINE TAROT </h1>
            <h1 className="text-4xl break-after-column font-medium">
              MIND READINGS
            </h1>
            <div className="mt-5 text-2xl ">
              <p>
                TAROT READING IS A FORM OF DIVINATION USING A DECK OF 78 CARDS,
                DIVIDED INTO
              </p>
              <p>
                MAJOR AND MINOR ARCANA. MAJOR ARCANA CARDS REPRESENT SIGNIFICANT
                LIFE
              </p>
              <p>
                EVENTS, WHILE MINOR ARCANA CARDS DELVE INTO 'SPECIFIC ASPECTS
                LIKE
              </p>
              <p>EMOTIONS OR INTELLECT.</p>
            </div>
            <div className="mt-5">
              <button
                type="button"
                class="text-slate-200 bg-[#85776a] hover:bg-[#71665b]   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
              >
                Consult Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <WhatWeDo />
      <AboutUs />
      <Testimonials/>
      <Faq/>
      <Meet/>
    </>
  );
}
