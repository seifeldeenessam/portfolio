import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/app.css";
import { Metadata } from "next";

interface IProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Saif Essam",
  description: "Hello, I’m Saif Essam. A full stack web developer & UI Designer",
  manifest: "/meta/manifest.json",
  icons: { icon: "/meta/favicon.ico", apple: "/meta/apple-touch-icon.png" }
};

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}