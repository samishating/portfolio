"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { profile } from "@/lib/data";

const quickLinks = [
  {
    label: profile.emailLabel,
    href: profile.email,
    icon: Mail,
    description: "Email professionnel",
  },
  {
    label: "GitHub — samishating",
    href: profile.github,
    icon: Github,
    description: "Code source & projets",
    external: true,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: Linkedin,
    description: "Profil professionnel",
    external: true,
  },
  {
    label: profile.phoneLabel,
    href: profile.phone,
    icon: Phone,
    description: "Téléphone",
  },
];

export default function Contact() {
  return (
    <SectionWrapper
      id="contact"
      eyebrow="Contact"
      title="Disponible pour un poste de Développeur Web Full-Stack."
      className="bg-slate-950/45"
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left: Quick contact & CV */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col gap-4"
        >
          {/* Recruiter CTA card */}
          <div className="glass-panel p-6 sm:p-7">
            <p className="kicker mb-2 text-sky-300">Recruteurs</p>
            <p className="text-lg font-semibold leading-8 text-slate-200">
              Ouvert aux opportunités de développement web, postes Full-Stack, Frontend ou Backend.
            </p>
            <p className="mt-3 font-mono text-sm leading-6 text-slate-400">
              Casablanca, Maroc · Disponible immédiatement
            </p>

            <a
              href={profile.cvUrl}
              download
              className="primary-button mt-6 w-full justify-center"
              id="cv-download-btn"
            >
              <Download className="size-4" />
              Télécharger mon CV
            </a>
          </div>

          {/* Contact links */}
          <div className="glass-panel p-5 sm:p-6">
            <p className="kicker mb-4 text-slate-500">Coordonnées</p>
            <div className="space-y-2.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="secondary-button w-full justify-start gap-3 px-4 py-3 text-left"
                  id={`contact-${link.icon.displayName?.toLowerCase() ?? link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <link.icon className="size-4 shrink-0 text-sky-300" />
                  <span className="flex-1 truncate text-sm">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Contact form */}
        <motion.form
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="glass-panel grid gap-4 p-6 sm:p-8"
          id="contact-form"
        >
          <div className="mb-2">
            <p className="kicker mb-1 text-slate-500">Message direct</p>
            <p className="text-sm text-slate-400">Postes, collaborations ou projets techniques.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="field-label" htmlFor="contact-name">
              Nom
              <input
                id="contact-name"
                className="field-input"
                type="text"
                placeholder="Votre nom"
              />
            </label>
            <label className="field-label" htmlFor="contact-email">
              Email
              <input
                id="contact-email"
                className="field-input"
                type="email"
                placeholder="vous@entreprise.com"
              />
            </label>
          </div>
          <label className="field-label" htmlFor="contact-subject">
            Objet
            <input
              id="contact-subject"
              className="field-input"
              type="text"
              placeholder="Poste Full-Stack, collaboration, projet..."
            />
          </label>
          <label className="field-label" htmlFor="contact-message">
            Message
            <textarea
              id="contact-message"
              className="field-input min-h-36 resize-y"
              placeholder="Décrivez le poste ou le projet..."
            />
          </label>
          <Link
            href={profile.email}
            className="primary-button mt-2 w-fit px-6 py-3.5"
            id="contact-submit-btn"
          >
            <Send className="size-4" />
            Envoyer par email
          </Link>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
