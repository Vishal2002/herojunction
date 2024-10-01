import Link from "next/link"

const Navbar = () => {
  return (
    <div>
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
    </div>
  )
}

export default Navbar



