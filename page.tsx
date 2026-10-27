import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2, CirclePoundSterling, CalendarDays } from "lucide-react";

export const metadata = { title: "Sell Your Car | KBcarSell" };

export default function SellPage() {
  return <><Header /><main className="wrap page-content">
    <span className="eyebrow">FOR PRIVATE SELLERS & DEALERS</span><h1>Sell your car with KBcarSell</h1>
    <p>Prepare a clear, honest advert and connect with buyers across the UK. The first version of this project is a working design preview; publishing a real listing requires account authentication and database setup.</p>
    <div className="pricing" style={{ margin: "28px 0" }}>
      <div><h2>One listing. No surprises.</h2><p>7-day free trial, then £4.99 for 30 days if you choose to pay.<br />No automatic billing and no automatic renewal.</p></div>
      <div className="price-block"><strong>£4.99</strong><small>per listing / 30 days</small><span className="pill">7 days free</span></div>
    </div>
    <div className="how-grid">
      <article className="how-card"><div className="step"><CheckCircle2 size={22} /></div><h3>1. Add vehicle details</h3><p>Make, model, year, mileage, fuel type, transmission, price and location.</p></article>
      <article className="how-card"><div className="step"><CalendarDays size={22} /></div><h3>2. Trial for 7 days</h3><p>We intend to show the trial end date and send a reminder once email delivery is configured.</p></article>
      <article className="how-card"><div className="step"><CirclePoundSterling size={22} /></div><h3>3. Renew when ready</h3><p>Pay through Stripe Checkout for the next 30 days. No saved card or automatic charge is required by this design.</p></article>
    </div>
    <div className="notice" style={{ marginTop: 25 }}>Not live yet: this page does not create accounts, store vehicle details, start a real trial or accept payments. Those integrations must be configured before public launch.</div>
    <div style={{ marginTop: 25 }}><Link href="/how-it-works" className="btn btn-dark">How it works</Link></div>
  </main><Footer /></>;
}
