import React from 'react';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Newsletter from 'components/Newsletter';
import ResourceList from 'components/ResourceList';
import ResourceHighlight from 'components/ResourceHighlight';

function Home() {
  return (
    <>
      <Navbar />
      <ResourceHighlight />
      <Newsletter />
      <ResourceList />
      <Footer />
    </>
  )
}

export default Home;
