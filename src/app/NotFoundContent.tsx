import Link from "next/link";

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
            <Link className="btn btn-lime" href="/">Home →</Link>
            <Link className="btn btn-ghost" href="/platform/">Platform</Link>
            <Link className="btn btn-ghost" href="/insights/">Insights</Link>
            <Link className="btn btn-ghost" href="/about/contact/">Contact</Link>
          </div>
        </div>
      </header>
    </main>
  );
}
