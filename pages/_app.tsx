import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/reset.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Layout from "@/components/Layout/Layout";
import store from "../store/store";
import { createWrapper } from "next-redux-wrapper";

const MyApp = ({ Component, pageProps, session }: AppProps & { session: any }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default createWrapper(() => store).withRedux(MyApp);
