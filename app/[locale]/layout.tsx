import "@/app/globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DictionaryProvider } from '@/i18n/dictionary-provider';
import { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import DottedGlowBackground from "@/components/ui/dotted-glow-background";
import Index from ".";

export const metadata: Metadata = {
  title: "NEU link",
  description: "The Near East University Link Platform is a powerful network that brings our graduates together, supporting both professional and social life. Here, you can reconnect with old friends, join events, and discover career opportunities.",
  // icons: {
  //   icon: "./favicon.png",
  //   shortcut: "./favicon.png",
  //   apple: "./favicon.png"
  // }
};
Promise<{ locale: string }>;
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const validLocale = (locale === 'tr' || locale === 'en' ? locale : 'en') as Locale;
  const dict = await getDictionary(validLocale);

  return (
    <html lang={validLocale}>
      <meta name="google-site-verification" content="B75tDUgYj3IAJWooShn1_Q-E_h2kuaXR272Xwd_7CJ0" />
      <body className="antialiased font-arial h-fit flex justify-center items-center px-[25px] mobile:px-[45px] sm:px-[90px]">
        <DictionaryProvider dictionary={dict as any}>
          <Index children={children}/>
        </DictionaryProvider>
      </body>
    </html>
  );
}
