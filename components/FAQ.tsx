'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const questions = [
  ['How much does a software project cost?', 'Every engagement is scoped around the outcome, complexity, and level of support required. After a short discovery conversation, we provide a clear proposal with milestones and investment ranges.'],
  ['How long does development take?', 'Focused product builds typically move from discovery to launch in several weeks, while larger platforms are planned in milestones. We share a delivery map before work begins.'],
  ['Can you work with an existing product?', 'Yes. We can audit, stabilize, extend, or gradually modernize an existing product without forcing a disruptive rewrite.'],
  ['Do you provide ongoing support?', 'We do. Support can include monitoring, maintenance, product iterations, performance improvements, and a dedicated channel for your team.'],
  ['Can you build custom business software?', 'Absolutely. We build tailored internal tools, customer portals, workflow systems, dashboards, and operational platforms around how your business actually works.'],
  ['Do you develop mobile applications?', 'Yes. We can create cross-platform mobile experiences or work alongside your existing native teams when the product calls for it.'],
  ['Can you integrate AI into an existing system?', 'Yes. We connect practical AI capabilities such as classification, search, copilots, and automation to your current workflows with appropriate guardrails.'],
] as const

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  return <section id="faq" className="faq-section"><div className="page-shell"><div className="faq-layout"><div className="section-heading faq-heading"><p className="eyebrow">FAQ</p><h2>Clear answers for <span className="text-gradient">smart decisions.</span></h2><p>From first conversation to long-term support, here is what teams usually want to know.</p></div><div className="faq-list" role="list">{questions.map(([question, answer], index) => { const isOpen = openIndex === index; const panelId = `faq-panel-${index}`; return <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={question} role="listitem"><button type="button" className="faq-trigger" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenIndex(isOpen ? null : index)}><span>{question}</span><ChevronDown aria-hidden="true" size={17} /></button><div id={panelId} className="faq-panel" role="region" aria-hidden={!isOpen}><p>{answer}</p></div></div>})}</div></div></div></section>
}
