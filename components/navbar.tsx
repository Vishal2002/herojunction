import Link from "next/link"
import { Button } from "./ui/button"

const Navbar = () => {
  return (
    <div>
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
<Link className="flex items-center justify-center" href="/">
  <span className="font-bold text-2xl">HeroJunction</span>
</Link>
<nav className="ml-auto flex gap-4 sm:gap-6">
  <Link className="text-sm font-medium hover:underline underline-offset-4" href="https://x.com/sharma_188">
    <Button className="font-semibold">Follow on X</Button>
  </Link>
  <Link className="text-sm font-medium hover:underline underline-offset-4" href="https://peerlist.io/vishal2002">
    <Button className="font-semibold">Like on Peerlist</Button>
  </Link>
</nav>
</header>
    </div>
  )
}

export default Navbar



