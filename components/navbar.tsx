"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Moon, Sun, Laptop } from "lucide-react"
import { useTheme } from "next-themes"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <Laptop className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all data-[state=system]:rotate-0 data-[state=system]:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Laptop className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default function Navbar() {
  const { resolvedTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link className="flex items-center justify-center" href="/">
          <span className="font-bold ml-2 text-2xl">HeroJunction</span>
        </Link>
        <nav className="ml-auto flex gap-3 sm:gap-6 items-center">
          <Link href="https://github.com/Vishal2002/herojunction" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm" className="h-8 gap-2">
              <GitHubLogoIcon className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://x.com/sharma_188">
            <Button variant="ghost" className="h-9 w-9 px-0">
              <Image 
                src={isDark ? "/x-white.png" : "/x.png"} 
                alt="X (Twitter) Icon" 
                width={20} 
                height={20} 
              />
            </Button>
          </Link>
          <Link href="https://peerlist.io/vishal2002/project/hero-junction">
            <Button variant="ghost" className="h-9 w-9 px-0">
              <Image src="/Peerlist.png" alt="Peerlist Icon" width={60} height={60} />
            </Button>
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}