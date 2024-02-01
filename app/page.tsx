import Link from "next/link";
import ProjectCard from "@components/ProjectCard";
import Herosection from "@/components/Herosection";
import { projects } from "@/config/projects";

export default function Page() {
  return (
    <div className="font-mono max-w-full dark:bg-gray-900 dark:text-gray-100 bg-gray-100 text-gray-900">
      <div className="p-5 max-w-6xl mx-auto flex flex-col items-center">
        <Herosection />
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
