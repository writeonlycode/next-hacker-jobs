import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Bebas_Neue, Inria_Sans } from "next/font/google";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas-neue" });
const inriaSans = Inria_Sans({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-inria-sans" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${bebasNeue.variable} ${inriaSans.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
