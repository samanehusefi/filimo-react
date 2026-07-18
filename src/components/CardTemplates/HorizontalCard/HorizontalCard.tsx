import type React from "react";
import type { ICard } from "@/interfaces/ICard";

interface CardProps {
  card: ICard;
}
const HorizantalCard: React.FC<CardProps> = ({ card }) => {
  return (
    <>
      <div className="group w-full max-w-[220px] cursor-pointer">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={card.image}
            alt={card.title}
            className=" aspect-[2/3] w-full object-cover transition-all duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          {card.logo && (
            <img
              src={card.logo}
              alt={card.title}
              className="absolute bottom-5 left-1/2 w-3/4 -translate-x-1/2 object-contain"
            />
          )}
          <div className="absolute bottom-4 right-3 flex gap-2">
            {card.imdb && (
              <span className="rounded-full bg-black/70 px-2 py-1 text-xs text-white">
                {card.imdb} IMDb
              </span>
            )}
            {card.like && (
              <span className="rounded-full bg-black/70 px-2 py-1 text-xs text-white">
                👍 {card.like}%
              </span>
            )}
          </div>
        </div>
        <h3 className="mt-3 truncate  text-center text-sm font-semibold  text-white">
          {card.title}
        </h3>
      </div>
    </>
  );
};

export default HorizantalCard;
