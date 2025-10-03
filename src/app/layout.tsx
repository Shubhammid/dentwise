import type { Metadata } from "next";
import { Lato  } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], 
  display: "swap",
});

export const metadata: Metadata = {
  title: "DentWise - AI Powered Dental Assistant",
  description:
    "DentWise is an AI-powered dental assistant designed to help patients and professionals with instant dental guidance, treatment insights, and oral health support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${lato.className} antialiased`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
