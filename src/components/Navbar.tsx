import Link from "next/link";
import { buttonVariants } from "./ui/Button";

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  return (
    <div className="w-full p-3 rounded-ss-2xl rounded-se-2xl">
      <div className="w-full flex justify-between items-center h-full p-5 bg-slate-200">
        <div className="flex gap-8">
          <div>SMART</div>
          <Link href="/">Home</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">Services</Link>
        </div>
        <div>
          <Link href="/" className={`${buttonVariants()} bg-slate-100 text-black hover:bg-slate-400`}>Log in</Link>
          <Link href="/" className={buttonVariants()}>Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
