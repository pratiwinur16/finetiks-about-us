"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LegalityBar from "./LegalityBar";
import { useLanguage } from "./LanguageProvider";

const COPY = {
  id: {
    eyebrow: "TENTANG FINETIKS",
    headline: "Cerita di Balik FINETIKS",
    subhead:
      "Kami tim kecil yang terdiri dari product builder, engineer, desainer, dan pakar keuangan, yang terobsesi memperbaiki cara masyarakat Indonesia menabung dan mengelola uang.",
  },
  en: {
    eyebrow: "ABOUT FINETIKS",
    headline: "The Story Behind FINETIKS",
    subhead:
      "We're a small group of product builders, engineers, designers, and financial experts, obsessed with fixing how Indonesians save and manage money.",
  },
};

type Tile = { src: string; alt: string; position?: string };

function PhotoTile({ tile, index, className = "" }: { tile: Tile; index: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-2xl bg-neutral-100 shadow-[0_2px_10px_rgba(24,24,27,0.06)] transition-shadow duration-300 hover:shadow-[0_16px_36px_rgba(24,24,27,0.16)] ${className}`}
    >
      <Image
        src={tile.src}
        alt={tile.alt}
        fill
        sizes="(max-width: 639px) 100vw, 25vw"
        className={`object-cover transition-transform duration-500 ease-out group-hover:scale-110 ${tile.position ?? ""}`}
      />
      <div className="pointer-events-none absolute inset-0 bg-grape-dark/0 transition-colors duration-300 group-hover:bg-grape-dark/10" />
    </motion.div>
  );
}

const TILE_01: Tile = { src: "/images/culture/team-01.jpg", alt: "FINETIKS team" };
const TILE_08: Tile = { src: "/images/culture/team-08.jpg", alt: "FINETIKS team", position: "object-[50%_25%]" };
const TILE_05: Tile = { src: "/images/culture/team-05.jpg", alt: "FINETIKS team", position: "object-[65%_35%]" };
const TILE_03: Tile = { src: "/images/culture/team-03.jpg", alt: "FINETIKS team" };
const TILE_04: Tile = { src: "/images/culture/team-04.jpg", alt: "FINETIKS team", position: "object-[100%_45%]" };
const TILE_06: Tile = { src: "/images/culture/team-06.jpg", alt: "Edwin Ardiwinata, CTO", position: "object-[62%_30%]" };

const MOBILE_TILES = [TILE_01, TILE_08, TILE_03, TILE_04, TILE_06, TILE_05];

function MobileCollageCarousel() {
  const [index, setIndex] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const programmaticScroll = useRef(false);

  // Scroll the track to match `index`, whether it changed via a swipe or a dot click.
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    programmaticScroll.current = true;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
    const settle = setTimeout(() => {
      programmaticScroll.current = false;
    }, 400);
    return () => clearTimeout(settle);
  }, [index]);

  // Keep the dots in sync when the user swipes manually.
  function handleScroll() {
    if (programmaticScroll.current) return;
    const el = scrollerRef.current;
    if (!el || el.clientWidth === 0) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    setIndex(i);
  }

  return (
    <div className="w-full sm:hidden">
      <div
        ref={scrollerRef}
        onScroll={handleScroll}
        className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
      >
        {MOBILE_TILES.map((tile, i) => (
          <div key={tile.src} className="w-full shrink-0 snap-center px-1">
            <PhotoTile tile={tile} index={i} className="aspect-[4/3]" />
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {MOBILE_TILES.map((tile, i) => (
          <button
            key={tile.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to photo ${i + 1}`}
            className="p-1"
          >
            <span
              className={`block h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-grape" : "w-1.5 bg-grape/30"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function CollageGrid() {
  return (
    <>
      {/* Desktop / tablet — staggered masonry columns */}
      <div className="hidden w-full gap-4 sm:flex">
        <PhotoTile tile={TILE_01} index={0} className="aspect-[3/4] flex-1" />

        <div className="flex flex-1 flex-col gap-4 sm:mt-14">
          <PhotoTile tile={TILE_08} index={1} className="aspect-[4/3]" />
          <PhotoTile tile={TILE_05} index={2} className="aspect-[4/3]" />
        </div>

        <PhotoTile tile={TILE_03} index={1} className="aspect-[3/4] flex-1" />

        <div className="flex flex-1 flex-col gap-4 sm:mt-14">
          <PhotoTile tile={TILE_04} index={2} className="aspect-[4/3]" />
          <PhotoTile tile={TILE_06} index={3} className="aspect-[4/3]" />
        </div>
      </div>

      {/* Mobile — swipeable slide carousel */}
      <MobileCollageCarousel />
    </>
  );
}

export default function Hero() {
  const { lang } = useLanguage();
  const t = COPY[lang];

  return (
    <>
      <section className="relative w-full overflow-hidden bg-white pt-[105px]">
        <div className="relative mx-auto flex max-w-[1128px] flex-col items-center gap-10 px-6 pb-14 pt-14 sm:pb-16 sm:pt-16 lg:pb-20 lg:pt-20">
          <div className="flex flex-col items-center gap-5 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="font-poppins text-[36px] font-bold leading-tight text-grape-dark sm:text-[52px] lg:text-[60px]"
            >
              {t.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="max-w-[840px] font-poppins text-[17px] leading-[26px] text-text-secondary sm:text-[19px] sm:leading-[30px]"
            >
              {t.subhead}
            </motion.p>
          </div>

          <div className="w-full">
            <CollageGrid />
          </div>
        </div>
      </section>

      <div className="bg-white">
        <LegalityBar />
      </div>
    </>
  );
}
