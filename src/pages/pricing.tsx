import type { NextPage } from 'next';
import Head from 'next/head';
import MainLayout from '../layouts/MainLayout/MainLayout';


const Pricing: NextPage = () => {
  return (
    <>
      <Head>
        <title>Beyond Grades | Pricing</title>
        <meta name="description" content="Beyond Grades Version 2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        Pricing
      </MainLayout>
    </>
  )
}

export default Pricing;
