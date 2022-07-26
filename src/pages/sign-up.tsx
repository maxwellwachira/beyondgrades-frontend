import type { NextPage } from 'next';
import Head from 'next/head';
import MainLayout from '../layouts/MainLayout/MainLayout';


const SignUp: NextPage = () => {
  return (
    <>
      <Head>
        <title>Beyond Grades | Sign Up</title>
        <meta name="description" content="Beyond Grades Version 2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        Sign Up
      </MainLayout>
    </>
  );
}

export default SignUp;
