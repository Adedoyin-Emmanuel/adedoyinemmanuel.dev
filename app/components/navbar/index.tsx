"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Twitter, Linkedin, Github } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="w-full flex items-center justify-evenly p-4">
      <div className="flex items-center w-full">
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

      <section className="w-full hidden lg:flex items-center justify-center gap-6 ">
        <Link
          href="/"
          className={`${
            isActive("/") ? "text-black font-bold" : "text-gray-500"
          }`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`${
            isActive("/about") ? "text-black font-bold" : "text-gray-500"
          }`}
        >
          About
        </Link>
        <Link
          href="/projects"
          className={`${
            isActive("/projects") ? "text-black font-bold" : "text-gray-500"
          }`}
        >
          Projects
        </Link>
        <Link
          href="/hall-of-fame"
          className={`${
            isActive("/hall-of-fame") ? "text-black font-bold" : "text-gray-500"
          }`}
        >
          Hall Of Fame
        </Link>
      </section>

      <section className="w-full hidden lg:flex items-center justify-end gap-4">
        <Link href="https://twitter.com">
          <Twitter
            strokeWidth={1}
            className="hover:text-gray-900 hover:scale-110 transition-transform duration-200 ease-in-out"
          />
        </Link>
        <Link href="https://github.com">
          <Github
            strokeWidth={1}
            className="hover:text-gray-900 hover:scale-110 transition-transform duration-200 ease-in-out"
          />
        </Link>
        <Link href="https://linkedin.com">
          <Linkedin
            strokeWidth={1}
            className="hover:text-gray-900 hover:scale-110 transition-transform duration-200 ease-in-out"
          />
        </Link>
      </section>
    </div>
  );
};

export default Navbar;
