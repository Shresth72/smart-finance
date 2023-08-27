import { FC } from "react";
import { Button, buttonVariants } from "../ui/Button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { features } from "@/constants/features";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div>
      <div>
        <div>
          <h3>01.</h3>
          <p>
            Send, recieve and pay your all financial needs with your convenient
            card.
          </p>
        </div>
        <div>
          <h1>Smart financial service</h1>
          <Link href="/" className={buttonVariants()}>
            Open a card
          </Link>
          <p>Banking solution that works for you in easy way!</p>
        </div>
      </div>
      <div>
        {features.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
