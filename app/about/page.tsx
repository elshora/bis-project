import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import RootLayout from "../layout";
import Link from "next/link";

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us | Next Shop</title>
      </Head>
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="mb-4">
          Next Shop is a leading online retailer of high-quality products. We
          offer a wide range of products, including clothing, accessories,
          electronics, and more. Our mission is to provide our customers with
          the best shopping experience possible, from the moment they visit our
          website to the moment they receive their order.
        </p>
        <p className="mb-4">
          We are committed to providing our customers with the highest level of
          customer service. Our team of experts is always available to answer
          any questions you may have and to help you find the perfect product
          for your needs. We also offer fast and reliable shipping, so you can
          get your order as quickly as possible.
        </p>
        <p className="mb-4">
          Thank you for choosing Next Shop. We look forward to serving you and
          providing you with the best shopping experience possible.
        </p>
      </div>
      <div className="text-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link href="/">Home</Link>
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 ml-1 px-4 rounded">
          <Link href="/planner">Planner</Link>
        </button>
      </div>
    </>
  );
};

export default AboutPage;
