import Document, { Main, NextScript, Html, Head } from 'next/document'
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            property="og:title"
            content="Mazdak implements Developer<Penbeh>"
          />
          <meta property="og:url" content="https://www.penbeh.com" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Mazdakism , Mazdak , fullstack developer with near 3 years of exprience, work with typescript , nodejs , reactjs , vuejs , nextjs , nuxtjs , nestjs, Mazdak, mazdak"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:determiner" content="the" />
          <meta
            property="og:image:url"
            content="https://syraxw.by.files.1drv.com/y4m0PecIDX-sjpIHTvTcdThVm8l8XIU-Nc-NvVb_sgbP8iu56Ay8kQRLIhM-PDtTYO88pvZxGXvkno4mSBFgXSe21Edru6y298_nNgivHU6wP1MjaDGnIbEgJb2c5sdIbDpIpaLJvnRSdX8U860InPV_gMHp516eH11bQQTekMUXWEC_7UjDBb8sJEB0mxOsLaGiwZcQzjQW4TiUQW3nIJWcw?width=256&height=256&cropmode=none"
          />
          <meta property="og:image:width" content="256" />
          <meta property="og:image:height" content="256" />
          <meta property="og:image:alt" content="Mazdak Nazemi - Devloper" />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta
            name="description"
            content="mazdak nazemi - fullstack developer"
          />
          <meta name="author" content="mazdak nazemi" />
          <link rel="icon" type="image/png" href="favicon.png"></link>
          <title>Mazdak - The Developer!</title>
        </Head>
        <body className="fixed-footer">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
