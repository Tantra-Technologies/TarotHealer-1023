import React from "react";
import tarot8 from "../assets/tarot8.jpg";
import tarot9 from "../assets/tarot9.jpg";
import Heading from "./Heading";

export default function WhatWeDo(props) {
  return (
    <>
      {/* What We do */}
      <div className="container bg-slate-950 min-h-screen">
        <Heading head="WHAT WE DO" />

        {/* Face Reading */}
        <div className="mt-8 px-2 flex">
          {/* <div
            className=" "
            // style={{
            //     backgroundImage: `url(${tarot8})`,
            //   backgroundRepeat: "no-repeat",
            //   backgroundSize: "contain",
            // }}
          > */}
            <div className="mx-2 w-2/5 bg-slate-900 pt-2 px-4 text-white text-justify h-80 ">
              <h1 className="text-3xl">01</h1>
              <h1 className="mt-2 text-2xl">FACE READINIG</h1>
              <div className="mt-5 text-base">
                <p>
                  FACE READING TYPICALLY REFERS TO THE PRACTICE OF ANALYZING
                  FACIAL FEATURES, EXPRESSIONS, AND CHARACTERISTICS TO INSIGHTS
                  INTO A PERSON'S PERSONALITY OR FUTURE.
                </p>
              </div>
              <div className="mt-5">
                <button
                  type="button"
                  class="text-slate-200 bg-[#85776a] hover:bg-[#71665b]   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          {/* </div> */}
          {/* Psychic Reading */}
          <div
            className="mx-2 w-3/5 bg-slate-900"
            // style={{
            //   backgroundImage: `url(${tarot9})`,
            //   backgroundRepeat: "no-repeat",
            //   backgroundSize: "cover",
            // }}
          >
            <div className="pt-2 px-4 text-white text-justify">
              <h1 className="text-3xl">02</h1>
              <h1 className="mt-2 text-2xl">PSYCHIC READINIG</h1>
              <div className="mt-5 text-base">
                <p>
                  A PSYCHIC READING IN TAROT INVOLVES A TAROT READER USING THEIR
                  INTUITIVE OR PSYCHIC ABILITIES IN ADDITION TO INTERPRETING THE
                  SYMBOLISM OF THE TAROT CARDS. UNLIKE TRADITIONAL TAROT
                  READINGS THAT SOLELY RELY ON THE CARDS' SYMBOLISM, PSYCHIC
                  TAROT READINGS INCORPORATE THE READER'S EXTRASENSORY
                  PERCEPTION TO PROVIDE DEEPER INSIGHTS.
                </p>
              </div>
              <div className="mt-5">
                <button
                  type="button"
                  class="text-slate-200 bg-[#85776a] hover:bg-[#71665b]   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 px-2 flex">
          <div
            className="mx-2 w-3/5 bg-slate-900 "
            // style={{
            //     backgroundImage: `url(${tarot8})`,
            //   backgroundRepeat: "no-repeat",
            //   backgroundSize: "contain",
            // }}
          >
            <div className="pt-2 px-4 text-white text-justify h-72">
              <h1 className="text-3xl">03</h1>
              <h1 className="mt-2 text-2xl">Horoscope</h1>
              <div className="mt-5 text-base">
                <p>
                  A HOROSCOPE DEPENDS ON THE INDIVIDUAL'S SUN SIGN, MOON SIGN,
                  AND RISING SIGN (ASCENDANT), EACH ASSOCIATED WITH SPECIFIC
                  PERSONALITY TRAITS. PLANETARY POSITIONS, INCLUDING MERCURY,
                  VENUS, MARS, JUPITER SATURN, AND OTHERS. 
                </p>
              </div>
              <div className="mt-5">
                <button
                  type="button"
                  class="text-slate-200 bg-[#85776a] hover:bg-[#71665b]   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
          {/* Psychic Reading */}
          <div
            className="mx-2 w-2/5 bg-slate-900"
            // style={{
            //   backgroundImage: `url(${tarot9})`,
            //   backgroundRepeat: "no-repeat",
            //   backgroundSize: "cover",
            // }}
          >
            <div className="pt-2 px-4 text-white text-justify">
              <h1 className="text-3xl">04</h1>
              <h1 className="mt-2 text-2xl">ENERGY READINIG</h1>
              <div className="mt-5 text-base">
                <p>
                  ENERGY READING IN TAROT INVOLVES A HOLISTIC APPROACH TO
                  INTERPRETING THE ENERGIES SURROUNDING AN INDIVIDUAL OR A
                  SITUATION, OFTEN GOING BEYOND THE TRADITIONAL CARD MEANINGS.
                  
                </p>
              </div>
              <div className="mt-5">
                <button
                  type="button"
                  class="text-slate-200 bg-[#85776a] hover:bg-[#71665b]   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}
