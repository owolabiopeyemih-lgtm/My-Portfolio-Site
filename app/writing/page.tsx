import type { Metadata } from "next";
import { WritingCard } from "@/components/ui/WritingCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { getAllArticles } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Thoughts on UX strategy, design systems, research methods, and the craft of product design.",
};

export default function WritingPage() {
  const articles = getAllArticles();

  return (
    <div className="max-w-6xl mx-auto px-6 pt-20 pb-32">
      <AnimatedSection>
        <span className="text-xs text-muted tracking-widest uppercase block mb-3">
          Writing
        </span>
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
          Insights & Essays
        </h1>
        <p className="text-muted text-lg max-w-xl mb-16">
          Long-form thoughts on design craft, strategy, research, and the
          broader practice of building digital products.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {articles.map((article, i) => (
          <AnimatedSection key={article.slug} delay={i * 0.08}>
            <WritingCard article={article} />
          </AnimatedSection>
        ))}
      </div>

      {articles.length === 0 && (
        <div className="text-center py-24 text-muted">Articles coming soon.</div>
      )}
    </div>
  );
}

