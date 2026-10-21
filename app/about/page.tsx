import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Our Vision, Mission & Values",
  description: "Learn about AETHER BIOTEC’s vision, mission, values and commitment to quality-driven healthcare solutions.",
};

const values = [
  { title: "Care Driven", text: "We put people and their wellbeing at the heart of everything we do." },
  { title: "Modern & Innovative", text: "We embrace scientific advancement and evolving healthcare needs to pursue better solutions." },
  { title: "Quality & Reliability", text: "We are committed to quality, consistency, transparency, and responsible business practices." },
  { title: "People & Progress", text: "We aim to build lasting relationships and contribute to a healthier future for all." },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="AETHER BIOTEC home">
          <Image className="brand-logo" src="/Aether_Biotec_Leaf_Emblem_Logo.png" alt="AETHER BIOTEC" width={110} height={92} priority />
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="/about/" aria-current="page">About us</a><a href="/#catalogue">Our catalogue</a><a href="/#contact">Contact</a>
        </nav>
        <a className="header-cta" href="/#contact">Let’s talk <span>↗</span></a>
        <a className="mobile-contact" href="/#contact">Enquire <span>↗</span></a>
      </header>

      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="section-eyebrow">ABOUT AETHER BIOTEC <span>OUR PURPOSE</span></p>
          <h1>Science for a<br/><em>healthier tomorrow.</em></h1>
          <p>We are a healthcare company focused on quality-driven pharmaceutical and nutraceutical solutions, built around people, progress and responsible partnerships.</p>
        </div>
        <div className="about-hero-logo"><Image src="/Aether_Biotec_Leaf_Emblem_Logo.png" alt="AETHER BIOTEC leaf emblem" width={360} height={300} priority /></div>
      </section>

      <section className="purpose-grid" aria-label="Our vision and mission">
        <article className="purpose-card vision-card"><span className="purpose-number">01 / OUR VISION</span><h2>Our Vision</h2><p>To be a trusted and forward-thinking healthcare company, committed to creating a healthier tomorrow through innovative healthcare solutions, uncompromising quality, and a people-first approach to wellbeing.</p></article>
        <article className="purpose-card mission-card"><span className="purpose-number">02 / OUR MISSION</span><h2>Our Mission</h2><p>To deliver quality-driven pharmaceutical and nutraceutical solutions that support better health and wellbeing. We strive to combine scientific progress with compassionate care, reliable products, and strong partnerships with healthcare professionals to make a meaningful difference in people&apos;s lives.</p></article>
      </section>

      <section className="values-section">
        <div className="values-heading"><p className="section-eyebrow">WHAT GUIDES US <span>03 / OUR VALUES</span></p><h2>Our core <em>values.</em></h2><p>Principles that shape how we work, partner and serve.</p></div>
        <div className="values-grid">{values.map((value, index) => <article className="value-card" key={value.title}><span>0{index + 1}</span><h3>{value.title}</h3><p>{value.text}</p></article>)}</div>
      </section>

      <section className="about-address">
        <div><p className="section-eyebrow">OUR LOCATION <span>NEW DELHI, INDIA</span></p><h2>Built on trust.<br/><em>Connected to care.</em></h2></div>
        <address><span>ADMIN OFFICE</span>808B, DLF Prime Tower, Pocket F,<br/>Okhla Phase I, Okhla Industrial Estate,<br/>New Delhi, Delhi 110020</address>
      </section>

      <section className="about-closing"><p className="closing-name">AETHER BIOTEC</p><h2>Care Driven. Modern. Reliable.</h2><p>Science for a Healthier Tomorrow.</p><a className="button-primary" href="/#contact">Start a conversation <span>↗</span></a></section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="/" aria-label="AETHER BIOTEC home"><Image className="brand-logo" src="/Aether_Biotec_Leaf_Emblem_Logo.png" alt="AETHER BIOTEC" width={110} height={92} /></a>
        <p>Care Driven. Modern. Reliable.<br/>Science for a Healthier Tomorrow.</p><span className="footer-copy">© {new Date().getFullYear()} AETHER BIOTEC. ALL RIGHTS RESERVED.</span><a className="back-top" href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
