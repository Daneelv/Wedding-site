import Nav from './Nav';
import styles from '../styles/Layout.module.css'
import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <>
        {/*Add Global Style for smooth scrolling */}
        <style global jsx>
        {` html { scroll-behavior: smooth; }`}
        </style>

        <Head>
        <title>Daneel & Maryke Trou</title>
        <link rel="icon" href="/heart.png" />
        <link rel="stylesheet" type="text/css" href="../styles/globals.css"></link>
      </Head>

        <Nav />
        {/* <div className={styles.all}> */}
            {/* <main className={styles.main}> */}
                {children}
            {/* </main> */}
        {/* </div> */}
    
        </>
    )
}

export default Layout