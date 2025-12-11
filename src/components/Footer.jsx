import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-kashmir-50 border-t-2 border-kashmir-200 mt-16">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-kashmir-700 text-sm mb-4 md:mb-0">
            © 2025 Kashmir: Exile & Memory — A Digital Exhibit
          </p>
          <Link
            to="/works-cited"
            className="text-kashmir-700 hover:text-kashmir-900 text-sm font-medium underline"
          >
            Works Cited
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

