import Link from "next/link";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/opeyemi-owolabi-a9b059322/" },
  { label: "Twitter", href: "https://x.com/owolabiopeyemih" },
  { label: "Behance", href: "https://www.behance.net/opeyemiowolabi3" },
  { label: "Email", href: "mailto:owolabiopeyemih@gmail.com" },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="footer-text text-sm font-light tracking-wide">
          © {new Date().getFullYear()} Opeyemi Owolabi
        </p>
        <ul className="flex items-center gap-6">
          {socials.map((s) => (
            <li key={s.label}>
              <Link
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link text-sm font-light tracking-wide transition-colors duration-200"
              >
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
