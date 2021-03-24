import Nav from './Nav';
import styles from '../styles/Layout.module.css'


const Layout = ({ children }) => {
    return (
        <>
        {/*Add Global Style for smooth scrolling */}
        <style global jsx>
        {` html { scroll-behavior: smooth; }`}
        </style>

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