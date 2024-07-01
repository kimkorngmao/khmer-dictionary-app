import Head from "next/head";
import { Font } from "./components/Font";
import "./globals.css";

export const metadata = {
  title: "Khmer Dictionary",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png"/>
      <link rel="manifest" href="./site.webmanifest"/>
      </Head>
      <Font/>
      <body>{children}</body>
    </html>
  );
}
