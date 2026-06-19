"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) { setStatus("sent"); form.reset(); }
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const inputClass = "w-full bg-surface border border-line rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-subtle focus:outline-none focus:border-muted transition-colors";

  return (
    <div className="bg-card border border-line rounded-2xl p-8">
      <h2 className="text-xl font-semibold text-foreground mb-6">Send a message</h2>

      {status === "sent" ? (
        <div className="py-12 text-center">
          <div className="w-12 h-12 rounded-full border border-line flex items-center justify-center mx-auto mb-4">
            <Send size={18} className="text-foreground" />
          </div>
          <p className="text-foreground font-medium mb-1">Message sent.</p>
          <p className="text-muted text-sm">I&apos;ll get back to you within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs text-muted mb-1.5">Name</label>
              <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs text-muted mb-1.5">Email</label>
              <input id="email" name="email" type="email" required placeholder="your@email.com" className={inputClass} />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs text-muted mb-1.5">Subject</label>
            <input id="subject" name="subject" type="text" required placeholder="What&apos;s this about?" className={inputClass} />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs text-muted mb-1.5">Message</label>
            <textarea id="message" name="message" required rows={5}
              placeholder="Tell me about your project, role, or just say hello."
              className={inputClass + " resize-none"} />
          </div>

          {status === "error" && (
            <p className="text-sm text-muted">Something went wrong. Try emailing directly.</p>
          )}

          <Button type="submit" className="w-full justify-center" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send message"}
            <Send size={14} />
          </Button>
        </form>
      )}
    </div>
  );
}
