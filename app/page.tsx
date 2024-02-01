import Link from "next/link";

import { projects } from "@/config/projects";

import Skills from "@components/Skills";
import ProjectCard from "@components/ProjectCard";
import SocialLinks from "@components/navigation/SocialLinks";

export default function Page() {
  return (
    <div className="font-mono max-w-full dark:bg-gray-900 dark:text-gray-100 bg-gray-100 text-gray-900">
      <div className="p-5 max-w-6xl mx-auto flex flex-col items-center">
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden mt-5">
          <div className="sm:flex sm:items-center px-6 py-4  p-8">
            <div className="text-center sm:text-left sm:flex-grow">
              <div className="mb-4">
                <p className="text-xl leading-tight">Moez</p>
                <p className="text-sm leading-tight text-gray-600 dark:text-gray-400">
                  Freshman at INSA Toulouse, passionate about CS
                </p>
                <p className="mt-2 text-gray-500 dark:text-gray-300">
                  Interned at Amadeus, worked on a project with a team of 5
                </p>
              </div>
            </div>
          </div>
          <div className="px-4 pb-8">
            <Skills />
            <SocialLinks />
          </div>
        </div>

        <div className="mt-10">
          <div className="flex gap-4 items-center">
            <h2 className="text-2xl font-bold mb-2">Projects</h2>
            <Link
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              href="/projects"
            >
              See all projects
            </Link>
          </div>

          <div
            className="grid grid-cols-1 
            sm:grid-cols-2
            md:grid-cols-4 gap-4"
          >
            {projects
              .filter((_, i) => i < 4)
              .map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
