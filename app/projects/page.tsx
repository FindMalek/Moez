import { projects } from "@/config/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div className="font-mono max-w-full dark:bg-gray-900 dark:text-gray-100 bg-gray-100 text-gray-900">
      <div className="p-5 max-w-6xl mx-auto flex flex-col items-center">
        {/* Projects Section */}
        <div className="mt-10">
          <div className="flex gap-4 items-center">
            <h2 className="text-2xl font-bold mb-2">Projects</h2>
          </div>

          <div
            className="grid grid-cols-1 
            sm:grid-cols-2
            md:grid-cols-4 gap-4"
          >
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
