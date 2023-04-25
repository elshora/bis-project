import { Inter } from "next/font/google";
import LandingPage from "./components/Landing";
import Prices from "./components/Prices";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen place-content-center bg:main">
      <LandingPage />
      <Prices />
    </main>
  );
}
