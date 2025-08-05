import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" py-5 px-20 flex sticky shadow-md backdrop-blur-md items-center justify-between ">
      <h1 className="text-3xl font-bold">
        Head<span className="text-white">Phones</span>
      </h1>
      <main className="flex items-center gap-5">
        <Link
          className="text-white font-semibold  hover:decoration-white hover:underline underline-offset-4 decoration-1 duration-500"
          href={"/"}
        >
          Home
        </Link>
        <Link
          className="text-white font-semibold  hover:decoration-white hover:underline underline-offset-4 decoration-1 duration-500"
          href={"/"}
        >
          About
        </Link>
        <Link
          className="text-white font-semibold  hover:decoration-white hover:underline underline-offset-4 decoration-1 duration-500"
          href={"/"}
        >
          Services
        </Link>
        <Link
          className="text-white font-semibold  hover:decoration-white hover:underline underline-offset-4 decoration-1 duration-500"
          href={"/"}
        >
          Contact
        </Link>
      </main>
      <button className="py-2 px-5 rounded-lg bg-green-500 text-white ">
        Buy Now
      </button>
    </div>
  );
};

export default Navbar;
