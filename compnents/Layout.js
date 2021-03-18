import Nav from './Nav';
import Banner from './Banner';
import styles from '../styles/Layout.module.css'


const Layout = ({ children }) => {
    return (
        <>
        <Nav />
        <Banner/>
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
        </>
    )
}

export default Layout