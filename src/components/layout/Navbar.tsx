import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import logoAsset from "@/assets/sosync-logo.png.asset.json";
import { useSite } from "@/hooks/useSite";
import { cn } from "@/lib/utils";

const links = [
  { label: "Services", to: "/services" as const, hash: undefined },
  { label: "Solutions", to: "/" as const, hash: "solutions" },
  { label: "Portfolio", to: "/portfolio" as const, hash: undefined },
  { label: "Process", to: "/" as const, hash: "process" },
  { label: "About", to: "/" as const, hash: "about" },
  { label: "Contact", to: "/contact" as const, hash: undefined },
];

export function Navbar() {
  const { openModal, settings } = useSite();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-colors duration-300",
        scrolled || open
          ? "border-b border-slate-200/80 bg-white/85 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:flex lg:justify-between"
      >
        <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label="SOSync AI Tech home">
          <img
            src={logoAsset.url}
            alt="SOSync AI Tech logo"
            className="h-10 w-10 shrink-0 object-contain"
            width={40}
            height={40}
          />
          <span className="min-w-0 truncate text-base font-extrabold tracking-tight text-ink">
            SOSync<span className="text-brand"> AI Tech</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                {...(l.hash ? { hash: l.hash } : {})}
                activeProps={{ className: "text-ink" }}
                className="rounded-md px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-ink"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:${settings.primaryPhone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:text-brand"
          >
            <Phone className="h-4 w-4" />
            {settings.primaryPhone}
          </a>
          <button
            type="button"
            onClick={() => openModal("demo")}
            className="glow-brand rounded-lg bg-brand px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
          >
            Book ₹1 Demo
          </button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200/80 bg-white/70 text-ink lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200/80 bg-white lg:hidden">
          <ul className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  {...(l.hash ? { hash: l.hash } : {})}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openModal("demo");
                }}
                className="w-full rounded-lg bg-brand px-4 py-3 text-base font-bold text-white"
              >
                Book ₹1 Demo
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
