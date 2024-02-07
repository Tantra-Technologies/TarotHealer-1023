import React from "react";
import Heading from "./Heading";
import Formc from "./Formc";

export default function Meet() {
  return (
    <>
      <div className="container bg-[#000000] text-gray-200 min-h-screen ">
        <Heading head="SCHEDULE A READING TODAY" />
        <div class="pt-16 flex">
          <div class="flex flex-col items-center justify-start pl-14 w-2/3">
            <div class="p-6">
              <h1 className="text-6xl underline underline-offset-[14px]">
                Lets Talk
              </h1>
              <p className="pt-5 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos praesentium ducimus quasi aspernatur, earum fugiat?
                Tenetur minima fugit dolore cum eligendi? In ab quis illum
                numquam recusandae asperiores illo perspiciatis quisquam eius.
              </p>
              <div className="pt-16">
                <h2 className="text-4xl underline underline-offset-[14px]">
                  Email
                </h2>
                <p className="pt-6 text-2xl">tarothealer@gmail.com</p>
              </div>
              <div className="pt-16">
                <h2 className="text-4xl underline underline-offset-[14px]">
                  Office
                </h2>
                <p className="pt-6 text-2xl">Address, Nashik,</p>
                <p className="text-2xl break-after-column">
                  Maharashtra,422501
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-col ml-36 justify-start p-2 w-3/5">
            <Formc />
          </div>
        </div>
      </div>
    </>
  );
}
