import Header from "@/components/Header";
import WrapperComponent from "@/components/WrapperComponent";
import "@rainbow-me/rainbowkit/styles.css";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "zkEdu",
  description: "Blockchain-based online education platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <WrapperComponent>
          <Header />
          {children}
        </WrapperComponent>
      </body>
    </html>
  );
}
