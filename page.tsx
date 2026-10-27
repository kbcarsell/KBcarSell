import Link from "next/link";
import { ArrowRight, BadgeCheck, CalendarDays, CheckCircle2, CirclePoundSterling, Search, ShieldCheck, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarArt from "@/components/CarArt";

const cars = [
  { title: "BMW 3 Series 320d", price: "£8,995", year: "2018", miles: "78,000 miles", fuel: "Diesel", location: "Manchester", tone: "green" as const, variant: "saloon" as const, tag: "Popular" },
  { title: "Volkswagen Golf 1.5 TSI", price: "£12,450", year: "2020", miles: "42,500 miles", fuel: "Petrol", location: "Birmingham", tone: "blue" as const, variant: "hatch" as const, tag: "Great value" },
  { title: "Nissan Qashqai 1.3 DIG-T", price: "£15,200", year: "2021", miles: "31,200 miles", fuel: "Petrol", location: "Leeds", tone: "sand" as const, variant: "suv" as const, tag: "Family choice" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <span className="eyebrow"><Sparkles size={14} /> A BETTER WAY TO BUY & SELL</span>
              <h1>Your next car is <span>closer</span> than you think.</h1>
              <p className="lead">Discover cars from sellers across the UK, or list your own in minutes. Straightforward car selling, without the fuss.</p>
              <div className="hero-actions">
                <Link href="/cars" className="btn btn-primary">Browse cars <ArrowRight size={17} style={{ marginLeft: 8 }} /></Link>
                <Link href="/sell" className="btn btn-light">Sell your car</Link>
              </div>
              <div className="trust">
                <span><CheckCircle2 size={15} style={{ verticalAlign: "middle", marginRight: 5 }} />Simple listings</span>
                <span><CheckCircle2 size={15} style={{ verticalAlign: "middle", marginRight: 5 }} />No auto-renewals</span>
                <span><CheckCircle2 size={15} style={{ verticalAlign: "middle", marginRight: 5 }} />Built for the UK</span>
              </div>
            </div>
            <div className="hero-visual" aria-label="Stylised illustration of a car">
              <div className="visual-glow" />
              <div className="car-illustration"><CarArt variant="saloon" /></div>
              <div className="floating-card floating-one"><small>Listing price</small><strong>£4.99 <span style={{ color: "#648d3b", fontSize: 11 }}>/ 30 days</span></strong></div>
              <div className="floating-card floating-two"><small>For every seller</small><strong>7 days free</strong></div>
            </div>
          </div>
        </section>

        <section className="wrap search-panel" aria-labelledby="search-title">
          <h2 id="search-title"><Search size={18} style={{ verticalAlign: "middle", marginRight: 8 }} />Find a car</h2>
          <form action="/cars" method="get" className="search-grid">
            <div className="field"><label htmlFor="make">Make</label><select id="make" name="make" defaultValue=""><option value="">Any make</option><option>BMW</option><option>Audi</option><option>Ford</option><option>Nissan</option><option>Toyota</option><option>Volkswagen</option></select></div>
            <div className="field"><label htmlFor="budget">Maximum price</label><select id="budget" name="maxPrice" defaultValue=""><option value="">Any price</option><option value="5000">£5,000</option><option value="10000">£10,000</option><option value="15000">£15,000</option><option value="25000">£25,000</option></select></div>
            <div className="field"><label htmlFor="fuel">Fuel type</label><select id="fuel" name="fuel" defaultValue=""><option value="">Any fuel</option><option>Petrol</option><option>Diesel</option><option>Hybrid</option><option>Electric</option></select></div>
            <div className="field"><label htmlFor="postcode">Postcode / town</label><input id="postcode" name="location" placeholder="e.g. SW1A or Leeds" /></div>
            <button className="btn btn-dark" type="submit"><Search size={16} style={{ marginRight: 7 }} />Search</button>
          </form>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <div><h2>Cars worth a closer look</h2><p>A preview of how vehicle listings will appear.</p></div>
              <Link href="/cars" className="text-link">Browse all cars <ArrowRight size={15} style={{ verticalAlign: "middle" }} /></Link>
            </div>
            <div className="notice" style={{ marginBottom: 18 }}>Preview notice: these are sample designs, not live advertisements. Real listings will appear after the database and seller accounts are connected.</div>
            <div className="car-grid">
              {cars.map((car) => (
                <article className="car-card" key={car.title}>
                  <Link href="/cars" aria-label={`Browse cars like ${car.title}`}>
                    <div className={`car-art ${car.tone}`}><span className="car-tag">{car.tag}</span><CarArt tone={car.tone} variant={car.variant} /></div>
                    <div className="car-info">
                      <h3>{car.title}</h3><div className="car-price">{car.price}</div>
                      <div className="car-meta"><span>{car.year}</span><span>{car.miles}</span><span>{car.fuel}</span></div>
                      <div className="car-location"><span>⌖ {car.location}</span><span className="pill">View listing</span></div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "#eef2eb" }}>
          <div className="wrap">
            <div className="section-head"><div><h2>Selling your car is simple</h2><p>Clear pricing and control at every step.</p></div></div>
            <div className="how-grid">
              <article className="how-card"><div className="step">01</div><h3>Create your listing</h3><p>Add your car details, photos, price and the best way for buyers to contact you.</p></article>
              <article className="how-card"><div className="step">02</div><h3>Try it free for 7 days</h3><p>Your trial is clearly explained. We’ll remind you before it ends, subject to email setup.</p></article>
              <article className="how-card"><div className="step">03</div><h3>Choose when to renew</h3><p>Pay £4.99 for the next 30 days only when you decide to continue. No automatic payments.</p></article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="pricing">
              <div><h2>List your car. Keep it simple.</h2><p>Every new listing starts with a 7-day free trial.<br />After that, pay only when you choose to renew.</p></div>
              <div className="price-block"><strong>£4.99</strong><small>per listing · 30 days</small><Link href="/sell" className="btn btn-primary">Get started <ArrowRight size={16} style={{ marginLeft: 8 }} /></Link></div>
            </div>
            <div className="trust" style={{ justifyContent: "center", marginTop: 25, gap: 25 }}>
              <span><CalendarDays size={16} style={{ verticalAlign: "middle", marginRight: 6 }} />7-day trial</span>
              <span><CirclePoundSterling size={16} style={{ verticalAlign: "middle", marginRight: 6 }} />One-off payment</span>
              <span><ShieldCheck size={16} style={{ verticalAlign: "middle", marginRight: 6 }} />No automatic renewal</span>
              <span><BadgeCheck size={16} style={{ verticalAlign: "middle", marginRight: 6 }} />Seller-controlled</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
