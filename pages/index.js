import Button from '@material-ui/core/Button';
import Link from '../src/Link';
import Head from 'next/head'
import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daneel & Maryke Trou</title>
        <link rel="icon" href="/heart.png" />
      </Head>

      <main className={styles.main}>
        <Button variant="contained" component={Link} noLinkStyle href="/">
          Go to the main page
        </Button>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
