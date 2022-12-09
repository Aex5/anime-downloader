import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export async function getServerSideProps(ctx) {
  const name = ctx.query;

  const res = await fetch(
    `https://kusonime-scrapper.glitch.me/api/cari/${name.slug}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Search({ data }) {
  return (
    <div className="w-full text-center text-slate-200">
      <div className="max-w-[800px] mx-auto">
        <main className="grid grid-cols-2 gap-10">
          {data.map((a, index) => {
            return (
              <div
                key={index}
                className="flex flex-col bg-[#282828] pb-10 rounded-lg"
              >
                <Image
                  src={a.link.thumbnail}
                  alt={a.title}
                  width={200}
                  height={200}
                  className="rounded-t-lg"
                />
                <div>
                  <h1 className="text-lg font-semibold">{a.title}</h1>
                  <p className="text-slate-400">{a.release}</p>
                </div>
                <Link href={`/detailAnime/${a.link.endpoint}`}>
                  <a>Detail</a>
                </Link>
              </div>
            );
          })}
        </main>
      </div>
    </div>
  );
}
