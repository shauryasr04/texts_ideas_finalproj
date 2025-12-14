import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/history", label: "History" },
    { path: "/exodus", label: "The Exodus" },
    { path: "/gallery", label: "Gallery" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#e5e5e5] backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-lg font-semibold text-[#0a0a0a] hover:text-[#4a4a4a] transition-colors tracking-tight">
            Exile and Memory in Kashmir
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide uppercase transition-colors ${
                  isActive(link.path)
                    ? "text-[#0a0a0a] border-b-2 border-[#0a0a0a] pb-1"
                    : "text-[#6a6a6a] hover:text-[#0a0a0a]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-[#0a0a0a] hover:text-[#4a4a4a]"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                menu?.classList.toggle("hidden");
              }}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden pb-6 border-t border-[#e5e5e5] mt-4">
          <div className="flex flex-col space-y-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide uppercase transition-colors ${
                  isActive(link.path)
                    ? "text-[#0a0a0a]"
                    : "text-[#6a6a6a] hover:text-[#0a0a0a]"
                }`}
                onClick={() => {
                  const menu = document.getElementById("mobile-menu");
                  menu?.classList.add("hidden");
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

