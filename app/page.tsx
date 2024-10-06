import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import ColoredLink from "@/app/components/link";

const playFairDisplay = Playfair_Display({
  weight: "500",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home",
  description: "Engineering Seamless Experiences for the Digital Age.",
};

const Home = () => {
  return (
    <div className="my-4">
      <br />
      <br />

      <h1 className={cn(playFairDisplay.className, "lg:text-[50px] text-3xl")}>
        Engineering Seamless User Experiences.
      </h1>
      <br />
      <br />

      <div className="lg:text-[20px] text-[15px]">
        <p>
          I build Scalable Backend Systems, Engaging User Interfaces,
          Intelligent Bots & Web Scrapers for Automation. Creator of{" "}
          <span className="flex items-center gap-x-3 flex-wrap ">
            <ColoredLink href="https://github.com/adedoyin-emmanuel/methane-cli">
              Methane-Cli
            </ColoredLink>
            <ColoredLink href="https://fotograph.vercel.app">
              Fotograph
            </ColoredLink>
            <ColoredLink href="https://github.com/adedoyin-emmanuel/telebot">
              Telebot
            </ColoredLink>
            <ColoredLink href="https://github.com/adedoyin-emmanuel/squad-js-sdk">
              Squad-Js-SDK
            </ColoredLink>
          </span>
        </p>

        <br />
        <p>
          Software Engineer - Building scalable Backend Systems, Crafting
          Engaging User Interfaces, Intelligent Bots & Web Scrapers for
          Automation.
        </p>

        <br />
        <p>You can do great things from a small place.</p>
      </div>
    </div>
  );
};

export default Home;
