import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Anshul Kumaar & co. | AI Agents & Automations",
  description: "We build modern websites with AI integrations, custom agents, chatbots, CRM automations, and workflow systems that help businesses move faster.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased noise-bg`} style={{ background: '#080808', color: '#fff' }}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
