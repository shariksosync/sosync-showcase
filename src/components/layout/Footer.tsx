import { Link } from "@tanstack/react-router";
import {
  Linkedin,
  Instagram,
  Youtube,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Clock,
  Shield,
  MessageSquareQuote,
  Gift,
} from "lucide-react";
import logoAsset from "@/assets/sosync-logo.png.asset.json";
import { companyConfig } from "@/lib/company";
import { useSite } from "@/hooks/useSite";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Footer() {
  const { settings, openModal } = useSite();
  const social = companyConfig.socialLinks;

  return (
    <footer className="bg-ink text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logoAsset.url}
                alt="SOSync AI Tech logo"
                className="h-12 w-12 object-contain"
                width={48}
                height={48}
              />
              <span className="text-lg font-extrabold text-white">
                SOSync<span className="text-brand"> AI Tech</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {companyConfig.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="SOSync AI Tech on LinkedIn" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 transition-colors hover:border-brand hover:text-brand">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={social.x} target="_blank" rel="noreferrer" aria-label="SOSync AI Tech on X" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 transition-colors hover:border-brand hover:text-brand">
                <XIcon className="h-4 w-4" />
              </a>
              <a href={social.instagram} target="_blank" rel="noreferrer" aria-label="SOSync AI Tech on Instagram" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 transition-colors hover:border-brand hover:text-brand">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={social.youtube} target="_blank" rel="noreferrer" aria-label="SOSync AI Tech on YouTube" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 transition-colors hover:border-brand hover:text-brand">
                <Youtube className="h-4 w-4" />
              </a>
              <a href={social.facebook} target="_blank" rel="noreferrer" aria-label="SOSync AI Tech on Facebook" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 transition-colors hover:border-brand hover:text-brand">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Company">
            <h2 className="text-sm font-bold text-white">Company</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/" hash="about" className="hover:text-brand">About</Link></li>
              <li><Link to="/services" className="hover:text-brand">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-brand">Portfolio</Link></li>
              <li><Link to="/" hash="process" className="hover:text-brand">Process</Link></li>
              <li><Link to="/contact" className="hover:text-brand">Contact</Link></li>
            </ul>
          </nav>

          <nav aria-label="Services">
            <h2 className="text-sm font-bold text-white">Services</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/services" hash="web-development" className="hover:text-brand">Website Development</Link></li>
              <li><Link to="/services" hash="software-erp" className="hover:text-brand">ERP & Software</Link></li>
              <li><Link to="/services" hash="enterprise-it" className="hover:text-brand">Enterprise IT</Link></li>
              <li><Link to="/services" hash="growth-marketing" className="hover:text-brand">Digital Marketing</Link></li>
              <li><Link to="/services" hash="creative-branding" className="hover:text-brand">Creative Branding</Link></li>
              <li><Link to="/services" hash="ai-automation" className="hover:text-brand">AI Automation</Link></li>
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold text-white">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span className="min-w-0">
                  <a href={`tel:${settings.primaryPhone.replace(/\s/g, "")}`} className="block hover:text-brand">{settings.primaryPhone}</a>
                  <a href={`tel:${settings.secondaryPhone.replace(/\s/g, "")}`} className="block hover:text-brand">{settings.secondaryPhone}</a>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <a href={`mailto:${settings.supportEmail}`} className="min-w-0 break-all hover:text-brand">{settings.supportEmail}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <address className="not-italic leading-relaxed">
                  {companyConfig.addressLines.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </address>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>{settings.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {companyConfig.companyName}. Interactive demo experience — data is stored locally in your browser.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button type="button" onClick={() => openModal("feedback")} className="inline-flex items-center gap-1.5 font-semibold text-slate-300 hover:text-brand">
              <MessageSquareQuote className="h-4 w-4" /> Share Client Feedback
            </button>
            <button type="button" onClick={() => openModal("referral")} className="inline-flex items-center gap-1.5 font-semibold text-slate-300 hover:text-brand">
              <Gift className="h-4 w-4" /> Refer & Earn
            </button>
            <Link to="/admin/login" className="inline-flex items-center gap-1.5 font-semibold text-slate-500 hover:text-brand">
              <Shield className="h-4 w-4" /> Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
