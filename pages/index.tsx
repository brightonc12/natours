import React from 'react'
import Head from 'next/head'

import '../style/base/base.scss';
import Header from '../components/organisms/header/Header';
import About from '../components/organisms/about/About';
import Features from '../components/organisms/features/Features'
import Tours from '../components/organisms/tours/Tours';
import Stories from '../components/organisms/story/Stories';
import Book from '../components/organisms/book/Book';
import Footer from '../components/organisms/footer/Footer';

const Home = () => (
  <div>
    <Head>
      <title>Natours | Exciting tours for adventurous people</title>
      <link rel="icon" href="/static/images/favicon.png" />
    </Head>

      <Header />

      <main>
          <About/>
          <Features />
          <Tours />
          <Stories />
          <Book/>
      </main>
      <Footer/>

  </div>
);

export default Home
