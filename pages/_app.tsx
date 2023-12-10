import '@mantou/gem/helper/ssr-shim'
import '../styles/global.css';

export default function App({ Component, pageProps }: { Component: React.ElementType, pageProps: any }) {
  return <Component {...pageProps} />
}
