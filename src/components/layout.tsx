import HeadComponent from "./head";
import Header from "./header";
import Footer from "./footer";
import '@/styles/style.scss'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeadComponent />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}