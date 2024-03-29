import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/Navbar";
import Menu from "@/components/menu/page";
import { ReactNode, Suspense } from "react";
import styles from "./layout.module.css";
import { ClerkProvider } from "@clerk/nextjs";
import Loading from "@/app/(face)/loading";

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
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css"
              />
              {children}
              {modal}
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
