type SiteHtmlProps = {
  html: string;
};

/** Renders production HTML markup unchanged for 1:1 visual parity. */
export function SiteHtml({ html }: SiteHtmlProps) {
  return (
    <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />
  );
}
