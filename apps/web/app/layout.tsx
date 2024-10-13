import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import GoogleAdsense from "@/components/googleAdsense";
import PlausibleProvider from "next-plausible";
import Footer from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PulpMovies",
  description:
    "Discover everything about the movies you love and share them with your friends",
};

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <PlausibleProvider domain="pulpmovies.app" selfHosted />
      </head>
      <body className={`${geistSans.variable} antialiased bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
      <GoogleAdsense pId={process.env.GOOGLE_ADSENSE_PID ?? ""} />
    </html>
  );
}
