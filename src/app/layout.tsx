import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/Navbar";
import Menu from "@/components/menu/page";
import { ReactNode } from "react";
import styles from "./layout.module.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "n0wlk",
  description: "Generated by create next app",
};

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

type Props = { children: ReactNode; modal: ReactNode };

export default function RootLayout({ children, modal }: Props) {
  return (
    <ClerkProvider>
      <html lang="en" className={bebasNeue.className}>
        <body className={styles.body}>
          <div className={styles.container}>
            <Menu />
            <NavBar />
            <div className={styles.content}>
              {children}
              {modal}
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
