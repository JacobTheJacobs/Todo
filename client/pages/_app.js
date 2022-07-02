import Head from "next/head";
import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Http only</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
