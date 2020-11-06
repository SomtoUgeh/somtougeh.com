const title = 'Somto M.Ugeh – Developer && writer';
const description = 'Front-end developer, JavaScript enthusiast.';

const SEO = {
  title,
  description,
  canonical: 'https://somtougeh.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://somtougeh.com',
    title,
    description,
    images: [
      {
        url: 'https://somtougeh.com/static/images/og.jpg',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@ugehsomto',
    site: '@ugehsomto',
    cardType: 'summary_large_image'
  }
};

export default SEO;
