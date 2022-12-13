import { useState } from "react";
import DetailAnime from "../../components/DetailAnime";

export async function getServerSideProps(ctx) {
  const name = ctx.query;

  const res = await fetch(
    `https://kusonime-scrapper.glitch.me/api/anime/${name.slug}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function detailAnime({ data }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [anime, setAnime] = useState([data]);

  return (
    <div className="w-full text-slate-300">
      <div>
        {anime.map((a, index) => {
          return (
            <DetailAnime
              key={index}
              title={a.title}
              thumbnail={a.thumbnail}
              japan={a.japanese}
              genre={a.genre}
              producer={a.producers.join(", ")}
              status={a.status}
              score={a.score}
              sinopsis={a.sinopsis}
            />
          );
        })}
      </div>
    </div>
  );
}
