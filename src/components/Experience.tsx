
import {
  ArrowUpRight,
  CalendarDays,
  ShoppingBag,
} from "lucide-react";
import dinning from "../assets/dinning.webp"
import packed from "../assets/packed.webp"
import experience from "../assets/experience.jpg"

const experiences = [
  {
    number: "01",
    title: "Dine & Enjoy",
    description:
      "Make time for good food, great company and a memorable dining experience.",
    image: dinning,
    icon: ShoppingBag,
    link: "#contact",
    action: "Find our location",
  },
  {
    number: "02",
    title: "Take It Away",
    description:
      "Enjoy your favourite meals wherever you are. Get in touch to arrange your order.",
    image: packed,
    icon: ShoppingBag,
    link: "#order",
    action: "Enquire about takeaway",
  },
  {
    number: "03",
    title: "Celebrate Together",
    description:
      "Planning a gathering or special occasion? Ask about food catering for your event.",
    image: experience,
    icon: CalendarDays,
    link: "#catering",
    action: "Catering enquiries",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#171B16] px-5 py-24 text-[#F5EBDD] sm:px-8 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14 max-w-2xl md:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D9A75F]">
              More ways to enjoy
            </span>
          </div>

          <h2 className="font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-6xl md:text-7xl">
            Good food.
            <br />
            <span className="font-medium italic text-[#D9A75F]">
              Your way.
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
            Whether you're stopping by for a meal or planning something
            special, make room for great food and good company.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {experiences.map((experience) => {
            const Icon = experience.icon;

            return (
              <article
                key={experience.number}
                className="group relative min-h-[460px] overflow-hidden rounded-[1.5rem] bg-[#292B24]"
              >
                <img
                  src={experience.image}
                  alt={experience.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#171B16] via-[#171B16]/50 to-[#171B16]/5" />

                <span className="absolute right-7 top-7 font-display text-sm font-bold tracking-widest text-white/75">
                  / {experience.number}
                </span>

                <div className="absolute bottom-0 left-0 w-full p-7 sm:p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md">
                    <Icon size={20} className="text-[#D9A75F]" />
                  </div>

                  <h3 className="font-display text-3xl font-bold tracking-tight text-white">
                    {experience.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {experience.description}
                  </p>

                  <a
                    href={experience.link}
                    className="mt-7 inline-flex items-center gap-3 border-b border-[#D9A75F]/50 pb-2 text-xs font-bold text-[#D9A75F] transition-colors hover:border-white hover:text-white"
                  >
                    {experience.action}
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-white/15 pt-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-2xl font-bold">
              Planning something special?
            </p>
            <p className="mt-2 text-sm text-white/50">
              Let's talk about making your occasion delicious.
            </p>
          </div>

          <a
            href="#catering"
            className="inline-flex items-center gap-3 rounded-full border border-[#D9A75F]/50 px-6 py-4 text-xs font-bold text-[#D9A75F] transition-colors hover:bg-[#D9A75F] hover:text-[#171B16]"
          >
            Discuss your event
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
