// import { getLocale, getMessages } from 'next-intl/server'
// import { ReactNode } from 'react'
// import ClientLayout from '@/app/ClientLayout'
// import '../assets/Fonts/stylesheet.css'
//
// export const metadata = {
//   title:
//     'Асоціація власників інтернет-магазинів – підтримка та розвиток e-commerce бізнесу',
//   icons: {
//     icon: '/favicon.png',
//   },
// }
//
// export default async function RootLayout({
//   children,
// }: {
//   children: ReactNode
// }) {
//   const locale = await getLocale()
//   const messages = await getMessages()
//
//   return (
//     <html lang={locale}>
//       <body>
//         <ClientLayout locale={locale} messages={messages}>
//           {children}
//         </ClientLayout>
//       </body>
//     </html>
//   )
// }

import { ReactNode } from 'react'
import ClientLayout from '@/app/ClientLayout'
import '../assets/Fonts/stylesheet.css'
import Script from 'next/script'

export const metadata = {
  title:
    'Асоціація власників інтернет-магазинів – підтримка та розвиток e-commerce бізнесу',
  description:
    'Приєднуйтесь до спільноти власників інтернет-магазинів! Освітні заходи, консультації, партнерські програми та нетворкінг для розвитку вашого e-commerce бізнесу.',
  icons: {
    icon: '/favicon.webp',
    apple: '/favicon.webp',
  },
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const messages = (await import('../../messages/ua.json')).default

  return (
    <html lang={'uk'} suppressHydrationWarning={true}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KFHBNZ47');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body suppressHydrationWarning={true}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KFHBNZ47"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <ClientLayout messages={messages}>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
