import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/mdx";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Clock, Building2, Calendar } from "lucide-react";

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return {};
  return {
    title: cs.title,
    description: cs.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  return (
    <article className="max-w-4xl mx-auto px-6 pt-12 pb-24">
      {/* Back */}
      <div className="mb-10">
        <Button href="/work" variant="ghost" size="sm">
          <ArrowLeft size={14} /> Back to work
        </Button>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {cs.tags.map((tag) => (
          <Badge key={tag} variant="accent">
            {tag}
          </Badge>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-semibold text-foreground leading-tight mb-4">
        {cs.title}
      </h1>
      <p className="text-muted text-lg leading-relaxed mb-10">
        {cs.description}
      </p>

      {/* Meta grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 pb-12 border-b border-line">
        {[
          { icon: Building2, label: "Company", value: cs.company },
          { icon: Calendar, label: "Timeline", value: cs.timeline },
          { icon: Clock, label: "Reading time", value: cs.readingTime },
          { icon: Building2, label: "Role", value: cs.role },
        ].map((m) => (
          <div key={m.label}>
            <div className="text-xs text-muted mb-1">{m.label}</div>
            <div className="text-sm font-medium text-foreground">{m.value}</div>
          </div>
        ))}
      </div>

      {/* Tools used */}
      <div className="mb-12">
        <div className="text-xs text-muted tracking-widest uppercase mb-3">
          Tools Used
        </div>
        <div className="flex flex-wrap gap-2">
          {cs.tools.map((tool) => (
            <Badge key={tool} variant="default">
              {tool}
            </Badge>
          ))}
        </div>
      </div>

      {/* Cover image */}
      {cs.coverImage ? (
        <div className="relative w-full h-80 rounded-2xl overflow-hidden border border-line mb-12">
          <Image
            src={cs.coverImage}
            alt={cs.title}
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      ) : (
        <div className="w-full h-80 bg-card border border-line rounded-2xl flex items-center justify-center mb-12">
          <span className="text-6xl font-semibold text-subtle">{cs.title.charAt(0)}</span>
        </div>
      )}

      {/* Outcomes banner */}
      {cs.outcomes.length > 0 && (
        <div className="bg-card border border-line rounded-2xl p-6 mb-12">
          <div className="text-xs text-muted tracking-widest uppercase mb-4">
            Key Outcomes
          </div>
          <ul className="space-y-2">
            {cs.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-2 text-sm text-foreground">
                <span className="text-muted mt-0.5">→</span>
                {o}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* MDX Content */}
      <div className="prose prose-invert prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-2xl prose-h3:text-xl prose-p:text-foreground/80 prose-p:leading-relaxed prose-strong:text-foreground prose-a:text-foreground prose-a:no-underline hover:prose-a:underline prose-hr:border-line">
        <MDXRemote source={cs.content} />
      </div>

      {/* Navigation */}
      <div className="mt-16 pt-10 border-t border-line flex justify-between">
        <Button href="/work" variant="ghost">
          <ArrowLeft size={14} /> All case studies
        </Button>
        <Button href="/contact">Work with me</Button>
      </div>
    </article>
  );
}
