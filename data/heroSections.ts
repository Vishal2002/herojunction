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
      company: 'TechCorp',
      title: 'Innovate with TechCorp',
      description: 'Empowering businesses with cutting-edge technology solutions.',
      primaryCTA: 'Get Started',
      secondaryCTA: 'Learn More',
      code: `import Link from "next/link"
  import { Button } from "@/components/ui/button"
  
  export default function HeroSection() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Innovate with TechCorp
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Empowering businesses with cutting-edge technology solutions.
              </p>
            </div>
            <div className="space-x-4">
              <Button>Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>
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
    type: 'image',
    src: '/solana_preview.png',
    alt: 'TechCorp hero section preview'
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
  
  ];