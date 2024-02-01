import Link from "next/link";
import { ModeToggle } from "@theme/ModeToggle";

export default function Navbar() {
  return (
    <nav className=" text-white  p-4 flex justify-between items-center my-4 mx-auto max-w-6xl ">
      <ul className="flex justify-between">
        <li className="mr-6">
          <Link
            href="/"
            className="dark:text-white text-black hover:text-gray-300"
          >
            Home
          </Link>
        </li>
        <li className="mr-6">
          <Link
            href="/about"
            className="dark:text-white text-black hover:text-gray-300"
          >
            About
          </Link>
        </li>
        <li className="mr-6">
          <Link
            href="/projects"
            className="
            dark:text-white text-black hover:text-gray-300"
          >
            Projects
          </Link>
        </li>
        <li className="mr-6">
          <Link
            href="/contact"
            className="dark:text-white text-black hover:text-gray-300"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="bg-slate-100 dark:bg-slate-500 rounded-md">
        <ModeToggle />
      </div>
    </nav>
  );
}
