import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Hero from "../components/Hero";
import Recomend from "../components/Recomend";

// batch anime
export async function getServerSideProps() {
  const res = await fetch("https://kusonime-scrapper.glitch.me/api/page/5");
  const resRecomend = await fetch(
    "https://kusonime-scrapper.glitch.me/api/rekomendasi"
  );
  const data = await res.json();
  const dataRecomend = await resRecomend.json();

  return {
    props: {
      data,
      dataRecomend,
    },
  };
}

export default function Home({ data, dataRecomend }) {
  const [anime, setAnime] = useState([data]);
  const [recomend, setRecomend] = useState([dataRecomend]);
  const [keyword, setKeyword] = useState("");

  async function search() {
    window.location.href = `/search/${keyword}`;
  }

  function handleChange(e) {
    setKeyword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    search();
  }

  function limit(string = "", limit = 30) {
    return string.substring(0, limit) + "...";
  }

  return (
    <div className="w-full text-center text-slate-200">
      <div className="max-w-[800px] mx-auto">
        <form onSubmit={handleSubmit} className="mb-5">
          <input type="text" onChange={handleChange} value={keyword} />
          <button type="submit">search</button>
        </form>

        <Hero />

        <main className="grid grid-cols-4 gap-5 pt-20 ">
          {data.map((a, index) => {
            return (
              <Link href={`/detailAnime/${a.link.endpoint}`} key={index}>
                <a>
                  <div className="flex flex-col bg-[#282828] pb-5 rounded-lg">
                    <Image
                      src={a.link.thumbnail}
                      alt={a.title}
                      width={300}
                      height={150}
                      className="rounded-t-lg object-cover"
                    />
                    <div className="mt-2">
                      <h1 className="text-md font-semibold">
                        {limit(a.title)}
                      </h1>
                      <p className="text-slate-400 text-xs">{a.release}</p>
                    </div>
                  </div>
                </a>
              </Link>
            );
          })}
        </main>
        <button className="mt-10 px-6 py-1 bg-[#34b27b] rounded-md">
          Load more
        </button>

        {dataRecomend.map((r, index) => {
          return (
            <Recomend key={index} title={r.title} thumbnail={r.thumbnail} />
          );
        })}
      </div>
    </div>
  );
}
