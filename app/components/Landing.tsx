import React from "react";
import Link from "next/link";
import Image from "next/image";

const LandingPage = () => {
  return (
    <section className="container mx-auto  my-5 py-5 text-main">
      <div className="grid grid-cols-1 md:grid-cols-2   my-5 py-5">
        <div className=" md:col-span-1 mb-4 flex items-center justify-center">
          <div className="max-w-md mx-auto text-center md:text-start">
            <h1 className="text-4xl font-bold mb-6">The Planner</h1>
            <p className="text-l text-gray-600 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              consectetur voluptates neque ullam illo fuga dolores aut enim, ea
              quibusdam maxime.
            </p>
            <Link href="/planner">
              <span className="bg-main text-white hover:bg-light  font-bold py-2  px-4  rounded ">
                Start Plan Now
              </span>
            </Link>
          </div>
        </div>
        <div className=" md:col-span-1 flex items-center justify-center">
          <div className="max-w-md mx-auto">
            <Image
              src="/images/planner.png"
              alt="Planner"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
