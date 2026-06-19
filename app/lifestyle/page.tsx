import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Lifestyle",
  description:
    "A glimpse into the life of Opeyemi Owolabi — fashion, reading, and the things that shape the way she sees the world.",
};

const books = [
  {
    title: "Think Big",
    author: "Ben Carson",
    note:
      "A book that reshaped how I see potential and purpose. Carson's story of rising against all odds is a reminder that talent without discipline means nothing — and that thinking big is the first act of courage.",
  },
  {
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    note:
      "A timeless guide to human connection. Carnegie's principles cut through the noise — genuine interest in people, listening well, and making others feel valued are skills that matter just as much in design as they do in life.",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    note:
      "A practical blueprint for building systems that actually stick. Clear's idea that small, consistent improvements compound into remarkable results changed how I approach skill-building and daily routines — in design and beyond.",
  },
  {
    title: "The Purpose Driven Life",
    author: "Rick Warren",
    note:
      "A deeply grounding read about living with intention. It reframed how I think about why I do what I do — a useful anchor whenever the work feels directionless or the path feels unclear.",
  },
];

const fashionInterests = [
  "Colour theory in dressing",
  "Silhouette and proportion",
  "Capsule wardrobe curation",
  "Sustainable fashion",
  "Statement accessories",
  "Fabric and texture play",
];

export default function LifestylePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-20 pb-32">
      {/* Header */}
      <AnimatedSection>
        <span className="text-xs text-muted tracking-widest uppercase block mb-3">
          Lifestyle
        </span>
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
          Beyond the work
        </h1>
        <p className="text-muted leading-relaxed max-w-2xl">
          Design is how I think professionally — but the things I care about
          outside of work are what give my work depth. Here is a little of what
          makes me, me.
        </p>
      </AnimatedSection>

      {/* Hero photo */}
      <AnimatedSection delay={0.08} className="mt-14 flex justify-center">
        <div className="rounded-2xl overflow-hidden ring-1 ring-foreground/10 shadow-2xl shadow-black/30 max-w-xs w-full">
          <Image
            src="/lifestyle.jpg"
            alt="Opeyemi Owolabi lifestyle"
            width={800}
            height={1000}
            className="w-full h-auto block"
            priority
          />
        </div>
      </AnimatedSection>

      {/* Fashion section */}
      <AnimatedSection delay={0.1} className="mt-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-xs text-muted tracking-widest uppercase block mb-4">
              01 — Style
            </span>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Fashion is a language I&apos;ve spoken my whole life
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Before I ever touched a design tool, I was designing clothes. Six
              years leading a fashion label taught me that how you present
              yourself is never just aesthetic — it is communication. Every
              outfit is a choice about how you want to be perceived.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              I believe looking good is a form of self-respect. Not in a
              superficial way — but in the sense that intentional dressing
              signals to yourself and the world that you care about details.
              That mindset transfers directly into how I approach product
              design.
            </p>
            <div className="flex flex-wrap gap-2">
              {fashionInterests.map((item) => (
                <Badge key={item} variant="default">
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          <div
            className="rounded-2xl p-8 border border-line"
            style={{ background: "var(--color-card)" }}
          >
            <p className="text-foreground text-lg font-medium leading-relaxed mb-4">
              &ldquo;Style is a way of saying who you are without having to
              speak.&rdquo;
            </p>
            <p className="text-muted text-sm">Rachel Zoe</p>
            <div className="mt-8 pt-6 border-t border-line">
              <p className="text-muted text-sm leading-relaxed">
                My fashion background is not separate from my design work — it
                is the foundation of it. Understanding proportion, colour,
                contrast, and how people experience objects with their eyes
                before their hands: those are design skills, wherever you learn
                them.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Reading section */}
      <AnimatedSection delay={0.15} className="mt-24">
        <span className="text-xs text-muted tracking-widest uppercase block mb-4">
          02 — Reading
        </span>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Books that have shaped how I think
        </h2>
        <p className="text-muted leading-relaxed max-w-2xl mb-10">
          I read to expand my frame of reference — biographies especially.
          There is something about seeing a real person navigate impossible
          circumstances that makes your own challenges feel workable.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <div
              key={book.title}
              className="rounded-2xl border border-line p-6 flex flex-col gap-4"
              style={{ background: "var(--color-card)" }}
            >
              {/* Book spine accent */}
              <div className="flex items-start gap-4">
                <div
                  className="w-1 self-stretch rounded-full shrink-0"
                  style={{ background: "var(--color-foreground)", opacity: 0.15 }}
                />
                <div>
                  <h3 className="text-foreground font-semibold text-base leading-snug mb-1">
                    {book.title}
                  </h3>
                  <p className="text-muted text-xs tracking-wide">
                    {book.author}
                  </p>
                </div>
              </div>
              <p className="text-muted text-sm leading-relaxed">{book.note}</p>
            </div>
          ))}

          {/* Placeholder card */}
          <div
            className="rounded-2xl border border-dashed border-line p-6 flex items-center justify-center"
            style={{ background: "var(--color-card)", opacity: 0.5 }}
          >
            <p className="text-muted text-sm text-center">
              More titles on the reading list...
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Games section */}
      <AnimatedSection delay={0.18} className="mt-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-xs text-muted tracking-widest uppercase block mb-4">
              03 — Games
            </span>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Strategy, patience, and a love for a good challenge
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              I am drawn to games that reward thinking — the kind where
              rushing gets you nowhere. Scrabble sharpens vocabulary and
              spatial reasoning. Chinese Checkers is a lesson in planning
              multiple moves ahead. Puzzles are pure problem-solving — satisfying
              in the same way a well-resolved design is.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Scrabble", "Chinese Checkers", "Puzzles"].map((game) => (
                <Badge key={game} variant="default">
                  {game}
                </Badge>
              ))}
            </div>
          </div>

          <div
            className="rounded-2xl p-8 border border-line"
            style={{ background: "var(--color-card)" }}
          >
            <p className="text-foreground text-lg font-medium leading-relaxed mb-4">
              &ldquo;Every game is a design problem waiting to be solved.&rdquo;
            </p>
            <div className="mt-8 pt-6 border-t border-line">
              <p className="text-muted text-sm leading-relaxed">
                The same mindset that wins at Scrabble — noticing patterns,
                thinking ahead, making the most of limited resources — is the
                mindset I bring to design. Constraints are not obstacles,
                they are the game.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Sports section */}
      <AnimatedSection delay={0.2} className="mt-24">
        <span className="text-xs text-muted tracking-widest uppercase block mb-4">
          04 — Sports
        </span>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Tennis — discipline in motion
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <p className="text-muted leading-relaxed">
            Tennis appeals to me for the same reasons good design does — it
            demands precision, adaptability, and composure under pressure. Every
            rally is a rapid cycle of reading, deciding, and executing. There is
            no hiding on a tennis court, just as there is no hiding in a design
            critique. You show up, you play, you improve.
          </p>
          <div className="flex flex-wrap gap-2 content-start">
            {["Discipline", "Precision", "Adaptability", "Endurance", "Focus"].map((trait) => (
              <Badge key={trait} variant="accent">
                {trait}
              </Badge>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Closing note */}
      <AnimatedSection delay={0.2} className="mt-24 pt-12 border-t border-line">
        <p className="text-muted leading-relaxed max-w-xl">
          Fashion, reading, games, sport — the thread running through all of it
          is intentionality. Whether I am curating an outfit, finishing a
          puzzle, or returning a serve, I am practicing the same thing I do at
          work: paying attention, thinking clearly, and caring about the outcome.
        </p>
      </AnimatedSection>
    </div>
  );
}
