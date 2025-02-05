import Head from "next/head";

export default function HeadComponent() {
  return (
    <Head>
      <title>Breath Natureal | Planto.</title>
      <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <link rel="icon" href="/img/icon.png" />
      <link rel="apple-touch-icon" href="/img/icon.png" />
      <meta property="og:title" content="Breath Natureal | Planto." />
      <meta property="og:description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <meta property="og:image" content="/img/ogp-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}