/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate-plugin')

module.exports = nextTranslate({
  reactStrictMode: true,
  allowedDevOrigins: ['localhost:3000', '192.168.1.186:3000', '*.spaccesi.com', 'spaccesi.com'],
})
