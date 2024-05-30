import Layout from '@/components/layout/Layout'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

import '@/styles/globals.css'
import '@/styles/responsive.css'
import { useState, useEffect } from 'react'

function App({ Component, pageProps }: AppProps) {
  
  const [serviceCate, setServiceCate] = useState(0)
  const handlerServiceCate = (category: number) => {
    setServiceCate(category)
  }
  return (
    <>
      <Head>
        <title>Leo Innovision Ltd</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Layout handlerServiceCate={handlerServiceCate}>
        <Component {...pageProps} serviceCate={serviceCate} handlerServiceCate={handlerServiceCate}/>
      </Layout>
    </>
  )
}
export default appWithTranslation(App)