import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarArt from "@/components/CarArt";

export const metadata = { title: "Browse Cars | KBcarSell" };

export default async function CarsPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const make = typeof params.make === "string" ? params.make : "";
  const maxPrice = typeof params.maxPrice === "string" ? params.maxPrice : "";
  const fuel = typeof params.fuel === "string" ? params.fuel : "";
  const location = typeof params.location === "string" ? params.location : "";
  const sample = [
    { title: "BMW 3 Series 320d", price: 8995, priceText: "£8,995", year: "2018", miles: "78,000 miles", fuel: "Diesel", location: "Manchester", make: "BMW", tone: "green" as const, variant: "saloon" as const },
    { title: "Volkswagen Golf 1.5 TSI", price: 12450, priceText: "£12,450", year: "2020", miles: "42,500 miles", fuel: "Petrol", location: "Birmingham", make: "Volkswagen", tone: "blue" as const, variant: "hatch" as const },
    { title: "Nissan Qashqai 1.3 DIG-T", price: 15200, priceText: "£15,200", year: "2021", miles: "31,200 miles", fuel: "Petrol", location: "Leeds", make: "Nissan", tone: "sand" as const, variant: "suv" as const },
  ].filter(c => (!make || c.make.toLowerCase() === make.toLowerCase()) && (!maxPrice || c.price <= Number(maxPrice)) && (!fuel || c.fuel.toLowerCase() === fuel.toLowerCase()) && (!location || c.location.toLowerCase().includes(location.toLowerCase())));
  return <><Header /><main className="wrap page-content">
    <span className="eyebrow">THE CAR MARKETPLACE</span><h1>Browse cars</h1><p>Explore our sample listing designs. These are demonstration vehicles, not real cars for sale. Live listings will be connected after the database and seller account setup.</p>
    <form action="/cars" method="get" className="search-panel" style={{ margin: "25px 0 30px" }}>
      <div className="search-grid">
        <div className="field"><label htmlFor="make">Make</label><select id="make" name="make" defaultValue={make}><option value="">Any make</option><option>BMW</option><option>Audi</option><option>Ford</option><option>Nissan</option><option>Toyota</option><option>Volkswagen</option></select></div>
        <div className="field"><label htmlFor="budget">Maximum price</label><select id="budget" name="maxPrice" defaultValue={maxPrice}><option value="">Any price</option><option value="5000">£5,000</option><option value="10000">£10,000</option><option value="15000">£15,000</option><option value="25000">£25,000</option></select></div>
        <div className="field"><label htmlFor="fuel">Fuel</label><select id="fuel" name="fuel" defaultValue={fuel}><option value="">Any fuel</option><option>Petrol</option><option>Diesel</option><option>Hybrid</option><option>Electric</option></select></div>
        <div className="field"><label htmlFor="location">Town</label><input id="location" name="location" defaultValue={location} placeholder="e.g. Leeds" /></div>
        <button className="btn btn-dark" type="submit">Apply filters</button>
      </div>
    </form>
    <div className="car-grid">{sample.map(c => <article className="car-card" key={c.title}><div className={`car-art ${c.tone}`}><span className="car-tag">Sample listing</span><CarArt tone={c.tone} variant={c.variant} /></div><div className="car-info"><h3>{c.title}</h3><div className="car-price">{c.priceText}</div><div className="car-meta"><span>{c.year}</span><span>{c.miles}</span><span>{c.fuel}</span></div><div className="car-location"><span>⌖ {c.location}</span><span className="pill">Preview</span></div></div></article>)}</div>
    {sample.length === 0 && <div className="notice" style={{ marginTop: 20 }}>No sample vehicles match those filters. Try a different search.</div>}
    <p style={{ marginTop: 25 }}><Link className="text-link" href="/">← Back to home</Link></p>
  </main><Footer /></>;
}
