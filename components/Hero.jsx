import React from "react";
import ButtonDefault from "./ButtonDefault copy";

export default function Hero() {
  return (
    <>
      <div className="rounded flex flex-col lg:flex-row gap-8 bg-opacity-1 bg-slate-950 p-8">
        <div className="flex-1">
          <h1 className="text-blue-900 text-3xl font-extrabold mb-3">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="text-white mb-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            vel in, assumenda distinctio laboriosam vero ipsum deleniti quas
            consequatur nisi non esse voluptatibus omnis repudiandae.
          </p>
          <div>
            <ButtonDefault>Register</ButtonDefault>
          </div>
        </div>

        <div className="flex flex-1 gap-2 justify-center items-center">
          <div className="w-24 bg-white h-64 rounded-full text-center">
            hello
          </div>
          <div className="w-32 h-80 bg-white rounded-full text-center">
            hello
          </div>
          <div className="w-24 bg-white h-64 rounded-full text-center">
            hello
          </div>
        </div>
      </div>
    </>
  );
}