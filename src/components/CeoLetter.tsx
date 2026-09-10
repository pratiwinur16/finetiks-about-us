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
    paragraphs: [
      "Saya masih ingat betapa banyak orang di sekitar saya, termasuk keluarga dan teman sendiri, yang kesulitan mengelola keuangan meski sudah bekerja keras setiap hari. Setelah lebih dari 25 tahun berkarier di industri keuangan global, saya melihat ada jarak besar antara produk keuangan yang rumit dan kebutuhan nyata masyarakat untuk menabung serta merencanakan masa depan.",
      "Dari situlah FINETIKS lahir — dari keyakinan sederhana bahwa setiap orang berhak merasa mengendalikan uangnya sendiri, bukan takut menghadapinya. Di video ini, saya berbagi cerita tentang perjalanan membangun FINETIKS, dari ide awal hingga menjadi platform yang kini membantu masyarakat Indonesia menabung dan mengelola keuangan dengan lebih baik.",
      "Terima kasih telah menjadi bagian dari perjalanan ini.",
    ],
    closingLabel: "Peluk virtual,",
    signature: "Cameron Goh, CEO FINETIKS",
    playLabel: "Putar video",
  },
  en: {
    eyebrow: "LETTER FROM THE CEO",
    heading: "A Message From Our CEO",
    videoTitle: "Letter from CEO: Jangan Tunggu Gagal Baru Sadar",
    dear: "Dear FINETIKS Users,",
    paragraphs: [
      "I still remember how many people around me — including my own family and friends — struggled to manage their money despite working hard every day. After more than 25 years in global financial services, I saw a real gap between complicated financial products and people's everyday need to save and plan for the future.",
      "That's where FINETIKS came from — a simple belief that everyone deserves to feel in control of their money, not intimidated by it. In this video, I share the story of building FINETIKS, from the first idea to a platform that now helps Indonesians save and manage their money better.",
      "Thank you for being part of this journey.",
    ],
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
    <section className="w-full bg-[#EEF0F8] px-6 py-16 sm:py-24 lg:py-[128px]">
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
          className="stamp-edge relative bg-white [filter:drop-shadow(0_2px_0_rgba(24,24,27,0.08))_drop-shadow(0_20px_40px_rgba(24,24,27,0.18))]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-5 sm:p-8 lg:flex lg:items-center lg:p-10">
              <YoutubeFacade title={t.videoTitle} playLabel={t.playLabel} />
            </div>

            <div className="flex flex-col gap-4 border-t border-dashed border-grape-tint-3/40 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <div className="flex items-start justify-between gap-4">
                <p className="font-caveat text-3xl leading-tight text-text-primary sm:text-4xl">
                  {t.dear}
                </p>
                <div className="hidden h-14 w-14 shrink-0 rotate-6 items-center justify-center rounded-xl border-2 border-dashed border-grape-tint-3/60 bg-grape-tint-5/40 sm:flex">
                  <HandHeart size={26} weight="fill" className="text-grape" />
                </div>
              </div>
              {t.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="font-montserrat text-[15px] leading-relaxed text-text-secondary sm:text-[16px]"
                >
                  {paragraph}
                </p>
              ))}
              <div className="mt-2">
                <p className="font-caveat text-2xl leading-none text-text-primary sm:text-3xl">
                  {t.closingLabel}
                </p>
                <p className="font-caveat text-xl leading-none text-text-primary/80 sm:text-2xl">
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
