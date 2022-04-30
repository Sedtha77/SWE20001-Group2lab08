import '../styles/globals.css'
import '../styles/tailwind.css'
import '../styles/nprogress.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import NProgress from 'nprogress';
import Router from 'next/router';
import {AuthProvider} from '../app/contexts/AuthContext';
import Layout from '../app/constant/Layout';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => {
	NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


function MyApp({ Component, pageProps }: AppProps) {

  return(
    <div>
    <Head>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link rel="icon" href="/gotogre.ico" />
        
        
      </Head>

      {/* <AuthProvider> */}
        
        <Layout>
            <Component {...pageProps} />
        </Layout>

      {/* </AuthProvider> */}
      
      
    </div>
  )
}

export default MyApp
