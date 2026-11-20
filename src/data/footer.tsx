import type { ReactNode } from "react";
import { socialLinks } from "@/data/navigation";

export interface SocialItem {
  id: number;
  label: string;
  href: string;
  icon: ReactNode;
}

const SOCIAL_ICONS: Record<(typeof socialLinks)[number]["label"], ReactNode> = {
  LinkedIn: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.94 8.5H4.1V19.5h2.84V8.5ZM5.52 4.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM19.9 19.5h-2.84v-5.66c0-1.35-.02-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98V19.5H10.17V8.5h2.72v1.5h.04c.38-.72 1.3-1.48 2.68-1.48 2.87 0 3.4 1.89 3.4 4.34V19.5Z" />
    </svg>
  ),
  X: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.66 4.5h2.52l-5.51 6.3 6.48 8.7h-5.07l-3.97-5.2-4.54 5.2H5.05l5.9-6.75L4.7 4.5h5.2l3.58 4.76L17.66 4.5Zm-.88 13.5h1.4L7.3 5.9H5.8l10.98 12.1Z" />
    </svg>
  ),
  YouTube: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21.6 8.2a2.7 2.7 0 0 0-1.9-1.9C18 6 12 6 12 6s-6 0-7.7.3A2.7 2.7 0 0 0 2.4 8.2 28.4 28.4 0 0 0 2.1 12a28.4 28.4 0 0 0 .3 3.8 2.7 2.7 0 0 0 1.9 1.9C6 18 12 18 12 18s6 0 7.7-.3a2.7 2.7 0 0 0 1.9-1.9 28.4 28.4 0 0 0 .3-3.8 28.4 28.4 0 0 0-.3-3.8ZM10.2 14.7V9.3L14.9 12l-4.7 2.7Z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 7.6A4.4 4.4 0 1 0 12 16.4 4.4 4.4 0 0 0 12 7.6Zm0 7.2a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Zm5.5-7.4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2.8 1a5.1 5.1 0 0 0-1.4-3.6 5.1 5.1 0 0 0-3.6-1.4H8.7A5.1 5.1 0 0 0 5.1 5.8 5.1 5.1 0 0 0 3.7 9.4v6.6a5.1 5.1 0 0 0 1.4 3.6 5.1 5.1 0 0 0 3.6 1.4h6.6a5.1 5.1 0 0 0 3.6-1.4 5.1 5.1 0 0 0 1.4-3.6V9.4Zm-1.6 6.6a3.5 3.5 0 0 1-3.5 3.5H8.7a3.5 3.5 0 0 1-3.5-3.5V9.4A3.5 3.5 0 0 1 8.7 5.9h6.6a3.5 3.5 0 0 1 3.5 3.5v6.6Z" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.2 19.5v-6.3h2.1l.3-2.6h-2.4V9c0-.8.2-1.3 1.4-1.3h1.5V5.4c-.3 0-1.1-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H9.1v2.6h2.1v6.3h3Z" />
    </svg>
  ),
};

export const socialItems: SocialItem[] = socialLinks.map((item) => ({
  id: item.id,
  label: item.label,
  href: item.href,
  icon: SOCIAL_ICONS[item.label],
}));
