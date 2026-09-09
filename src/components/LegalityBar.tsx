"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageProvider";

const COPY = {
  id: {
    regulated: "Terdaftar & diawasi oleh:",
    partner: "Bekerja sama dengan:",
    member: "Anggota dari:",
  },
  en: {
    regulated: "Registered & Supervised by:",
    partner: "In partnership with:",
    member: "Member of:",
  },
};

const DWELL_MS = 3000;

type Logo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
};

function useGroups(t: (typeof COPY)["en"]) {
  return [
    {
      label: t.regulated,
      logos: [
        { src: "/images/logo-ojk-color.png", alt: "OJK", width: 97, height: 42, className: "h-[42px] w-auto object-contain" },
        { src: "/images/logo-bank-indonesia-color.png", alt: "Bank Indonesia", width: 133, height: 42, className: "h-[42px] w-auto object-contain" },
        { src: "/images/logo-komdigi-color.webp", alt: "Komdigi", width: 55, height: 42, className: "h-[42px] w-auto object-contain" },
      ] satisfies Logo[],
    },
    {
      label: t.partner,
      logos: [
        { src: "/images/logo-bank-victoria-color.png", alt: "Bank Victoria", width: 157, height: 24, className: "h-6 w-auto object-contain" },
        { src: "/images/logo-google-color.webp", alt: "Google", width: 71, height: 24, className: "h-6 w-auto object-contain" },
        { src: "/images/logo-lightspeed-color.png", alt: "Lightspeed", width: 105, height: 24, className: "h-6 w-auto object-contain" },
      ] satisfies Logo[],
    },
    {
      label: t.member,
      logos: [
        { src: "/images/badge-fintech-indonesia-color.svg", alt: "Asosiasi Fintech Indonesia", width: 90, height: 48, className: "h-12 w-auto object-contain" },
        { src: "/images/badge-iso27001.png", alt: "ISO 27001", width: 42, height: 42, className: "h-[42px] w-auto object-contain" },
      ] satisfies Logo[],
    },
  ];
}

function LogoRow({ logos }: { logos: Logo[] }) {
  return (
    <div className="flex flex-wrap items-end justify-center gap-x-4 gap-y-3 sm:gap-x-[26px]">
      {logos.map((logo) => (
        <Image key={logo.src} src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className={logo.className} />
      ))}
    </div>
  );
}

export default function LegalityBar() {
  const { lang } = useLanguage();
  const t = COPY[lang];
  const groups = useGroups(t);

  const [index, setIndex] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const programmaticScroll = useRef(false);

  // Autoplay — advances the mobile carousel unless the user is actively touching it.
  useEffect(() => {
    const timer = setInterval(() => {
      if (pausedRef.current) return;
      setIndex((i) => (i + 1) % groups.length);
    }, DWELL_MS);
    return () => clearInterval(timer);
  }, [groups.length]);

  // Scroll the track to match `index`, whether it changed via autoplay or a dot click.
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
    <div className="mx-auto w-full max-w-[1440px] px-6 py-10 lg:px-[100px]">
      {/* Tablet/desktop — every category shown at once as pill cards, wrapping as needed. */}
      <div className="hidden flex-wrap items-stretch justify-center gap-4 sm:flex">
        {groups.map((group) => (
          <div
            key={group.label}
            className="flex flex-col items-start gap-3 rounded-2xl bg-[#F1F5F4] px-6 py-4"
          >
            <p className="font-manrope text-sm font-semibold whitespace-nowrap text-text-secondary">{group.label}</p>
            <LogoRow logos={group.logos} />
          </div>
        ))}
      </div>

      {/* Mobile — one category at a time, swipeable + autoplaying, to avoid a tall vertical stack. */}
      <div className="sm:hidden">
        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          onTouchStart={() => {
            pausedRef.current = true;
          }}
          onTouchEnd={() => {
            pausedRef.current = false;
          }}
          className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
        >
          {groups.map((group) => (
            <div key={group.label} className="flex w-full shrink-0 snap-center justify-center">
              <div className="flex flex-col items-center gap-3 rounded-2xl bg-[#F1F5F4] px-6 py-4">
                <p className="font-manrope text-sm font-semibold text-text-secondary">{group.label}</p>
                <LogoRow logos={group.logos} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {groups.map((group, i) => (
            <button
              key={group.label}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to ${group.label}`}
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
    </div>
  );
}
