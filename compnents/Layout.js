import Nav from "./Nav";
import Footer from "./Footer"
// import styles from "../styles/Layout.module.css";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Daneel & Maryke Troue</title>
        <link rel="icon" href="/heart.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <Nav />
      {children}
      <Footer/>
    </>
  );
};

export default Layout;
