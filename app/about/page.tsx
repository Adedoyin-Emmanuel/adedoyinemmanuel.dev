import React from "react";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const playFairDisplay = Playfair_Display({
  weight: "500",
  subsets: ["latin"],
});

export const metadata = {
  title: "Adedoyin Emmanuel - Software Engineer",
  description: "About Adedoyin Emmanuel Adeniyi - CS, Software Engineer",
};

const randomImage = () => {
  const images = ["/emma-1.jpeg", "/emma-2.jpg", "/emma-3.jpg"];

  return images[Math.floor(Math.random() * images.length)];
};

const About = () => {
  return (
    <div className="my-4">
      <br />
      <br />
      <h1
        className={cn(
          playFairDisplay.className,
          "lg:text-[50px] text-3xl text-center"
        )}
      >
        Adedoyin Emmanuel Adeniyi
      </h1>
      <br />

      <div className="mx-auto flex items-center justify-center">
        <span className="text-gray-600 mx-1">CS Major </span> @{" "}
        <Link
          href={"https://uopeople.edu "}
          className="underline flex items-end text-center mx-1"
        >
          {" "}
          University Of The People <ArrowUpRight className="h-5 w-5" />
        </Link>
      </div>

      <div className="flex items-center justify-center my-4">
        <div className="lg:flex items-center justify-center lg:gap-6 lg:w-[900px]">
          <img
            src={randomImage()}
            alt="Adedoyin Emmanuel Adeniyi"
            width={380}
            height={600}
            className="rounded-lg mx-auto"
          />

          <div className="my-5">
            <p>
              I am a Software Engineer with over 4 years of experience. I'm an
              Alumni at{" "}
              <Link
                href="https://alxafrica.com"
                className="underline text-blue-500"
              >
                ALX Software Engineer Program
              </Link>{" "}
              , currently pursuring a Bachelors degree in Computer Science with
              a focus on Backend systems and Cloud infastructure.
            </p>

            <Separator className="my-5" />

            <p>
              Currently, I mainly work on Backend Systems
              (API/Mirco-Services/DB) , Bot Development and Web Scrapping.
            </p>

            <br />

            <p>
              I also build fullstack applications (Web Apps, PWAs). I build
              fast, seamless and scalable user interfaces along with scaleable
              backend systems.
            </p>

            <br />

            <p>
              I love open source thus I make most of my side projects open
              source with the hope people would be able to learn and use the
              things I build. I've built serveral libraries, SDKs, CLI tools &
              BOTs. In web-frameworks, payment gateways, automation and bot
              development. All of my projects are on my Github.{" "}
              <Link
                href="https://alxafrica.com"
                className="underline text-blue-500"
              >
                Github - @adedoyin-emmanuel
              </Link>{" "}
            </p>

            <Separator className="my-5" />

            <p>
              In my free time, I enjoy playing Call Of Duty and Racing Games.{" "}
            </p>

            <Link href={"/projects"}>
              <button className="rounded-[30px] my-4 border hover:bg-black transition-all duration-400 ease-in hover:text-white border-black p-2 w-32 flex items-center justify-center">
                Projects <ArrowUpRight strokeWidth={1.5} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
