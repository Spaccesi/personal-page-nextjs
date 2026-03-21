import Head from 'next/head';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl,
  noindex = false,
  nofollow = false,
}) => {
  const { t, lang } = useTranslation('common');
  const router = useRouter();

  // Use provided values or fallback to translations
  const siteDescription = description || t('seo.description');
  const siteKeywords = keywords || t('seo.keywords');
  const fullTitle = title || t('seo.title');

  // Build the canonical URL
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://spaccesi.com';
  const currentUrl = canonicalUrl || `${siteUrl}${router.asPath}`;

  // Build alternate language links
  const alternateLanguages = ['en', 'es', 'de', 'it'];

  // Open Graph image
  const ogImageUrl = ogImage || `${siteUrl}/og-image.jpg`;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={siteDescription} />
      {siteKeywords && <meta name="keywords" content={siteKeywords} />}
      <meta name="author" content={t('seo.author')} />

      {/* Language and Locale */}
      <meta httpEquiv="content-language" content={lang} />
      <meta property="og:locale" content={lang === 'en' ? 'en_US' : lang === 'es' ? 'es_ES' : lang === 'de' ? 'de_DE' : 'it_IT'} />

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* Alternate Language Links */}
      {alternateLanguages.map((locale) => (
        <link
          key={locale}
          rel="alternate"
          hrefLang={locale}
          href={`${siteUrl}/${locale}${router.pathname === '/' ? '' : router.pathname}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}${router.pathname === '/' ? '' : router.pathname}`} />

      {/* Robots */}
      {(noindex || nofollow) && (
        <meta name="robots" content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`} />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content={t('seo.siteName')} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={ogImageUrl} />
      {t('seo.twitterHandle') && (
        <>
          <meta name="twitter:creator" content={t('seo.twitterHandle')} />
          <meta name="twitter:site" content={t('seo.twitterHandle')} />
        </>
      )}

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
    </Head>
  );
};

export default SEO;
