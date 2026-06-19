import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentRoot = path.join(process.cwd(), "content");

export interface CaseStudyFrontmatter {
  title: string;
  description: string;
  role: string;
  company: string;
  timeline: string;
  year: string;
  tools: string[];
  tags: string[];
  outcomes: string[];
  featured: boolean;
  coverImage?: string;
  order?: number;
}

export interface WritingFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime?: string;
}

export interface CaseStudy extends CaseStudyFrontmatter {
  slug: string;
  content: string;
  readingTime: string;
}

export interface Article extends WritingFrontmatter {
  slug: string;
  content: string;
  readingTime: string;
}

function getFiles(dir: string): string[] {
  const fullPath = path.join(contentRoot, dir);
  if (!fs.existsSync(fullPath)) return [];
  return fs
    .readdirSync(fullPath)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
}

export function getAllCaseStudies(): CaseStudy[] {
  const files = getFiles("case-studies");
  return files
    .map((file) => {
      const slug = file.replace(/\.(mdx|md)$/, "");
      const raw = fs.readFileSync(
        path.join(contentRoot, "case-studies", file),
        "utf-8"
      );
      const { data, content } = matter(raw);
      const fm = data as CaseStudyFrontmatter;
      return {
        ...fm,
        slug,
        content,
        readingTime: readingTime(content).text,
      };
    })
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  const filePath = path.join(contentRoot, "case-studies", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    ...(data as CaseStudyFrontmatter),
    slug,
    content,
    readingTime: readingTime(content).text,
  };
}

export function getAllArticles(): Article[] {
  const files = getFiles("writing");
  return files
    .map((file) => {
      const slug = file.replace(/\.(mdx|md)$/, "");
      const raw = fs.readFileSync(
        path.join(contentRoot, "writing", file),
        "utf-8"
      );
      const { data, content } = matter(raw);
      const fm = data as WritingFrontmatter;
      return {
        ...fm,
        slug,
        content,
        readingTime: readingTime(content).text,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): Article | null {
  const filePath = path.join(contentRoot, "writing", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    ...(data as WritingFrontmatter),
    slug,
    content,
    readingTime: readingTime(content).text,
  };
}
