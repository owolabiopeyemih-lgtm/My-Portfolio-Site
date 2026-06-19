import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getArticleBySlug, getAllArticles } from "@/lib/mdx";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Clock, CalendarDays } from "lucide-react";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <article className="max-w-2xl mx-auto px-6 pt-20 pb-32">
      {/* Back */}
      <div className="mb-12">
        <Button href="/writing" variant="ghost" size="sm">
          <ArrowLeft size={14} /> Back to writing
        </Button>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {article.tags.map((tag) => (
          <Badge key={tag} variant="accent">
            {tag}
          </Badge>
        ))}
      </div>

      <h1 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-5">
        {article.title}
      </h1>
      <p className="text-muted text-lg leading-relaxed mb-10">
        {article.description}
      </p>

      <div className="flex items-center gap-6 text-sm text-muted mb-16 pb-12 border-b border-line">
        <span className="flex items-center gap-1.5">
          <CalendarDays size={13} />
          {formatDate(article.date)}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock size={13} />
          {article.readingTime}
        </span>
      </div>

      <div className="prose prose-invert max-w-none prose-headings:font-semibold prose-headings:text-foreground prose-p:text-foreground/80 prose-strong:text-foreground prose-a:text-foreground prose-a:no-underline hover:prose-a:underline prose-hr:border-line prose-blockquote:not-italic">
        <MDXRemote source={article.content} />
      </div>

      <div className="mt-20 pt-10 border-t border-line flex justify-between items-center">
        <Button href="/writing" variant="ghost">
          <ArrowLeft size={14} /> All articles
        </Button>
        <Button href="/contact" variant="ghost">
          Discuss this piece
        </Button>
      </div>
    </article>
  );
}
