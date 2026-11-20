import { legalNavItems } from "@/data/navigation";

type LegalNavProps = {
  /** Exact href that should receive className="on". */
  activeHref: string;
};

/** Shared legal sidebar used on every legal document page. */
export function LegalNav({ activeHref }: LegalNavProps) {
  return (
    <aside className="lnav">
      <b>Legal</b>
      {legalNavItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className={activeHref === item.href ? "on" : undefined}
        >
          {item.label}
        </a>
      ))}
    </aside>
  );
}
