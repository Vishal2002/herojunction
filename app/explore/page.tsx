import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ExplorePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <span className="font-bold text-2xl">HeroJunction</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Templates
          </Link>
        </nav>
      </header>
      <main className="flex-1 flex">
        <div className="w-64 border-r p-4">
          <Input className="mb-4" placeholder="Search companies..." type="search" />
          <nav className="space-y-2">
            <Link className="block hover:underline" href="#">
              Company 1
            </Link>
            <Link className="block hover:underline" href="#">
              Company 2
            </Link>
            <Link className="block hover:underline" href="#">
              Company 3
            </Link>
          </nav>
        </div>
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">Company Name Hero Section</h1>
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Preview</h2>
            <div className="border rounded p-4 h-64 bg-gray-100">
              {/* Preview content will go here */}
              <p className="text-center text-gray-500">Hero Section Preview</p>
            </div>
          </div>
          <Tabs defaultValue="setup">
            <TabsList>
              <TabsTrigger value="setup">Setup</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="setup">
              <h3 className="text-lg font-semibold mb-2">Setup Instructions</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Install dependencies: <code className="bg-gray-100 p-1 rounded">npm install @/components/ui</code></li>
                <li>Copy the code from the "Code" tab</li>
                <li>Paste the code into your project's appropriate file (e.g., <code className="bg-gray-100 p-1 rounded">app/page.tsx</code>)</li>
                <li>Customize the content and styling as needed</li>
              </ol>
            </TabsContent>
            <TabsContent value="code">
              <h3 className="text-lg font-semibold mb-2">Code</h3>
              <div className="border rounded p-4 bg-gray-100">
                <pre>
                  <code>{`import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Your Headline Here
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Your subheadline or description goes here. Make it compelling!
            </p>
          </div>
          <div className="space-x-4">
            <Link href="#">
              <Button>Primary CTA</Button>
            </Link>
            <Link href="#">
              <Button variant="outline">Secondary CTA</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}`}</code>
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}