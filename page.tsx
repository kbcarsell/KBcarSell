import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "Privacy | KBcarSell" };

export default function PrivacyPage() {
  return <><Header /><main className="wrap page-content"><h1>Privacy notice</h1>
    <div className="notice">Draft template only — replace every placeholder and obtain appropriate UK data-protection advice before launch.</div>
    <p><strong>Last updated:</strong> [Add date]</p>
    <h2>Who we are</h2><p>KBcarSell is a proposed UK vehicle-listing marketplace operated by [legal name and contact address]. Contact: [privacy contact email].</p>
    <h2>Information we may collect</h2><p>Depending on the features you use, this may include account details, contact information, vehicle advert details, uploaded images, payment status, security logs and messages you choose to send.</p>
    <h2>Why we use it</h2><p>We will use personal information to operate accounts and listings, process one-off payments, prevent fraud and abuse, respond to enquiries, meet legal obligations and maintain platform security. We will document the applicable lawful basis for each purpose before launch.</p>
    <h2>Payments</h2><p>Payments are intended to be processed through Stripe Checkout. The platform should store payment references and status rather than raw card details.</p>
    <h2>Retention and your rights</h2><p>We will set retention periods and explain how to request access, correction or deletion, object to certain processing, or complain to the Information Commissioner's Office. Contact details and the final retention schedule must be completed before publication.</p>
    <h2>Cookies and third parties</h2><p>List the cookies, analytics, hosting, authentication, storage and payment providers actually used by the live site. Add a consent mechanism if required.</p>
  </main><Footer /></>;
}
