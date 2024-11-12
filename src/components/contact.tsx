import Image from "next/image";
import { ArrowRight } from "lucide-react";
export default function Contact() {
  return (
    <section className="relative w-full h-[500px] mt-10">
      <div className="absolute inset-0">
        <Image
          src="/contact.jpg"
          alt="Agriculture background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-30" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Get invloved in the <br /> agriculture uprising
        </h1>
        <div className="flex gap-y-2 items-center flex-col sm:flex-row mx-auto sm:bg-white rounded-full p-2 shadow-md ">
          <input
            type="text"
            placeholder="Type your email address"
            className="flex-1 px-4 py-2 text-gray-800 rounded-l-full focus:outline-none rounded-full sm:rounded-none"
          />
          <button className="flex items-center  px-4 py-2  text-black bg-lime-300 rounded-full font-semibold hover:bg-lime-400">
            Join now
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
