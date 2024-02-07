import React, { useState } from "react";
import Heading from "./Heading";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import tarot21 from "../assets/tarot21.jpg"

export default function Faq() {
  return (
    <>
      <div className="container bg-fixed bg-[#000000] min-h-screen " loading= "lazy"
      style={{
        backgroundImage: `url(${tarot21})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        overflow: "auto",
        
        // filter: "blur(8px)",
      }}>
        <Heading head="FAQ" />

        <div className="flex flex-row">
          <div className="w-3/5 flex flex-col px-4 pt-16">
            <div className="mx-auto w-full max-w-md rounded-2xl bg-[#000000] p-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className=" flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-lg font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                      <span>What is your refund policy?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-md text-gray-500 text-justify">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque quod eius, optio dignissimos delectus consectetur accusantium alias aspernatur facere quibusdam ex? Quod odio natus cupiditate quae. Officiis distinctio possimus amet ipsa quae.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>

            <div className="mt-48 mx-auto w-full max-w-md rounded-2xl bg-[#000000] p-2">
              <Disclosure as="div">
                {({ open }) => (
                  <>
                    <Disclosure.Button className=" flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-lg font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                      <span>Do you offer technical support?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-md text-gray-500 text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ipsum praesentium temporibus fugiat, odio commodi cum voluptate. Dolor quia voluptate minima optio! Tempore assumenda explicabo amet vero ex. Blanditiis temporibus esse unde!
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>

          <div className="w-3/5 flex flex-col pt-16">
            <div className="mx-auto w-full max-w-md rounded-2xl bg-[#000000] p-2 ">
              <Disclosure as="div">
                {({ open }) => (
                  <>
                    <Disclosure.Button className=" flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-lg font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                      <span>Do you offer technical support?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-md text-gray-500 text-justify">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum ipsum nulla ullam. Repudiandae cum necessitatibus sint, rem consectetur fugit nihil consequuntur ad aspernatur voluptates quibusdam, odio iusto veniam saepe ipsum dolores. Maiores.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>

            <div className="mt-48 mx-auto w-full max-w-md rounded-2xl bg-[#000000] p-2 ">
              <Disclosure as="div">
                {({ open }) => (
                  <>
                    <Disclosure.Button className=" flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-lg font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                      <span>Do you offer technical support?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-md text-gray-500 text-justify">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias dignissimos aperiam esse, adipisci distinctio beatae, ea nam aut atque nobis minus nisi eos enim dolor cumque eum. Modi quam quae natus dolorum?
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
