import { useState, Fragment,useRef } from "react";
import { MdSearch } from "react-icons/md";
import Link from "next/link";

import { Dialog, Transition } from "@headlessui/react";

export default function Navbar() {
  const [keyword, setKeyword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

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
          <button
            onClick={() => setIsOpen(true)}
            className="text-slate-300 text-xl"
          >
            <MdSearch />
          </button>
        </div>

        <Transition
          show={isOpen}
          enter="transition-opacity duration-200 ease-in"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-out"
          leaveFrom="translate-x-0 opacity-100"
          leaveTo="translate-x-full opacity-0"
          as={Fragment}
        > 
          <Dialog open={isOpen} initialFocus={inputRef} onClose={() => setIsOpen(false)}>
            <div
              className="fixed inset-0 bg-black/70 z-30 backdrop-blur-md"
              aria-hidden="true"
            >
              <div className="fixed inset-0 flex items-center justify-center">
                <Dialog.Panel className="w-full max-w-sm  bg-[#1e1e1e] rounded-xl p-10 border-2 border-[#2e2e2e] text-center">
                  <Dialog.Title className="text-[#34b27b] font-semibold text-lg">
                    Search Anime
                  </Dialog.Title>
                  <Dialog.Description className="text-sm text-slate-300 pb-5">
                    Search All Batch Anime
                  </Dialog.Description>

                  <form
                    onSubmit={handleSubmit}
                    className="mb-5 text-slate-300 flex items-center justify-center gap-2"
                  >
                    <button type="submit">
                      <MdSearch />
                    </button>
                    <input
                      type="text"
                      ref={inputRef}
                      onChange={handleChange}
                      value={keyword}
                      placeholder="search anime"
                      className="bg-[#1c1c1c] text-sm p-1 border-2 border-[#2e2e2e] rounded-md"
                    />
                     <button onClick={() => setIsOpen(false)} className='bg-[#2e2e2e] py-1 px-2 rounded-md'>esc</button>
                  </form>
                </Dialog.Panel>
              </div>
            </div>
          </Dialog>
        </Transition>
      </nav>
    </div>
  );
}
