import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata = {
  title: "The Planner",
  description: "Make Your Plan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg:lighter text-gray-900">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
