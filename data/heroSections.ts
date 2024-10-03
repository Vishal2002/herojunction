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
    
  ];