import { useState } from 'react'
import type { Page } from '../App'

interface Props { navigate: (page: Page) => void }

export default function Contact({ navigate }: Props) {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputClass = "w-full bg-navy border border-border-dark px-4 py-3 text-sm text-white placeholder-steel/50 focus:outline-none focus:border-cyan transition-colors"
  const labelClass = "font-mono text-[9px] text-steel uppercase tracking-widest block mb-2"

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-50" />
        <div className="relative max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="font-mono text-[9px] text-steel uppercase tracking-widest mb-6 flex items-center gap-2">
            <button onClick={() => navigate('home')} className="hover:text-cyan transition-colors">Home</button>
            <span>/</span>
            <span className="text-cyan">Contact</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-cyan" />
            <span className="font-mono text-[10px] text-cyan uppercase tracking-[0.2em]">Contact Us</span>
          </div>
          <h1 className="font-display font-black text-white text-5xl lg:text-7xl uppercase leading-none tracking-tight mb-6">
            Let's Start the<br />Conversation
          </h1>
          <p className="text-steel max-w-2xl text-lg leading-relaxed">
            Whether you're ready to submit an RFQ, schedule a facility visit, or simply want to understand our capabilities — our team is ready to respond.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="bg-navy py-20">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: Contact Info */}
            <div className="space-y-10">
              <div>
                <div className="font-mono text-[9px] text-steel uppercase tracking-widest mb-4">Headquarters</div>
                <div className="border-l border-border-dark pl-5 space-y-3">
                  <p className="text-steel text-sm leading-relaxed">
                    Plot 42, TSIIC Aerospace Park<br />
                    Adibatla, Hyderabad — 501506<br />
                    Telangana, India
                  </p>
                </div>
              </div>
              <div>
                <div className="font-mono text-[9px] text-steel uppercase tracking-widest mb-4">Direct Contact</div>
                <div className="border-l border-border-dark pl-5 space-y-4">
                  {[
                    { label: 'General Enquiries', val: 'contact@ignitingminds.aero' },
                    { label: 'Sales & RFQ', val: 'sales@ignitingminds.aero' },
                    { label: 'Quality / Supplier', val: 'quality@ignitingminds.aero' },
                    { label: 'Phone', val: '+91 40 4000 0100' },
                    { label: 'Defence Enquiries', val: '+91 40 4000 0102' },
                  ].map(c => (
                    <div key={c.label}>
                      <div className="font-mono text-[8px] text-steel/60 uppercase tracking-wider mb-0.5">{c.label}</div>
                      <div className="text-sm text-cyan">{c.val}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-mono text-[9px] text-steel uppercase tracking-widest mb-4">Business Hours</div>
                <div className="border-l border-border-dark pl-5 space-y-2">
                  {[
                    ['Monday – Friday', '08:00 – 18:00 IST'],
                    ['Saturday', '09:00 – 14:00 IST'],
                    ['Sunday', 'Closed'],
                  ].map(([day, hrs]) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="text-steel">{day}</span>
                      <span className="font-mono text-[11px] text-white">{hrs}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border border-border-dark p-6">
                <div className="font-mono text-[9px] text-cyan uppercase tracking-widest mb-3">AOG / Urgent Enquiries</div>
                <p className="text-steel text-sm mb-3">For Aircraft-on-Ground and urgent supply requirements, call our 24-hour response line.</p>
                <div className="font-display font-bold text-white text-xl">+91 98490 12345</div>
              </div>
            </div>

            {/* Right: Form (spans 2 cols) */}
            <div className="lg:col-span-2">
              {sent ? (
                <div className="border border-cyan/30 p-16 text-center">
                  <div className="w-12 h-12 border border-cyan flex items-center justify-center mx-auto mb-6">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-cyan" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="font-display font-bold text-white text-3xl uppercase mb-3">Message Received</h2>
                  <p className="text-steel max-w-sm mx-auto">Thank you for reaching out. A member of our team will respond within one business day.</p>
                  <button onClick={() => setSent(false)} className="mt-8 font-mono text-[10px] text-cyan uppercase tracking-widest hover:text-white transition-colors">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>Full Name *</label>
                      <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} type="text" placeholder="John Smith" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Company / Organization *</label>
                      <input required value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} type="text" placeholder="Airbus Operations S.A.S." className={inputClass} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <input required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} type="email" placeholder="j.smith@company.com" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Phone Number</label>
                      <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} type="tel" placeholder="+1 555 000 0000" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Subject *</label>
                    <select required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} className={`${inputClass} appearance-none`}>
                      <option value="">Select enquiry type...</option>
                      <option>Request for Quotation (RFQ)</option>
                      <option>Supplier Qualification / Audit</option>
                      <option>Capability Enquiry</option>
                      <option>Facility Visit Request</option>
                      <option>Partnership / Collaboration</option>
                      <option>Career / Employment</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Message *</label>
                    <textarea
                      required
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      rows={6}
                      placeholder="Describe your requirements, program details, or questions..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" required id="privacy" className="mt-1 accent-cyan" />
                    <label htmlFor="privacy" className="text-sm text-steel leading-relaxed">
                      I agree to the <span className="text-cyan">Privacy Policy</span> and consent to Igniting Minds Aerospace processing my enquiry.
                    </label>
                  </div>
                  <button type="submit" className="bg-blue hover:bg-blue-light text-white font-medium text-sm px-10 py-4 flex items-center gap-3 transition-colors">
                    Send Message
                    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-navy-mid border-t border-border-dark h-64 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="font-mono text-[9px] text-steel uppercase tracking-widest mb-2">17.3850° N, 78.4867° E</div>
            <div className="font-display font-bold text-white text-2xl uppercase">TSIIC Aerospace Park, Hyderabad</div>
            <div className="font-mono text-[10px] text-cyan mt-2 uppercase tracking-widest">View on Google Maps →</div>
          </div>
        </div>
      </section>
    </div>
  )
}
