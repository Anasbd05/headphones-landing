import React from "react";

const Contact = () => {
  return (
    <section className="py-14 bg-gray-50">
      <main className="px-28 w-full flex flex-col justify-center ">
        <div className="flex flex-col items-center gap-3">
          <h1 className="capitalize text-4xl font-bold text-center">
            Get in touch
          </h1>
          <p className="text-neutral-600 text-center w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab
            officiis.omnis voluptatibus natus harum.{" "}
          </p>
        </div>
        <main className="grid grid-cols-2 mt-8 gap-10">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              className=" outline-none px-3 py-3 bg-gray-200 rounded-lg shadow-sm "
              placeholder="Name"
            />
            <input
              type="text"
              className=" outline-none px-3 py-3 bg-gray-200 rounded-lg shadow-sm "
              placeholder="Email"
            />
            <input
              type="text"
              className=" outline-none px-3 py-3 bg-gray-200 rounded-lg shadow-sm "
              placeholder="Subject"
            />
          </div>
          <textarea
            placeholder="Message"
            className=" outline-none px-3 py-3  bg-gray-200 rounded-lg shadow-sm "
          />
        </main>
        <button className="bg-red-700 hover:shadow-[3px_3px_#000] duration-500 mt-6 w-44 justify-center py-3 font-bold flex mx-auto px-6 rounded-md text-white ">
          Send Message
        </button>
      </main>
    </section>
  );
};

export default Contact;
