import { useState } from "react";
import { MdSearch } from "react-icons/md";
import Link from "next/link";

export default function Navbar() {
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

  return (
    <div className="w-full bg-[#1c1c1c] fixed z-20 border-b-2 border-[#2e2e2e]">
      <nav className="max-w-[800px] mx-auto py-3">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a>
              <h1 className="text-xl text-[#34b27b] font-semibold">
                <span>
                  &#60;<span className="text-slate-300">Lawak</span>&#47;&#62;
                </span>
              </h1>
            </a>
          </Link>

          <form onSubmit={handleSubmit} className="mb-5 text-slate-300">
            <input
              type="text"
              onChange={handleChange}
              value={keyword}
              placeholder="search anime"
              className="bg-[#1c1c1c] text-sm px-2 border-2 border-[#2e2e2e] rounded-md"
            />
            <button type="submit">
              <MdSearch />
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
