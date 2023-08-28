import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import Image from "next/image";
import image from "../../public/Asset 1.svg";
import { getServerSession } from "next-auth";
import { UserAccountNav } from "./auth-comps/UserAccountNav";

interface NavbarProps {}

const Navbar = async ({}: NavbarProps) => {
  const session = await getServerSession();
  return (
    <div className="w-full p-3 pb-0">
      <div className="w-full flex justify-between items-center h-full p-5 px-10 bg-navbar rounded-ss-3xl rounded-se-3xl">
        <div className="flex gap-8">
          <div>
            <Image src={image} alt="" width={32} />
          </div>
          <Link href="/">Home</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">Services</Link>
        </div>
        <div className=" bg-secondary rounded-full pl-2">
          <Link
            href="/"
            className={`${buttonVariants({
              variant: "transparent",
            })}`}
          >
            Log in
          </Link>
          <Link
            href="/"
            className={buttonVariants({
              variant: "accent",
            })}
          >
            Sign up
          </Link>
        </div>
        {session?.user ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link href="/sign-in" className={buttonVariants()}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
