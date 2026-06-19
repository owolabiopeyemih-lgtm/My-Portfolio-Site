import type { Metadata } from "next";
import { Mail, ExternalLink, CalendarDays, X } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Opeyemi Owolabi - open to product design roles, freelance projects, and design conversations.",
};

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "owolabiopeyemih@gmail.com",
    href: "mailto:owolabiopeyemih@gmail.com",
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    value: "linkedin.com/in/opeyemi-owolabi-a9b059322",
    href: "https://www.linkedin.com/in/opeyemi-owolabi-a9b059322/",
  },
  {
    icon: X,
    label: "Twitter / X",
    value: "x.com/owolabiopeyemih",
    href: "https://x.com/owolabiopeyemih",
  },
  {
    icon: ExternalLink,
    label: "Behance",
    value: "behance.net/opeyemiowolabi3",
    href: "https://www.behance.net/opeyemiowolabi3",
  },
  {
    icon: CalendarDays,
    label: "Schedule a call",
    value: "Book 30 minutes via Calendly",
    href: "https://calendly.com/opeyemi-owolabi",
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-20 pb-32">
      <div className="grid md:grid-cols-2 gap-20 items-start">
        {/* Left column */}
        <AnimatedSection>
          <span className="text-xs text-muted tracking-widest uppercase block mb-3">
            Contact
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Let&apos;s work together
          </h1>
          <p className="text-muted leading-relaxed mb-10">
            I&apos;m currently open to product design roles and select
            freelance engagements. If you&apos;re building something
            interesting and want a design partner who thinks in systems and
            outcomes, reach out.
          </p>

          <div className="space-y-4 mb-10">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-start gap-4 p-4 bg-card border border-line rounded-xl hover:border-subtle transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-card border border-line flex items-center justify-center shrink-0 mt-0.5">
                  <link.icon size={16} className="text-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted mb-0.5">{link.label}</div>
                  <div className="text-foreground text-sm font-medium group-hover:text-muted transition-colors">
                    {link.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Availability */}
          <div className="flex items-center gap-2 text-sm text-muted">
            <span className="w-2 h-2 rounded-full bg-white" />
            Open to product design roles and freelance projects - responses within 24 hours
          </div>
        </AnimatedSection>

        {/* Right column â€” contact form */}
        <AnimatedSection delay={0.15}>
          <ContactForm />
        </AnimatedSection>
      </div>
    </div>
  );
}

