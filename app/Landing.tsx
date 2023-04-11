import React from "react";
import Link from "next/link";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="bg-gray-100 md:w-1/2 flex items-center justify-center">
        <div className="max-w-md mx-auto text-start">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome to You Wedding Planner
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            consectetur voluptates neque ullam illo fuga dolores aut enim, ea
            quibusdam maxime.
          </p>
          <Link href="/planner">
            <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </span>
          </Link>
        </div>
      </div>
      <div className="md:w-1/2 flex items-center justify-center">
        <div className="max-w-md mx-auto">
          <Image
            src="/images/planner.jpg"
            alt="Planner"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
