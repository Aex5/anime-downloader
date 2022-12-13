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
    <div className="w-full">
      <nav className="max-w-[800px] h-10 mx-auto">
        <form onSubmit={handleSubmit} className="mb-5">
          <input type="text" onChange={handleChange} value={keyword} />
          <button type="submit">search</button>
        </form>
      </nav>
    </div>
  );
}
