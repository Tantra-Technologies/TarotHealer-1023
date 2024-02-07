import React from "react";
import Heading from "./Heading";
import tarot10 from "../assets/tarot10.jpg";

export default function Testimonials() {
  return (
    <>
      <div className="container bg-[#000000]  min-h-screen ">
        <Heading head="TESTIMONIALS" />

        {/* 1*/}
        <div className="pt-10 flex">
          <div className="flex flex-row space-x-12 mx-20">
            <div className="bg-no-repeat bg-cover w-full  h-full px-4" style={{ backgroundImage: `url(${tarot10})` }}  loading= "lazy">
             
                <div className="pt-2 text-white text-justify ">
                  <div className="mt-5 text-base">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime consequatur quae dolorem laborum. Voluptas, a
                      delectus? Nihil sit amet harum a totam inventore, aliquid
                      quasi exercitationem rem at cum eaque fugit vero.
                    </p>
                  </div>
                </div>
              
            </div>
            {/* 2*/}
            <div
              className=" bg-no-repeat  bg-cover  bg-[url('../src/assets/tarot11.jpg')]"  loading= "lazy"
              style={{ height: "600px" }}
            >
              <div className="pt-2 px-4 text-white text-justify">
                <div className="mt-5 text-base">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint earum incidunt voluptate sunt ducimus fugiat,
                    necessitatibus repellat voluptas repellendus provident
                    eveniet quibusdam tenetur eligendi sit pariatur dolorum
                    consequuntur soluta! Soluta, animi impedit.
                  </p>
                </div>
              </div>
            </div>
            {/* 3*/}
            <div
              className=" bg-no-repeat  bg-cover  bg-[url('../src/assets/tarot12.jpg')]"  loading= "lazy"
              style={{ height: "600px" }}
            >
              <div className="pt-2 px-4 text-white text-justify">
                <div className="mt-5 text-base">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi earum alias quas, sed magnam excepturi facilis iure
                    consequuntur optio perferendis nobis vel impedit tempora
                    odio mollitia rem libero quod veritatis sit assumenda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
