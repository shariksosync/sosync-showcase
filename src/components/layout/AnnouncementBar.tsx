import { useState } from "react";
import { Sparkles, X } from "lucide-react";
import { useSite } from "@/hooks/useSite";

export function AnnouncementBar() {
  const { settings } = useSite();
  const [dismissed, setDismissed] = useState(false);

  if (!settings.announcementEnabled || dismissed) return null;

  return (
    <div className="relative z-50 bg-ink text-white">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2.5 sm:px-6">
        <Sparkles className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
        <p className="min-w-0 flex-1 text-center text-xs leading-relaxed sm:text-sm">
          {settings.announcementText}
        </p>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss announcement"
          className="shrink-0 rounded-md p-1 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
