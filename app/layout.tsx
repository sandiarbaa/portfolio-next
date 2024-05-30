"use client";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { usePathname } from "next/navigation";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  // console.log(pathname);
  const stairTransition = [
    "/resume/education",
    "/resume/skills",
    "/resume/about",
  ];

  return (
    <html lang="en">
      <body className={jetbrainsMono.className}>
        <Header />
        {!stairTransition.includes(pathname) && <StairTransition />}
        {/* <StairTransition /> */}
        {/* <PageTransition>{children}</PageTransition> */}
        {children}
      </body>
    </html>
  );
}
