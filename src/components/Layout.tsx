import { Link, Outlet } from "@tanstack/react-router";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/posts", label: "Posts" },
  { to: "/tags", label: "Tags" },
  { to: "/diary", label: "Diary" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
] as const;

export function Layout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <Link to="/" className="brand" aria-label="COM Blog home">
          <span className="brand-mark">C</span>
          <span>COM Blog</span>
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-link"
              activeProps={{ className: "nav-link is-active" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>Rust API와 분리된 프론트엔드 기술 블로그.</p>
      </footer>
    </div>
  );
}
