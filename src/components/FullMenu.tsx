
import { useState } from "react";
import { ArrowUpRight, Utensils } from "lucide-react";
import bole from "../assets/abole.jpg"
import grill from "../assets/grilled-chicken.jpg"
import abacha from "../assets/abacha.jpg"
import nkwobi from "../assets/nkwobi.jpg"
import rice from "../assets/rice.png"
import ukwa from "../assets/ukwa.jpeg"

const categories = [
  "All",
  "Bole & Grills",
  "Local Delicacies",
  "Rice & Meals",
];

const menuItems = [
  {
    name: "Bole & Grilled Fish",
    category: "Bole & Grills",
    description: "Roasted plantain served with grilled fish and pepper sauce.",
    image: bole,
    tag: "Signature",
  },
  {
    name: "Grilled Chicken",
    category: "Bole & Grills",
    description: "Flavourful grilled chicken prepared with delicious spices.",
    image: grill,
    tag: "From the grill",
  },
  {
    name: "Abacha & Ugba",
    category: "Local Delicacies",
    description: "A traditional Eastern Nigerian delicacy.",
    image: abacha,
    tag: "Local favourite",
  },
  {
    name: "Nkwobi",
    category: "Local Delicacies",
    description: "A rich and flavourful traditional Igbo delicacy.",
    image: nkwobi,
    tag: "Traditional",
  },
  {
    name: "Ukwa",
    category: "Local Delicacies",
    description: "A beloved African breadfruit delicacy.",
    image: ukwa,
    tag: "Local favourite",
  },
  {
    name: "Native Rice",
    category: "Rice & Meals",
    description: "A delicious Nigerian-style rice meal.",
    image: rice,
    tag: "Nigerian classic",
  },
];

export default function FullMenu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section
      id="full-menu"
      className="bg-[#F5EBDD] px-5 py-24 text-[#171B16] sm:px-8 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#B94D2B]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#B94D2B]">
                Explore our kitchen
              </span>
            </div>

            <h2 className="font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-6xl md:text-7xl">
              Something delicious
              <br />
              <span className="font-medium italic text-[#B94D2B]">
                for everyone.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-[#171B16]/60 sm:text-base sm:leading-8">
              Explore a selection of Nigerian favourites, freshly prepared
              and full of flavour. Find something you'll love.
            </p>
          </div>

          <div className="flex items-center gap-3 text-[#B94D2B]">
            <Utensils size={21} />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">
              Good food starts here
            </span>
          </div>
        </div>

        {/* Category filters */}
        <div className="mt-12 flex gap-3 overflow-x-auto pb-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`shrink-0 rounded-full px-6 py-3 text-xs font-bold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#171B16] text-[#F5EBDD]"
                  : "border border-[#171B16]/15 text-[#171B16]/65 hover:border-[#B94D2B] hover:text-[#B94D2B]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <article
              key={item.name}
              className="group overflow-hidden rounded-[1.5rem] border border-[#171B16]/10 bg-[#FBF7F0] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#171B16]/10"
            >
              <div className="relative h-64 overflow-hidden bg-[#DED3C2]">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <span className="absolute left-5 top-5 rounded-full bg-[#171B16]/80 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#F5EBDD] backdrop-blur-md">
                  {item.tag}
                </span>
              </div>

              <div className="p-6">
                <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#B94D2B]">
                  {item.category}
                </span>

                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">
                  {item.name}
                </h3>

                <p className="mt-3 min-h-12 text-sm leading-6 text-[#171B16]/60">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-[#171B16]/10 pt-5">
                  <span className="text-xs font-semibold text-[#171B16]/55">
                    Ask for current price
                  </span>

                  <a
                    href="#order"
                    aria-label={`Enquire about ${item.name}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171B16] text-white transition-all duration-300 hover:bg-[#B94D2B]"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-[#171B16]/45">
          Menu selection and prices may vary. Contact the restaurant for
          current availability and pricing.
        </p>
      </div>
    </section>
  );
}
