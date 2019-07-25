import Head from 'next/head';
import Navbar from './Navbar';

let imgUrl = 'static/png/web/background@2x.png'
let styles = {
    root: {
        backgroundImage: 'url(' + imgUrl + ')',
        /* Full height */
        height: '150%',

        /* Center and scale the image nicely */
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
}


const Layout = (props) => (
    <div style={styles.root}>
        <Head>
            <title>Elucid Esports</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
        </Head>
        <style global jsx>{`
          html,
          body,
          body > div:first-child,
          div#__next,
          div#__next > div,
          div#__next > div > div {
            height: 100%;
          }
        `}</style>
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Layout;
