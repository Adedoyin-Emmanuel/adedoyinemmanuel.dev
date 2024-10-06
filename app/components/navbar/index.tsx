import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="flex items-center">
        <Avatar className="cursor-pointer">
          <AvatarImage src="/emmysoft.svg" alt="@adedoyin-emmanuel" />
          <AvatarFallback>AE</AvatarFallback>
        </Avatar>
        <div className="mx-2">
          <h3 className="font-bold text-[0.89rem]">Adedoyin Emmanuel</h3>
          <p className="text-[0.74rem] text-[#8e8e8e] py-0 md-1">
            Software Engineer
          </p>
        </div>
      </div>

      <section className="nav">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Projects</Link>
        <Link href={"/"}>Blog</Link>
          </section>
          
          <section className="socials">
              
          </section>
    </div>
  );
};

export default Navbar;
