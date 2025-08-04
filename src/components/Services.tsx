import React from "react";
import { MdOutlineTouchApp } from "react-icons/md";
import { FaFingerprint } from "react-icons/fa";
import { IoWifi } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { IoIosApps } from "react-icons/io";

const Services = () => {
  const tableservices = [
    {
      icon: <MdOutlineTouchApp className=" text-red-700 icon" />,
      name: "Touch to buy",
    },
    {
      icon: <FaFingerprint className=" text-red-700 icon " />,
      name: "Secure Data",
    },
    {
      icon: <IoWifi className=" text-red-700 icon " />,
      name: "Wifi Support",
    },
    {
      icon: <IoIosNotifications className=" text-red-700 icon " />,
      name: "Notifications Live",
    },
    {
      icon: <IoChatbubbleEllipsesOutline className=" text-red-700 icon " />,
      name: "Get In Touch",
    },
    {
      icon: <IoIosApps className=" text-red-700 icon " />,
      name: "App Watch",
    },
  ];

  return (
    <section className="h-screen flex items-center justify-center bg-gray-50">
      <main className="px-20">
        <div className="grid grid-cols-3  gap-5 p-4 ">
          {tableservices.map((ser, index) => (
            <div key={index} className="flex flex-col items-center gap-4 p-4 ">
              <span>{ser.icon} </span>
              <h4 className="font-semibold text-xl">{ser.name}</h4>
              <p className="text-sm text-center text-neutral-700">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                modi porro, iste tempora dicta!
              </p>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Services;
