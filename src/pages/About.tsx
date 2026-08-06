import type { Page } from '../App'

interface Props { navigate: (page: Page) => void }

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-6 h-px bg-cyan" />
      <span className="font-mono text-[10px] text-cyan uppercase tracking-[0.2em]">{text}</span>
    </div>
  )
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}

const leadership = [
  { name: 'Vikram Reddy', title: 'Chief Executive Officer', exp: '22 years aerospace', bg: 'from-blue/20' },
  { name: 'Shalini Nair', title: 'Chief Operating Officer', exp: 'Ex-HAL, IIT Madras', bg: 'from-cyan/10' },
  { name: 'Dr. Rajan Pillai', title: 'VP Engineering & Technology', exp: 'PhD Aerospace Engg, IISc', bg: 'from-blue/20' },
  { name: 'Meera Krishnan', title: 'VP Quality & Compliance', exp: 'AS9100 Lead Auditor', bg: 'from-cyan/10' },
  { name: 'Aditya Sharma', title: 'VP Manufacturing Operations', exp: '18 years CNC & composites', bg: 'from-blue/20' },
  { name: 'Priya Venkatesh', title: 'VP Business Development', exp: 'Global OEM partnerships', bg: 'from-cyan/10' },
]

const milestones = [
  { year: '2018', event: 'Company Founded', detail: 'Incorporated in Hyderabad as a precision engineering startup focused on aerospace.' },
  { year: '2019', event: 'First AS9100D Certification', detail: 'Achieved AS9100D Rev D certification within 14 months of operations.' },
  { year: '2020', event: 'HAL Approval', detail: 'Approved as a supplier to Hindustan Aeronautics Limited for the LCA Tejas program.' },
  { year: '2021', event: 'NADCAP Accreditation', detail: 'Special process NADCAP accreditation for heat treatment and non-destructive testing.' },
  { year: '2022', event: 'Phase 2 Expansion', detail: 'Doubled facility to 45,000 sq ft; added composite autoclave and cleanroom assembly.' },
  { year: '2023', event: 'Export Program Launch', detail: 'First export deliveries to European Tier-1 supplier; ISO 9001:2015 recertification.' },
  { year: '2024', event: 'Space Program Entry', detail: 'Awarded contract for satellite structural components under ISRO\'s NewSpace program.' },
]

