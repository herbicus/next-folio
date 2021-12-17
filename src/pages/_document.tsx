import Document, { Html, Head, Main, NextScript } from 'next/document';

import { config } from '../data/config';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={config.locale}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@800;900&family=Open+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
