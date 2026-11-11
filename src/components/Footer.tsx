
import {
  ArrowUpRight,
  MapPin,
  MoveUp,
} from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Menu", href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Our Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const instagramUrl = "https://www.instagram.com/owerribolefoods/";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-[#171B16] px-5 pb-8 pt-20 text-[#F5EBDD] sm:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-14 border-b border-white/15 pb-14 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-block">
              <h2 className="font-display text-3xl font-extrabold tracking-[-0.05em]">
                OWERRI <span className="text-[#D9A75F]">BOLE</span>
              </h2>
              <p className="mt-1 text-[9px] font-semibold tracking-[0.38em] text-white/50">
                FOODS & GRILLS
              </p>
            </a>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/50">
              Celebrating the rich flavours of Nigerian cuisine, one
              delicious meal at a time.
            </p>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Owerri Bole Foods on Instagram"
              className="mt-7 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-[#D9A75F] transition-all hover:border-[#B94D2B] hover:bg-[#B94D2B] hover:text-white"
            >
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-[#D9A75F]">
              Explore
            </h3>

            <nav className="mt-7 flex flex-col items-start gap-5">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-[#D9A75F]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-[#D9A75F]">
              Find us
            </h3>

            <div className="mt-7 flex gap-4">
              <MapPin
                size={20}
                className="mt-1 shrink-0 text-[#D9A75F]"
              />

              <div>
                <p className="text-sm font-semibold text-white">
                  Owerri, Imo State
                </p>
                <p className="mt-2 text-sm leading-7 text-white/50">
                  Trinity Plaza, Plot 366,
                  <br />
                  Ikenegbu Road, Owerri,
                  <br />
                  Imo State, Nigeria.
                </p>
              </div>
            </div>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#D9A75F] transition-colors hover:text-white"
            >
              Send us a message
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col justify-between gap-5 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/40">
            © {currentYear} Owerri Bole Foods. All rights reserved.
          </p>

          <a
            href="#home"
            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-white/60 transition-colors hover:text-[#D9A75F]"
          >
            Back to top
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-all group-hover:border-[#D9A75F] group-hover:bg-[#D9A75F] group-hover:text-[#171B16]">
              <MoveUp size={15} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
