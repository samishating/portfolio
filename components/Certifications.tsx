"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { certifications } from "@/lib/data";

// Map certification titles to their image file in /uploads (optional — will show if file exists)
const certImages: Record<string, string> = {
  "ALX Software Engineering": "/uploads/cert-alx.png",
};

export default function Certifications() {
  return (
    <SectionWrapper
      id="certifications"
      eyebrow="Formation & Certifications"
      title="Diplômes, certifications et apprentissage continu."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {certifications.map((item, index) => {
          const imgSrc = certImages[item.title];

          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              className="glass-panel overflow-hidden p-0"
            >
              {/* Certification image (shows when file is placed in /uploads) */}
              {imgSrc && (
                <div className="relative h-40 w-full overflow-hidden border-b border-white/10 bg-slate-900">
                  <Image
                    src={imgSrc}
                    alt={`Certificat ${item.title}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    onError={() => {/* silently hide if file not uploaded yet */}}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                </div>
              )}

              <div className="p-6">
                <item.icon className="mb-6 size-7 text-sky-300" />
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
