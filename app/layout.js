import localFont from '@next/font/local';
import Script from "next/script"

import CartProvider from "../src/context/CartProvider";
import FavoriteProvider from "../src/context/FavoriteProvider";

import Navbar from "../src/modules/Navbar";
import Footer from "../src/modules/Footer";

import "../styles/styles.scss";

const geomentria = localFont({
    src: [
        {
            path: '../public/fonts/geometria-cufonfonts/Geometria.ttf',
            weight: '400',
        },
        {
            path: '../public/fonts/geometria-cufonfonts/Geometria-Medium.ttf',
            weight: '500',
        },
        {
            path: '../public/fonts/geometria-cufonfonts/Geometria-Bold.ttf',
            weight: '700',
        },
    ],
});

export default async function RootLayout({children, params}) {
    return (
        <html>
        <head/>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-QN2G3LXD23"/>
        <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-QN2G3LXD23');
  `,
            }}/>
        <body className={geomentria.className}>
            <div id="modal-root"></div>
            <CartProvider>
                <FavoriteProvider>
                    <Navbar/>
                    {children}
                    <Footer/>
                </FavoriteProvider>
            </CartProvider>
            </body>
        </html>
    )
}
