import React, { useEffect, useState } from 'react';
import { getAnimes } from '../../services/animeApi/getAnimes';
import { status } from '../../services/base/Base';
import { AnimeCard } from '../animeCard/AnimeCard';

export const AnimeList = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await getAnimes();
        const { data, pagination } = res.data;
        if (res.status === status.success) {
          console.log('Respones: ', res);
          console.log('Data: ', data);
          console.log('Paginación: ', pagination);
          setAnimes(data);
        }
      } catch (err) {
        console.log('Error: ', err);
      }
    })();
    return () => {};
  }, []);

  return (
    <main className="w-full px-5 py-4">
      <article>
        <h1 className="text-3xl font-bold underline mb-4">Esto es el Home.</h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
          {animes?.map((anime) => {
            const { mal_id } = anime;
            return <AnimeCard key={mal_id} anime={anime} />;
          })}
        </div>
      </article>
    </main>
  );
};
