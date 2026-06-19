import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "./Badge";
import { formatDate } from "@/lib/utils";
import type { Article } from "@/lib/mdx";

interface WritingCardProps {
  article: Article;
}

export function WritingCard({ article }: WritingCardProps) {
  return (
    <Link
      href={`/writing/${article.slug}`}
      className="group flex flex-col gap-3 p-6 bg-card border border-line rounded-2xl hover:border-subtle transition-all duration-300"
    >
      <div className="flex flex-wrap gap-2">
        {article.tags.slice(0, 2).map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <div>
        <h3 className="text-foreground font-semibold text-lg leading-snug group-hover:text-muted transition-colors">
          {article.title}
        </h3>
        <p className="text-muted text-sm mt-1 line-clamp-2">{article.description}</p>
      </div>

      <div className="flex items-center justify-between mt-auto pt-1">
        <div className="flex items-center gap-3 text-xs text-muted">
          <span>{formatDate(article.date)}</span>
          <span>·</span>
          <span>{article.readingTime}</span>
        </div>
        <ArrowUpRight
          size={16}
          className="text-muted group-hover:text-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
    </Link>
  );
}
