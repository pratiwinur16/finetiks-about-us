"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

const COPY = {
  id: {
    label: "TENTANG KAMI",
    heading: "FINETIKS",
    body: "FINETIKS hadir sebagai solusi cerdas untuk mengelola keuangan Anda. Aplikasi manajemen keuangan digital berbasis AI ini menawarkan produk tabungan dengan imbal hasil yang kompetitif, membantu Anda fokus menabung sekaligus meningkatkan literasi dan kebiasaan keuangan yang baik.",
  },
  en: {
    label: "ABOUT US",
    heading: "FINETIKS",
    body: "FINETIKS is a smart solution for managing your finances. This AI-powered digital financial management application offers savings products with competitive returns, helping you focus on saving while improving your financial literacy and habits.",
  },
};

function BlockLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-poppins text-xs font-bold tracking-[0.2em] text-grape md:pt-3">{children}</p>
  );
}

export default function AboutFinetiks() {
  const { lang } = useLanguage();
  const t = COPY[lang];

  return (
    <section className="w-full bg-white px-6 pt-16 sm:pt-24 lg:pt-[128px]">
      <div className="mx-auto max-w-[1128px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-[160px_1fr] md:gap-16"
        >
          <BlockLabel>{t.label}</BlockLabel>
          <div className="flex flex-col gap-5">
            <h3 className="font-poppins text-2xl font-bold text-text-primary sm:text-[32px]">
              {t.heading}
            </h3>
            <p className="font-montserrat text-[16px] leading-relaxed text-text-secondary">
              {t.body}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
