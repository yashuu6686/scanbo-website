import type { SectionSixItem } from "@/data/navigation";

type SectionSixProps = {
  items: SectionSixItem[];
  /** Exact href that should receive className="on". */
  activeHref?: string;
};

/** Shared "Explore more" six-link strip used across section pages. */
export function SectionSix({ items, activeHref }: SectionSixProps) {
  return (
    <div className="six">
      {items.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className={activeHref === item.href ? "on" : undefined}
        >
          <i>{item.num}</i>
          <b>{item.label}</b>
        </a>
      ))}
    </div>
  );
}
