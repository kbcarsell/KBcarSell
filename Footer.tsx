import Link from "next/link";
import { CarFront } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Link href="/" className="brand"><span className="brand-mark"><CarFront size={22} /></span><span>KBcarSell</span></Link>
            <p>A straightforward place to discover cars and connect with sellers across the United Kingdom.</p>
          </div>
          <div className="footer-links">
            <Link href="/cars">Browse cars</Link>
            <Link href="/sell">Sell a car</Link>
            <Link href="/how-it-works">How it works</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} KBcarSell. All rights reserved.</span>
          <span>Demo listings are illustrative and are not real vehicles.</span>
        </div>
      </div>
    </footer>
  );
}
