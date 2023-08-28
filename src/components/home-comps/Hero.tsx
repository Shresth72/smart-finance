import { FC } from "react";
import { buttonVariants } from "../ui/Button";
import Link from "next/link";
import { features } from "@/constants/features";
import "../../styles/globals.css";
import { Scene } from "../three-comps/Scene";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <>
      <div className="w-full h-[95vh] -translate-y-2 mt-0 bg-gradient-to-br from-foreground to-foreground200 p-8 px-14 pt-20 rounded-3xl text-background">
        <div className="flex w-full gap-12">
          <div className="flex-1 flex flex-col gap-4 max-w-[170px] relative z-20">
            <h3>01.</h3>
            <p>
              Send, recieve and pay your all financial needs with your
              convenient card.
            </p>
          </div>
          <div className="flex-[1.5] flex flex-col gap-6 relative z-20">
            <h1 className=" text-7xl font-semibold leading-[1]">
              Smart financial service
            </h1>
            <div className=" flex gap-6 ">
              <Link href="/" className={`${buttonVariants()} w-[60%]`}>
                Open a card
              </Link>
              <p>Banking solution that works for you in easy way!</p>
            </div>
          </div>
          <div className="flex-[2] home-parent relative z-20">
            <div className="home-div1 border-white border-2 border-r-0 rounded-tl-3xl"></div>
            <div className="home-div2 border-white border-2 border-r-0 border-t-0 rounded-bl-3xl"></div>
            <div className="home-div3 border-white border-2 border-t-0 border-r-0"></div>
            <div className="home-div4 border-white border-2 border-t-0 rounded-br-3xl"></div>
            <div className="home-div5 border-white border-2 rounded-tr-3xl"></div>
            <div className="home-div6 border-white border-2 border-r-0 p-4 pt-3">
              <div className=" underline">EASY</div>
              <div className=" underline">PROTECTED</div>
              <div className=" underline">FLEXIBLE</div>
            </div>
          </div>
        </div>
        <div className=" absolute  h-20 w-full left-0 bottom-0 rounded-b-3xl  bg-yellow-800 opacity-60 "></div>
        <div className="absolute w-full h-full left-0 bottom-0">
          {/* <Scene /> */}
        </div>
      </div>
      <div className="w-full px-20 py-2 border-[1.5px] border-r-0 border-l-0 border-black flex justify-between my-6">
        {features.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </>
  );
};

export default Hero;
