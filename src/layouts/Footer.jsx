import React from "react";
import LocationIcon from "../assets/svg/Location";
import MobileIcon from "../assets/svg/Mobile";
import TwitterIcon from "../assets/svg/Twitter";
import FaceBookIcon from "../assets/svg/Facebook";
import LinkedinIcon from "../assets/svg/LinkedingIcon";
const ListA = ["Home", "Examples", "Pricing", "Updates"];
const ListB = ["Home", "Examples", "Pricing", "Updates"];
const ListC = ["Home", "Examples", "Pricing", "Updates"];
function FooterData({ title, list }) {
  return (
    <div>
      <div className="text-white">
        <h2 className="text-[24px]">{title}</h2>
        <div className="mt-6 space-y-4 list-none">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      </div>
    </div>
  );
}
const Footer = () => {
  return (
    <div className="w-full  bg-black md:max-w-[1579px] mx-0 md:mx-auto py-2 md:py-[50px] px-5 md:px-[199px] ">
      <div className="w-[100%] flex flex-col lg:flex-row gap-8">
        <div className="w-[50%] flex flex-col items-center md:flex-row gap-4 px-4 py-2 gap-x-[75px] ml-4">
          {<FooterData title="Fingertipe" list={ListA} />}
          {<FooterData title="Resources" list={ListB} />}
          {<FooterData title="About" list={ListC} />}
        </div>
        <div className="w-[50%] py-14">
          <div className="flex gap-3.5 items-center">
            <LocationIcon />
            <h3 className="text-2xl w-full">
              7480 Mockingbird Hill undefined{" "}
            </h3>
          </div>

          <div className="flex gap-3.5 pt-4">
            <MobileIcon/>
            <h3 className="text-xl w-full">(239) 555-0108</h3>
          </div>

          <div className="flex gap-x-6 pt-4 pb-2">
            <TwitterIcon/>
            <FaceBookIcon/>
            <LinkedinIcon/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
