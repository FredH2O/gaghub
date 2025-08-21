import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GAGhub",
  description:
    "GAGHub - Your ultimate fan guide for the Roblox game Grow A Garden. Track pets, abilities, levels, and all in-game info.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable}  antialiased`}>
        <main>{children}</main>
        <footer>Test test test</footer>
      </body>
    </html>
  );
}
