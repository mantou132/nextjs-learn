import '../lib/webenv'
import '../styles/global.css';

export default function App({ Component, pageProps }: { Component: React.ElementType, pageProps: any }) {
  return <Component {...pageProps} />
}
