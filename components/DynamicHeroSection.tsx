import React from 'react'
import { HeroSection } from '@/data/heroSections'

interface DynamicHeroSectionProps {
  heroData: HeroSection
}

const DynamicHeroSection: React.FC<DynamicHeroSectionProps> = ({ heroData }) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              {heroData.title}
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              {heroData.description}
            </p>
          </div>
          <div className="space-x-4">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-[#4b1785] rounded-full text-white font-semibold hover:opacity-90 transition-opacity">
              {heroData.primaryCTA}
            </button>
            <button className="px-6 py-3 bg-transparent border border-white rounded-full text-white font-semibold hover:bg-white hover:text-black transition-colors">
              {heroData.secondaryCTA}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DynamicHeroSection