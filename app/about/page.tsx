import type { Metadata } from "next";
import Image from "next/image";
import { Download, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Opeyemi Owolabi - a designer transitioning into product design with a background in fashion design leadership and healthcare team management.",
};

const designSkills = [
  "UX Design",
  "UI Design",
  "Product Design",
  "Interaction Design",
  "Information Architecture",
  "User Research",
  "Usability Testing",
  "Design Systems",
  "Accessibility",
  "Prototyping",
];

const tools = [
  "Figma",
  "FigJam",
  "Framer",
  "Miro",
  "Notion",
  "Adobe Creative Suite",
];

const timeline = [
  {
    year: "Nov 2025 - Present",
    role: "Product Design Intern",
    company: "Podus, United Kingdom",
    description:
      "Designing user-centred digital products across web and mobile platforms. Conducting user research, usability testing, and producing wireframes through to high-fidelity designs - collaborating with PMs and developers to translate business requirements into intuitive experiences while contributing to the design system.",
  },
  {
    year: "Jan 2023 - Present",
    role: "Team Lead",
    company: "Bolff Health Care, United Kingdom",
    description:
      "Leading multidisciplinary teams to deliver high-quality healthcare services and operational excellence. Overseeing daily operations, staff development, and regulatory compliance while collaborating with senior management on strategic objectives, process improvements, and service enhancement programmes.",
  },
  {
    year: "Jan 2016 - Nov 2022",
    role: "Lead Fashion Designer",
    company: "G-Touch Apparels, Nigeria",
    description:
      "Led the end-to-end creative design and product development process for seasonal fashion collections - from trend research and consumer insights through to production. Managed a team of designers, pattern makers, and production staff, and collaborated with suppliers and manufacturers to maintain brand consistency and quality standards.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-20 pb-32">
      {/* Header */}
      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          <div>
            {/* Profile photo */}
            <div className="mb-8">
              <div className="relative w-52 h-64 md:w-64 md:h-80 rounded-2xl overflow-hidden ring-1 ring-foreground/10 shadow-2xl shadow-black/30">
                <Image
                  src="/profile.jpg"
                  alt="Opeyemi Owolabi"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            <span className="text-xs text-muted tracking-widest uppercase block mb-3">
              About
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Hi, I&apos;m Opeyemi
            </h1>
            <p className="text-muted leading-relaxed mb-4">
              I&apos;m transitioning into product design with nearly a decade of
              professional experience across creative direction and team
              leadership. My background is unconventional - and that&apos;s
              exactly what shapes how I design.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              I spent six years as Lead Fashion Designer at G-Touch Apparels in
              Nigeria, owning the full creative lifecycle - from trend research
              and concept development through to production and quality control.
              That work taught me to balance aesthetic craft with commercial
              constraints and to lead teams through complex, deadline-driven
              processes.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Since relocating to the United Kingdom, I&apos;ve led
              multidisciplinary teams at Bolff Health Care, refining skills in
              people management, stakeholder communication, and operational
              delivery. I&apos;m now bringing all of that into digital product
              design through an internship at Podus - learning to translate
              user needs into purposeful, well-crafted digital experiences.
            </p>
            <Button href="/resume.pdf" variant="ghost" external>
              Download Resume <Download size={14} />
            </Button>
          </div>

          {/* Philosophy */}
          <div className="bg-card border border-line rounded-2xl p-8">
            <h2 className="text-sm text-muted tracking-widest uppercase mb-6">
              Design Philosophy
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "Research first",
                  body: "Every design decision should be traceable back to a user insight or business constraint.",
                },
                {
                  title: "Simplicity is earned",
                  body: "The most intuitive experiences are the result of the most rigorous thinking - not the least.",
                },
                {
                  title: "Systems over screens",
                  body: "Scalable design starts with coherent systems, not one-off solutions.",
                },
                {
                  title: "Outcomes over outputs",
                  body: "Shipping is a means, not an end. Design is successful when it moves a metric that matters.",
                },
              ].map((p) => (
                <div key={p.title}>
                  <div className="text-foreground font-medium text-sm mb-1">
                    {p.title}
                  </div>
                  <div className="text-muted text-sm leading-relaxed">
                    {p.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Skills */}
      <AnimatedSection>
        <div className="mb-20">
          <h2 className="text-2xl font-semibold text-foreground mb-8">
            Skills &amp; Tools
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs text-muted tracking-widest uppercase mb-4">
                Design Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {designSkills.map((s) => (
                  <Badge key={s} variant="default">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs text-muted tracking-widest uppercase mb-4">
                Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <Badge key={t} variant="accent">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Career journey */}
      <AnimatedSection>
        <h2 className="text-2xl font-semibold text-foreground mb-10">
          Career Journey
        </h2>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-line ml-2" />
          <div className="space-y-10">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-8 pl-10 relative">
                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-line bg-canvas" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <span className="text-sm text-muted">{item.year}</span>
                    <h3 className="font-medium text-foreground">
                      {item.role}
                    </h3>
                    <span className="text-muted text-sm">{item.company}</span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="mt-20 pt-12 border-t border-line">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-1">
              Want to work together?
            </h2>
            <p className="text-muted">
              I&apos;m open to full-time roles and select freelance projects.
            </p>
          </div>
          <Button href="/contact" size="lg">
            Let&apos;s talk <ArrowUpRight size={16} />
          </Button>
        </div>
      </AnimatedSection>
    </div>
  );
}
