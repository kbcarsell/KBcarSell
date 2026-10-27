import Link from "next/link";
import { CarFront } from "lucide-react";

export default function Header() {
  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-inner">
          <span>Find your next car. Sell yours with confidence.</span>
          <span>Made for drivers across the UK</span>
        </div>
      </div>
      <header className="wrap nav">
        <Link href="/" className="brand" aria-label="KBcarSell home">
          <span className="brand-mark"><CarFront size={23} strokeWidth={2.5} /></span>
          <span>KBcarSell</span>
        </Link>
        <nav className="navlinks" aria-label="Main navigation">
          <Link href="/cars">Browse cars</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/sell" className="btn btn-dark">Sell your car <span aria-hidden="true">↗</span></Link>
        </nav>
      </header>
    </>
  );
}
