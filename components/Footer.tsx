export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 font-mono absolute bottom-0 w-full">
      <p>
        &copy; {new Date().getFullYear()} Moez Yakoubi. All rights reserved.
      </p>
    </footer>
  );
}
