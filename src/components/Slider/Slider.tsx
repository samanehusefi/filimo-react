"use client";

import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import styles from "./Slider.module.css";
import { sliderData } from "@/data/slider.data";

const Slider = () => {
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(max-width:768px)");

    const handleChange = () => setIsMobile(media.matches);

    handleChange();

    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, []);

  return (
    <section className={`${styles.slider} relative`}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={700}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {sliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className={styles.slide}
              style={{
                backgroundImage: `
                  linear-gradient(
                    90deg,
                    rgba(0,0,0,.85),
                    rgba(0,0,0,.15)
                  ),
                  url(${isMobile ? item.mobilesrc : item.DesctopSrc})
                `,
              }}
            >
              <div className={styles.content}>
                <h1>{item.title}</h1>

                <p>{item.description}</p>

                {item.buttonText && <button>{item.buttonText}</button>}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation */}
      <div className="absolute bottom-40 left-8 z-50 flex items-center gap-3">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="flex h-12 w-12 items-center justify-center rounded-full border
           border-white/60 bg-transparent text-white transition hover:bg-[#d37a49]/20"
        >
          <IoChevronForward className="text-xl" />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="flex h-12 w-12 items-center justify-center rounded-full border
           border-white/60 bg-transparent text-white transition hover:bg-[#d37a49]/20"
        >
          <IoChevronBack className="text-xl" />
        </button>
      </div>
    </section>
  );
};

export default Slider;
