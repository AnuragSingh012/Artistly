import localFont from 'next/font/local';
import "./globals.css";
import { ArtistProvider } from "@/context/ArtistContext";
import { Toaster } from 'sonner';

const workSans = localFont({
  src: [
    { path: './fonts/WorkSans-Black.ttf', weight: '900', style: 'normal' },
    { path: './fonts/WorkSans-ExtraBold.ttf', weight: '800', style: 'normal' },
    { path: './fonts/WorkSans-Bold.ttf', weight: '700', style: 'normal' },
    { path: './fonts/WorkSans-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: './fonts/WorkSans-Medium.ttf', weight: '500', style: 'normal' },
    { path: './fonts/WorkSans-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/WorkSans-Thin.ttf', weight: '200', style: 'normal' },
    { path: './fonts/WorkSans-ExtraLight.ttf', weight: '100', style: 'normal' },
  ],
  variable: '--font-work-sans',
  display: 'swap',
});

export const metadata = {
  title: "Artistly | Discover & Book Top Artists",
  description: "Performing Artist Booking Platform built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={workSans.variable}>
      <body className="font-sans">
        <Toaster />
        <ArtistProvider>
          {children}
        </ArtistProvider>
      </body>
    </html>
  );
}
