import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import GoogleAdsense from "@/components/googleAdsense";
import Link from "next/link";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} antialiased bg-violet-100 dark:bg-violet-950`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <footer className="text-center mt-24">
            <Link href="/privacy-policy" className="underline mx-4">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="underline mx-4">
              Terms of Service
            </Link>
          </footer>
        </ThemeProvider>
      </body>
      <GoogleAdsense pId={process.env.GOOGLE_ADSENSE_PID ?? ""} />
    </html>
  );
}
