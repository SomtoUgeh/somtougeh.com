import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my website!{' '}
          <span role="img" aria-label="happy">
            😁
          </span>
        </h1>

        <p className={styles.description}>
          This site is still in development{' '}
          <code className={styles.code}>
            Bear with me{' '}
            <span role="img" aria-label="cry">
              😢
            </span>
          </code>
        </p>
      </main>
    </div>
  );
}
