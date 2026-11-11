import { ArrowUpRight, MessageCircle, Star } from "lucide-react";

const reviews = [
  {
    name: "Customer review",
    source: "Add verified review source",
    quote:
      "The bole and grilled fish are a perfect combination. The food is flavourful, well prepared, and definitely worth trying.",
  },
  {
    name: "Customer review",
    source: "Add verified review source",
    quote:
      "If you enjoy authentic Nigerian delicacies, this is somewhere worth checking out. The flavours make the experience memorable.",
  },
  {
    name: "Customer review",
    source: "Add verified review source",
    quote:
      "From bole to traditional Nigerian meals, there's something to enjoy. A great option when you're craving something delicious.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="bg-[#F5EBDD] px-5 py-24 text-[#171B16] sm:px-8 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#B94D2B]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#B94D2B]">
                Words from our customers
              </span>
            </div>

            <h2 className="font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-6xl md:text-7xl">
              Good food is
              <br />
              <span className="font-medium italic text-[#B94D2B]">
                worth talking about.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#171B16]/60">
            The best part of sharing good food is hearing about the experiences
            it creates.
          </p>
        </div>

        {/* Reviews */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              key={index}
              className="flex min-h-[280px] flex-col rounded-[1.5rem] border border-[#171B16]/10 bg-[#FBF7F0] p-7 sm:p-8"
            >
              <div className="flex gap-1 text-[#B68A54]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>

              <p className="mt-8 flex-1 font-display text-xl font-semibold leading-relaxed text-[#171B16]">
                "{review.quote}"
              </p>

              <div className="mt-8 border-t border-[#171B16]/10 pt-5">
                <p className="text-sm font-bold">{review.name}</p>
                <p className="mt-1 text-xs text-[#171B16]/45">
                  {review.source}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Review invitation */}
        <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-[1.5rem] bg-[#171B16] p-7 sm:flex-row sm:items-center sm:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#B94D2B] text-white">
              <MessageCircle size={21} />
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-[#F5EBDD]">
                Have you enjoyed a meal with us?
              </h3>
              <p className="mt-2 text-sm text-white/55">
                We'd love to hear about your experience.
              </p>
            </div>
          </div>

          <a
            href="https://www.instagram.com/owerribolefoods/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#B94D2B] px-6 py-4 text-xs font-bold text-white transition-colors hover:bg-[#D05A34]"
          >
            Share your experience
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
