import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CountUp } from "@/components/ui/CountUp";
import { getAllCaseStudies } from "@/lib/mdx";
import { HeroAnimation } from "@/components/sections/HeroAnimation";
import {
  HeroName,
  HeroTagline,
  HeroCTAs,
  HeroScrollHint,
  HeroParallax,
} from "@/components/sections/HeroText";
import { Magnetic } from "@/components/ui/Magnetic";
import { ShimmerCTA } from "@/components/sections/ShimmerCTA";

const stats = [
  { value: 9, suffix: "+", label: "Years of professional experience" },
  { value: 6, suffix: "", label: "Years in creative direction" },
  { value: 3, suffix: "+", label: "Years leading teams" },
];

export default function Home() {
  const caseStudies = getAllCaseStudies();
  const featured = caseStudies.filter((c) => c.featured).slice(0, 4);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14 md:pt-0">
        <HeroAnimation />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center flex flex-col items-center">
          <HeroParallax>
            <HeroName />
            <HeroTagline />
            <HeroCTAs>
              <Magnetic>
                <Button href="/work" size="lg">
                  View Work <ArrowRight size={16} />
                </Button>
              </Magnetic>
              <Magnetic>
                <Button href="/contact" variant="ghost" size="lg">
                  Get in Touch
                </Button>
              </Magnetic>
            </HeroCTAs>
          </HeroParallax>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <HeroScrollHint />
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-14">
            <div>
              <span className="text-xs text-muted tracking-widest uppercase block mb-2">
                Portfolio
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                Projects
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden md:flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors group"
            >
              All projects
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {featured.map((cs, i) => (
            <AnimatedSection key={cs.slug} delay={i * 0.08}>
              <CaseStudyCard caseStudy={cs} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-8 md:hidden text-center">
          <Button href="/work" variant="ghost">
            View all projects <ArrowRight size={14} />
          </Button>
        </AnimatedSection>
      </section>

      {/* ── About teaser ── */}
      <section className="border-y border-line">
        <div className="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-20 items-center">
          <AnimatedSection>
            <span className="text-xs text-muted tracking-widest uppercase block mb-4">
              About
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-6">
              From{" "}
              <span className="text-foreground">fashion</span> to{" "}
              <span className="text-foreground">product design</span>
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              My path into product design runs through six years of creative
              direction in fashion and three years of team leadership in
              healthcare. That background shapes how I approach every brief
              — with an eye for craft, a grounding in user needs, and the
              operational discipline to see ideas through to delivery.
            </p>
            <Button href="/about" variant="ghost">
              More about me <ArrowRight size={14} />
            </Button>
          </AnimatedSection>

          <AnimatedSection delay={0.15} direction="left">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card border border-line rounded-2xl p-6 hover:border-subtle transition-colors duration-300"
                >
                  <div className="text-3xl font-semibold text-foreground mb-1 tabular-nums">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted">{stat.label}</div>
                </div>
              ))}
              {/* Static "∞" card */}
              <div className="bg-card border border-line rounded-2xl p-6 hover:border-subtle transition-colors duration-300">
                <div className="text-3xl font-semibold text-foreground mb-1">∞</div>
                <div className="text-sm text-muted">Curiosity</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="max-w-6xl mx-auto px-6 pb-32 pt-8">
        <AnimatedSection>
          <ShimmerCTA />
        </AnimatedSection>
      </section>
    </>
  );
}
