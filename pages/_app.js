import '../styles/globals.css';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider, Contract } from '../context'
import Body from '../Components/Body';
import Head from 'next/head';






function MyApp({ Component, pageProps }) {
  return (
    <div className="App text">
      <Head>
        <title>Egg Pudgy&apos;s</title>
        <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
        <meta property="og:description" content="Egg Pudgys is a collection of 8,888 NFTs originating from Pudgy Penguins. Don’t let their small stature fool you, Egg Pudgys are an integral piece of the Pudgy Penguins history. Their story began during the most frigid of winters. In the midst of adversity, the birth of the Egg Pudgys helped spark new-life into the Pudgy Penguins community. With their unique traits and personalities, there’s a Egg Pudgys for everyone. Egg Pudgys holders receive exclusive access to experiences, events, IP licensing opportunities and more."></meta>
        <meta name="description" content="Generated by create next app" />
        <link rel="shortcut icon" href="favicon.png" />
      </Head>
      <Provider>
        <Contract>
            <Body></Body>
            <Component {...pageProps} />
        </Contract>
      </Provider>
    </div>
  );
}

export default MyApp