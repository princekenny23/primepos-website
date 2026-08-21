"use client";

import { FormEvent, useState } from "react";

const whatsappNumber = "265997575865";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Hello PrimePOS,",
      "",
      `Name: ${form.get("name")}`,
      `Business: ${form.get("business")}`,
      `Phone / WhatsApp: ${form.get("phone")}`,
      `Email: ${form.get("email")}`,
      `Business type: ${form.get("type")}`,
      `Branches: ${form.get("branches")}`,
      `Enquiry: ${form.get("enquiry")}`,
      `Message: ${form.get("message")}`,
    ].join("\n");
    setSent(true);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return <form onSubmit={submit} className="contact-form"><div className="form-heading"><p className="eyebrow"><span className="blue-dot" /> Send an enquiry</p><h2>Tell us what you need.</h2><p>We&apos;ll prepare a useful reply for your business.</p></div><div className="form-grid"><label>Full name<input name="name" required placeholder="Your full name" /></label><label>Business name<input name="business" required placeholder="Your business name" /></label><label>Phone / WhatsApp<input name="phone" required type="tel" placeholder="+265 ..." /></label><label>Email<input name="email" required type="email" placeholder="you@business.com" /></label><label>Business type<select name="type" defaultValue="Retail"><option>Retail</option><option>Wholesale</option><option>Supermarket</option><option>Restaurant</option><option>Bar</option><option>Other</option></select></label><label>Number of branches<input name="branches" required type="number" min="1" placeholder="1" /></label><label className="full-field">How can we help?<select name="enquiry" defaultValue="I want a demo"><option>I want a demo</option><option>I want to start the free trial</option><option>Pricing enquiry</option><option>Technical support</option><option>General enquiry</option></select></label><label className="full-field">Message<textarea name="message" required rows={5} placeholder="Tell us a little about what you need..." /></label></div><button className="button-primary" type="submit">Send Message  <span aria-hidden="true">↗</span></button>{sent && <p className="form-success" role="status"></p>}</form>;
}
