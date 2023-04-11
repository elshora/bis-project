import Image from "next/image";
import { Inter } from "next/font/google";
import RootLayout from "./layout";
import Link from "next/link";
import LandingPage from "./Landing";
import Navbar from "./NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <LandingPage />
    </main>
  );
}
