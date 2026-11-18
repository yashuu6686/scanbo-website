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
            <a className="btn btn-lime" href="/">Home →</a>
            <a className="btn btn-ghost" href="/platform/">Platform</a>
            <a className="btn btn-ghost" href="/insights/">Insights</a>
            <a className="btn btn-ghost" href="/about/contact/">Contact</a>
          </div>
        </div>
      </header>
    </main>
  );
}
