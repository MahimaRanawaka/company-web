import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

/** Click to copy an email to the clipboard, with a brief "Copied" confirm.
 *  Falls back to a mailto: link if the Clipboard API is unavailable. */
export function CopyEmail({ email, className }: { email: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Email copied" : `Copy email ${email}`}
      className={cn(
        "group inline-flex items-center gap-2 rounded-md text-sm text-muted transition-colors hover:text-accent",
        className,
      )}
    >
      <span>{email}</span>
      {copied ? (
        <Check className="h-3.5 w-3.5 text-accent" aria-hidden />
      ) : (
        <Copy className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
      )}
      <span className="sr-only" role="status">
        {copied ? "Copied to clipboard" : ""}
      </span>
    </button>
  );
}
