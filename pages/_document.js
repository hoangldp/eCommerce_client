import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en">
        <Head>
            {/* Required meta tags */}
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

            {/* Meta */}
            <meta name="description" content="Responsive Bootstrap 4 Dashboard Template" />
            <meta name="author" content="ThemePixels" />

            {/* Twitter */}
            <meta name="twitter:site" content="@themepixels" />
            <meta name="twitter:creator" content="@themepixels" />
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content="Azia"/>
            <meta name="twitter:description" content="Responsive Bootstrap 4 Dashboard Template"/>
            <meta name="twitter:image" content="http://themepixels.me/azia/img/azia-social.png"/>

            {/* Facebook */}
            <meta property="og:url" content="http://themepixels.me/azia"/>
            <meta property="og:title" content="Azia"/>
            <meta property="og:description" content="Responsive Bootstrap 4 Dashboard Template"/>

            <meta property="og:image" content="http://themepixels.me/azia/img/azia-social.png"/>
            <meta property="og:image:secure_url" content="http://themepixels.me/azia/img/azia-social.png"/>
            <meta property="og:image:type" content="image/png"/>
            <meta property="og:image:width" content="1200"/>
            <meta property="og:image:height" content="600"/>

            <title>Azia Responsive Bootstrap 4 Dashboard Template</title>

            {/* vendor css */}
            <link href="/lib/fontawesome-free/css/all.min.css" rel="stylesheet"/>
            <link href="/lib/ionicons/css/ionicons.min.css" rel="stylesheet"/>
            <link href="/lib/typicons.font/typicons.css" rel="stylesheet" />

            {/* azia CSS */}
            <link rel="stylesheet" href="/css/azia.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
