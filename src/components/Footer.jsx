import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white border-t border-[#e5e5e5] mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#6a6a6a] text-sm mb-4 md:mb-0 font-light">
            © 2025 Exile and Memory in Kashmir - A Digital Exhibit
          </p>
          <Link
            to="/works-cited"
            className="text-[#4a4a4a] hover:text-[#0a0a0a] text-sm font-medium transition-colors uppercase tracking-wider"
          >
            Works Cited
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

