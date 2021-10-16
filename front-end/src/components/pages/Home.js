import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Movies from '../Movies';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <Movies />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
