import { Link, Outlet } from "@tanstack/react-router";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/posts", label: "Posts" },
  { to: "/diary", label: "Diary" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
] as const;

export function Layout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <Link to="/" className="brand" aria-label="COM Blog home">
          <img className="brand-mark" src="/site-icon.png" alt="" />
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
        <p>저메추</p>
      </footer>
    </div>
  );
}
