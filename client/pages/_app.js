import Head from "next/head";
import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Http only</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
