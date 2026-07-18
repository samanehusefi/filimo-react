import type React from "react";
import type { ICard } from "@/interfaces/ICard";

interface CardProps {
  card: ICard;
}

const VerticalCard: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="group relative aspect-[16/9] w-full max-w-[440px] overflow-hidden rounded-2xl">
      <img
        src={card.image}
        alt={card.title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
};

export default VerticalCard;
