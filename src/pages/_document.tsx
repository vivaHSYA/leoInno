import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta name="robots" content="ALL" />
        <meta
          property="description"
          content="소프트웨어 개발,포털,인터넷 정보매개,학술연구용역,교육컨설팅/무인항공기 제조/무역(전자부품),전자상거래/부동산 임대"
        ></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
