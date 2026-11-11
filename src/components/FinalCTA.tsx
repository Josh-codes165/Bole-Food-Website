
import { ArrowUpRight, MessageCircle } from "lucide-react";

const instagramUrl = "https://www.instagram.com/owerribolefoods/";

export default function FinalCTA() {
  return (
    <section
      id="order"
      className="relative isolate overflow-hidden bg-[#171B16] px-5 py-28 text-[#F5EBDD] sm:px-8 md:py-36 lg:px-16"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/final-food.jpg"
          alt="Delicious Nigerian grilled food"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-[#171B16]/85" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#171B16] via-[#171B16]/80 to-[#171B16]/50" />

      <div className="relative mx-auto max-w-[1100px] text-center">      

        <h2 className="mt-9 font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-6xl md:text-8xl">
          Your next favourite
          <br />
          <span className="font-medium italic text-[#D9A75F]">
            meal is waiting.
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/65 sm:text-base">
          Whether it's a craving for bole and grilled fish or a taste of
          your favourite Nigerian delicacies, make your next meal special.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-[#B94D2B] px-8 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#D05A34] hover:shadow-xl hover:shadow-[#B94D2B]/20"
          >
            <MessageCircle size={18} />
            Enquire on Instagram
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          <a
            href="#full-menu"
            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/30 px-8 text-sm font-semibold text-white transition-colors hover:border-[#D9A75F] hover:bg-white/10"
          >
            Explore the menu
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div
          id="catering"
          className="mx-auto mt-16 max-w-xl border-t border-white/15 pt-8"
        >
          <p className="text-sm text-white/55">
            Planning an event or gathering?
          </p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#D9A75F] transition-colors hover:text-white"
          >
            Let's discuss your catering enquiry
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
