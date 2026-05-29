"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { contactLinks, profile } from "@/lib/data";

export default function Contact() {
  return (
    <SectionWrapper id="contact" eyebrow="Contact" title="Let's connect around support, web apps, or community platforms." className="bg-slate-950/45">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="glass-panel p-6 sm:p-8"
        >
          <p className="text-lg leading-8 text-slate-300">
            I am open to software engineering work, technical support opportunities, collaborations, and serious community platform ideas.
          </p>
          <div className="mt-8 space-y-3">
            {contactLinks.map((link) =>
              link.href === "#contact" ? (
                <div key={link.label} className="secondary-button w-full justify-start px-4 py-3">
                  <link.icon className="size-4" />
                  Discord: {link.label}
                </div>
              ) : (
                <Link key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="secondary-button w-full justify-start px-4 py-3">
                  <link.icon className="size-4" />
                  {link.label}
                </Link>
              )
            )}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="glass-panel grid gap-4 p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="field-label">
              Name
              <input className="field-input" type="text" placeholder="Your name" />
            </label>
            <label className="field-label">
              Email
              <input className="field-input" type="email" placeholder="you@example.com" />
            </label>
          </div>
          <label className="field-label">
            Project / Topic
            <input className="field-input" type="text" placeholder="Support role, web app, BHL idea..." />
          </label>
          <label className="field-label">
            Message
            <textarea className="field-input min-h-36 resize-y" placeholder="Tell me what you want to build or solve." />
          </label>
          <Link href={profile.email} className="primary-button mt-2 w-fit px-6 py-3.5">
            <Send className="size-4" />
            Email Sam
          </Link>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
