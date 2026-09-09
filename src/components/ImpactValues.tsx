"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Lightbulb,
  RocketLaunch,
  HandHeart,
  CheckCircle,
  UsersThree,
  Robot,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { useLanguage } from "./LanguageProvider";

const HEADER = {
  id: {
    eyebrow: "BUDAYA KAMI",
    title: "Nilai yang Membentuk Kami",
    subtitle:
      "Enam nilai inti yang memandu setiap keputusan: dari cara membangun produk, sampai cara memperlakukan satu sama lain.",
  },
  en: {
    eyebrow: "OUR CULTURAL DNA",
    title: "The Values That Shaped Us",
    subtitle:
      "Six core values that guide every decision we make, from how we build our products to how we treat each other.",
  },
};

type Value = { letter: string; icon: Icon; title: string; description: string; color: string };

const COLORS = {
  innovation: "#FFB84D",
  mission: "#6C5EEB",
  customers: "#FF5F6D",
  accountability: "#18B6D9",
  collaborate: "#17C964",
  technology: "#56A7F2",
};

const VALUES: Record<"id" | "en", Value[]> = {
  id: [
    {
      letter: "I",
      icon: Lightbulb,
      color: COLORS.innovation,
      title: "Innovation",
      description: "Ide baru diuji dengan cepat, dievaluasi ketika gagal, dan terus disempurnakan sampai berhasil.",
    },
    {
      letter: "M",
      icon: RocketLaunch,
      color: COLORS.mission,
      title: "Mission Driven",
      description: "Setiap orang di tim menggunakan produk yang dibangun, dan memahami mengapa produk itu penting.",
    },
    {
      letter: "P",
      icon: HandHeart,
      color: COLORS.customers,
      title: "Put Customers First",
      description: "Kebutuhan pengguna dipahami lebih dulu, sebelum sesuatu mulai dibangun untuk mereka.",
    },
    {
      letter: "A",
      icon: CheckCircle,
      color: COLORS.accountability,
      title: "Accountability",
      description: "Kesalahan diakui lebih awal, lalu segera diperbaiki.",
    },
    {
      letter: "C",
      icon: UsersThree,
      color: COLORS.collaborate,
      title: "Collaborate",
      description: "Pengetahuan dibagikan secara terbuka, dan rekan tim saling membantu saat menghadapi kesulitan.",
    },
    {
      letter: "T",
      icon: Robot,
      color: COLORS.technology,
      title: "Technology & Efficiency",
      description: "Pekerjaan yang berulang diotomasi, supaya waktu bisa difokuskan pada hal yang benar-benar penting.",
    },
  ],
  en: [
    {
      letter: "I",
      icon: Lightbulb,
      color: COLORS.innovation,
      title: "Innovation",
      description: "We test ideas quickly, learn from what doesn't work, and keep going until we find what does.",
    },
    {
      letter: "M",
      icon: RocketLaunch,
      color: COLORS.mission,
      title: "Mission Driven",
      description: "Everyone on the team uses the product we build, and understands why it matters.",
    },
    {
      letter: "P",
      icon: HandHeart,
      color: COLORS.customers,
      title: "Put Customers First",
      description: "We take the time to understand what people need before we build anything for them.",
    },
    {
      letter: "A",
      icon: CheckCircle,
      color: COLORS.accountability,
      title: "Accountability",
      description: "When something goes wrong, we say so early and fix it fast.",
    },
    {
      letter: "C",
      icon: UsersThree,
      color: COLORS.collaborate,
      title: "Collaborate",
      description: "We share what we know and step in when a teammate runs into trouble.",
    },
    {
      letter: "T",
      icon: Robot,
      color: COLORS.technology,
      title: "Technology & Efficiency",
      description: "We automate repetitive work so we can focus on what actually matters.",
    },
  ],
};

export default function ImpactValues() {
  const { lang } = useLanguage();
  const header = HEADER[lang];
  const values = VALUES[lang];
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#F8FAFC] px-6 py-16 sm:py-24 lg:py-[128px]">
      <div className="mx-auto flex max-w-[1128px] flex-col items-center gap-16 lg:gap-[72px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex w-full flex-col items-center gap-6 text-center"
        >
          <p className="font-poppins text-xs font-bold tracking-[0.2em] text-grape">{header.eyebrow}</p>
          <h2 className="font-poppins text-[32px] font-bold leading-tight text-grape-dark sm:text-[44px] sm:leading-[52px]">
            {header.title}
          </h2>
          <p className="max-w-[820px] font-poppins text-[18px] leading-[28px] text-text-secondary sm:text-[20px] sm:leading-[32px]">
            {header.subtitle}
          </p>
        </motion.div>

        <div
          className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          onMouseLeave={() => setHovered(null)}
        >
          {values.map((value, i) => {
            const isHovered = hovered === i;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: "easeOut" }}
              >
                <motion.div
                  onMouseEnter={() => setHovered(i)}
                  animate={{ opacity: hovered === null || isHovered ? 1 : 0.6 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  style={{ borderColor: isHovered ? `${value.color}66` : "transparent" }}
                  className="relative flex h-full cursor-default flex-col items-start gap-5 rounded-lg border bg-white p-7 transition-[box-shadow,transform] duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(24,24,27,0.1)]"
                >
                  <span
                    style={{ color: value.color, opacity: 0.3 }}
                    className="absolute right-6 top-6 font-poppins text-3xl font-extrabold select-none"
                  >
                    {value.letter}
                  </span>
                  <div
                    style={{
                      backgroundColor: isHovered ? value.color : `${value.color}1A`,
                      color: isHovered ? "#fff" : value.color,
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-full transition-[background-color,color,transform] duration-300"
                  >
                    <value.icon size={26} weight="bold" />
                  </div>
                  <h3 className="font-poppins text-[19px] font-bold leading-snug text-text-primary">
                    {value.title}
                  </h3>
                  <p className="font-montserrat text-[16px] leading-relaxed text-text-secondary">
                    {value.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
