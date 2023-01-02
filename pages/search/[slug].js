import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";

import { motion } from "framer-motion";


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

function limit(string = "", limit = 30) {
  return string.substring(0, limit) + "...";
}

export default function Search({ data }) {
  return (
    <Layout>
      <div className="w-full text-center text-slate-200 pt-28">
      <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
        <div className="max-w-[800px] mx-auto">
          <main className="grid grid-cols-3 gap-10">
            {data.map((a, index) => {
              return (
                <Link href={`/detailAnime/${a.link.endpoint}`} key={index}>
                <a>
                  <div className="h-56 flex flex-col bg-[#282828] pb-5 rounded-lg">
                    <Image
                      src={a.link.thumbnail}
                      alt={a.title}
                      width={300}
                      height={150}
                      className="rounded-t-lg object-cover"
                    />
                    <div className="mt-2">
                      <h1 className="text-md text-slate-300 font-semibold px-2">
                        {limit(a.title)}
                      </h1>
                      <p className="text-[#34b27b] text-xs">{a.release}</p>
                    </div>
                  </div>
                </a>
              </Link>
              );
            })}
          </main>
        </div>
        </motion.div>
      </div>
    </Layout>
  );
}
