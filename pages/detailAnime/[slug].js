import Link from "next/link";
import { useState } from "react";
import DetailAnime from "../../components/DetailAnime";
import Layout from "../../components/Layout";

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
  // const [download, setDownload] = useState([]);

  const download = data.list_download[0][1]

  return (
    <Layout>
      <div className="w-full text-slate-300 pt-28">
        <div className="max-w-[800px] mx-auto">
          {anime.map((a, index) => {
            return (
              <>
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

                <div className="">
                  <h1 className="text-xl text-[#34b27b] font-bold mt-20">Download</h1>
                  {download.map((d, index) => {
                    return (
                      <div key={index}>
                        <h1>{d.resolusi}</h1>
                        <ul className="flex flex-wrap gap-2 py-6">
                          {d.link_download.map((l, index) => {
                            return (
                              <ul key={index}>
                                <li>{l.platform}</li>
                                <li>{l.link}</li>
                              </ul>
                            )
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
