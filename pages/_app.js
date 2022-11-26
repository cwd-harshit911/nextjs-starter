import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import "../components/styles/header.css";
import "../components/styles/footer.css";
import "../components/styles/index.css";
import NProgress from "nprogress";
import Router from "next/router";
import "../styles/nprogress.css";

function MyApp({ Component, pageProps }) {
  Router.events.on("routeChangeStart", NProgress.start);
  Router.events.on("routeChangeError", NProgress.done);
  Router.events.on("routeChangeComplete", NProgress.done);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
