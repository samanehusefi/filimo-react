import React from "react";
import type { ICard } from "@/interfaces/ICard";
import {
  IoInformationCircle,
  IoInformationCircleOutline,
  IoPlay,
  IoThumbsUp,
} from "react-icons/io5";

interface CardProps {
  card: ICard;
}

const SpecialCard: React.FC<CardProps> = ({ card }) => {
  return (
    <>
      <div className="relative overflow-visible">
        <div className="group relative mx-auto w-full max-w-[360px] cursor-pointer">
          <div className="overflow-hidden rounded-xl">
            <img
              src={card.image}
              alt={card.title}
              className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div
            className=" invisible absolute left-0  top-0  z-50  w-full  origin-top  scale-95  opacity-0  transition-all duration-300
                        group-hover:visible group-hover:scale-100 group-hover:opacity-100 "
          >
            <div className="overflow-hidden rounded-2xl bg-[#1b1b1b] shadow-2xl">
              <div className="relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="aspect-video w-full object-cover"
                />
              </div>
              <div className="space-y-4 p-5">
                <h2 className="text-right text-sm font-bold text-white">
                  {card.title}
                </h2>

                <div className="flex flex-wrap justify-start gap-2">
                  <span
                    className={`${!card.imdb ? "hidden" : "block"} rounded-full flex items-center bg-yellow-900 px-3 py-1 text-xs text-yellow-300`}
                  >
                    IMDb {card.imdb}
                  </span>
                  <span
                    className={`${!card.like ? "hidden" : "block"} flex items-center rounded-full bg-yellow-900 px-3 py-1 text-xs text-green-500`}
                  >
                    <IoThumbsUp className="text-xs" />
                    {card.like}%
                  </span>
                  <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-white">
                    {card.duration}
                  </span>
                </div>
                <div className="flex justify-end">
                  <div className="flex gap-3">
                    <button className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-700 text-white">
                      <IoInformationCircleOutline className="text-xl" />
                    </button>
                    <button className="flex h-8 w-8 items-center justify-center rounded-md bg-green-500 text-white">
                      <IoPlay className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialCard;
