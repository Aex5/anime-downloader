import { useState } from "react";

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
    <div>
      <div>
        {anime.map((a, index) => {
          return (
            <div key={index}>
              <p>{a.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
