"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'
import { heroSections, HeroSection } from "@/data/heroSections"
import Navbar from '@/components/navbar'
//@ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
//@ts-ignore
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Code, Eye, RouteIcon, Copy, Check } from 'lucide-react'

const PreviewMedia: React.FC<{ preview: HeroSection['preview'] }> = ({ preview }) => {
  if (preview.type === 'image') {
    return (
      <Image
        src={preview.src}
        //@ts-ignore
        alt={preview.alt}
        width={800}
        height={400}
        layout="responsive"
        objectFit="cover"
      />
    )
  } else if (preview.type === 'video') {
    return (
      <video 
        controls 
        width="100%" 
        height="auto"
        poster={preview.poster}
      >
        <source src={preview.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
  }
  return null
}

export default function ExplorePage() {
  const [selectedHero, setSelectedHero] = useState<HeroSection>(heroSections[0])
  const [searchTerm, setSearchTerm] = useState("")
  const [copied, setCopied] = useState(false)
  
  const filteredHeroSections = heroSections.filter(hero =>
    hero.company.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const copyToClipboard = () => {
    navigator.clipboard.writeText(selectedHero.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col overflow-hidden min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-64 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
            <ScrollArea className="h-[calc(100vh-200px)]">
              <div className="space-y-2">
                {filteredHeroSections.map((hero) => (
                  <Button
                    key={hero.id}
                    variant="ghost"
                    className={`w-full justify-start text-left ${
                      selectedHero.id === hero.id ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'
                    }`}
                    onClick={() => setSelectedHero(hero)}
                  >
                    {hero.company}
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </div>
          
          {/* Main content */}
          <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">{selectedHero.company} Hero Section</h1>
            <Tabs defaultValue="preview" className="space-y-4">
              <TabsList>
                <TabsTrigger value="preview"><Eye className="mr-2 h-4 w-4" /> Preview</TabsTrigger>
                <TabsTrigger value="code"><Code className="mr-2 h-4 w-4" /> Code</TabsTrigger>
                <TabsTrigger value="steps"><RouteIcon className="mr-2 h-4 w-4" />Steps</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="border rounded-lg overflow-hidden">
                  <PreviewMedia preview={selectedHero.preview} />
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-lg overflow-hidden relative">
                  <div className="absolute top-2 right-4 z-10 flex items-center space-x-2">
                    <Image alt='TypeScript' width={25} height={25} src='/typescript.svg'/>
                    <Button
                      onClick={copyToClipboard}
                      size="sm"
                      variant="outline"
                      className="p-2 bg-none"
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                  <ScrollArea className="h-[400px] w-full">
                    <div className="relative overflow-x-auto">
                      <SyntaxHighlighter 
                        language="tsx" 
                        style={vscDarkPlus}
                        customStyle={{
                          margin: 0,
                          padding: '2.5rem 1rem 1rem',
                          fontSize: '0.875rem',
                          lineHeight: '1.5',
                          minWidth: '100%',
                          display: 'inline-block',
                        }}
                      >
                        {selectedHero.code}
                      </SyntaxHighlighter>
                    </div>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="steps">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Steps to Implement This Hero Section</h2>
                  <ol className="list-decimal list-inside space-y-2">
                    {selectedHero.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <footer className="bg-white dark:bg-gray-800 py-4 text-center text-sm text-gray-600 dark:text-gray-400">
        © 2024 HeroJunction. All rights reserved.
      </footer>
    </div>
  )
}