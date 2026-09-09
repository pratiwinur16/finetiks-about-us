"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { LinkedinLogo } from "@phosphor-icons/react";
import { useLanguage } from "./LanguageProvider";

type Leader = {
  name: string;
  role: string;
  photo: string;
  quote: string;
  bio: string;
  linkedin: string;
};

const COPY = {
  id: {
    eyebrow: "TIM KEPEMIMPINAN",
    heading: "Orang-orang di balik FINETIKS",
    subheading:
      "Orang-orang yang memimpin FINETIKS, dari perbankan global dan teknologi hingga strategi keuangan.",
    leaders: [
      {
        name: "Cameron Goh",
        role: "CEO & Founder",
        photo: "/images/team/cameron-goh.png",
        quote: "Semua orang berhak merasa mengendalikan uangnya sendiri, bukan takut menghadapinya.",
        bio: "Cameron berkarier lebih dari 25 tahun di bidang teknologi finansial dan perbankan global, termasuk posisi kepemimpinan di London Stock Exchange Group (LSEG). Ia mendirikan FINETIKS agar produk keuangan lebih mudah dipahami banyak orang.",
        linkedin: "#",
      },
      {
        name: "Edwin Ardiwinata",
        role: "CTO & Co-Founder",
        photo: "/images/team/edwin-ardiwinata.png",
        quote: "Kalau menabung saja masih terasa rumit, berarti yang gagal adalah teknologinya, bukan orangnya.",
        bio: "Edwin adalah seorang pemimpin teknologi berpengalaman dengan semangat untuk fintech. Keahlian teknis yang mendalam dan visi strategisnya telah sangat berharga dalam membangun FINETIKS menjadi perusahaan teknologi keuangan terkemuka.",
        linkedin: "#",
      },
      {
        name: "Noni Lim",
        role: "CFO",
        photo: "/images/team/noni-lim.png",
        quote: "Kepercayaan bukan fitur tambahan. Itu fondasi dari semua yang kami bangun.",
        bio: "Noni mengawasi strategi keuangan dan permodalan FINETIKS, memastikan perusahaan tumbuh secara bertanggung jawab dan sesuai regulasi jasa keuangan.",
        linkedin: "#",
      },
    ] as Leader[],
  },
  en: {
    eyebrow: "LEADERSHIP TEAM",
    heading: "The people behind FINETIKS",
    subheading:
      "The people leading FINETIKS, from global banking and technology to financial strategy.",
    leaders: [
      {
        name: "Cameron Goh",
        role: "CEO & Founder",
        photo: "/images/team/cameron-goh.png",
        quote: "Everyone deserves to feel in control of their money, not intimidated by it.",
        bio: "Cameron spent more than 25 years in financial technology and global banking, including a leadership role at the London Stock Exchange Group (LSEG). He started FINETIKS to make financial products people can actually understand.",
        linkedin: "#",
      },
      {
        name: "Edwin Ardiwinata",
        role: "CTO & Co-Founder",
        photo: "/images/team/edwin-ardiwinata.png",
        quote: "If saving money still feels complicated, that's on the technology, not the person.",
        bio: "An experienced technology leader with a passion for fintech, Edwin brings deep technical expertise and strategic vision to building FINETIKS into a leading financial technology company.",
        linkedin: "#",
      },
      {
        name: "Noni Lim",
        role: "CFO",
        photo: "/images/team/noni-lim.png",
        quote: "Trust isn't a feature we add. It's the foundation everything else stands on.",
        bio: "Noni oversees FINETIKS' financial strategy and capital management, making sure the company grows responsibly and stays compliant with financial regulations.",
        linkedin: "#",
      },
    ] as Leader[],
  },
};

export default function Leadership() {
  const { lang } = useLanguage();
  const t = COPY[lang];
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="w-full bg-white px-6 py-16 sm:py-24 lg:py-[128px]">
      <div className="mx-auto flex max-w-[1128px] flex-col items-center gap-16 lg:gap-[72px]">
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
          <p className="max-w-[820px] font-poppins text-[18px] leading-[28px] text-text-secondary sm:text-[20px] sm:leading-[32px]">
            {t.subheading}
          </p>
        </motion.div>

        <div
          className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          onMouseLeave={() => setHovered(null)}
        >
          {t.leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: "easeOut" }}
            >
              <motion.div
                onMouseEnter={() => setHovered(i)}
                animate={{ opacity: hovered === null || hovered === i ? 1 : 0.6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group flex h-full cursor-default flex-col overflow-hidden rounded-2xl border border-transparent bg-[#F8FAFC] transition-[background-color,border-color,box-shadow,transform] duration-300 hover:-translate-y-1.5 hover:border-grape-tint-3/40 hover:bg-white hover:shadow-[0_24px_48px_rgba(24,24,27,0.1)]"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={leader.photo}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/55 to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-white/10 px-3 py-1 font-poppins text-xs font-bold text-white backdrop-blur-sm">
                    {leader.role}
                  </span>
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${leader.name} on LinkedIn`}
                    onClick={(e) => e.stopPropagation()}
                    className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white hover:text-grape-dark"
                  >
                    <LinkedinLogo size={18} weight="fill" />
                  </a>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-7">
                  <h3 className="font-poppins text-2xl font-bold leading-snug text-text-primary sm:text-[26px]">
                    {leader.name}
                  </h3>
                  <p className="font-montserrat text-[16px] leading-relaxed text-text-secondary">
                    {leader.bio}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
