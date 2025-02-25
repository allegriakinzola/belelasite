import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"], // Charge uniquement les caractères nécessaires
  weight: ["400", "700"], // Charge les styles Regular (400) et Bold (700)
  variable: "--font-roboto", // Définit une variable CSS pour Tailwind
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});



const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'belela',
  description: "Belela est une application de sécurité qui vous permet de protéger votre famille et vos proches en cas de cambriolage ou d'incendie dans la ville de kinshasa. Téléchargez l'application sur l'App Store ou Google Play.",
  keywords: 'belela,incendie, cambriolage, sécurité,kinshasa, famille, proches,application de sécurité',
  robots: 'index, follow',
  openGraph: {
    title: 'belela',
    description: "Belela est une application de sécurité qui vous permet de protéger votre famille et vos proches en cas de cambriolage ou d'incendie dans la ville de kinshasa. Téléchargez l'application sur l'App Store ou Google Play.",
    url: 'https://belela.tech',
    siteName: 'belela',
    // images: [
    //   {
    //     url: 'https://ton-domaine.com/chemin/vers/image.jpg',
    //     width: 800,
    //     height: 600,
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${roboto.variable} ${geistMono.variable} ${poppins.variable} ${montserrat.variable} font-poppins antialiased`}>
        <div>
        <Navbar />
        {children}
        <Footer/>
        </div>
      </body>
    </html>
  );
}
