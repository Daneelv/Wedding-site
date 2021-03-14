import { ThemeProvider } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import createCache from '@emotion/cache';
import theme from '../src/theme';
import Nav from './Nav';
import Copyright from '../src/Copyright';
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {

const cache = createCache({ key: 'css', prepend: true });

    return (
        <>
        <Nav/>
        <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
        <Copyright />
      </ThemeProvider>
    </CacheProvider>
        </>
    )
}

export default Layout