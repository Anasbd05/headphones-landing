import Image from "next/image";
import React from "react";
import hero from "../../public/images/hero.png";

const Home = () => {
  return (
    <main className="flex justify-between w-full items-center gap-10 h-[510px] px-20">
      <div className="flex flex-col w-2/4 gap-8">
        <h2 className="text-5xl font-bold text-white ">
          Superior sound, <br /> tangible quality
        </h2>
        <p className="text-gray-100 leading-relaxed">
          Sit back, relax and prepare to experience a new level of audio
          excellence. These headphones combine cutting-edge technology with the
          finest craftsmanship, for the ultimate listening experience.
        </p>
        <div className="flex gap-5">
          <button className="py-2.5 px-7 rounded-lg bg-sky-500 text-white ">
            Buy Now
          </button>{" "}
          <button className="py-2.5 px-7 rounded-lg bg-green-500 text-white ">
            Explore more
          </button>
        </div>
      </div>
      <div className="w-2/5">
        <Image
          alt=""
          className="h-[515px] -mt-5 w-full "
          src={hero}
          width={500}
          height={400}
        />
      </div>
    </main>
  );
};

export default Home;
