import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import home_image from "../public/1.webp";

const App = () => {
  return (
    <div className="app">
      <Head>
        <title>Bizmerce - Your respect at its peak</title>
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="John Doe" />
      </Head>
      <div className="app__cover">
        <div className="app__cover_">
          <p>Black Friday Is Here</p>
          <h1>30% Off + Free Shipping</h1>
          <h3>Stock up on all holiday essentials.</h3>
          <div className="app__cover__but">
            <p>SHOP NOW</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
