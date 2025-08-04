import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import headphone from "../../public/images/hero.png";

const About = () => {
  return (
    <section className="py-14 bg-gray-50">
      <main className="px-20">
        <div className="flex items-center gap-14">
          <main className="flex w-2/4 flex-col">
            <h1 className="text-7xl font-bold mb-5">
              Pure sound, no added noise
            </h1>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <FaCheckCircle className="icon-about text-red-700" />
                <p className="text-neutral-600">
                  High-Resolution Audio compatible
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <FaCheckCircle className="icon-about text-red-700" />
                <p className="text-neutral-600">
                  Ergonomic, enfolding design earpads
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <FaCheckCircle className="icon-about text-red-700" />
                <p className="text-neutral-600">
                  High quality wireless audio with BLUETOOTH® and LDAC
                  technology
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <FaCheckCircle className="icon-about text-red-700" />
                <p className="text-neutral-600">
                  Smart listening experience by Adaptive Sound Control{" "}
                </p>
              </div>
            </div>
          </main>
          <Image
            src={headphone}
            alt=""
            className="h-[450px] w-[400px] "
            width={500}
            height={500}
          />
        </div>
        <div className="flex items-center mt-5 flex-row-reverse gap-18">
          <main className="flex w-2/4 flex-col">
            <h1 className="text-7xl font-bold mb-5">
              Pure sound, no added noise
            </h1>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <FaCheckCircle className="icon-about text-red-700" />
                <p className="text-neutral-600">
                  High-Resolution Audio compatible
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <FaCheckCircle className="icon-about text-red-700" />
                <p className="text-neutral-600">
                  Ergonomic, enfolding design earpads
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <FaCheckCircle className="icon-about text-red-700" />
                <p className="text-neutral-600">
                  High quality wireless audio with BLUETOOTH® and LDAC
                  technology
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <FaCheckCircle className="icon-about text-red-700" />
                <p className="text-neutral-600">
                  Smart listening experience by Adaptive Sound Control{" "}
                </p>
              </div>
            </div>
          </main>
          <Image
            src={headphone}
            alt=""
            className="h-[450px] w-[400px] "
            width={500}
            height={500}
          />
        </div>
      </main>
    </section>
  );
};

export default About;
