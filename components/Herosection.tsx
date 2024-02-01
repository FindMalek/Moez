import Image from "next/image";

import Skills from "@components/Skills";
import SocialLinks from "@components/navigation/SocialLinks";

export default function Herosection() {
  return (
    <div className="w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden mt-5">
      <div className="sm:flex sm:items-center px-6 py-4 p-8">
        <div className="text-center sm:text-left sm:flex-grow">
          <p className="text-xl leading-tight">Moez</p>
          <p className="text-sm leading-tight text-gray-600 dark:text-gray-400">
            Freshman at INSA Toulouse, passionate about CS
          </p>
          <p className="mt-2 text-gray-500 dark:text-gray-300">
            Interned at Amadeus, worked on a project with a team of 5
          </p>
          <div>
            <Skills />
            <SocialLinks />
          </div>
        </div>
        <div className="sm:w-1/3 flex justify-center sm:justify-start">
          <Image
            src="https://placehold.co/1000x1000?text=Hello\nWorld"
            alt="Picture of the author"
            width={1000}
            height={1000}
            layout="intrinsic"
          />
        </div>
      </div>
    </div>
  );
}
