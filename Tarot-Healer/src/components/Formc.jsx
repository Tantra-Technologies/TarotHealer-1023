/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function Formc() {
  return (
    <>
      <form class="space-y-4 text-gray-200">
        <div class="flex flex-wrap  space-y-4 md:space-y-0">
          <div class="w-full md:w-4/5">
            <label class="block mb-1" for="formGridCode_card">
              Name
            </label>
            <input
              class="w-full h-10 px-3 text-base text-gray-600 placeholder:text-gray-500 sm:text-sm border-0 rounded-lg focus:shadow-outline"
              type="text"
              id="formGridCode_card"
              placeholder="Your Full Name"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
          <div class="w-full px-2 md:w-4/5">
            <label class="block mb-1" for="formGridCode_email">
              Email
            </label>
            <input
              class="w-full h-10 px-3 text-base text-gray-600 placeholder:text-gray-500 border-0 sm:text-sm rounded-lg focus:shadow-outline"
              type="email"
              id="formGridCode_email"
              placeholder={"Your Email"}
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
          <div class="w-full px-2 md:w-1/3">
            <label class="block mb-1" for="formGridCode_mobile">
              Mobile Number
            </label>
            <input
              class="w-full h-10 px-3 text-base text-gray-500 placeholder:text-gray-500 sm:text-sm border-0 rounded-lg focus:shadow-outline"
              type="text"
              id="formGridCode_mobile"
              placeholder={"Number goes here"}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
          <div className="w-full px-2 md:w-4/5">
            <label htmlFor="message" className="block mb-1">
              Message
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows={5}
                className="block w-full rounded-md border-0 py-1.5 text-gray-500 shadow-sm   ring-gray-300 placeholder:text-gray-900   sm:text-sm sm:leading-6"
                placeholder={"Leave a Message"}
              />
            </div>
          </div>
          <div className="w-full px-2 md:w-4/5">
          <button class="h-10 px-5 mt-16 w-full text-indigo-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700">
            Submit
          </button>
          </div>
        </div>

      </form>
    </>
  );
}
