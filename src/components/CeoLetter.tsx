"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Play } from "@phosphor-icons/react";
import { useLanguage } from "./LanguageProvider";

const YOUTUBE_ID = "83Evw94yZK0";

const COPY = {
  id: {
    eyebrow: "SURAT DARI CEO",
    heading: "Pesan dari CEO Kami",
    videoTitle: "Letter from CEO: Jangan Tunggu Gagal Baru Sadar",
    paragraphs: [
      "Saya masih ingat betapa banyak orang di sekitar saya, termasuk keluarga dan teman sendiri, yang kesulitan mengelola keuangan meski sudah bekerja keras setiap hari. Setelah lebih dari 25 tahun berkarier di industri keuangan global, saya melihat ada jarak besar antara produk keuangan yang rumit dan kebutuhan nyata masyarakat untuk menabung serta merencanakan masa depan.",
      "Dari situlah FINETIKS lahir — dari keyakinan sederhana bahwa setiap orang berhak merasa mengendalikan uangnya sendiri, bukan takut menghadapinya. Di video ini, saya berbagi cerita tentang perjalanan membangun FINETIKS, dari ide awal hingga menjadi platform yang kini membantu masyarakat Indonesia menabung dan mengelola keuangan dengan lebih baik.",
      "Terima kasih telah menjadi bagian dari perjalanan ini.",
    ],
    signatureName: "Cameron Goh",
    signatureRole: "CEO & Founder, FINETIKS",
    playLabel: "Putar video",
  },
  en: {
    eyebrow: "LETTER FROM THE CEO",
    heading: "A Message From Our CEO",
    videoTitle: "Letter from CEO: Jangan Tunggu Gagal Baru Sadar",
    paragraphs: [
      "I still remember how many people around me — including my own family and friends — struggled to manage their money despite working hard every day. After more than 25 years in global financial services, I saw a real gap between complicated financial products and people's everyday need to save and plan for the future.",
      "That's where FINETIKS came from — a simple belief that everyone deserves to feel in control of their money, not intimidated by it. In this video, I share the story of building FINETIKS, from the first idea to a platform that now helps Indonesians save and manage their money better.",
      "Thank you for being part of this journey.",
    ],
    signatureName: "Cameron Goh",
    signatureRole: "CEO & Founder, FINETIKS",
    playLabel: "Play video",
  },
};

function YoutubeFacade({ title, playLabel }: { title: string; playLabel: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-900 shadow-[0_16px_40px_rgba(24,24,27,0.14)]">
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
      <div className="mx-auto flex max-w-[1128px] flex-col gap-16 lg:gap-20">
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

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <YoutubeFacade title={t.videoTitle} playLabel={t.playLabel} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            {t.paragraphs.map((paragraph) => (
              <p key={paragraph} className="font-montserrat text-[16px] leading-relaxed text-text-secondary">
                {paragraph}
              </p>
            ))}

            <div className="mt-2 flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                <Image src="/images/team/cameron-goh.png" alt={t.signatureName} fill className="object-cover" />
              </div>
              <div>
                <p className="font-poppins text-[16px] font-bold text-text-primary">{t.signatureName}</p>
                <p className="font-montserrat text-sm text-text-tertiary">{t.signatureRole}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
