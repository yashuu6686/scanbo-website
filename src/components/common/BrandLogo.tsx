/** Horizontal Scanbo wordmark: icon + bold white SCANBO® */
export function BrandLogo() {
  return (
    <span className="brand-logo">
      <img className="brand-logo-mark" src="/assets/logo_mark.png" alt="" />
      <span className="brand-logo-text">
        SCANBO
        <sup className="brand-logo-r" aria-hidden="true">
          ®
        </sup>
        <span className="sr-only"> registered</span>
      </span>
    </span>
  );
}
