import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} dark:bg-black bg-zinc-100 flex flex-row justify-center`}>{children}</body>
    </html>
  );
}
