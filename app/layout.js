import '../styles.css';
import Script from 'next/script';

export const metadata = {
  title: 'Pro Nails — Queen Anne, Seattle',
  description: 'Pro Nails is Queen Anne\'s neighborhood nail salon. Over 20 years of nail care in the heart of Seattle.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=PT+Sans+Narrow:wght@400;700&family=Sofia+Sans+Extra+Condensed:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Script src="/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
