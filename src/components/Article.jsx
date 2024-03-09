import { React } from "react";
import { useState } from "react";
import Share from '/src/components/Share.jsx'

export default function Article() {
  // create variable state isIconClicked = false
  const [isIconClicked, setIsIconClicked] = useState(false);

  // create handle event if icon is clicked
  console.log(isIconClicked)

  return (
    <main className="px-8 mt-10 font-manrope">
      <div className="bg-white rounded-tr-md rounded-tl-md rounded-bl-md rounded-br-md lg:rounded-bl-md xl:w-[46%] lg:w-[70%] lg:flex lg:flex-row lg:h-auto mx-auto relative">
        <img
          src="images/drawers.jpg"
          alt="image of drawers with a plant on top"
          className="rounded-tr-md rounded-tl-md h-48 w-full lg:h-auto lg:w-2/5 lg:rounded-bl-md lg:rounded-tr-none lg:object-cover lg:object-left"
        />
        <div className="bg-white p-8 rounded-bl-md rounded-br-md lg:rounded-bl-none lg:rounded-tr-md">
          <div className="text-payne-gray font-semibold leading-snug">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </div>
          <p className="text-sm text-slate-gray mt-4">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I've got some simple tips to help
            you make any room feel complete.
          </p>
          <div className="flex items-center mt-8">
            {
              isIconClicked && 
              <Share/>
            }
            <div className="flex items-center ">
              <img
                src="/images/avatar-michelle.jpg"
                alt="avatar of michelle"
                className="h-10 w-10 rounded-full"
              />
              <div className="ml-4">
                <div className="font-semibold text-payne-gray text-sm">
                  Michelle Appleton
                </div>
                <div className="text-slate-gray text-sm font-thin">
                  28 Jun 2020
                </div>
              </div>
            </div>
            <div onClick={() => setIsIconClicked(!isIconClicked)} className="w-8 h-8 ml-auto rounded-full bg-gray-200 flex items-center justify-center cursor-pointer z-40">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
                <path
                  fill="#6E8098"
                  d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
