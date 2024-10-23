import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex sticky top-0 w-full bg-blue-800 h-20 px-4 shadow-lg z-50">
      <div className="w-auto p-4">
        <Image src="/img/logo.png" alt="logo" width={80} height={160} />
      </div>
      <div className="flex justify-evenly items-center py-2 px-8 w-3/5">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-blue-100 font-serif font-bold">
          Tuition-Free Education Program on Latest Technologies
        </h1>
      </div>
      <div className="flex justify-center gap-4 md:gap-8 items-center py-2 px-4 w-2/5">
        <a href="#home" className="text-white text-sm md:text-lg font-sans transition hover:scale-110 hover:text-cyan-300">
          Home
        </a>
        <a href="#apply" className="text-white text-sm md:text-lg font-sans transition hover:scale-110 hover:text-cyan-300">
          Apply
        </a>
        <a href="#jobs" className="text-white text-sm md:text-lg font-sans transition hover:scale-110 hover:text-cyan-300">
          Jobs
        </a>
        <a href="#result" className="text-white text-sm md:text-lg font-sans transition hover:scale-110 hover:text-cyan-300">
          Result
        </a>
        <a href="#courses" className="text-white text-sm md:text-lg font-sans transition hover:scale-110 hover:text-cyan-300">
          Courses
        </a>
      </div>
    </nav>
  );
}
