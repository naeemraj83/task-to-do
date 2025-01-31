import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./components/NavBar/NavBar";
import AuthProvider from "@/authprovider/AuthProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Crude Oparetion",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
     
      <body
      
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>

        <NavBar></NavBar>
        {children}
        
        </AuthProvider>
      </body>
      
    </html>
  );
}
