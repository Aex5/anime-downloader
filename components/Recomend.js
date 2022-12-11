import Image from "next/image";
import Link from "next/link";

export default function Recomend({ key, title, thumbnail }) {
  return (
    <div>
      <div key={key} className="w-full">
        <div className="relative">
          <Image
            src={thumbnail}
            alt={title}
            width={800}
            height={400}
            className="rounded-xl object-fill "
          />
          <div className="w-full h-32 bg-slate-900 custom-shadow absolute z-50 bottom-[5px] rounded-xl">
            <h1 className="w-[25rem] text-left text-xl text-slate-300 font-semibold absolute bottom-7 left-5">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
