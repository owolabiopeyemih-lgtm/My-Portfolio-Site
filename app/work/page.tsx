import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { getAllCaseStudies } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A selection of product design projects by Opeyemi Owolabi - spanning dashboard design, e-commerce, healthcare, and mobile app experiences.",
};

export default function WorkPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <div className="max-w-6xl mx-auto px-6 pt-20 pb-32">
      <AnimatedSection>
        <span className="text-xs text-muted tracking-widest uppercase block mb-3">
          Portfolio
        </span>
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
          Projects
        </h1>
        <p className="text-muted text-lg max-w-xl mb-16">
          End-to-end product design work - from discovery to delivery. Each
          case study documents the problem, process, and outcome.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {caseStudies.map((cs, i) => (
          <AnimatedSection key={cs.slug} delay={i * 0.08}>
            <CaseStudyCard caseStudy={cs} compact />
          </AnimatedSection>
        ))}
      </div>

      {caseStudies.length === 0 && (
        <div className="text-center py-24 text-muted">
          Case studies coming soon.
        </div>
      )}
    </div>
  );
}

