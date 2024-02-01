import React from 'react'
import Heading from './Heading'

export default function Testimonials() {
  return (
    <>
    <div className="container bg-slate-800 min-h-screen ">
        <Heading head="TESTIMONIALS"/>
        {/* Three Cards */}
      {/* Horoscope */}

      <div className="pt-10 flex justify-center items-center ">
        <div className="pt-10 flex space-x-12 mx-20">
          <div className="w-1/3 px-4 bg-slate-900 h-4/5">
            <div className="pt-2 text-white text-justify">
              <div className="mt-5 text-base">
                <p>
                  A HOROSCOPE DEPENDS ON THE INDIVIDUAL'S SUN SIGN, MOON SIGN,
                  AND RISING SIGN (ASCENDANT), EACH ASSOCIATED WITH SPECIFIC
                  PERSONALITY TRAITS. PLANETARY POSITIONS, INCLUDING MERCURY,
                  VENUS, MARS, JUPITER SATURN, AND OTHERS. IT'S IMPORTANT TO
                  NOTE THAT ASTROLOGY IS NOT SCIENTIFICALLY VALIDATED, AND
                  HOROSCOPES ARE OFTEN VIEWED FOR ENTERTAINMENT O PERSONAL
                  REFLECTION. BELIEFS IN THEIR ACCURACY VARY WIDELY.
                </p>
              </div>
             
            </div>
          </div>
      {/* Energy Reading */}
      <div className="w-1/3 bg-slate-900">
            <div className="pt-2 px-4 text-white text-justify">
              
              <div className="mt-5 text-base">
                <p>
                  ENERGY READING IN TAROT INVOLVES A HOLISTIC APPROACH TO
                  INTERPRETING THE ENERGIES SURROUNDING AN INDIVIDUAL OR A
                  SITUATION, OFTEN GOING BEYOND THE TRADITIONAL CARD MEANINGS.
                  IN AN ENERGY READING, A TAROT READER FOCUSES ON THE SUBTLE
                  ENERGIES, VIBRATIONS, AND INTUITIVE IMPRESSIONS THEY PERCEIVE
                  FROM THE CARDS, THE CLIENT OR THE OVERALL ATMOSPHERE.
                </p>
              </div>
              
            </div>
          </div>
      {/* Chi Healing */}
      <div className="w-1/3 bg-slate-900">
            <div className="pt-2 px-4 text-white text-justify">
              
              <div className="mt-5 text-base">
                <p>
                  CHI HEALING, OFTEN ASSOCIATED WITH PRACTICES LIKE QIGONG OR
                  TRADITIONAL CHINESE MEDICINE, INVOLVES BALANCING AND ENHANCING
                  THE FLOW OF LIFE FORCE ENERGY (CHI OR QI) WITHIN THE BODY TO
                  PROMOTE WELL-BEING
                </p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
