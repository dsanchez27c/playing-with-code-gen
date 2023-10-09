import React from 'react';

export const AnimeCard = ({ anime }) => {
  const { title, images, genres, episodes, status, year, type } = anime;
  // console.log(images?.webp);
  const typeAnime = {
    movie: 'Movie',
    tv: 'TV'
  };
  return (
    <div className="p-3 shadow-md">
      <div>
        <img src={images?.webp.image_url} alt={title} title={title} />
      </div>
      <h2>{title}</h2>
      {type === typeAnime.tv ? (
        <span>{episodes}</span>
      ) : (
        <span>{typeAnime.movie}</span>
      )}
      <div>
        {genres?.map((genre) => {
          const { mal_id, name } = genre;
          return <h4 key={mal_id}>{name}</h4>;
        })}
      </div>
      <p>{status}</p>
      <p>{year}</p>
    </div>
  );
};
