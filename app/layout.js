import "./globals.scss";
import { Providers } from "@/redux/provider";
import Loader from "@/components/core/Loader";
import Footer from "@/components/core/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: 'Shubham Housing Finance',
  description: "Shubham Housing Finance provide affordable housing loan with a hassle-free documentation process and easy EMI options for the low-income segment.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      </head>
      <body>
        <Toaster position="top-right" reverseOrder={false} />
        <Providers>
          <Loader />
          {children}
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
