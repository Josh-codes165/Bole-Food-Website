import grilledChicken from "../assets/grilled-chicken.jpg"
import abacha from "../assets/abacha.jpg"
import nkwobi from "../assets/nkwobi.jpg"
import bole from "../assets/bole.jpg"
import { ArrowDownRight, ArrowUpRight, MoveUpRight } from "lucide-react";

const dishes = [
  {
    number: "01",
    name: "Grilled Chicken",
    category: "FROM THE GRILL",
    description:
      "Beautifully grilled chicken, rich in flavour and served with a touch of irresistible spice.",
    image:grilledChicken,
    className: "md:col-span-1",
  },
  {
    number: "02",
    name: "Abacha & Ugba",
    category: "LOCAL FAVOURITES",
    description:
      "A beloved Eastern Nigerian delicacy with that unmistakable traditional taste.",
    image: abacha,
    className: "md:col-span-1",
  },
  {
    number: "03",
    name: "Nkwobi",
    category: "AUTHENTIC DELICACIES",
    description:
      "A rich and flavourful Igbo classic made for those who appreciate good food.",
    image:nkwobi,
    className: "md:col-span-1",
  },
];

export default function SignatureDishes() {
  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-[#F5EBDD] px-5 py-24 text-[#171B16] sm:px-8 md:py-32 lg:px-16"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#B68A54]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-[1440px]">
        {/* Section heading */}
        <div className="mb-14 flex flex-col justify-between gap-8 md:mb-16 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#B94D2B]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#B94D2B] sm:text-xs">
                A little taste of something special
              </span>
            </div>

            <h2 className="font-display text-5xl font-extrabold leading-[0.98] tracking-[-0.06em] sm:text-6xl md:text-7xl">
              Made to be
              <br />
              <span className="font-medium italic text-[#B94D2B]">
                savoured.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-[#171B16]/65 sm:text-base sm:leading-8">
              Great food is more than a meal. It is the aroma, the flavour,
              the first bite and the feeling that makes you want to come
              back for more.
            </p>
          </div>

          <a
            href="#full-menu"
            className="group inline-flex w-fit items-center gap-4 border-b border-[#171B16]/30 pb-3 text-sm font-bold transition-colors hover:border-[#B94D2B] hover:text-[#B94D2B]"
          >
            Explore the full menu
            <MoveUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>

        {/* Main signature dish */}
        <div className="group relative mb-5 min-h-[480px] overflow-hidden rounded-[2rem] bg-[#171B16] sm:min-h-[560px] lg:min-h-[620px]">
          <img
            src={bole}
            alt="Roasted plantain and freshly grilled fish"
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#171B16]/95 via-[#171B16]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171B16]/70 via-transparent to-[#171B16]/10" />


          {/* Main dish content */}
          <div className="absolute bottom-0 left-0 max-w-2xl p-7 sm:p-10 md:p-14 lg:p-16">
            <span className="mb-5 block text-xs font-bold tracking-[0.3em] text-[#D9A75F]">
              THE ONE THAT STARTED IT ALL
            </span>

            <h3 className="font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Bole &
              <br />
              <span className="font-medium italic text-[#D9A75F]">
                Grilled Fish.
              </span>
            </h3>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              Golden roasted plantain. Freshly grilled fish. Rich,
              flavour-packed pepper sauce. A combination that makes
              every bite worth remembering.
            </p>

            <a
              href="#order"
              className="group/link mt-8 inline-flex items-center gap-4 rounded-full bg-[#B94D2B] px-7 py-4 text-xs font-bold text-white transition-all duration-300 hover:bg-[#D05A34] hover:shadow-xl hover:shadow-[#B94D2B]/20"
            >
              Discover the experience
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
              />
            </a>
          </div>

          {/* Decorative number */}
          <span className="pointer-events-none absolute bottom-8 right-8 hidden font-display text-[10rem] font-black leading-none text-white/[0.07] lg:block">
            01
          </span>
        </div>

        {/* Supporting dishes */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => (
            <article
              key={dish.number}
              className="group relative min-h-[400px] overflow-hidden rounded-[1.5rem] bg-[#25251F] sm:min-h-[440px]"
            >
              <img
                src={dish.image}
                alt={dish.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#171B16] via-[#171B16]/30 to-transparent" />

              {/* Number */}
              <span className="absolute right-6 top-6 font-display text-sm font-bold tracking-widest text-white/75">
                / {dish.number}
              </span>

              {/* Card content */}
              <div className="absolute bottom-0 left-0 w-full p-7">
                <span className="text-[9px] font-bold tracking-[0.25em] text-[#D9A75F]">
                  {dish.category}
                </span>

                <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {dish.name}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-white/65">
                  {dish.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                    Discover more
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 group-hover:border-[#B94D2B] group-hover:bg-[#B94D2B]">
                    <ArrowDownRight size={18} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-[#171B16]/15 pt-9 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Still deciding what to eat?
            </p>
            <p className="mt-2 text-sm text-[#171B16]/60">
              There is always something delicious waiting for you.
            </p>
          </div>

          <a
            href="#full-menu"
            className="group inline-flex items-center gap-4 rounded-full bg-[#171B16] px-7 py-4 text-xs font-bold text-[#F5EBDD] transition-all duration-300 hover:bg-[#B94D2B]"
          >
            View all dishes
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
