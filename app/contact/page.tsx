import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="contact-page py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
        <div className="pt-4"><p className="eyebrow"><span className="blue-dot" /> Contact PrimePOS</p><h1 className="section-title mt-5">Let&apos;s talk about your business.</h1><p className="section-copy mt-6">Have questions about PrimePOS, pricing, setup or getting started? Send us a message and our team will get back to you.</p><div className="contact-cards mt-12"><a href="tel:+265997575865"><strong>Phone</strong><span>+265 997575865 / 881302440</span></a><a href="mailto:sales@primeposs.com"><strong>Email</strong><span>sales@primeposs.com</span></a><div><strong>Location</strong><span>Lilongwe, Malawi</span></div></div></div>
        <ContactForm />
      </div>
    </section>
  );
}
