export default function Hero() {
  return (
    <div>
      <paragraph className="text-slate-200 text-left">
        <h1 className="text-4xl font-bold tracking-wider mb-10">
          Ended Anime. <br />
          <span className="text-[#34b27b]">Fast & Free.</span>
        </h1>
        <p className="max-w-[30rem] text-base text-[#b4b4b4] mb-10">
          Lawak Anime is a alternative anime downloader. if you think ads is
          awfull, Lawak Anime is best choise to you. You can download batch
          anime below and enjoy it without ads 🎉
        </p>

        <div className="flex gap-2 items-center mb-10">
          <button>
            <a
              target="_blank"
              rel="noreferrer"
              href="/"
              className="mb-10 px-6 py-3 font-semibold bg-[#34b27b] border-[1px] border-emerald-800 rounded-md"
            >
              Star this project
            </a>
          </button>

          <button>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Sujaruu"
              className="mb-10 px-6 py-3 font-semibold bg-[#2e2e2e] border-[1px] border-gray-700 rounded-md"
            >
              Follow my Github
            </a>
          </button>
        </div>
      </paragraph>
    </div>
  );
}
