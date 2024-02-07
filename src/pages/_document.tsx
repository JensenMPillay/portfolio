import { DocumentProps, Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import nextI18nextConfig from "../../next-i18next.config";

export default function Document(props: DocumentProps) {
  // Set Current Lang
  const currentLocale =
    props.__NEXT_DATA__.locale ?? nextI18nextConfig.i18n.defaultLocale;
  return (
    <Html lang={currentLocale}>
      <Head />
      <body>
        {/* Tailwind CSS Dark Mode Doc - Avoid First Load with Default Settings */}
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            } else {
            document.documentElement.classList.remove('dark')
            }
          `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
