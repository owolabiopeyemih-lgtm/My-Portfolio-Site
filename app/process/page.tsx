import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How Opeyemi approaches product design — from discovery and research through to validated delivery.",
};

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Every project starts with deep immersion. I kick off with stakeholder interviews, product audits, competitive analysis, and a thorough review of any existing data. The goal is to understand the business context, constraints, and success criteria before touching a single wireframe.",
    deliverables: [
      "Stakeholder interview notes",
      "Competitive audit",
      "Project brief",
      "Success metrics definition",
    ],
  },
  {
    number: "02",
    title: "Research",
    description:
      "I design research plans tailored to the question at hand — whether that's generative research to understand unmet needs or evaluative research to test existing assumptions. Methods include user interviews, surveys, diary studies, contextual inquiry, and usability tests.",
    deliverables: [
      "Research plan",
      "Interview guides",
      "Raw data & recordings",
      "Affinity mapping",
    ],
  },
  {
    number: "03",
    title: "Definition",
    description:
      "Research generates data; definition generates clarity. I synthesise findings into user personas, journey maps, and opportunity statements. This phase is where the real design problem gets articulated — often very different from the assumed brief.",
    deliverables: [
      "User personas",
      "Journey maps",
      "Jobs-to-be-done statements",
      "Problem statement",
    ],
  },
  {
    number: "04",
    title: "Ideation",
    description:
      "With a sharp problem definition, I open the aperture wide. Sketching, crazy-eights, design sprints, and collaborative workshops help generate a breadth of potential solutions. I document all ideas before narrowing — diverge first, converge later.",
    deliverables: [
      "Sketches & rough concepts",
      "Workshop outputs",
      "Feature prioritisation matrix",
      "Concept options",
    ],
  },
  {
    number: "05",
    title: "Design",
    description:
      "From concepts to craft. I build from low-fidelity wireframes that validate flow and structure, up to high-fidelity designs that nail the visual detail. Everything is designed within — or informed by — a design system for consistency and scalability.",
    deliverables: [
      "Information architecture",
      "User flows",
      "Wireframes",
      "High-fidelity designs",
      "Interactive prototype",
    ],
  },
  {
    number: "06",
    title: "Validation",
    description:
      "Designs get tested with real users before any line of code is written. I run moderated and unmoderated usability tests, gather quantitative data where possible, and synthesise findings into a clear set of recommended changes with supporting evidence.",
    deliverables: [
      "Test plan",
      "Usability test sessions",
      "Findings report",
      "Prioritised recommendations",
    ],
  },
  {
    number: "07",
    title: "Iteration",
    description:
      "The best designs are never done on the first pass. I refine based on test findings and continue to validate until the design meets the defined success criteria. Iteration is not failure — it's the process working exactly as intended.",
    deliverables: [
      "Revised designs",
      "Changelog",
      "Updated prototype",
      "Regression test results",
    ],
  },
  {
    number: "08",
    title: "Delivery",
    description:
      "Great design requires great handoff. I work closely with engineers throughout implementation — providing annotated specs, responding to questions, reviewing builds against designs, and tracking post-launch metrics to close the feedback loop.",
    deliverables: [
      "Design specs & annotations",
      "Design tokens",
      "Developer Q&A sessions",
      "Post-launch review",
    ],
  },
];

export default function ProcessPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-12 pb-24">
      <AnimatedSection>
        <span className="text-xs text-muted tracking-widest uppercase block mb-3">
          How I work
        </span>
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
          Design Process
        </h1>
        <p className="text-foreground/70 text-lg max-w-2xl mb-20">
          A structured yet flexible approach that balances rigour with speed.
          The depth at each stage scales to the project — but the sequence
          rarely changes.
        </p>
      </AnimatedSection>

      <div className="space-y-0">
        {steps.map((step, i) => (
          <AnimatedSection key={step.number} delay={i * 0.06}>
            <div className="grid md:grid-cols-[200px_1fr] gap-8 py-12 border-b border-line last:border-b-0">
              {/* Step number + title */}
              <div>
                <span className="text-xs text-muted font-mono tracking-widest">
                  {step.number}
                </span>
                <h2 className="text-xl font-semibold text-foreground mt-2">
                  {step.title}
                </h2>
              </div>

              {/* Content */}
              <div>
                <p className="text-foreground/75 leading-relaxed mb-6">
                  {step.description}
                </p>
                <div>
                  <span className="text-xs text-muted tracking-widest uppercase block mb-3">
                    Deliverables
                  </span>
                  <ul className="flex flex-wrap gap-2">
                    {step.deliverables.map((d) => (
                      <li
                        key={d}
                        className="text-xs bg-card border border-line text-foreground/70 px-3 py-1.5 rounded-full"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
