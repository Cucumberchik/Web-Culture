import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.scss";
import Header from "./layout/header/Header";
const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - Web-Культура",
    default: "Web-Культура",
  },
  description:
    "Темы, посвящённые социальной инженерии, где вы можете найти полезную информацию.",
  twitter: {
    card: "summary_large_image",
  },
};

export default  function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
