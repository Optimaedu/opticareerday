import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import footerBg from "../../public/footer-optima.svg"
import FacebookIcon from './ui/icons/FacebookIcon'
import InstagramIcon from './ui/icons/InstagramIcon'
import LinkedInIcon from './ui/icons/LinkedInIcon'
import YoutubeIcon from './ui/icons/YoutubeIcon'

const Footer = () => {
  return (
    <div className="w-full absolute bottom-0 overflow-hidden flex flex-col">
      <Image className="w-full min-w-1600" src={footerBg} alt="footer background image" />
    <div className="w-full pb-8 bg-optimaGray text-white pl-10 sm:pl-20 md:pl-40 font-logo text-base">
      <p className="text-3xl mb-2">Optima</p>
      <p className="">Trädgårdsgatan 30</p>
      <p className="mb-4">68600 Jakobstad</p>
     
    <div className="flex flex-row gap-2">
      <Link href="https://www.facebook.com/optimaedu.fi/"><FacebookIcon /></Link>
      <Link href="https://www.instagram.com/optimaedu/"><InstagramIcon /></Link>
      <Link href="https://www.linkedin.com/company/optima-yrkesutbildning/"><LinkedInIcon /></Link>
      <Link href="https://www.youtube.com/channel/UCqDRl3XxAuA-96pTAkf_lJw"><YoutubeIcon /></Link>
    </div>
    </div> 
    </div>
  )
}

export default Footer