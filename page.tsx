import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "How It Works | KBcarSell" };

export default function HowItWorks() {
  return <><Header /><main className="wrap page-content"><span className="eyebrow">CLEAR FROM THE START</span><h1>How KBcarSell works</h1>
    <h2>For buyers</h2><p>Browse listings, filter by make, price, fuel type and location, then contact the seller directly when a live listing is available. Always check the car's history and condition before buying.</p>
    <h2>For sellers</h2><p>Create an account, add accurate vehicle information and upload clear photos. Your listing begins with a 7-day trial. After the trial, you can pay £4.99 for another 30 days. Renewal is manual and no automatic payment is taken.</p>
    <h2>Listing status</h2><p>When a trial or paid period ends, the listing should be hidden from public search but retained in the seller dashboard so it can be renewed. This rule will be implemented with the database and scheduled expiry process.</p>
    <div className="notice">This is project documentation, not a statement that these features are already live. Authentication, database persistence, email reminders and Stripe payments remain to be configured.</div>
  </main><Footer /></>;
}
