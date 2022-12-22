import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='w-full bg-[#1c1c1c] border-t-2 border-[#2e2e2e]'>
        <footer className='max-w-[800px] mx-auto'>
            <Link href='/'>
                <a>home</a>
            </Link>
        </footer>
    </div>
  )
}
