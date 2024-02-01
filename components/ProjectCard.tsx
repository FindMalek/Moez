import Image from "next/image";
import Link from "next/link";

import { ProjectCardProps } from "@/types/index";

export default function ProjectCard({
  title,
  description,
  imageUrl,
}: ProjectCardProps) {
  return (
    <Link href={`projects#${title.toLowerCase().replace(/ /g, "-")}`}>
      <section
        id={title.toLowerCase().replace(/ /g, "-")}
        className="max-w-sm rounded overflow-hidden shadow-lg m-4"
      >
        <Image
          width={1000}
          height={600}
          className="w-full"
          src={imageUrl}
          alt="Project Image"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </section>
    </Link>
  );
}
