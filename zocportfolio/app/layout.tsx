import type { Metadata } from "next";
import { Open_Sans, Roboto_Slab } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const mainFont = Open_Sans({ subsets: ["latin"] });
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-robotoSlab",
});

export const metadata: Metadata = {
  title: "Nishant Joshi | Zoc",
  description: "Nishant Joshi's Official Portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(mainFont.className, robotoSlab.variable)}>
        {children}
      </body>
    </html>
  );
}
