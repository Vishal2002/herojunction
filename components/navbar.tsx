import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link className="flex items-center justify-center" href="/">
       
          <span className="font-bold ml-2 text-2xl">HeroJunction</span>
        </Link>
        <nav className="ml-auto flex gap-3 sm:gap-6">
        <Link href="https://github.com/Vishal2002/herojunction" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm" className="h-8 gap-2">
              <GitHubLogoIcon className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://x.com/sharma_188">
            <Button variant="ghost" className="h-9 w-9 px-0">
              <Image src="/x.png" alt="X (Twitter) Icon" width={20} height={20} />
            </Button>
          </Link>
          <Link href="https://peerlist.io/vishal2002">
            <Button variant="ghost" className="h-9 w-9 px-0">
              <Image src="/Peerlist.png" alt="Peerlist Icon" width={60} height={60} />
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}