import '../styles/index.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Arthur Hovhannisyan - Homepage</title>
      </Head>
      <Header />
      <AnimatePresence
        initial={false}
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}>
        <Component router={router} key={router.asPath} {...pageProps} />
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;
