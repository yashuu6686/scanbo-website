import Link from "next/link";
import { notFoundRecoveryLinks } from "@/data/notFound";

export function NotFoundContent() {
  return (
    <main id="main">
      <header className="phero">
        <div className="wrap">
          <div className="eyebrow">Error 404</div>
          <h1>Page not 
            <span>found.</span>
          </h1>
          <p className="lede">The page you are looking for has moved or no longer exists. These are good places to start.</p>
          <div className="nf">
            {notFoundRecoveryLinks.map((link) => (
              <Link className={link.className} href={link.href} key={link.id}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </main>
  );
}
