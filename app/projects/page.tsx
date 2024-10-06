import React from "react";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight, Tag } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { describe } from "node:test";
import { table } from "console";
import { url } from "inspector";

const playFairDisplay = Playfair_Display({
  weight: "500",
  subsets: ["latin"],
});

export const metadata = {
  title: "Adedoyin Emmanuel - Software Engineer",
  description: "My Projects Adedoyin Emmanuel Adeniyi - CS, Software Engineer",
};

const Projects = () => {
  const projects = [
    {
      name: "Methane CLI",
      tag: "CLI",
      description:
        "Methane is a CLI tool that helps developers easily create React components, pages or NextJS components, pages, dynamic pages and service worker files with boilerplate codes. It also comes with extra configration that allows you choose either JavaScript or TypeScript templates.",
      languages: ["TypeScript"],
      url: "https://github.com/adedoyin-emmanuel/methane-cli",
    },

    {
      name: "Telebot",
      tag: "Bot",
      description:
        "Telebot is a telegram bot starter kit. Built on the Telegraf Framework. This template allows you to build small simple bots to complex bots with ease. This template enables you to create small, simple bots, or complex bots with ease.",
      languages: ["TypeScript"],
      url: "https://github.com/adedoyin-emmanuel/telebot",
    },

    {
      name: "Squad JS SDK",
      tag: "SDK",
      description:
        "Squad JavaScript SDK provides a convenient interface for interacting with Squad Payment Gateway in your applications",
      languages: ["TypeScript"],
      url: "https://github.com/adedoyin-emmanuel/squad-js-sdk",
    },

    {
      name: "Fotograph",
      tag: "Desktop Apps",
      description:
        "Fotograph is an open source powerful image manipulation software with a variety of tools for image conversion, bulk image downloading, AI-based image generation, background removal, image resizing, and compression.",
      languages: ["TypeScript"],
      url: "https://fotograph.vercel.app",
    },

    {
      name: "Book Management API",
      tag: "API",
      description:
        "A simple API with ASP.NET to learn AutoMapper, Repository Pattern and Unit of work",
      languages: ["C#"],
      url: "https://github.com/adedoyin-emmanuel/book-management-api",
    },

    {
      name: "Caresync API",
      tag: "API",
      description:
        "CareSync API, an application bridging healthcare with technology",
      languages: ["TypeScript"],
      url: "https://gitlab.com/adedoyin-emmanuel/caresync-api",
    },

    {
      name: "Caresync",
      tag: "Web App",
      description:
        "CareSync is a web application that helps patients and doctors to manage their health records and appointments",
      languages: ["TypeScript", "NextJS", "DaisyUI"],
      url: "https://gitlab.com/adedoyin-emmanuel/caresync",
    },

    {
      name: "Flames",
      tag: "Web App",
      description:
        "Flames is a web application that helps users to check their compatibility with their crushes",
      languages: ["TypeScript", "NextJS", "ShadcnUI"],
      url: "https://flames.brimble.app",
    },

    {
      name: "Linq",
      tag: "Web App",
      description:
        "Linq is an open source tool that simplifies social sharing by allowing users to quickly generate shareable links for their content.",
      languages: ["TypeScript", "NextJS", "ShadcnUI"],
      url: "https://uselinq.vercel.app",
    },

    {
      name: "Blazor Weather App",
      tag: "Web App",
      description: "A weather app built with Blazor and OpenWeatherAPI",
      languages: ["C#", "Blazor", "DaisyUI"],
      url: "https://github.com/adedoyin-emmanuel/blazor-weather-app",
    },

    {
      name: "Taskify",
      tag: "Web App",
      description:
        "Taskify is a simple task management application that helps users to manage their tasks and to-do lists",
      languages: ["C#", "ASP.NET", "DaisyUI", "DOTNET"],
      url: "https://github.com/adedoyin-emmanuel/taskify",
    },

    {
      name: "Prokeep API",
      tag: "API",
      description:
        "A simple product API built with ASP.NET CORE, Entity Framework and Postgres SQL",
      languages: ["C#", "ASP.NET", "EFCORE", "MYSQL"],
      url: "https://github.com/adedoyin-emmanuel/prokeep-api",
    },
  ];
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
        My Projects
      </h1>
      <br />
      <div className="mx-auto flex items-center justify-center md:w-[600px]">
        <span className="text-gray-600 mx-1">
          Behind every great solution is a coder who never gave up on a
          challenging problem." —{" "}
          <Link href={"/projects"} className="underline inline text-black">
            {" "}
            Adedoyin Emmanuel
          </Link>
        </span>
      </div>

      <div></div>
    </div>
  );
};

export default Projects;
