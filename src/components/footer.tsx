"use client"
import Image from "next/image";
import { motion } from "framer-motion";
export default function Footer() {
  const socialIcons = [
    {
      name: "Linkedin",
      src: "/linkedin.svg",
    },
    {
      name: "Linkedin",
      src: "/twitter.svg",
    },
    {
      name: "Facebook",
      src: "/facebook.svg",
    },
  ];

  return (
    <footer className="pt-20">
      <div className="max-w-screen-xl mx-auto">

        <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        exit={{ opacity: 0, y: -20 }}
        className="flex flex-col lg:flex-row gap-16 lg:px-0 px-7 divide-y-2 divide-zinc-600 lg:divide-y-0">
          <div className="flex flex-col gap-4 lg:w-[30%] ">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Agriswara-logo"
                height={40}
                width={40}
                className="mt-1"
              />
              <span className="text-2xl font-semibold">Agriswara</span>
            </div>

            <p className=" text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, quae eum! Aut provident esse facilis hic reprehenderit
            </p>

            <div className="flex gap-3">
              {socialIcons.map((social) => (
                <Image
                  src={social.src}
                  key={social.name}
                  alt={social.name}
                  width={30}
                  height={30}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-10 lg:pt-0">
            <h1 className="text-xl font-semibold ">Company Categories</h1>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              AgriBussiness
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Financial Services
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              IoT Services
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Educational insititutions
            </li>
          </div>

          <div className="flex flex-col gap-4 pt-10 lg:pt-0">
            <h1 className="text-xl font-semibold ">Individuals Categories</h1>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Cultivator
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Agriculture Consumer
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Agriculture Experts
            </li>
          </div>

          <div className="flex flex-col gap-4 pt-10 lg:pt-0">
            <h1 className="text-xl font-semibold ">Services</h1>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Partner
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Capital
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Smart Farming
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Market
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              AgrisPedia
            </li>
          </div>

          <div className="flex flex-col gap-4 pt-10 lg:pt-0">
            <h1 className="text-xl font-semibold ">Company</h1>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              About Us
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Blog
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              FAQ
            </li>
          </div>
        </motion.div>

        <div className="flex justify-between pt-16 pb-6 px-7 sm:flex-row flex-col gap-y-2">
          <p>&copy; 2024 Agriswara. All right reserved</p>
          <div className="flex gap-2">
          <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Privacy Policy
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Terms Of Use
            </li>
          </div>
        </div>

      </div>
    </footer>
  );
}
