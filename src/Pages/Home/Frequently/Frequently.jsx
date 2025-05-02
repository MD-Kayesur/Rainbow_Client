import React from "react";
import Header from "../../../Components/Header";
import { NavLink } from "react-router-dom";
import { FaRightLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const Frequently = () => {
  return (
    <div className="bg-gradient-to-b from-blue-300   via-red-300 to-green-300 py-10  ">
      <div className="flex items-center justify-center w-11/12 mx-auto">
        <div>
          <Header
            className="text-6xl py-5 w-[500px] text-start"
            title={"Frequently Asked Questions"}></Header>
        </div>
        <div className=" ">
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">What is Rainbow?</div>
            <div className="collapse-content text-sm">
              Rainbow is an open source, self-custodial wallet for Ethereum and
              Ethereum based cryptocurrencies and collectibles.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border my-3 border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">Is Rainbow safe?</div>
            <div className="collapse-content text-sm">
              Yes, Rainbow is safe. We never have access to your wallet’s
              information or private keys.{" "}
              <a className="underline text-red-500" href="">
                {" "}
                You can learn more about what makes Rainbow safe here
              </a>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              How can I contact Rainbow's customer support?
            </div>
            <div className="collapse-content text-sm">
              You can contact Rainbow’s support team by emailing
              support@rainbow.me.
            </div>
          </div>
          <NavLink to='/frequently'
            className={"text-2xl font-bold flex items-center gap-2 my-3"}>
            See more FAQs <FaArrowRight></FaArrowRight>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Frequently;
