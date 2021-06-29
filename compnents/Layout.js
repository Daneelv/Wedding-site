import Nav from "./Nav";
import Footer from "./Footer"
import Head from "next/head";

const Layout = ({ children, personName}) => {
  return (
    <>
      <Head>
        <title>Daneel & Maryke Troue</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <Nav personName = {personName} />
      {children}
      <Footer/>
    </>
  );
};

export default Layout;
