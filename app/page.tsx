import ProductBrowser from "@/components/ProductBrowser";
import ContactForm from "@/components/ContactForm";
import { products } from "@/lib/products";
import Image from "next/image";

const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
const logo = "/Aether_Biotec_Leaf_Emblem_Logo.png";

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Aether Biotec home">
          <Image className="brand-logo" src={logo} alt="AETHER BIOTEC" width={110} height={92} priority />
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="/about/">About us</a>
          <a href="#catalogue">Our catalogue</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">Let’s talk <span>↗</span></a>
        <a className="mobile-contact" href="#contact">Enquire <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> QUALITY-LED PHARMACEUTICALS <span className="eyebrow-line" /></p>
          <h1>Quality medicine.<br /><em>Thoughtfully made.</em></h1>
          <p className="hero-summary">A considered portfolio of pharmaceutical and wellness products, shaped by quality, responsibility and access.</p>
          <div className="hero-actions">
            <a href="#catalogue" className="button-primary">Explore our products <span>↓</span></a>
            <a href="/about/" className="text-link">Get to know us <span>↗</span></a>
          </div>
          <div className="hero-note"><span className="note-icon">✳</span><span>Quality in every detail.<br /><b>Care in every choice.</b></span></div>
        </div>
        <div className="hero-visual" aria-label="Abstract representation of pharmaceutical research">
          <div className="visual-halo" /><div className="visual-ring ring-one" /><div className="visual-ring ring-two" /><div className="visual-ring ring-three" />
          <div className="visual-disc"><span className="disc-cross">+</span><span className="disc-line" /><span className="disc-dot" /><span className="disc-label">AETHER<br />BIOTEC</span></div>
          <span className="visual-coordinate">QUALITY<br />BY DESIGN</span><span className="visual-caption">SCIENCE IN EVERY DETAIL</span>
          <span className="visual-spark spark-a">✳</span><span className="visual-spark spark-b">✦</span>
        </div>
        <div className="hero-bottom"><span>01 — 03 &nbsp;&nbsp; WHO WE ARE</span><span>SCROLL TO DISCOVER <i>↓</i></span></div>
      </section>

      <section className="trust-strip" aria-label="Our commitments">
        <div><span>01</span><p>Quality-led standards</p></div><i />
        <div><span>02</span><p>People-first thinking</p></div><i />
        <div><span>03</span><p>Responsible partnerships</p></div><i />
        <div><span>04</span><p>Better healthcare access</p></div>
      </section>

      <section className="about-section" id="about">
        <div className="about-art">
          <div className="about-sun" /><div className="about-arc arc-a" /><div className="about-arc arc-b" />
          <div className="about-mark">A<span>+</span></div><div className="about-index">AETHER<br />BIOTEC&nbsp; / &nbsp;QUALITY</div>
          <div className="about-orbit-label">PURPOSE IN MOTION</div>
        </div>
        <div className="about-copy">
          <p className="section-eyebrow">A LITTLE ABOUT US <span>02 / 03</span></p>
          <h2>Care is in<br />our <em>chemistry.</em></h2>
          <p className="about-lead">Healthcare deserves care at every step—from product development to the people it serves.</p>
          <p className="about-body">AETHER BIOTEC is focused on creating reliable, thoughtfully developed healthcare products for a changing world. We bring together quality-led processes, responsible partnerships and a clear commitment to the communities we serve.</p>
          <a className="text-link dark-link" href="/about/">Discover our purpose <span>↗</span></a>
          <div className="about-footnote"><span>✳</span><p>Made with care.<br /><b>Made to make a difference.</b></p></div>
        </div>
      </section>

      <section className="catalogue-section" id="catalogue">
        <div className="catalogue-heading">
          <div><p className="section-eyebrow light-eyebrow">OUR PRODUCT PORTFOLIO <span>03 / 03</span></p><h2>Made with care.<br /><em>Chosen with confidence.</em></h2></div>
          <p className="catalogue-intro">Explore our pharmaceutical and wellness portfolio. For product information or partnership enquiries, our team is ready to help.</p>
        </div>
        <ProductBrowser products={products} />
        <div className="catalogue-foot"><p>Showing {products.length} selected products</p><a href="#contact">Looking for something specific? <span>Talk to our team ↗</span></a></div>
        <div className="catalogue-disclaimer"><span>✳</span><p>Product information is provided for general reference only and is not a substitute for professional medical advice. Always consult a qualified healthcare professional before use. Prescription products should be used only as directed by your clinician.</p></div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy">
          <p className="section-eyebrow">LET’S START A CONVERSATION</p><h2>Good things<br />start with <em>hello.</em></h2>
          <p>For healthcare professionals, distribution partners and general enquiries, please get in touch with our team.</p>
          <div className="contact-details"><span>GET IN TOUCH</span><a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "marketing@aetherbiotec.com"}`}>{process.env.NEXT_PUBLIC_CONTACT_EMAIL || "marketing@aetherbiotec.com"} ↗</a><a href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("Hello AETHER BIOTEC, I would like to make an enquiry.")}`} target="_blank" rel="noreferrer">WhatsApp our team ↗</a><span className="office-label">ADMIN OFFICE</span><address>808B, DLF Prime Tower, Pocket F,<br/>Okhla Phase I, Okhla Industrial Estate,<br/>New Delhi, Delhi 110020</address></div>
        </div>
        <div className="contact-form-wrap"><div className="form-heading"><span>01 — YOUR DETAILS</span><span>ALL FIELDS MARKED * ARE REQUIRED</span></div><ContactForm /></div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top"><Image className="brand-logo" src={logo} alt="AETHER BIOTEC" width={110} height={92} /></a>
        <p>Care Driven. Modern. Reliable.<br/>Science for a Healthier Tomorrow.</p><span className="footer-copy">© {new Date().getFullYear()} AETHER BIOTEC. ALL RIGHTS RESERVED.</span><a className="back-top" href="#top">BACK TO TOP ↑</a>
      </footer>
      <a className="whatsapp-float" href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("Hello AETHER BIOTEC, I would like to make an enquiry.")}`} target="_blank" rel="noreferrer" aria-label="Enquire on WhatsApp"><span>☏</span></a>
    </main>
  );
}
