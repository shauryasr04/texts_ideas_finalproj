import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/background", label: "Conflict Background" },
    { path: "/displacement", label: "Exodus & Displacement" },
    { path: "/memory", label: "Memory & Identity" },
    { path: "/maps", label: "Maps & Timelines" },
    { path: "/voices", label: "Voices & Testimonies" },
    { path: "/about", label: "About" },
    { path: "/works-cited", label: "Works Cited" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b-2 border-kashmir-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-kashmir-800 hover:text-kashmir-600">
            Kashmir: Exile & Memory
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-kashmir-600 text-white"
                    : "text-kashmir-700 hover:bg-kashmir-100"
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
              className="text-kashmir-700 hover:text-kashmir-900"
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
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden pb-4">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive(link.path)
                    ? "bg-kashmir-600 text-white"
                    : "text-kashmir-700 hover:bg-kashmir-100"
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

