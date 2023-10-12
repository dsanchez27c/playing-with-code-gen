import React from 'react';
import { MostPopular } from '../../components/layout/mostPopular/MostPopular';
import { AnimeList } from '../../components/animeList/AnimeList';

const Home = () => {
  return (
    <div className="flex pt-16">
      <MostPopular />
      <AnimeList />
    </div>
  );
};

export default Home;
