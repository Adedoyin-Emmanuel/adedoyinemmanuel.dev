"use client";
import React from "react";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import gsap from "gsap";

const playFairDisplay = Playfair_Display({
  weight: "500",
  subsets: ["latin"],
});

const Projects = () => {
  const [selectedTag, setSelectedTag] = React.useState<string | null>("All");
  const [searchQuery, setSearchQuery] = React.useState("");

  const projects = [
    {
      name: "Methane CLI",
      tag: "CLI",
      description:
        "Methane is a CLI tool that helps developers easily create React components, pages or NextJS components, pages, dynamic pages and service worker files with boilerplate codes. It also comes with extra configuration that allows you to choose either JavaScript or TypeScript templates.",
      languages: ["TypeScript"],
      url: "https://github.com/adedoyin-emmanuel/methane-cli",
    },
    {
      name: "Telebot",
      tag: "Bot",
      description:
        "Telebot is a telegram bot starter kit. Built on the Telegraf Framework. This template allows you to build small simple bots to complex bots with ease.",
      languages: ["TypeScript"],
      url: "https://github.com/adedoyin-emmanuel/telebot",
    },
    {
      name: "Squad JS SDK",
      tag: "SDK",
      description:
        "Squad JavaScript SDK provides a convenient interface for interacting with Squad Payment Gateway in your applications.",
      languages: ["TypeScript"],
      url: "https://github.com/adedoyin-emmanuel/squad-js-sdk",
    },
    {
      name: "Fotograph",
      tag: "Desktop App",
      description:
        "Fotograph is an open source powerful image manipulation software with a variety of tools for image conversion, bulk image downloading, AI-based image generation, background removal, image resizing, and compression.",
      languages: ["TypeScript"],
      url: "https://fotograph.vercel.app",
    },
    {
      name: "Book Management API",
      tag: "API",
      description:
        "A simple API with ASP.NET to learn AutoMapper, Repository Pattern and Unit of Work.",
      languages: ["C#"],
      url: "https://github.com/adedoyin-emmanuel/book-management-api",
    },
    {
      name: "Caresync API",
      tag: "API",
      description:
        "CareSync API, an application bridging healthcare with technology.",
      languages: ["TypeScript"],
      url: "https://gitlab.com/adedoyin-emmanuel/caresync-api",
    },
    {
      name: "Caresync",
      tag: "Web App",
      description:
        "CareSync is a web application that helps patients and doctors manage their health records and appointments.",
      languages: ["TypeScript", "NextJS", "DaisyUI"],
      url: "https://gitlab.com/adedoyin-emmanuel/caresync",
    },
    {
      name: "Flames",
      tag: "Web App",
      description:
        "Flames is a web application that helps users check their compatibility with their crushes.",
      languages: ["TypeScript", "NextJS", "ShadcnUI"],
      url: "https://flames.brimble.app",
    },
    {
      name: "Linq",
      tag: "Web App",
      description:
        "Linq is an open-source tool that simplifies social sharing by allowing users to generate shareable links for their content.",
      languages: ["TypeScript", "NextJS", "ShadcnUI"],
      url: "https://uselinq.vercel.app",
    },
    {
      name: "Blazor Weather App",
      tag: "Web App",
      description: "A weather app built with Blazor and OpenWeatherAPI.",
      languages: ["C#", "Blazor", "DaisyUI"],
      url: "https://github.com/adedoyin-emmanuel/blazor-weather-app",
    },
    {
      name: "Taskify",
      tag: "Web App",
      description:
        "Taskify is a simple task management application that helps users manage their tasks and to-do lists.",
      languages: ["C#", "ASP.NET", "DaisyUI", "DOTNET"],
      url: "https://github.com/adedoyin-emmanuel/taskify",
    },
    {
      name: "Prokeep API",
      tag: "API",
      description:
        "A simple product API built with ASP.NET CORE, Entity Framework, and Postgres SQL.",
      languages: ["C#", "ASP.NET", "EFCORE", "MYSQL"],
      url: "https://github.com/adedoyin-emmanuel/prokeep-api",
    },
  ];

  const tags = [
    "All",
    ...Array.from(new Set(projects.map((project) => project.tag))),
  ];

  React.useEffect(() => {
    gsap.fromTo(
      ".content-section",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  const filteredProjects = projects.filter((project) => {
    const matchesTag = selectedTag === "All" || project.tag === selectedTag;
    const matchesSearch = searchQuery
      ? project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesTag && matchesSearch;
  });

  return (
    <div className="my-4 content-section">
      <h1
        className={cn(
          playFairDisplay.className,
          "lg:text-[50px] text-3xl text-center"
        )}
      >
        My Projects
      </h1>

      <div className="mx-auto flex items-center justify-center md:w-[600px] mb-4">
        <span className="text-gray-600 mx-1 my-10">
          "Behind every great solution is a developer who never gave up on a
          challenging problem." —{" "}
          <Link href={"/projects"} className="underline inline text-black">
            Adedoyin Emmanuel
          </Link>
        </span>
      </div>

      <Input
        placeholder="Search projects..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4 w-full max-w-md mx-auto"
      />

      <div className="flex flex-wrap justify-center mb-4">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`px-4 py-2 m-2 text-sm rounded-full ${
              selectedTag === tag ? "bg-black text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-auto p-2">
        {filteredProjects.map((project) => (
          <div key={project.name} className="border p-4 rounded-lg">
            <h2 className="text-xl font-bold">{project.name}</h2>
            <p className="text-sm text-gray-600">{project.description}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.languages.map((language) => (
                <span
                  key={language}
                  className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded-full"
                >
                  {language}
                </span>
              ))}
            </div>

            <div className="mt-3">
              <Link
                href={project.url}
                className="text-black underline flex items-center"
              >
                Visit Project{" "}
                <ArrowUpRight strokeWidth={1.5} width={20} height={20} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
