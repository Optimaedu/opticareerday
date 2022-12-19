import Link from 'next/link'
import React from 'react'
import FooterBg from './FooterBg'

const Footer = () => {
  return (
    <div className="w-full absolute bottom-0 overflow-hidden">
      <FooterBg />
    <div className="w-full h-80 bg-optimaGray text-white pl-10 sm:pl-20 md:pl-40 font-logo">
      <p className="text-3xl mb-2">Optima</p>
      <p className="text-base">Trädgårdsgatan 30</p>
      <p className="text-base mb-2">68600 Jakobstad</p>
      <p className="text-base mb-2">e-post: fornamn.efternamn@optimaedu.fi</p>
      <p className="text-base">p. <Link className="hover:underline" href="tel:(0)6 7855 222">(0)6 7855 222</Link></p>
      <p className="text-base underline mb-4"><Link href="mailto:samkommunen@optimaedu.fi">samkommunen@optimaedu.fi</Link></p>
     
    <div className="flex flex-row gap-2">
      <Link href="https://www.facebook.com/optimaedu.fi/"><img src="https://optimaedu.fi/wp-content/themes/optima/gfx/icons/facebook.svg" /></Link>
      <Link href="https://www.instagram.com/optimaedu/"><img src="https://optimaedu.fi/wp-content/themes/optima/gfx/icons/instagram.svg" /></Link>
      <Link href="https://www.linkedin.com/company/optima-yrkesutbildning/"><img src="https://optimaedu.fi/wp-content/themes/optima/gfx/icons/linkedin.svg" /></Link>
      <Link href="https://www.youtube.com/channel/UCqDRl3XxAuA-96pTAkf_lJw"><img src="https://optimaedu.fi/wp-content/themes/optima/gfx/icons/youtube.svg" /></Link>
    </div>
    </div> 
    </div>
  )
}

export default Footer