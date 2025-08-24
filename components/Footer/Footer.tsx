import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-6">
      <ul className="flex justify-center gap-6 text-sm">
        <li>
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/privacy" className="hover:text-white transition">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href="/terms" className="hover:text-white transition">
            Terms of Service
          </Link>
        </li>
      </ul>
      <p className="text-center text-xs text-gray-500 mt-4">
        © {new Date().getFullYear()} GagHub — Fan-made, not affiliated with
        Roblox or the creators of Grow a Garden.
      </p>
    </footer>
  );
};

export default Footer;
