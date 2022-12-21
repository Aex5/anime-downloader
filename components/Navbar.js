import { useState } from "react";

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
          <h1 className="text-xl text-[#34b27b] font-semibold">
            <span>
              &#60;<span className="text-slate-300">Lawak</span>&#47;&#62;
            </span>
          </h1>
          <form onSubmit={handleSubmit} className="mb-5 text-slate-300">
            <input
              type="text"
              onChange={handleChange}
              value={keyword}
              className="bg-[#1c1c1c] border-2 border-[#2e2e2e] rounded-md"
            />
            <button type="submit">search</button>
          </form>
        </div>
      </nav>
    </div>
  );
}
