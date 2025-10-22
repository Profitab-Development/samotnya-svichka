// 'use client'
//
// import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'
// import { MainPopUp } from '@/app/modules/MainPopUp/MainPopUp'
// import Script from 'next/script'
// import './globals.css'
//
// interface ClientLayoutProps {
//   children: React.ReactNode
//   locale: string
//   messages: AbstractIntlMessages
// }
//
// export default function ClientLayout({
//   children,
//   locale,
//   messages,
// }: ClientLayoutProps) {
//   return (
//     <NextIntlClientProvider locale={locale} messages={messages}>
//       {/* GTM Script */}
//       <Script id="gtm-script" strategy="afterInteractive">
//         {`
//           (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//           new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//           'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//           })(window,document,'script','dataLayer','GTM-KFHBNZ47');
//         `}
//       </Script>
//
//       {/* GTM noscript */}
//       <noscript>
//         <iframe
//           src="https://www.googletagmanager.com/ns.html?id=GTM-KFHBNZ47"
//           height="0"
//           width="0"
//           style={{ display: 'none', visibility: 'hidden' }}
//         ></iframe>
//       </noscript>
//
//       {children}
//       <MainPopUp />
//     </NextIntlClientProvider>
//   )
// }

// 'use client'
//
// import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'
// import { MainPopUp } from '@/app/modules/MainPopUp/MainPopUp'
// import Script from 'next/script'
// import './globals.css'
//
// interface ClientLayoutProps {
//   children: React.ReactNode
//   locale: string
//   messages: AbstractIntlMessages
// }
//
// export default function ClientLayout({
//   children,
//   locale,
//   messages,
// }: ClientLayoutProps) {
//   return (
//     <NextIntlClientProvider locale={locale} messages={messages}>
//       {/* Google Tag Manager script */}
//       <Script id="gtm-script" strategy="afterInteractive">
//         {`
//           (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//           new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//           'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//           })(window,document,'script','dataLayer','GTM-KFHBNZ47');
//         `}
//       </Script>
//
//       {/* Google Analytics (gtag.js) */}
//       <Script
//         src="https://www.googletagmanager.com/gtag/js?id=G-K2FHY26X1K"
//         strategy="afterInteractive"
//       />
//       <Script id="google-analytics" strategy="afterInteractive">
//         {`
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', 'G-K2FHY26X1K');
//         `}
//       </Script>
//
//       {/* GTM noscript */}
//       <noscript>
//         <iframe
//           src="https://www.googletagmanager.com/ns.html?id=GTM-KFHBNZ47"
//           height="0"
//           width="0"
//           style={{ display: 'none', visibility: 'hidden' }}
//         ></iframe>
//       </noscript>
//
//       {children}
//       <MainPopUp />
//     </NextIntlClientProvider>
//   )
// }

"use client"

import { NextIntlClientProvider, AbstractIntlMessages } from 'next-intl'
import { MainPopUp } from '@/app/modules/MainPopUp/MainPopUp'
import Script from 'next/script'
import './globals.css'

interface ClientLayoutProps {
  children: React.ReactNode
  messages: AbstractIntlMessages
}

export default function ClientLayout({
  children,
  messages,
}: ClientLayoutProps) {
  return (
    <NextIntlClientProvider locale="uk" messages={messages}>
      {/* Facebook Meta Pixel */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '4017323195148737');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* Google Tag Manager */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KFHBNZ47');
        `}
      </Script>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-K2FHY26X1K"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K2FHY26X1K');
        `}
      </Script>

      {/* Noscript for GTM */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KFHBNZ47"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>

      {/* Noscript for Facebook Pixel */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: `
            <img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=4017323195148737&ev=PageView&noscript=1"
            />
          `,
        }}
      />

      {children}
      <MainPopUp />
    </NextIntlClientProvider>
  )
}
