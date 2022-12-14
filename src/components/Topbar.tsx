import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

const Topbar = () => {
  return (
    <div className="w-full h-36 sm:h-20 flex items-center justify-center px-10 sm:justify-between flex-col sm:flex-row">
      <Link href="/" className="block">
        <Logo />
      </Link>
      <ul className="mt-2 flex text-2xl md:text-3xl sm:mt-0">
        <li className="mx-5 hover:opacity-90 sm:hover:border-b border-black"><Link href="/">Info</Link></li>
        <li className="mx-5 hover:opacity-90 sm:hover:border-b border-black"><Link href="/">Utställare</Link></li>
        <li className="mx-5 hover:opacity-90 sm:hover:border-b border-black"><Link href="/">Quiz</Link></li>
      </ul>
    </div>
  )
}

export default Topbar