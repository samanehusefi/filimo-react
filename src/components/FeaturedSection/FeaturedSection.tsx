import type React from "react";
import SpecialCard from "../CardTemplates/SpecialCard/SpecialCard";
import { featuredData } from "@/data/featured.data";
import { IoChevronBack } from "react-icons/io5";

const FeaturedSection: React.FC = () => {
  return (
    <>
      <section className="absolute left-1/2 top-[620px] -translate-x-1/2 z-20 w-[95%] max-w-full">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white px-3">ویژه</h2>

          <a href="#" className="text-sm text-orange-400 hover:text-orange-300">
            <span className="flex w-full">
              مشاهده همه
              <IoChevronBack className="text-xl" />
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {featuredData.map((item) => (
            <SpecialCard key={item.id} card={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default FeaturedSection;
