import type { NextPage } from 'next';
import Head from 'next/head';
import MainLayout from '../layouts/MainLayout/MainLayout';

const Courses: NextPage = () => {
  return (
    <>
      <Head>
        <title>Beyond Grades | Courses</title>
        <meta name="description" content="Beyond Grades Version 2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        Courses
      </MainLayout>
    </>
  )
}

export default Courses;
