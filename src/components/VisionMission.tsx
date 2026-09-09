"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "@phosphor-icons/react";
import { useLanguage } from "./LanguageProvider";

const COPY = {
  id: {
    mission: {
      label: "MISI",
      heading: "Misi Kami",
      paragraphs: [
        "FINETIKS bertujuan untuk menjadi platform dimana pengguna dapat mengakses seluruh finansial dalam satu tempat dengan informasi yang dipersonalisasi, agar mereka dapat mengontrol dan mengelola seluruh kebutuhan finansialnya.",
        "Kami membangun komunitas inklusif yang dapat membagikan dan mendukung satu sama lain dalam perjalanan mereka untuk mencapai tujuan finansial dan membangun literasi finansial.",
        "Kami percaya pada akses terbuka dan bermitra dengan ekosistem keuangan untuk memberi pengguna kami produk keuangan yang akan membantu mereka menabung, berinvestasi, dan mengembangkan kekayaan dari waktu ke waktu.",
      ],
    },
    vision: {
      label: "VISI",
      statementBefore: "Membantu generasi masa kini membangun ",
      statementHighlight: "kebiasaan finansial yang bertahan lama",
      statementAfter: ".",
      support: "Karena hidup yang baik secara finansial dibangun dari kebiasaan baik, satu per satu.",
      checklist: [
        "Tingkatkan profil finansial: pahami kesehatan keuanganmu.",
        "Perkuat literasi keuangan: pelajari cara mengelola uang dengan cerdas.",
        "Bangun kebiasaan finansial: bentuk rutinitas menuju kestabilan jangka panjang.",
      ],
    },
  },
  en: {
    mission: {
      label: "MISSION",
      heading: "Our Mission",
      paragraphs: [
        "FINETIKS aims to be the platform where users can access their entire financial life in one place, with personalized information that helps them control and manage every financial need.",
        "We're building an inclusive community where people can share and support each other on their journey toward financial goals and stronger financial literacy.",
        "We believe in open access, and we partner with the financial ecosystem to give our users financial products that help them save, invest, and grow their wealth over time.",
      ],
    },
    vision: {
      label: "VISION",
      statementBefore: "Helping today's generation build ",
      statementHighlight: "financial habits that last",
      statementAfter: ".",
      support: "Because a genuinely better financial life is built one good habit at a time.",
      checklist: [
        "Improve your financial profile: understand your financial health.",
        "Strengthen financial literacy: learn to manage money wisely.",
        "Build financial habits: create routines for long-term stability.",
      ],
    },
  },
};

function BlockLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-poppins text-xs font-bold tracking-[0.2em] text-grape md:pt-3">{children}</p>
  );
}

function Statement({
  before,
  highlight,
  after,
}: {
  before: string;
  highlight: string;
  after: string;
}) {
  return (
    <h3 className="font-poppins text-[28px] font-bold leading-[1.15] text-text-primary sm:text-[36px] sm:leading-[1.15]">
      {before}
      <span className="text-grape">{highlight}</span>
      {after}
    </h3>
  );
}

export default function VisionMission() {
  const { lang } = useLanguage();
  const t = COPY[lang];

  return (
    <section className="w-full bg-white px-6 py-16 sm:py-24 lg:py-[128px]">
      <div className="mx-auto flex max-w-[1128px] flex-col gap-20 lg:gap-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-[160px_1fr] md:gap-16"
        >
          <BlockLabel>{t.mission.label}</BlockLabel>
          <div className="flex flex-col gap-5">
            <h3 className="font-poppins text-2xl font-bold text-text-primary sm:text-[32px]">
              {t.mission.heading}
            </h3>
            {t.mission.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="font-montserrat text-[16px] leading-relaxed text-text-secondary"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-[160px_1fr] md:gap-16"
        >
          <BlockLabel>{t.vision.label}</BlockLabel>
          <div className="flex flex-col gap-6">
            <Statement
              before={t.vision.statementBefore}
              highlight={t.vision.statementHighlight}
              after={t.vision.statementAfter}
            />
            <p className="font-montserrat text-[16px] leading-relaxed text-text-secondary">
              {t.vision.support}
            </p>

            <ul className="flex flex-col gap-3.5">
              {t.vision.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={22} weight="fill" className="mt-0.5 shrink-0 text-grape" />
                  <span className="font-montserrat text-[15px] leading-relaxed text-text-secondary">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
