import React from "react";
import pic1 from "../../public/images/c1.png";
import pic2 from "../../public/images/c2.png";
import pic3 from "../../public/images/c3.png";
import Image from "next/image";

const Reviews = () => {
  const testimonials = [
    {
      image: pic1,
      name: "Anass dev",
      review:
        "I think these headphones are a solid choice for anyone looking for a good balance of comfort and sound quality. I would definitely recommend giving them a try!",
    },
    {
      image: pic2,
      name: "Marwan ball",
      review:
        "I’m really impressed! Right out of the box, they feel sturdy, yet comfortable to wear for long periods.",
    },
    {
      image: pic3,
      name: "Siham ceo",
      review:
        "I appreciate is the battery life. I’ve gone several days without needing to charge them.",
    },
  ];

  return (
    <section className="py-14 bg-gray-50">
      <h1 className=" capitalize text-4xl font-bold text-center">
        +32k Customers trust us
      </h1>
      <main className="mt-10 px-20 ">
        <div className="grid grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <div
              key={index}
              className="flex flex-col shadow-md gap-2 p-5 rounded-lg"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={testi.image}
                  className="rounded-full"
                  width={40}
                  height={40}
                  alt=""
                />
                <h4 className="text-xl font-semibold">{testi.name}</h4>
              </div>
              <p className="text-neutral-700 mt-3">{testi.review}</p>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Reviews;
