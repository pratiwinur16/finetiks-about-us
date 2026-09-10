"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Play, HandHeart } from "@phosphor-icons/react";
import { useLanguage } from "./LanguageProvider";

const YOUTUBE_ID = "83Evw94yZK0";

const COPY = {
  id: {
    eyebrow: "SURAT DARI CEO",
    heading: "Pesan dari CEO Kami",
    videoTitle: "Letter from CEO: Jangan Tunggu Gagal Baru Sadar",
    dear: "Untuk Pengguna FINETIKS,",
    paragraph:
      "Setelah 25 tahun berkarier di industri keuangan global, saya melihat banyak orang — termasuk keluarga saya sendiri — kesulitan mengelola uang meski sudah bekerja keras. Dari situlah FINETIKS lahir: agar setiap orang bisa merasa mengendalikan uangnya, bukan takut menghadapinya.",
    closingLabel: "Peluk virtual,",
    signature: "Cameron Goh, CEO FINETIKS",
    playLabel: "Putar video",
  },
  en: {
    eyebrow: "LETTER FROM THE CEO",
    heading: "A Message From Our CEO",
    videoTitle: "Letter from CEO: Jangan Tunggu Gagal Baru Sadar",
    dear: "Dear FINETIKS Users,",
    paragraph:
      "After 25 years in global finance, I saw too many people — including my own family — struggle to manage money despite working hard. That's why FINETIKS exists: so everyone can feel in control of their money, not intimidated by it.",
    closingLabel: "Virtual Hug,",
    signature: "Cameron Goh, CEO FINETIKS",
    playLabel: "Play video",
  },
};

function YoutubeFacade({ title, playLabel }: { title: string; playLabel: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-900 shadow-[0_12px_30px_rgba(24,24,27,0.14)]">
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={playLabel}
          className="group absolute inset-0 h-full w-full"
        >
          <Image
            src={`https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 560px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/35" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
              <Play size={28} weight="fill" className="ml-1 text-grape-dark" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

export default function CeoLetter() {
  const { lang } = useLanguage();
  const t = COPY[lang];

  return (
    <section className="w-full bg-[#F8FAFC] px-6 py-16 sm:py-24 lg:py-[128px]">
      <div className="mx-auto flex max-w-[1128px] flex-col gap-12 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex w-full flex-col items-center gap-6 text-center"
        >
          <p className="font-poppins text-xs font-bold tracking-[0.2em] text-grape">{t.eyebrow}</p>
          <h2 className="font-poppins text-[32px] font-bold leading-tight text-grape-dark sm:text-[44px] sm:leading-[52px]">
            {t.heading}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[28px] border border-grape-tint-3/30 bg-white shadow-[0_24px_56px_rgba(24,24,27,0.08)]"
        >
          {/* Stamp — a little postal touch in the corner, like a hand-addressed letter */}
          <div className="absolute right-6 top-6 z-10 hidden h-14 w-14 rotate-6 items-center justify-center rounded-md border-2 border-dashed border-grape-tint-3/60 bg-grape-tint-5/40 sm:flex lg:right-10 lg:top-10">
            <HandHeart size={26} weight="fill" className="text-grape" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-5 sm:p-8 lg:p-10">
              <YoutubeFacade title={t.videoTitle} playLabel={t.playLabel} />
            </div>

            <div className="flex flex-col justify-center gap-4 border-t border-dashed border-grape-tint-3/40 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <p className="font-caveat text-3xl leading-tight text-grape-dark sm:text-4xl">
                {t.dear}
              </p>
              <p className="font-montserrat text-[15px] leading-relaxed text-text-secondary sm:text-[16px]">
                {t.paragraph}
              </p>
              <div className="mt-2">
                <p className="font-caveat text-2xl leading-none text-grape-dark sm:text-3xl">
                  {t.closingLabel}
                </p>
                <p className="font-caveat text-xl leading-none text-grape-dark/80 sm:text-2xl">
                  {t.signature}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
