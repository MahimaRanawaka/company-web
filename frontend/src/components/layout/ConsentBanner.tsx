import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getConsent, setConsent } from "@/lib/consent";
import { analyticsEnabled } from "@/lib/analytics";

/** Fixed bottom bar gating analytics behind explicit opt-in. Hidden once the
 *  visitor has made a choice (stored in localStorage), and skipped entirely
 *  when no analytics is configured — nothing to consent to yet. */
export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (analyticsEnabled && getConsent() === null) setVisible(true);
  }, []);

  if (!visible) return null;

  const choose = (value: "granted" | "denied") => {
    setConsent(value);
    setVisible(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-hairline bg-canvas px-4 py-4 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          We use cookies to understand how visitors use this site. See our{" "}
          <Link to="/legal/cookies" className="font-medium text-accent hover:underline">
            Cookie Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <Button variant="outline" size="sm" onClick={() => choose("denied")}>
            Decline
          </Button>
          <Button size="sm" onClick={() => choose("granted")}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
