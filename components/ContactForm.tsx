"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Product enquiry from ${data.get("name")}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany: ${data.get("company") || "—"}\n\n${data.get("message")}`);
    setEmail(String(data.get("email")));
    const recipient = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "marketing@aetherbiotec.com";
    // Keep a visible fallback link in case the visitor has no default mail app.
    const draftUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;
    window.location.href = draftUrl;
    setSent(true);
  }

  return sent ? <div className="form-success" role="status"><span>✉</span><div><h3>Your email app should open with a draft.</h3><p>If nothing opened, use the link below or email us directly at <a href="mailto:marketing@aetherbiotec.com">marketing@aetherbiotec.com</a>.</p><a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "marketing@aetherbiotec.com"}?subject=${encodeURIComponent(`Product enquiry from ${email}`)}`}><strong>Open an email draft ↗</strong></a><br /><a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""}?text=${encodeURIComponent(`Hello AETHER BIOTEC, I have an enquiry from ${email}.`)}`} target="_blank" rel="noreferrer">Prefer WhatsApp? Continue here ↗</a></div></div> : <form className="contact-form" onSubmit={handleSubmit}>
    <div className="form-row"><label>Your name<input name="name" autoComplete="name" placeholder="Jane Smith" required /></label><label>Work email<input name="email" type="email" autoComplete="email" placeholder="jane@company.com" required /></label></div>
    <label>Company <span className="optional">Optional</span><input name="company" autoComplete="organization" placeholder="Your organisation" /></label>
    <label>How can we help?<textarea name="message" rows={4} placeholder="Tell us what you’re looking for…" required /></label>
    <button type="submit">Send an enquiry <span>↗</span></button>
    <p className="form-privacy">Your details will only be used to respond to your enquiry.</p>
  </form>;
}
