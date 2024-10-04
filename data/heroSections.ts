// data/heroSections.ts

export interface HeroSection {
    id: string;
    company: string;
    title: string;
    description: string;
    primaryCTA: string;
    secondaryCTA: string;
    code: string;
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
  }`
    },
    {
      id: 'company2',
      company: 'Solana',
      title: 'Innovate with TechCorp',
      description: 'Empowering businesses with cutting-edge technology solutions.',
      primaryCTA: 'Get Started',
      secondaryCTA: 'Learn More',
      code: `import Image from 'next/image'
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
          <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-[#4b1785] rounded-full text-white font-semibold transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:bg-none hover:bg-white">
            START BUILDING
          </button>
          <button className="px-6 py-3 bg-transparent border border-white rounded-full text-white font-semibold hover:bg-white hover:text-black transition-colors">
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
  }`
    },
    
  ];