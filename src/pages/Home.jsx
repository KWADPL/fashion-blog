import React from 'react';
import BlogList from '../components/BlogList';
import homeimg from '../assets/depositphotos_156625116-stock-photo-young-woman-with-shopping-bags.jpg';
import '../styles/Home.css'

function Home() {
  return (
    <div className='homediv'>
      <img src={homeimg} alt="home-img" className='homeimg'></img>
      <h1>Welcome to Our Fashion Blog</h1>
      <p>Discover the latest trends and tips in the world of fashion. We post everyday new trends and outfits for special ocasions!</p>
      <BlogList />
    </div>
  );
}

export default Home;