export default function About({ navigate }: Props) {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-50" />
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=1920&h=700&fit=crop&auto=format" alt="Engineering team" className="w-full h-full object-cover opacity-[0.1]" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/40 to-navy" />
        </div>
        <div className="relative max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="font-mono text-[9px] text-steel uppercase tracking-widest mb-6 flex items-center gap-2">
            <button onClick={() => navigate('home')} className="hover:text-cyan transition-colors">Home</button>
            <span>/</span>
            <span className="text-cyan">About</span>
          </div>
          <SectionLabel text="About Us" />
          <h1 className="font-display font-black text-white text-5xl lg:text-7xl uppercase leading-none tracking-tight mb-6">
            Engineering<br />Excellence<br /><span className="text-cyan">Since 2018</span>
          </h1>
          <p className="text-steel max-w-2xl text-lg leading-relaxed">
            Built by aerospace engineers, for aerospace programs. Igniting Minds Aerospace is India's fastest-growing precision aerospace manufacturer, trusted by global OEMs and defense organizations.
          </p>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="bg-off py-24">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-3 gap-px bg-border-light">
            {[
              { title: 'Our Mission', text: 'To enable the world\'s most critical aerospace programs through precision manufacturing, engineering partnership, and an uncompromising commitment to quality and delivery.' },
              { title: 'Our Vision', text: 'To be recognized as Asia\'s most trusted aerospace manufacturing partner — synonymous with engineering precision, innovation, and zero-defect delivery.' },
              { title: 'Our Values', items: ['Engineering Integrity', 'Customer-First Delivery', 'Continuous Innovation', 'Safety Without Exception', 'Global Standards, Local Agility'] },
            ].map(item => (
              <div key={item.title} className="bg-off p-10">
                <div className="w-8 h-px bg-cyan mb-6" />
                <h2 className="font-display font-bold text-navy text-3xl uppercase mb-4">{item.title}</h2>
                {item.text && <p className="text-mid leading-relaxed">{item.text}</p>}
                {item.items && (
                  <ul className="space-y-2">
                    {item.items.map(v => (
                      <li key={v} className="flex items-center gap-3 text-sm text-mid">
                        <div className="w-1.5 h-1.5 bg-cyan shrink-0" />
                        {v}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-navy py-24">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel text="Our Story" />
              <h2 className="font-display font-bold text-white text-4xl lg:text-5xl uppercase leading-tight mb-6">
                From Startup to<br />Global Supplier
              </h2>
              <div className="space-y-4 text-steel leading-relaxed">
                <p>Igniting Minds Aerospace was founded in 2018 by a team of seasoned aerospace engineers with a shared conviction: India could — and should — manufacture world-class aerospace components for global programs.</p>
                <p>Starting with a 5,000 sq ft facility and 3 CNC machines, we won our first contract with HAL within our first year of operations. The engineering discipline, quality rigor, and delivery reliability we demonstrated on that program set the standard for everything that followed.</p>
                <p>Today, we operate a 45,000 sq ft integrated manufacturing campus with over 500 engineers and technicians, AS9100D certification, NADCAP accreditation, and supply relationships with Tier-1 suppliers across Europe, North America, and the Asia-Pacific region.</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&auto=format" alt="Engineering heritage" className="w-full h-full object-cover opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
                {[
                  { val: '6', label: 'Years of Operation' },
                  { val: '500+', label: 'Expert Engineers' },
                ].map(s => (
                  <div key={s.label} className="bg-navy/85 backdrop-blur border border-border-dark p-4">
                    <div className="font-display font-bold text-cyan text-2xl">{s.val}</div>
                    <div className="font-mono text-[9px] text-steel mt-1 tracking-wider">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-off py-24">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <SectionLabel text="Milestones" />
          <h2 className="font-display font-bold text-navy text-4xl lg:text-5xl uppercase leading-tight mb-14">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-border-light hidden sm:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className="sm:flex items-start gap-8">
                  <div className="shrink-0 w-20 text-right">
                    <span className="font-mono font-semibold text-blue text-sm">{m.year}</span>
                  </div>
                  <div className="hidden sm:flex items-center justify-center w-4 shrink-0 relative z-10 mt-0.5">
                    <div className="w-2.5 h-2.5 bg-cyan border-2 border-off" />
                  </div>
                  <div className="sm:pt-0 pt-2 border-l border-border-light pl-6 sm:border-0 sm:pl-0">
                    <h3 className="font-display font-bold text-navy text-xl uppercase mb-1">{m.event}</h3>
                    <p className="text-mid text-sm leading-relaxed">{m.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-navy py-24">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <SectionLabel text="Leadership Team" />
          <h2 className="font-display font-bold text-white text-4xl lg:text-5xl uppercase leading-tight mb-14">
            Guided by<br />Industry Veterans
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border-dark">
            {leadership.map(person => (
              <div key={person.name} className={`bg-gradient-to-b ${person.bg} to-navy-mid p-8 hover:to-navy-light transition-colors`}>
                <div className="w-16 h-16 bg-navy-light border border-border-dark flex items-center justify-center mb-5">
                  <svg viewBox="0 0 32 32" className="w-8 h-8 text-steel" fill="none" stroke="currentColor" strokeWidth="1">
                    <circle cx="16" cy="11" r="5" />
                    <path d="M4 28c0-6.627 5.373-12 12-12s12 5.373 12 12" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-white text-xl uppercase">{person.name}</h3>
                <div className="font-mono text-[10px] text-cyan uppercase tracking-wider mt-1 mb-2">{person.title}</div>
                <div className="font-mono text-[10px] text-steel">{person.exp}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue py-20">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-display font-bold text-white text-4xl uppercase">Ready to Partner?</h2>
            <p className="text-white/70 mt-2">Discover how we can support your aerospace program.</p>
          </div>
          <div className="flex gap-4">
            <button onClick={() => navigate('quote')} className="bg-white text-blue hover:bg-off font-medium text-sm px-7 py-3.5 flex items-center gap-2 transition-colors">
              Request a Quote <ArrowRight />
            </button>
            <button onClick={() => navigate('contact')} className="border border-white/30 text-white hover:bg-white/10 font-medium text-sm px-7 py-3.5 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
