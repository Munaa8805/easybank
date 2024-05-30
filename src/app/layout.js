import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "EasyBank",
  description: "Easy bank, next generation digital banking",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={publicSans.className}>{children}</body>
    </html>
  );
}
