import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import { FlipWords } from "@/components/ui/flip-words"
function GridBackgroundDemo() {
  return (
    <div className="h-[20rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">

    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>

  </div>
  )
}

export default function LandingPage() {
  const words=["Hours","Minutes"]
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 relative">
        <GridBackgroundDemo />
        <section className="absolute inset-0 w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-4xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400">
                  Make Stunning Hero <br /> Sections in <FlipWords words={words}/>
                </h1>
                <p className="mx-auto max-w-[700px] text-neutral-700 md:text-xl dark:text-neutral-300">
                  Jumpstart your startup's landing page with professionally designed hero sections. Copy, paste, and
                  customize - it's that simple.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/explore">
                  <Button className="bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
                    Explore Templates
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="relative z-10 flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-neutral-200 dark:border-neutral-800">
        <p className="text-xs text-neutral-500 dark:text-neutral-400">© 2024 HeroJunction. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-neutral-500 dark:text-neutral-400" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-neutral-500 dark:text-neutral-400" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}