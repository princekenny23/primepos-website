"use client";

import Image from "next/image";
import { useState } from "react";

const modules = [
  { name: "POS", label: "Sell faster", image: "/pos.png", text: "A cashier-first checkout that keeps every sale moving." },
  { name: "Inventory", label: "Stay in control", image: "/inventory.png", text: "Know what is coming in, going out, and what needs attention." },
  { name: "Reports", label: "See the signal", image: "/sales insights.png", text: "Turn daily activity into decisions your team can act on." },
  { name: "Outlets", label: "One view", image: "/outlet.png", text: "Keep every branch aligned from one central workspace." },
];

export default function ProductShowcase() {
  const [active, setActive] = useState(0);
  const activeModule = modules[active];

  return (
    <section id="product" className="product-band py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow"><span className="blue-dot" /> One platform. Every moving part.</p>
          <h2 className="section-title mt-5">See the whole business, not just the sale.</h2>
          <p className="section-copy mt-5">From the counter to the back office, PrimePOS keeps your operation connected without making it feel complicated.</p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.32fr_0.68fr] lg:items-center">
          <div className="module-tabs" role="tablist" aria-label="PrimePOS product modules">
            {modules.map((item, index) => (
              <button key={item.name} type="button" role="tab" aria-selected={active === index} onClick={() => setActive(index)} className={`module-tab ${active === index ? "active" : ""}`}>
                <span className="module-number">0{index + 1}</span><span><strong>{item.name}</strong><small>{item.label}</small></span><span aria-hidden="true">→</span>
              </button>
            ))}
          </div>
          <div className="showcase-window">
            <div className="showcase-heading"><span>{activeModule.name} / PrimePOS</span><span className="live-label"><i /> Live workspace</span></div>
            <div className="showcase-image"><Image key={activeModule.image} src={activeModule.image} alt={`${activeModule.name} PrimePOS interface`} fill sizes="(max-width: 1024px) 100vw, 65vw" className="object-cover" /></div>
            <p className="showcase-caption">{activeModule.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
