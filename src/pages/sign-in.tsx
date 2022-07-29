import type { NextPage } from 'next';
import Head from 'next/head';
import MainLayout from '../layouts/MainLayout/MainLayout';
import { Login } from '../features/authentication';


const SignIn: NextPage = () => {
  return (
    <>
      <Head>
        <title>Beyond Grades | Sign In</title>
        <meta name="description" content="Beyond Grades Version 2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Login />
      </MainLayout>
    </>
  );
}

export default SignIn;
