// data/heroSections.ts

export interface HeroSection {
    id: string;
    company: string;
    title: string;
    description: string;
    primaryCTA: string;
    secondaryCTA: string;
    code: string;
    steps: string[];
    preview: {
      type: 'image' | 'video';
      src: string;
      alt?: string;
      poster?: string;
    };
  }
  
  export const heroSections: HeroSection[] = [
    {
      id: 'company1',
      company: 'Fonts Ninja',
      title: 'Choose your Fonts Wisely',
      description: 'Empowering businesses with cutting-edge technology solutions.',
      primaryCTA: 'Get Started',
      secondaryCTA: 'Learn More',
      code: `//app.tsx
"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Search, Brush, Folder, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'

const fonts = [
  'Arial, sans-serif',
  'Trebuchet MS, sans-serif',
  'Georgia, serif',
  'Palatino, serif',
  'Garamond, serif',
  'Brush Script MT, cursive',
  'Comic Sans MS, cursive',
]

export default function FontsNinjaLanding() {
  const [currentFontIndex, setCurrentFontIndex] = useState(0)
  const controls = useAnimation()
  const arrowControls = useAnimation()

  useEffect(() => {
    const animate = async () => {
      await controls.start({ opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } })
      await new Promise(resolve => setTimeout(resolve, 2000))
      await controls.start({ opacity: 0, y: -20, transition: { duration: 0.5, ease: 'easeIn' } })
      setCurrentFontIndex((prevIndex) => (prevIndex + 1) % fonts.length)
      await controls.start({ opacity: 0, y: 20, transition: { duration: 0 } })
    }

    const interval = setInterval(animate, 1000)
    animate()

    return () => clearInterval(interval)
  }, [controls])

  const AnimatedWord = () => (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      style={{
        fontFamily: fonts[currentFontIndex],
        display: 'inline-block',
        fontSize: '1.0em',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      awesome
    </motion.span>
  )

  const arrowVariants = {
    rest: { x: 0 },
    hover: {
      x: [0,100],
      transition: {
        duration: 1,
        times: [0, 0.4, 0.4, 1],
        ease: "easeInOut",
      }
    }
  }


  return (
    <div className="min-h-screen flex flex-col bg-background">
      <nav className="py-4 px-6 flex items-center justify-around border-b">
        <div className="flex items-center flex-1">
        <Link href="/" className="flex items-center ml-5">
            <svg width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg" 
            className="mr-2">
              <path fillRule="evenodd" clipRule="evenodd" d="M18.7072 9.4045C18.3012 10.1865 17.6137 10.5704 17.1996 10.6106C16.7856 
              10.6508 16.0239 10.3604 15.9707 9.85795C15.9219 9.39589 17.7389 7.89666 18.8459 7.84945C18.9991
               7.84292 19.1215 7.97953 19.1047 8.1328C19.0745 8.40649 18.9828 8.87376 18.7072 9.4045ZM15.4888 9.91773C15.2996 10.459 13.7684 10.5652 13.3384 
              10.4668C12.9084 10.3685 12.0946 9.74867 11.7363 8.90875C11.4731
               8.29144 11.5019 7.77801 11.5472 7.51293C11.5673 7.39533 11.6896 
              7.30801 11.8258 7.31444C13.4339 7.39041 15.678 9.37639 
              15.4888 9.91773ZM27.1325 9.45491C26.72 9.20099 26.5337 9.74914 26.2144 9.74914C26.1267 
              8.94176 26.951 8.37403 27.0857 8.29078C27.2206 8.20733 
              27.3243 7.68643 26.7281 7.69173C26.2926 
              7.69173 25.8933 8.322 25.8933 8.322C25.8155 7.89485 
              26.2511 7.49892 26.3704 7.39476C26.7125 7.13431 
              26.1111 6.73317 25.6912 7.01964C25.1882 7.43127 25.0275 7.9834 25.0275 7.9834C24.9135 7.71245 25.1571 
              7.16553 25.2298 7.00403C25.3023 6.84254 25.0172 6.56648 24.5765 6.98842C24.058 7.47811 23.8921 8.39484 
              23.8921 8.39484C22.7664 8.06826 20.3055 8.07526 
              19.4312 8.43921C19.4312 8.43921 20.0673 4.27236 15.6863 2.25346C14.362 1.64324 12.6771 1.75062 11.5893 
              2.69167C11.7067 2.25781 11.7533 1.15999 11.3778 
              0.623858C11.3778 0.623858 9.9901 -0.0745277 9.04775 0.00655013C10.8089 1.79253 10.7407 2.82933 10.7071 3.58268C10.1901 1.66472 8.38787 0.124525 6.37906 
              0.193777C6.70862 1.24192 6.41286 2.65781 6.41286 2.65781C7.96001 2.41836 9.44077 3.20444 10.0191 5.48503C9.87721 5.7768 9.82014 6.46932 9.95602 6.71728L9.28032 
              6.224C7.35955 4.78106 3.24042 3.26717 2.13102 3.16556C1.02153 3.06395 0.150644 4.42534 0.0150536 5.38976C-0.120349 6.35418 0.688582 6.82551 1.20157 7.06146C1.71455 
              7.29741 2.92216 7.75483 3.21603 6.87887C5.66985 7.52333 7.99767 10.6143 7.73459 14.8612C6.34205 16.8837 3.82261 23.0009 6.6702 26.8929C6.07624 28.6618 5.99498 30.5211 
              6.80589 30.7891C7.5297 31.0024 9.69171 26.5598 9.84378 25.7957C9.49614 23.0122 11.0932 21.1602 13.6462 20.3634C14.4284 21.1384 14.5786 23.4065 14.6548 24.2579C14.7308 
              25.1094 15.2105 24.9552 15.3953 24.8024C17.3834 23.2523 19.4585 22.0626 19.6975 21.9752C20.7295 21.3749 20.7947 20.6981 19.7952 20.6544C18.7957 20.6108 17.8976 20.7855 
              17.8976 20.7855C19.4511 18.2204 22.0006 14.8397 
              18.1764 15.3167C18.856 12.8106 21.3975 10.4041 
              25.4558 10.7433C27.1036 10.7807 27.545 9.70893 27.1325 9.45491Z" fill="#00CA99" />
            </svg>
            <div className='relative'>
            <span className="font-bold tracking-tighter text-xl">Fonts Ninja</span>
            <span className="ml-2 text-xs font-bold text-black bg-[#9FE5C8] absolute top-[-3px] left-[85px] px-0.5 pl-1 pr-1 py-0.4 rounded-full">BETA</span>
            </div>
            
          </Link>
        </div>
        
        <div className="hidden md:flex items-center  space-x-6">
          <Link href="/typefaces" className="text-black cursor-pointer active:font-bold text-sm hover:text-[#7ee0b8]">Typefaces</Link>
          <Link href="/bookmarks" className="text-black cursor-pointer text-sm hover:text-[#7ee0b8]">Bookmarks</Link>
          <Link href="/tools" className="text-black text-sm cursor-pointer hover:text-[#7ee0b8]">Tools</Link>
          <Link href="/about" className="text-black text-sm cursor-pointer hover:text-[#7ee0b8]">About us</Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 ml-4">
            <Button variant="ghost" size="icon">
              <Search className="w-5 h-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Brush className="w-5 h-5" />
              <span className="sr-only">Share</span>
            </Button>
          </div>
          <Button className='text-sm bg-white text-black hover:bg-white'>Sign in</Button>
          <Button>Sign up</Button>
        </div>
      </nav>

      <main className="flex-grow pt-14 pr-14 flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-foreground  text-4xl sm:text-5xl md:text-5xl 
          lg:text-[110px] font-bold leading-tight sm:leading-tight md:leading-tight 
          lg:leading-[114px] tracking-tight mb-8 sm:mb-16 md:mb-24 lg:mb-40">
           <Image
            src={"/global-search.png"}
            alt='Discover'
            height={80}
            width={80}
           className="inline-block w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 
           lg:h-24 mr-2 align-middle"
           />
            Discover {' '} <span className="text-[#7ee0b8] inline-block">
              <AnimatedWord /></span> 
              <motion.div
              className="inline-flex absolute top-40  items-center justify-center 
              w-5 h-5 sm:w-4 sm:h-4 md:w-8 md:h-8 lg:w-8 lg:h-8 bg-[#7ee0b8] rounded-full 
              ml-2 cursor-pointer overflow-hidden"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <motion.div
                variants={arrowVariants}
              >
                <ArrowRight className="w-6 h-6 sm:w-3 sm:h-3 md:w-3 md:h-3 lg:w-5 lg:h-5 text-black" />
              </motion.div>
            </motion.div>
            <br />
            typefaces and build
            <br />
            your <Folder className="inline-block w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-2 align-middle" />
            font collection.
          </h1>
        </div>
      </main>
    </div>
  )
}`,
  steps: [
    "Set up your Next.js project with TypeScript and Tailwind CSS.",
    "Install necessary UI components (e.g., @/components/ui/button).",
    "Create a new component file for your hero section.",
    "Copy the provided code into your new component file.",
    "Adjust the content (text, buttons) to match your brand.",
    "Integrate the hero section into your main page or layout component.",
    "Test the component across different screen sizes for responsiveness.",
    "Optimize for performance and accessibility."
  ],
  preview: {
    type: 'video',
    src: '/fonts_ninja.mp4',
    alt: 'Fonts Ninja'
  },
    },
   
    {
      id: 'company2',
      company: 'Solana',
      title: 'Innovate with TechCorp',
      description: 'Empowering businesses with cutting-edge technology solutions.',
      primaryCTA: 'Get Started',
      secondaryCTA: 'Learn More',
      code: `//app/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Search, Circle, ArrowUpRight, 
        Hexagon, Facebook, ShoppingBag, ShieldAlertIcon, 
        CircleAlert, CircleArrowDown } from 'lucide-react' //change the icons as per needs
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

export default function Home() {
  const navItems = [
    {
      name: 'Learn',
      dropdownItems: ['Blockchain Basics', 'Solana Architecture', 'Tokenomics'],
    },
    {
      name: 'Developers',
      dropdownItems: ['SDKs', 'Smart Contracts', 'Tutorials'],
    },
    {
      name: 'Solutions',
      dropdownItems: ['DeFi', 'NFTs', 'Gaming'],
    },
    {
      name: 'Network',
      dropdownItems: ['Validators', 'Staking', 'Performance'],
    },
    {
      name: 'Community',
      dropdownItems: ['Events', 'Forums', 'Grants'],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* Left background ring */}
      <div className="absolute left-[-57%] top-[-4rem] w-full h-full">
        <Image
          src="/rings_of_solana.webp"
          alt="Left background ring"
          layout="fill"
          objectFit="contain"
          objectPosition="left center"
          quality={100}
        />
      </div>

      {/* Right background ring */}
      <div className="absolute left-[48%] top-0 w-full h-full">
        <Image
          src="/right_ring_solana.webp"
          alt="Right background ring"
          layout="fill"
          objectFit="contain"
          objectPosition="right center"
          quality={100}
        />
      </div>

      {/* Navbar */}
      <nav className="relative z-10 bg-black flex items-center justify-evenly px-10 py-4">
        <div className="flex items-center gap-10">
          <Image src="/solana.svg" alt="Solana Logo" width={120} height={40} />
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-gray-300 hover:bg-black hover:text-gray-400">
                    {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-gray-800 text-white">
                  {item.dropdownItems.map((dropdownItem) => (
                    <DropdownMenuItem key={dropdownItem} className="hover:bg-gray-700">
                      <Link href="#" className="w-full">
                        {dropdownItem}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search"
              className="w-40 pl-8 py-1 bg-gray-800 text-sm focus:ring-2 focus:ring-violet-500 text-white"
            />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center px-4">
        <h1 className="text-2xl text-balance md:text-3xl lg:text-6xl font-sans font-bold mb-6 max-w-4xl">
          Powerful for developers.
          <br />
          Fast for everyone.
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          Bring blockchain to the people. Solana supports experiences
          for power users, new consumers, and everyone in between.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-[#4b1785] rounded-full
           text-white font-semibold transition-all duration-300 ease-in-out hover:bg-white
            hover:text-black hover:bg-none hover:bg-white">
            START BUILDING
          </button>
          <button className="px-6 py-3 bg-transparent border
           border-white rounded-full text-white font-semibold
            hover:bg-white hover:text-black transition-colors">
            RESOURCES
          </button>
        </div>
        <div className="mt-16">
          <p className="text-sm text-blue-400 mb-4">POWERING TOOLS AND INTEGRATIONS FROM COMPANIES ALL AROUND THE WORLD</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { name: 'Circle', icon: Circle },
              { name: 'Discord', icon: CircleArrowDown },
              { name: 'Google', icon: CircleAlert },
              { name: 'Jump', icon: ArrowUpRight },
              { name: 'Magic Eden', icon: Hexagon },
              { name: 'Meta', icon: Facebook },
              { name: 'Shopify', icon: ShoppingBag },
              { name: 'Stripe', icon: ShieldAlertIcon }
            ].map(({ name, icon: Icon }) => (
              <div key={name} className="w-24 h-12 bg-gray-800 rounded-md flex items-center justify-center">
                <Icon className="w-6 h-6 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
  }`,
  steps: [
    "Set up Shadcn in your Next.js App.",
    "Install all the required components",
    "Download the assets from the Link and Keep it in Public Folder",
    "Copy the Code and Paste in the app/page.tsx",
  ],
  preview: {
    type: 'image',
    src: '/solana_preview.png',
    alt: 'TechCorp hero section preview'
  },
    },
    {
      id: 'company3',
      company: 'CRED',
      title: 'Not all deserve this',
      description: 'Empowering businesses with cutting-edge technology solutions.',
      primaryCTA: 'Get Started',
      secondaryCTA: 'Learn More',
      code: `//app/page.tsx
"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'

export default function CREDLandingPage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="relative min-h-screen font-sans overflow-hidden">
      {isClient && (
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/cred_hero.mp4" type="video/mp4" />
        </video>
      )}
      
      <div className="relative z-10">
      <nav className="fixed top-7 left-5 right-5 z-50 p-4 flex justify-between items-center">
          <div className="text-2xl flex justify-center flex-col font-bold">
            <Image src="/cred.svg" alt="CRED Logo" width={80} height={80} />
            <div className='flex tracking-tighter'>
            <span className='text-white text-xl pl-2'>C</span>
            <span className='text-white text-xl pl-2'>R</span>
            <span className='text-white text-xl pl-2'>E</span>
            <span className='text-white text-xl pl-2'>D</span>
            </div>
           
          </div>
          
          <div className="flex items-center border border-1 pl-5 pr-5">
            <div className="px-3 py-4 flex flex-col items-center justify-center">
              <span className="text-white font-serif tracking-tight mb-1 text-xs">CRED</span>
              <span className="text-3xl font-serif text-white leading-3">MONEY</span>
            </div>
            <div className='p-3 flex pl-5 items-center justify-center border-l'>
              <Menu className='text-white cursor-pointer' size={24} />
            </div>
          </div>
        </nav>

        <div className="flex flex-col items-center justify-center h-screen text-center px-4">
          <h1 className="text-5xl md:text-8xl font-bold mb-4 font-serif text-white">
            crafted for the <br /> creditworthy
          </h1>
          <p className="text-xl md:text-md mb-8 max-w-2xl text-white">
            CRED is a members-only club that enables the <br /> trustworthy to make financial progress
          </p>
          <div className="absolute bottom-10 right-10">
            <Link
              href="https://peerlist.io/vishal2002"
              className="bg-none flex items-center gap-2 text-xl text-white border p-3"
            >
              <Image src="/qr-final.webp" height={50} width={80} alt="QR Code" />
              Download <br /> CRED
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}`,
  steps: [
    "Set up Shadcn in your Next.js App.",
    "Install all the required components",
    "Download the assets from the Link and Keep it in Public Folder",
    "Copy the Code and Paste in the app/page.tsx",
  ],
  preview: {
    type: 'video',
    src: '/cred.mp4',
    alt: 'Cred hai na'
  },
    },
    {
      id: 'company4',
      company: 'Ethereum',
      title: 'Eth',
      description: 'Empowering businesses with cutting-edge technology solutions.',
      primaryCTA: 'Get Started',
      secondaryCTA: 'Learn More',
      code: `//app/page.tsx
"use client"
import Image from "next/image"
import Link from "next/link"
import { MoonIcon,} from "lucide-react"
import { useState, useEffect } from "react"

const ethereumTranslations = [
  "Ethereum",
  "イーサリアム",
  "以太坊",
  "Эфириум",
  "إيثيريوم",
  "Ξ",
]
export default function Ethereum() {
    const [typedText, setTypedText] = useState("")
    const [translationIndex, setTranslationIndex] = useState(0)
  
    useEffect(() => {
      let currentIndex = 0
      const currentTranslation = ethereumTranslations[translationIndex]
  
      const typingInterval = setInterval(() => {
        if (currentIndex <= currentTranslation.length) {
          setTypedText(currentTranslation.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(typingInterval)
          setTimeout(() => {
            setTranslationIndex((prevIndex) => (prevIndex + 1) % ethereumTranslations.length)
          }, 1000) // Wait for 1 second before starting the next word
        }
      }, 30) // Adjust typing speed here
  
      return () => clearInterval(typingInterval)
    }, [translationIndex])
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container ml-8  py-4 flex items-center justify-between">
          <div className="flex items-center space-x-7">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 115 182" className="h-[35px] w-[22px] opacity-85 hover:opacity-100"><path fill="#F0CDC2" 
          stroke="#1616B4" stroke-linejoin="round" d="M57.505 181v-45.16L1.641 103.171z"></path><path fill="#C9B3F5" stroke="#1616B4" stroke-linejoin="round" d="M57.69 
          181v-45.16l55.865-32.669z"></path><path fill="#88AAF1" stroke="#1616B4" stroke-linejoin="round" d="M57.506 124.615V66.979L1 92.28z"></path><path fill="#C9B3F5" 
          stroke="#1616B4" stroke-linejoin="round" d="M57.69 124.615V66.979l56.506 25.302z"></path><path fill="#F0CDC2" stroke="#1616B4" stroke-linejoin="round" 
          d="M1 92.281 57.505 1v65.979z"></path>
          <path fill="#B8FAF6" stroke="#1616B4" stroke-linejoin="round" d="M114.196 92.281 57.691 1v65.979z"></path></svg>
            <nav className="hidden md:flex space-x-4">
              <Link className="text-sm p-2 rounded-sm hover:bg-[#CFC4FB] hover:text-[#ac97ff] hover: font-medium" href="#">
                Learn
              </Link>
              <Link className="text-sm p-2 rounded-sm font-medium hover:bg-[#CFC4FB] hover:text-[#ac97ff]" href="#">
                Use
              </Link>
              <Link className="text-sm p-2 rounded-sm font-medium hover:bg-[#CFC4FB] hover:text-[#ac97ff]" href="#">
                Build
              </Link>
              <Link className="text-sm p-2 rounded-sm font-medium hover:bg-[#CFC4FB] hover:text-[#ac97ff]" href="#">
                Participate
              </Link>
              <Link className="text-sm p-2 rounded-sm font-medium hover:bg-[#CFC4FB] hover:text-[#ac97ff]" href="#">
                Research
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
            <input
                className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-16 focus:border-[#a28bfe] focus:outline-none focus:ring-1 focus:ring-[#a28bfe]"
                placeholder="Search"
                type="text"
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <span className="absolute right-3 top-2.5 flex items-center text-sm text-gray-400">
                <kbd className="rounded border border-gray-300 px-1 font-sans">Ctrl</kbd>
                <span className="mx-0.5">+</span>
                <kbd className="rounded border border-gray-300 px-1 font-sans">K</kbd>
              </span>
            </div>
            <button className="rounded-full p-2 hover:bg-gray-100">
              <MoonIcon className="h-5 w-5" />
            </button>
            <select className="rounded-md border border-gray-300 py-2 pl-3 pr-10 focus:border-[#a28bfe] 
            focus:outline-none focus:ring-1 focus:ring-[#a28bfe]">
              <option>EN</option>
              <option>ES</option>
              <option>FR</option>
            </select>
          </div>
        </div>
      </header>
      <main className="flex-grow w-full">
        <section className="h-[240px] md:h-[380px] lg:h-[480px] mx-auto px-4 py-1 text-center">
          <div className="h-[240px] md:h-[380px] lg:h-[480px]">
            <Image
              alt="An illustration of a futuristic city, representing the Ethereum ecosystem."
              src="https://ethereum.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fhero.94a1ecc4.png&w=1920&q=75"
              width={4200}
              height={1767}
              priority
              className="h-full w-full object-cover"
              sizes="(max-width: 1504px) 100vw, 1504px"
            />
          </div>
        </section>
        <section className="container flex flex-col gap-y-3 mx-auto px-4 py-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-5xl">Welcome to Ethereum</h1>
          <span className="text-sm font-semibold text-[#a28bfe] h-4">{typedText}</span>
          <span className="text-lg text-gray-400 space-y-2">The leading platform for innovative apps and <br />
           blockchain networks</span>
        </section>
      </main>
    </div>
  )
}`,
  steps: [
    "Set up Shadcn in your Next.js App.",
    "Install all the required components",
    "Download the assets from the Link and Keep it in Public Folder",
    "Copy the Code and Paste in the app/page.tsx",
  ],
  preview: {
    type: 'image',
    src: '/eth.png',
    alt: 'Ethereum'
  },
    },
  
  ];