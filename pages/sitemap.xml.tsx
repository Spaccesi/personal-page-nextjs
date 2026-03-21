import { GetServerSideProps } from 'next';

const PAGES = [
  '/', // Homepage
];

// Languages from i18n.json
const LANGUAGES = ['en', 'es', 'de', 'it'];
const DEFAULT_LANGUAGE = 'en';

function generateSiteMap(baseUrl: string): string {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${PAGES.map((page) => {
    // For each page, create entries for all languages
    const pageEntries = LANGUAGES.map((lang) => {
      const isDefault = lang === DEFAULT_LANGUAGE;
      const path = page === '/' ? '' : page;
      const url = isDefault
        ? `${baseUrl}${path}`
        : `${baseUrl}/${lang}${path}`;

      // Generate alternate language links
      const alternates = LANGUAGES.map((alternateLang) => {
        const altIsDefault = alternateLang === DEFAULT_LANGUAGE;
        const altUrl = altIsDefault
          ? `${baseUrl}${path}`
          : `${baseUrl}/${alternateLang}${path}`;

        return `    <xhtml:link rel="alternate" hreflang="${alternateLang}" href="${altUrl}"/>`;
      }).join('\n');

      // x-default should point to the default language version
      const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${path}"/>`;

      return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
${alternates}
${xDefault}
  </url>`;
    }).join('\n');

    return pageEntries;
  }).join('\n')}
</urlset>`;

  return sitemap;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
  // Get the base URL from environment or request
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || `${protocol}://${host}`;

  // Generate the XML sitemap
  const sitemap = generateSiteMap(baseUrl);

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
