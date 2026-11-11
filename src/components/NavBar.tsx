import { ArrowRightFromLine } from "lucide-react"

const Navlinks = ["Home", "Our Menu", "Our Story", "Catering"];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#F5EBDD]/10 bg-[#171B16]/95 backdrop-blur-xl">
      <main className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-16">

        {/* Brand Logo */}
        <a href="/" className="group flex flex-col leading-none">
          <h1 className="font-display text-xl font-extrabold tracking-tight text-[#F5EBDD] md:text-2xl">
            OWERRI <span className="text-[#B68A54]">BOLE</span>
          </h1>

          <p className="mt-1.5 text-[9px] font-semibold tracking-[0.35em] text-[#F5EBDD]/60">
            FOODS & GRILLS
          </p>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-9 md:flex">
          {Navlinks.map((nav, index) => (
            <a
              key={nav}
              href={["#home", "#menu", "#story", "#catering"][index]}
              className="group relative py-2 text-[13px] font-medium tracking-wide text-[#F5EBDD]/75 transition-colors duration-300 hover:text-[#B68A54]"
            >
              {nav}

              <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#B94D2B] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Order Button */}
        <div className="flex items-center gap-3">
          <a
            href="#order"
            className="group inline-flex items-center gap-2 rounded-full bg-[#B94D2B] px-5 py-3 text-xs font-bold tracking-wide text-[#F5EBDD] transition-all duration-300 hover:bg-[#D05A34] hover:shadow-lg hover:shadow-[#B94D2B]/20 active:scale-95 md:px-7 md:text-sm"
          >
            Order Now
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRightFromLine />
            </span>
          </a>
        </div>

      </main>
    </header>
  );
}
