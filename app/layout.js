import "./globals.css";
import Providers from './components/Providers';

export const metadata = {
  metadataBase: new URL('https://bebee.school'),
  title: "BeBee - Приватна школа та садочок у Києві | НУШ, англійська, малокомплектні класи",
  description: "Приватна школа (1-4 класи) та садочок BeBee у Києві. Навчання за програмою НУШ, англійська мова, малокомплектні групи до 15 дітей. Антигаджетна школа. Запис відкрито! ☎ +38 (050) 940-07-70",
  keywords: "приватна школа Київ, приватний садочок Київ, НУШ, початкова школа, англійська для дітей, малокомплектні класи, антигаджетна школа, BeBee School, освіта Київ, дошкільна освіта",
  
  // Open Graph для соціальних мереж
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    url: 'https://bebee.school',
    siteName: 'BeBee School',
    title: 'BeBee - Приватна школа та садочок у Києві',
    description: 'Приватна школа (1-4 класи) та садочок з якісною освітою, малокомплектними групами та англійською мовою. Запис відкрито!',
    images: [
      {
        url: '/images/logo_1.png',
        width: 1200,
        height: 630,
        alt: 'BeBee School - Приватна школа та садочок у Києві',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'BeBee - Приватна школа та садочок у Києві',
    description: 'Приватна школа та садочок з якісною освітою. Запис відкрито!',
    images: ['/images/logo_1.png'],
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Google Verification (додай свій код після реєстрації в Google Search Console)
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  const themeInitScript = `
    (function() {
      try {
        var savedTheme = localStorage.getItem('theme');
        var theme = savedTheme || 'light';
        document.documentElement.setAttribute('data-theme', theme);
      } catch (error) {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    })();
  `;

  // Schema.org JSON-LD для LocalBusiness + EducationalOrganization
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EducationalOrganization", "LocalBusiness"],
        "@id": "https://bebee.school/#organization",
        "name": "BeBee School",
        "alternateName": "BeBee - Приватна школа та садочок",
        "url": "https://bebee.school",
        "logo": {
          "@type": "ImageObject",
          "url": "https://bebee.school/images/logo_1.png",
          "width": 194,
          "height": 58
        },
        "image": "https://bebee.school/images/logo_1.png",
        "description": "Приватна школа (1-4 класи) та садочок у Києві з навчанням за програмою НУШ, англійською мовою та малокомплектними групами",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Київ",
          "addressCountry": "UA"
        },
        "telephone": "+380509400770",
        "priceRange": "500-780 грн/день",
        "openingHours": "Mo-Fr 08:30-18:00",
        "areaServed": {
          "@type": "City",
          "name": "Київ"
        },
        "sameAs": [
          "https://www.facebook.com/bebeeschool",
          "https://www.instagram.com/bebeeschool"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://bebee.school/#website",
        "url": "https://bebee.school",
        "name": "BeBee School",
        "publisher": {
          "@id": "https://bebee.school/#organization"
        },
        "inLanguage": "uk"
      }
    ]
  };

  return (
    <html lang="uk" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
        />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
