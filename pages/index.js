import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Hero from "../components/Hero";
import Recomend from "../components/Recomend";


// coursel
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import Layout from "../components/Layout";

export async function getServerSideProps() {
  const res = await fetch(`https://kusonime-scrapper.glitch.me/api/page/1`);
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

  function limit(string = "", limit = 30) {
    return string.substring(0, limit) + "...";
  }

  return (
    <Layout>
    <div className="w-full text-center text-slate-300 ">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <main className="max-w-[800px] mx-auto pt-28">
          <Hero />

          {/* recomend anime */}
          <section>
            <h1 className="text-2xl text-left font-semibold mb-5">
              Trending Now
            </h1>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataRecomend.map((r, index) => {
                return (
                  <>
                    <SwiperSlide>
                      <Recomend
                        key={index}
                        title={r.title}
                        thumbnail={r.link.thumbnail}
                      />
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
          </section>
          

          {/* batch anime */}
          <section className="grid grid-cols-3 gap-5 pt-20 ">
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
          </section>
          <button className="mt-10 px-6 py-1 bg-[#34b27b] rounded-md">
            Load more
          </button>
        </main>
      </motion.div>
    </div>
    </Layout>
  );
}
