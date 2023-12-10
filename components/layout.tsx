import Link from 'next/link';
import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import DyAvatar from 'duoyun-ui/react/DyAvatar'

export const siteTitle = 'Mantou Blog';

export default function Layout({ children, layout }: { children: React.ReactNode, layout?: string }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        {layout === 'home' ? (
          <div className={styles.header}>
            <DyAvatar
              src="https://api.dicebear.com/5.x/bottts-neutral/svg"
              size="large"
              square={false}
            >
            </DyAvatar>
            <h2>
              <Link href="/ce-test" className={utilStyles.colorInherit}>
                Custom Element Test
              </Link>
            </h2>
          </div>
        ) : layout === 'test' ? '' : (
          <Link href="/" className={utilStyles.colorInherit}>
          <DyAvatar
              src="https://api.dicebear.com/5.x/bottts-neutral/svg"
              size="large"
              square={true}
            >
            </DyAvatar>
          </Link>
        )
        }
      </header >
      <main>{children}</main>
      {
        layout !== 'home' && (
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        )
      }
    </div >
  );
}
