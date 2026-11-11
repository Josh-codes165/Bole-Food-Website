import HeroImage from "../assets/main-bole-image.jpg"
import { ArrowDown, ArrowUpRight, Utensils } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[90svh] w-full items-center overflow-hidden bg-[#171B16] text-[#F5EBDD]"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <img
          src={HeroImage}
          alt="Grilled fish served with roasted plantain and pepper sauce"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Image overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#171B16] via-[#171B16]/80 to-[#171B16]/15" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#171B16]/80 via-transparent to-[#171B16]/20" />

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-96 w-96 rounded-full bg-[#B94D2B]/15 blur-[120px]" />

      <div className="mx-auto w-full max-w-[1440px] px-6 pb-24 pt-32 md:px-12 lg:px-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="mb-8 flex items-center gap-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#D9B77E] sm:text-xs">
               {" "}The taste of authentic Nigerian cuisine
            </p>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-[clamp(3.5rem,8.5vw,7.8rem)] font-extrabold leading-[0.91] tracking-[-0.065em]">
            Good Food.
            <br />
            <span className="text-[#D9A75F]">Great</span> Moments.
            <br />
            <span className="italic font-medium text-[#F5EBDD]">
              Purely Nigerian.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-lg text-sm leading-7 text-[#F5EBDD]/75 sm:text-base sm:leading-8">
            From perfectly roasted plantain to freshly grilled fish and
            flavour-packed local delicacies, experience the kind of food
            that brings everyone to the table.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#menu"
              className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-[#B94D2B] px-8 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#D05A34] hover:shadow-xl hover:shadow-[#B94D2B]/20"
            >
              Explore Our Menu
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#order"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[#F5EBDD]/35 bg-[#171B16]/20 px-8 text-sm font-semibold text-[#F5EBDD] backdrop-blur-sm transition-all duration-300 hover:border-[#D9A75F] hover:bg-[#F5EBDD]/10"
            >
              <Utensils size={17} />
              Order Your Meal
            </a>
          </div>

          {/* Bottom details */}
          <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-5 border-t border-[#F5EBDD]/20 pt-7">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D9A75F]">
                Our speciality
              </p>
              <p className="mt-2 text-sm font-medium text-[#F5EBDD]">
                Bole & Grills
              </p>
            </div>

            <div className="hidden h-9 w-px bg-[#F5EBDD]/20 sm:block" />

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D9A75F]">
                Find us
              </p>
              <p className="mt-2 text-sm font-medium text-[#F5EBDD]">
                Ikenegbu Road, Owerri
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#menu"
        aria-label="Scroll to explore the menu"
        className="absolute bottom-8 right-8 hidden items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#F5EBDD]/65 transition-colors hover:text-[#D9A75F] md:flex"
      >
        Scroll to explore
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F5EBDD]/30">
          <ArrowDown size={15} />
        </span>
      </a>
    </section>
  );
}
