import React, { useState } from "react";
import ReferralModal from "./ReferralModal";
import image from "../assets/image.png";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openReferralModal = () => {
    setIsOpen(true);
    console.log("Opening referral modal");
  };
  const closeReferralModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="bg-sky-100 py-16 px-4 md:max-w-6xl rounded-xl">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:w-1/2">
            <div>
              <p className="text-7xl font-bold text-gray-800 mb-4 text-center">
                Let's Learn & Earn
              </p>
              <p className="text-gray-600 font-medium text-lg mb-6 text-center">
                Get a chance to win up to{" "}
                <span className="text-blue-500">Rs. 15,000</span>
              </p>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md"
                onClick={openReferralModal}
              >
                Refer Now
              </button>
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
            <img
              src={image}
              alt="Placeholder for hero section"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <ReferralModal isOpen={isOpen} onClose={closeReferralModal} />
    </>
  );
};

export default Hero;
