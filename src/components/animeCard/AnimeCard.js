import React from 'react';

export const AnimeCard = ({ anime }) => {
  const { title, images, genres, episodes, status, year, type } = anime;
  // console.log(images?.webp);
  const typeAnime = {
    movie: 'Movie',
    tv: 'TV'
  };
  return (
    <div className="w-64 flex flex-col shadow shadow-white cursor-pointer">
      <div className="h-[22.5rem] relative">
        <img
          src={images?.webp.image_url}
          alt={title}
          title={title}
          className="w-full rounded-t-2xl rounded-b-md h-[22.5rem]"
        />
        <span className="bg-blue-400 rounded-full px-3 py-1 uppercase font-semibold absolute bottom-3 right-2 text-white">
          {type === typeAnime.tv ? episodes : typeAnime.movie}
        </span>
      </div>
      <div className="p-4 text-white flex flex-col gap-2">
        <h2 className="text-xl font-medium">{title}</h2>
        <div className="flex flex-wrap gap-2">
          {genres?.map((genre) => {
            const { mal_id, name } = genre;
            return (
              <h4
                key={mal_id}
                className="bg-orange-400 rounded-full px-3 py-1 uppercase text-xs font-semibold"
              >
                {name}
              </h4>
            );
          })}
        </div>
        <p>{status}</p>
        <p>{year}</p>
      </div>
    </div>
  );
};
