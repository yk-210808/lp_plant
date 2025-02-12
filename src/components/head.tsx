import Head from "next/head";
import { useRouter } from "next/router";

const meta = [
  {
    route: '/',
    title: 'Breath Natureal',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    route: '/more',
    title: 'More',
    description: 'Planto. company information.'
  },
  {
    route: '/contact',
    title: 'Contact',
    description: 'Contact us if you have any concerns.'
  },
  {
    route: '/contact/complete',
    title: 'Complete | Contact',
    description: 'Thank you for your inquiry.'
  },
  {
    route: '/privacy',
    title: 'Privacy Policy',
    description: 'Privacy Policy'
  },
  {
    route: '/search',
    title: 'Search',
    description: 'Search for something.'
  }
]
export default function HeadComponent() {
  const router = useRouter()
  const thisMeta = meta.filter((value) => value.route === router.route)[0]

  return (
    <Head>
      {thisMeta && (
        <>
          <title>{thisMeta.title} | Planto.</title>
          <meta name="description" content={thisMeta.description} />
          <meta property="og:title" content={thisMeta.title + " | Planto."} />
          <meta property="og:description" content={thisMeta.description} />
        </>
      )}

      {!thisMeta && (
        <>
          {/* <title>Breath Natureal | Planto.</title>
          <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <meta property="og:title" content="Breath Natureal | Planto." />
          <meta property="og:description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." /> */}
        </>
      )}

      <link rel="icon" href="/img/icon.png" />
      <link rel="apple-touch-icon" href="/img/icon.png" />
      <meta property="og:image" content="/img/ogp-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="robots" content="noindex" />
    </Head>
  )
}