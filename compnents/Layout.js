import Nav from "./Nav";
import styles from "../styles/Layout.module.css";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Daneel & Maryke Troue</title>
        <link rel="icon" href="/heart.png" />
      </Head>
      <Nav />
      {children}
    </>
  );
};

export default Layout;
