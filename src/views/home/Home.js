import React, { useEffect } from 'react';
import { getAnimes } from '../../services/animeApi/getAnimes';

const Home = () => {
  useEffect(() => {
    (async () => {
      try {
        const res = await getAnimes();
        const { data, pagination } = res.data;
        console.log('Respones: ', data);
        console.log('Paginación: ', pagination);
      } catch (err) {
        console.log('Error: ', err);
      }
    })();
    return () => {};
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Esto es el Home.</h1>
    </div>
  );
};

export default Home;
