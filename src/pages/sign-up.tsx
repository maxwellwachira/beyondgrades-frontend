import type { NextPage } from 'next';
import Head from 'next/head';
import MainLayout from '../layouts/MainLayout/MainLayout';
import { Register } from '../features/authentication';

const SignUp: NextPage = () => {
  return (
    <>
      <Head>
        <title>Beyond Grades | Sign Up</title>
        <meta name="description" content="Beyond Grades Version 2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Register />
      </MainLayout>
    </>
  );
}

export default SignUp;
