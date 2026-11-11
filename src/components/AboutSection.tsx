
import { ArrowUpRight, Flame, Heart, Utensils } from "lucide-react";
import fish from "../assets/fish.jpg"
import abole from "../assets/abole.jpg"

const brandValues = [
  {
    icon: Flame,
    title: "Bold Flavours",
    description:
      "Celebrating the rich, unforgettable flavours of Nigerian cuisine.",
  },
  {
    icon: Heart,
    title: "Made with Care",
    description:
      "Every meal deserves attention, care and a little extra love.",
  },
  {
    icon: Utensils,
    title: "Local Goodness",
    description:
      "Bringing the deliciousness of traditional Nigerian food to the table.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-[#171B16] px-5 py-24 text-[#F5EBDD] sm:px-8 md:py-32 lg:px-16"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-48 top-40 h-[500px] w-[500px] rounded-full bg-[#B94D2B]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1440px]">
        {/* Section heading */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D9A75F] sm:text-xs">
                A little about us
              </span>
            </div>

            <h2 className="font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-8xl">
              Rooted in flavour.
              <br />
              <span className="font-medium italic text-[#D9A75F]">
                Made with passion.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#F5EBDD]/60 sm:text-base sm:leading-8">
            More than just a meal, it is a celebration of the flavours,
            traditions and little moments that make good food unforgettable.
          </p>
        </div>

        {/* Main editorial layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">
          {/* Image composition */}
          <div className="relative">
            {/* Main image */}
            <div className="group relative min-h-[460px] overflow-hidden rounded-[2rem] bg-[#292B24] sm:min-h-[600px]">
              <img
                src={fish}
                alt="Fresh fish being prepared over an open charcoal grill"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#171B16]/70 via-transparent to-[#171B16]/10" />

              {/* Image caption */}
              <div className="absolute bottom-7 left-7 sm:bottom-10 sm:left-10">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D9A75F]">
                  The art of good food
                </span>
                <p className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                  Made to be enjoyed.
                </p>
              </div>
            </div>

            {/* Floating secondary image */}
            <div className="absolute -bottom-10 -right-3 h-40 w-40 overflow-hidden rounded-2xl border-[6px] border-[#171B16] bg-[#292B24] sm:-right-8 sm:h-56 sm:w-56">
              <img
                src={abole}
                alt="Golden roasted Nigerian plantain"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

        
          </div>

          {/* Story content */}
          <div className="pt-4 lg:pt-0">
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D9A75F]">
              OUR PHILOSOPHY
            </span>

            <h3 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-[-0.045em] sm:text-5xl">
              Good food brings people
              <span className="font-medium italic text-[#D9A75F]">
                {" "}together.
              </span>
            </h3>

            <div className="mt-7 space-y-5 text-sm leading-8 text-[#F5EBDD]/65 sm:text-base">
              <p>
                At Owerri Bole Foods, we celebrate the beauty of Nigerian
                cuisine through flavourful meals and the joy of sharing
                good food.
              </p>

              <p>
                From the unmistakable taste of roasted plantain and grilled
                fish to the richness of local delicacies, we bring together
                flavours that make every meal worth looking forward to.
              </p>
            </div>

            {/* Divider */}
            <div className="my-9 h-px w-full bg-[#F5EBDD]/15" />

            {/* Brand values */}
            <div className="space-y-7">
              {brandValues.map((value) => {
                const Icon = value.icon;

                return (
                  <div key={value.title} className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D9A75F]/30 bg-[#D9A75F]/10">
                      <Icon size={20} className="text-[#D9A75F]" />
                    </div>

                    <div>
                      <h4 className="font-display text-lg font-bold text-[#F5EBDD]">
                        {value.title}
                      </h4>
                      <p className="mt-1 max-w-sm text-sm leading-6 text-[#F5EBDD]/55">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href="#full-menu"
              className="group mt-10 inline-flex items-center gap-4 rounded-full bg-[#B94D2B] px-7 py-4 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#D05A34] hover:shadow-xl hover:shadow-[#B94D2B]/20"
            >
              Discover our menu
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-28 border-t border-[#F5EBDD]/15 pt-10 md:mt-36">
          <p className="text-center font-display text-3xl font-bold leading-tight tracking-tight text-[#F5EBDD]/90 sm:text-4xl md:text-5xl">
            Every plate tells a story.
            <span className="block font-medium italic text-[#D9A75F]">
              Let yours begin here.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
