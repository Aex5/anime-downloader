import Image from "next/image";

export default function DetailAnime({
  title,
  thumbnail,
  japan,
  genre,
  producer,
  status,
  score,
  sinopsis,
}) {
  return (
    <section className="w-full">
      <div className="max-w-[800px] mx-auto">
        <div className="relative">
          <Image
            src={thumbnail}
            alt={title}
            width={800}
            height={400}
            className="rounded-xl object-fill"
          />
          <div className="w-full h-36 custom-shadow absolute bottom-1 rounded-b-xl">
            <div className="absolute bottom-8 px-10">
              <h1 className="text-2xl font-semibold ">{title}</h1>
              <p className="space-x-3">
                <span className="bg-[#34b27b] bg-opacity-40 py-1 px-2 rounded-md ">
                  {japan}{" "}
                </span>
                <span className="bg-[#34b27b] bg-opacity-40 py-1 px-2 rounded-md">
                  {status}
                </span>
                <span className="bg-[#34b27b] bg-opacity-40 py-1 px-2 rounded-md">
                  {score}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 space-y-10">
          <p className="text-sm font-semibold">
            <span className="text-xl text-[#34b27b]">Producers</span> <br />{" "}
            {producer}
          </p>
          <p className="text-sm font-semibold">
            <span className="text-xl text-[#34b27b]">About</span> <br />{" "}
            {sinopsis}
          </p>
        </div>
      </div>
    </section>
  );
}
