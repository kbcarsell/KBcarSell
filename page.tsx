import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "Terms | KBcarSell" };

export default function TermsPage() {
  return <><Header /><main className="wrap page-content"><h1>Terms of use</h1>
    <div className="notice">Draft template only — these terms are not ready for public use. Add the operator's legal details and have the final version reviewed for UK law.</div>
    <h2>Marketplace role</h2><p>KBcarSell is intended to provide a platform where sellers can advertise vehicles and buyers can contact them. Unless expressly stated otherwise, sellers are responsible for the accuracy of their adverts and for the sale itself.</p>
    <h2>Listing price and duration</h2><p>The proposed price is £4.99 per listing for 30 days after a 7-day trial. There is no automatic renewal. The seller must actively choose to make a one-off payment to renew. If no payment is made, the listing is intended to be hidden from public view and retained for a period defined by the final policy.</p>
    <h2>Seller responsibilities</h2><p>Sellers must provide accurate information, have the right to advertise the vehicle and must not post misleading, unlawful, stolen or fraudulent listings. Dealer or business status must be represented honestly.</p>
    <h2>Moderation and availability</h2><p>We may review, restrict or remove listings that breach the final rules or applicable law. Service availability and support arrangements will be described before launch.</p>
    <h2>Contact</h2><p>Operator: [legal name]. Address: [business address]. Email: [support email].</p>
  </main><Footer /></>;
}
