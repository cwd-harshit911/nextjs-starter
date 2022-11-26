import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const App = () => {
  return (
    <div className="app">
      <Head>
        <title>Title</title>
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="John Doe" />
      </Head>
      <div className="app__cover">
        <h1>App</h1>
      </div>
    </div>
  );
};

export default App;
