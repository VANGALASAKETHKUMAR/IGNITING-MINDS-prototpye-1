import { useEffect, useRef, useState } from 'react'
import type { Page } from '../App'

interface Props {
  navigate: (page: Page) => void
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return { ref, visible }
}

function useCounter(end: number, suffix = '') {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !started) { setStarted(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])
  useEffect(() => {
    if (!started) return
    const dur = 1800
    const step = end / (dur / 16)
    let curr = 0
    const t = setInterval(() => {
      curr += step
      if (curr >= end) { setCount(end); clearInterval(t) }
      else setCount(Math.floor(curr))
    }, 16)
    return () => clearInterval(t)
  }, [started, end])
  return { count, ref, suffix }
}

function ArrowRight({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-6 h-px bg-cyan" />
      <span className="font-mono text-[10px] text-cyan uppercase tracking-[0.2em]">{text}</span>
    </div>
  )
}

const capabilities = [
  {
    num: '01',
    title: '5-Axis CNC Machining',
    desc: 'Sub-micron precision machining of complex aerospace geometries in titanium, Inconel, aluminium, and specialty alloys.',
    items: ['DMU 85 monoBLOCK 5-axis', 'Tolerances to ±0.005mm', 'Material: Ti-6Al-4V, Inconel 718'],
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="4" y="20" width="24" height="4" rx="0.5" />
        <path d="M16 20V8M10 14l6-6 6 6" />
        <circle cx="16" cy="8" r="2" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Sheet Metal Fabrication',
    desc: 'Precision forming, cutting and welding of complex aerostructure panels, skins, and brackets.',
    items: ['Fiber laser 6kW cutting', 'Hydroforming to 10,000 psi', 'TIG/MIG/Plasma welding'],
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M4 10h24M4 16h24M4 22h24" />
        <path d="M8 10V22M16 10V22M24 10V22" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Composite Manufacturing',
    desc: 'Autoclave and out-of-autoclave CFRP, fiberglass and hybrid composite structures for primary and secondary structures.',
    items: ['Autoclave cure to 200°C', 'Pre-preg & wet layup', 'Post-cure NDT inspection'],
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M4 16 L16 8 L28 16 L16 24 Z" />
        <path d="M4 16 L28 16M16 8 L16 24" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Assembly & Integration',
    desc: 'Structural and systems assembly of complex multi-part aerospace assemblies with full interface control.',
    items: ['Matched-drill assembly', 'Sealant & torque control', 'Full IPC documentation'],
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="4" y="4" width="10" height="10" />
        <rect x="18" y="4" width="10" height="10" />
        <rect x="11" y="18" width="10" height="10" />
        <path d="M9 14v4h14v-4" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Surface Treatment',
    desc: 'Full range of aerospace-qualified surface treatments, coatings, and finishing processes for corrosion and wear protection.',
    items: ['Hard anodize & chromate', 'HVOF thermal spray', 'MIL-spec primer & topcoat'],
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.2">
        <ellipse cx="16" cy="16" rx="12" ry="12" />
        <ellipse cx="16" cy="16" rx="8" ry="8" />
        <ellipse cx="16" cy="16" rx="3" ry="3" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'NDT & CMM Inspection',
    desc: 'Comprehensive non-destructive testing and dimensional verification using state-of-the-art metrology equipment.',
    items: ['Zeiss CMM inspection', 'X-ray & UT inspection', 'NADCAP-accredited lab'],
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M4 28L14 18l4 4L28 8" />
        <circle cx="26" cy="10" r="4" />
        <path d="M26 6v4h4" strokeWidth="0.8" />
      </svg>
    ),
  },
]

const industries = [
  { title: 'Commercial Aviation', sub: 'Narrowbody & widebody programs', img: 'photo-1674897537555', h: '580' },
  { title: 'Defense & Military', sub: 'Mission-critical systems', img: 'photo-1520870121499', h: '580' },
  { title: 'Space & Satellites', sub: 'Launch vehicles & orbital platforms', img: 'photo-1469289759076', h: '580' },
  { title: 'Helicopter & Rotorcraft', sub: 'Structural & dynamic components', img: 'photo-1540575861501', h: '580' },
  { title: 'UAV & Autonomous', sub: 'Fixed-wing & multirotor systems', img: 'photo-1514598800938', h: '580' },
  { title: 'MRO & Aftermarket', sub: 'Repair, overhaul & spare parts', img: 'photo-1598621961279', h: '580' },
]

const workflow = [
  { step: '01', title: 'Design Review', desc: 'DFM analysis, material selection, tolerance review, and non-conformance risk assessment with your engineering team.' },
  { step: '02', title: 'Material Procurement', desc: 'OEM-certified raw material sourcing with full material traceability from mill certificate to finished part.' },
  { step: '03', title: 'Precision Manufacturing', desc: 'AS9100D-controlled production across CNC, fabrication, composite, and assembly workcenters.' },
  { step: '04', title: 'Quality Inspection', desc: 'Dimensional verification, NDT, and first article inspection (FAI) per AS9102 before any delivery.' },
  { step: '05', title: 'Surface Treatment', desc: 'NADCAP-accredited surface finishing and protective coatings applied and documented to specification.' },
  { step: '06', title: 'Delivery & Support', desc: 'Certified packaging, export documentation, and on-time delivery to any global destination with full data pack.' },
]

const news = [
  {
    date: 'NOV 2024',
    tag: 'Press Release',
    title: 'Igniting Minds Aerospace Achieves NADCAP Heat Treatment Accreditation',
    excerpt: 'Expanding our quality credentials, NADCAP accreditation for heat treatment further strengthens our position as a Tier-1 aerospace supplier.',
  },
  {
    date: 'OCT 2024',
    tag: 'Company News',
    title: 'Phase 2 Facility Expansion: 30,000 sq ft of Advanced Manufacturing Space',
    excerpt: 'Our Hyderabad campus is growing. Phase 2 brings dedicated composite manufacturing, a cleanroom assembly bay, and expanded CMM lab.',
  },
  {
    date: 'SEP 2024',
    tag: 'Partnership',
    title: 'Strategic Partnership with Hindustan Aeronautics Limited for LCA Tejas Program',
    excerpt: 'Selected as a Tier-2 supplier for structural airframe components on India\'s premier indigenous fighter aircraft program.',
  },
]

export default function Home({ navigate }: Props) {
  const stats1 = useCounter(2400)
  const stats2 = useCounter(98)
  const stats3 = useCounter(25)
  const stats4 = useCounter(4)
  const revealCaps = useReveal()
  const revealIndustries = useReveal()
  const revealWorkflow = useReveal()
  const revealNews = useReveal()

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col overflow-hidden bg-navy">
        <div className="absolute inset-0 blueprint-grid" />
        <div className="absolute inset-0 blueprint-grid-fine opacity-40" />
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1674897537555-dd6fbf72b4eb?w=1920&h=1080&fit=crop&auto=format"
            alt="Aerospace manufacturing facility"
            className="w-full h-full object-cover opacity-[0.13]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/20 via-transparent to-navy" />
        </div>

        {/* HUD decorations */}
        <div className="absolute top-24 left-8 lg:left-12 font-mono text-[9px] text-cyan/30 space-y-1 pt-4 select-none">
          <div>LAT: 17.3850° N</div>
          <div>LON: 78.4867° E</div>
          <div>ALT: 536m MSL</div>
          <div className="mt-2 text-cyan/20">SYS: NOMINAL</div>
          <div className="text-cyan/20">VER: 4.2.1</div>
        </div>
        <div className="absolute top-24 right-8 lg:right-12 font-mono text-[9px] text-cyan/30 space-y-1 pt-4 text-right select-none">
          <div>EST. 2018</div>
          <div>REG. MCA/2018/TS</div>
          <div>AS9100D CERTIFIED</div>
          <div className="mt-2 text-cyan/20">DGCA APPROVED</div>
        </div>

        {/* Corner brackets */}
        <div className="absolute top-24 left-8 w-6 h-6 border-l border-t border-cyan/20 mt-3 ml-3" />
        <div className="absolute top-24 right-8 w-6 h-6 border-r border-t border-cyan/20 mt-3 mr-3" />

        {/* Main content */}
        <div className="relative flex-1 flex flex-col justify-center max-w-[1440px] mx-auto w-full px-6 xl:px-12 pt-32 pb-20">
          <div className="max-w-5xl anim-fade-up">
            <SectionLabel text="Aerospace Engineering & Manufacturing" />
            <h1 className="font-display font-black text-white uppercase leading-[0.92] tracking-tight text-[clamp(3.5rem,9vw,9rem)]">
              IGNITING<br />
              THE FUTURE<br />
              <span className="text-cyan">OF FLIGHT</span>
            </h1>
            <p className="mt-8 max-w-xl text-steel text-base lg:text-lg leading-relaxed">
              Precision aerospace manufacturing and engineering solutions for the world's most critical programs — commercial aviation, defense, and space.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => navigate('capabilities')}
                className="bg-blue hover:bg-blue-light text-white font-medium text-sm px-8 py-4 flex items-center gap-3 transition-colors duration-200"
              >
                Explore Capabilities
                <ArrowRight />
              </button>
              <button
                onClick={() => navigate('quote')}
                className="border border-cyan/50 text-cyan hover:bg-cyan/8 font-medium text-sm px-8 py-4 flex items-center gap-3 transition-colors duration-200"
              >
                Request a Quote
                <ArrowRight />
              </button>
            </div>
          </div>

          {/* Hero stats */}
          <div className="mt-auto pt-20">
            <div className="border-t border-border-dark pt-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { num: '2,400+', label: 'Components Delivered', sub: 'Annually' },
                { num: '98.7%', label: 'On-Time Delivery', sub: '2023 Performance' },
                { num: '25+', label: 'Countries Served', sub: 'Global Reach' },
                { num: '4', label: 'Certifications', sub: 'AS9100D · ISO · NADCAP' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="font-display font-black text-white text-4xl lg:text-5xl tracking-tight">{stat.num}</div>
                  <div className="font-mono text-[9px] text-cyan uppercase tracking-[0.18em] mt-2">{stat.label}</div>
                  <div className="font-mono text-[9px] text-steel/70 mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ANIMATED STATS ── */}
      <section className="bg-blue py-14">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
            {[
              { hook: stats1, label: 'Parts Machined', suffix: '+' },
              { hook: stats2, label: '% On-Time Rate', suffix: '.7%' },
              { hook: stats3, label: 'Countries Reached', suffix: '+' },
              { hook: stats4, label: 'Quality Certifications', suffix: '' },
            ].map(({ hook, label, suffix }) => (
              <div key={label} ref={hook.ref}>
                <div className="font-display font-black text-white text-5xl lg:text-6xl tracking-tight">
                  {hook.count.toLocaleString()}{suffix}
                </div>
                <div className="font-mono text-[9px] text-white/60 uppercase tracking-widest mt-2">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPANY OVERVIEW ── */}
      <section className="bg-off py-24">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden bg-navy">
                <img
                  src="https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?w=900&h=680&fit=crop&auto=format"
                  alt="Aerospace engineers at work"
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Technical overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-navy/80 backdrop-blur-sm border-t border-border-dark p-4">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { val: '45,000', unit: 'SQ FT', label: 'Facility' },
                    { val: '500+', unit: 'STAFF', label: 'Workforce' },
                    { val: '2018', unit: 'EST.', label: 'Founded' },
                  ].map(s => (
                    <div key={s.label} className="text-center">
                      <div className="font-display font-bold text-white text-xl">{s.val}</div>
                      <div className="font-mono text-[8px] text-cyan tracking-widest">{s.unit} · {s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Corner bracket */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan/60" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan/60" />
            </div>

            <div>
              <SectionLabel text="Company Overview" />
              <h2 className="font-display font-bold text-navy text-4xl lg:text-5xl uppercase leading-tight mb-6">
                Engineering Excellence<br />
                <span className="text-blue">At Every Scale</span>
              </h2>
              <p className="text-mid leading-relaxed mb-6">
                Igniting Minds Aerospace is an AS9100D certified precision manufacturer headquartered in Hyderabad's aerospace hub. We design and manufacture complex aerospace components and systems for global OEMs, defense primes, and space launch providers.
              </p>
              <p className="text-mid leading-relaxed mb-8">
                With over 500 engineers and technicians operating across 45,000 sq ft of state-of-the-art manufacturing space, we deliver uncompromising quality from concept to certification.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  'AS9100D Quality Management System',
                  'NADCAP-accredited Special Processes',
                  'Full design-to-delivery capability',
                  'DGCA-approved maintenance organization',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-mid">
                    <div className="w-4 h-4 border border-cyan flex items-center justify-center shrink-0 mt-0.5">
                      <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 text-cyan" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 6l3 3 5-5" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => navigate('about')}
                className="bg-navy hover:bg-navy-light text-white font-medium text-sm px-7 py-3.5 flex items-center gap-3 transition-colors w-fit"
              >
                Learn About Us
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="bg-navy py-24">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div ref={revealCaps.ref} className={`reveal ${revealCaps.visible ? 'visible' : ''}`}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
              <div>
                <SectionLabel text="Manufacturing Capabilities" />
                <h2 className="font-display font-bold text-white text-4xl lg:text-5xl uppercase leading-tight">
                  Precision At<br />Every Process
                </h2>
              </div>
              <button
                onClick={() => navigate('capabilities')}
                className="flex items-center gap-2 text-cyan font-mono text-[11px] uppercase tracking-widest hover:text-white transition-colors shrink-0"
              >
                All Capabilities <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border-dark">
            {capabilities.map((cap, i) => (
              <div
                key={cap.num}
                className={`bg-navy-mid p-8 hover:bg-navy-light transition-colors duration-300 group cursor-pointer reveal ${revealCaps.visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
                onClick={() => navigate('capabilities')}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-cyan group-hover:text-white transition-colors">{cap.icon}</div>
                  <span className="font-mono text-[11px] text-steel/50">{cap.num}</span>
                </div>
                <h3 className="font-display font-bold text-white text-xl uppercase tracking-wide mb-3 group-hover:text-cyan transition-colors">
                  {cap.title}
                </h3>
                <p className="text-steel text-sm leading-relaxed mb-5">{cap.desc}</p>
                <ul className="space-y-1.5">
                  {cap.items.map(item => (
                    <li key={item} className="font-mono text-[10px] text-steel/70 flex items-center gap-2">
                      <div className="w-1 h-1 bg-cyan/50 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="bg-off py-24">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div ref={revealIndustries.ref} className={`reveal ${revealIndustries.visible ? 'visible' : ''}`}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
              <div>
                <SectionLabel text="Industries Served" />
                <h2 className="font-display font-bold text-navy text-4xl lg:text-5xl uppercase leading-tight">
                  Serving Critical<br />Sectors Globally
                </h2>
              </div>
              <button
                onClick={() => navigate('industries')}
                className="flex items-center gap-2 text-blue font-mono text-[11px] uppercase tracking-widest hover:text-navy transition-colors shrink-0"
              >
                All Industries <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind, i) => (
              <button
                key={ind.title}
                onClick={() => navigate('industries')}
                className={`relative overflow-hidden aspect-[4/3] text-left group reveal ${revealIndustries.visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <img
                  src={`https://images.unsplash.com/${ind.img}?w=600&h=${ind.h}&fit=crop&auto=format`}
                  alt={ind.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display font-bold text-white text-2xl uppercase leading-tight">{ind.title}</h3>
                  <p className="font-mono text-[10px] text-cyan/80 mt-1 tracking-wider">{ind.sub}</p>
                  <div className="mt-3 flex items-center gap-2 text-white/0 group-hover:text-white/80 transition-colors">
                    <span className="font-mono text-[10px] uppercase tracking-wider">Learn more</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="bg-navy py-24 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel text="Featured Products" />
              <h2 className="font-display font-bold text-white text-4xl lg:text-5xl uppercase leading-tight">
                Built for Critical<br />Applications
              </h2>
            </div>
            <button
              onClick={() => navigate('products')}
              className="flex items-center gap-2 text-cyan font-mono text-[11px] uppercase tracking-widest hover:text-white transition-colors shrink-0"
            >
              All Products <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-px bg-border-dark">
            {[
              {
                tag: 'Airframe Structures',
                title: 'LCA Tejas Wing Rib Assembly',
                desc: 'Machined Ti-6Al-4V wing rib assembly with integrated fastener holes, 200-part build, AS9100D-controlled.',
                img: 'photo-1469289759076',
                specs: [['Material', 'Ti-6Al-4V'], ['Tolerance', '±0.01mm'], ['Delivery', '8 weeks']],
              },
              {
                tag: 'Engine Components',
                title: 'Gas Turbine Compressor Casing',
                desc: 'Multi-axis machined Inconel 718 compressor casing with precision bore features and complex internal geometry.',
                img: 'photo-1540575861501',
                specs: [['Material', 'Inconel 718'], ['Tolerance', '±0.005mm'], ['Delivery', '12 weeks']],
              },
              {
                tag: 'UAV Systems',
                title: 'Long-Range Fixed-Wing UAV Airframe',
                desc: 'CFRP composite airframe structure for 25kg MTOW surveillance platform, optimized for low-RCS profile.',
                img: 'photo-1520870121499',
                specs: [['MTOW', '25 kg'], ['Wingspan', '4.2 m'], ['Endurance', '12+ hrs']],
              },
            ].map(product => (
              <button
                key={product.title}
                onClick={() => navigate('products')}
                className="bg-navy-mid text-left group hover:bg-navy-light transition-colors duration-300"
              >
                <div className="aspect-[16/9] overflow-hidden bg-navy">
                  <img
                    src={`https://images.unsplash.com/${product.img}?w=700&h=400&fit=crop&auto=format`}
                    alt={product.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-7">
                  <div className="font-mono text-[9px] text-cyan uppercase tracking-widest mb-3">{product.tag}</div>
                  <h3 className="font-display font-bold text-white text-xl uppercase leading-tight mb-3 group-hover:text-cyan transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-steel text-sm leading-relaxed mb-5">{product.desc}</p>
                  <div className="border-t border-border-dark pt-4 grid grid-cols-3 gap-3">
                    {product.specs.map(([k, v]) => (
                      <div key={k}>
                        <div className="font-mono text-[8px] text-steel/60 uppercase tracking-wider">{k}</div>
                        <div className="font-mono text-[11px] text-white mt-0.5">{v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── MANUFACTURING WORKFLOW ── */}
      <section className="bg-off py-24">
        <div ref={revealWorkflow.ref} className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className={`reveal ${revealWorkflow.visible ? 'visible' : ''}`}>
            <SectionLabel text="Our Process" />
            <h2 className="font-display font-bold text-navy text-4xl lg:text-5xl uppercase leading-tight mb-16">
              From Design Brief<br />To Certified Part
            </h2>
          </div>

          {/* Horizontal timeline */}
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-border-light" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-8">
              {workflow.map((step, i) => (
                <div
                  key={step.step}
                  className={`relative reveal ${revealWorkflow.visible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-navy flex items-center justify-center mb-5 relative z-10 border border-border-dark group-hover:border-cyan transition-colors">
                    <span className="font-mono text-cyan text-sm font-semibold">{step.step}</span>
                  </div>
                  <h3 className="font-display font-bold text-navy text-lg uppercase leading-tight mb-2">{step.title}</h3>
                  <p className="text-mid text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── QUALITY ── */}
      <section className="bg-navy py-24">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel text="Quality Assurance" />
              <h2 className="font-display font-bold text-white text-4xl lg:text-5xl uppercase leading-tight mb-6">
                Zero Defect.<br />Zero Compromise.
              </h2>
              <p className="text-steel leading-relaxed mb-8">
                Our AS9100D Quality Management System is the backbone of every process. From incoming inspection to final delivery, every component is subject to rigorous verification against engineering drawings, standards, and customer specifications.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { cert: 'AS9100D', desc: 'Quality Management' },
                  { cert: 'ISO 9001:2015', desc: 'International Standard' },
                  { cert: 'NADCAP', desc: 'Special Processes' },
                  { cert: 'DGCA', desc: 'Aviation Authority' },
                ].map(item => (
                  <div key={item.cert} className="border border-border-dark p-4 hover:border-cyan/50 transition-colors">
                    <div className="font-display font-bold text-cyan text-lg uppercase">{item.cert}</div>
                    <div className="font-mono text-[10px] text-steel mt-1 tracking-wider">{item.desc}</div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate('quality')}
                className="flex items-center gap-2 text-cyan font-mono text-[11px] uppercase tracking-widest hover:text-white transition-colors"
              >
                View Quality Policy <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1666634157070-6fd830fb5672?w=800&h=800&fit=crop&auto=format"
                  alt="Precision inspection"
                  className="w-full h-full object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-navy/60 via-transparent to-transparent" />
              </div>
              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                {[
                  { val: '0.005mm', label: 'Finest Tolerance' },
                  { val: '100%', label: 'FAI Compliance' },
                  { val: '<0.1%', label: 'Rejection Rate' },
                ].map(s => (
                  <div key={s.label} className="bg-navy/85 backdrop-blur border border-border-dark p-3">
                    <div className="font-display font-bold text-cyan text-lg">{s.val}</div>
                    <div className="font-mono text-[8px] text-steel mt-0.5 tracking-wider">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FACILITY ── */}
      <section className="relative py-32 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1740209475472-aa7d280f7452?w=1920&h=900&fit=crop&auto=format"
          alt="Advanced manufacturing facility"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/40" />
        <div className="relative max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="max-w-2xl">
            <SectionLabel text="Our Facility" />
            <h2 className="font-display font-bold text-white text-4xl lg:text-6xl uppercase leading-tight mb-6">
              45,000 Sq Ft of<br />Advanced Manufacturing
            </h2>
            <p className="text-steel text-base leading-relaxed mb-10">
              Located at TSIIC Aerospace Park, Hyderabad — India's premier aerospace manufacturing cluster. Our integrated facility encompasses CNC machining, composite manufacturing, assembly bays, a NADCAP-accredited surface treatment plant, and a Zeiss CMM metrology lab.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
              {[
                { val: '45K', label: 'Sq Ft Facility' },
                { val: '38', label: 'CNC Machines' },
                { val: '4', label: 'Cleanroom Bays' },
                { val: '3', label: 'Autoclave Units' },
              ].map(s => (
                <div key={s.label}>
                  <div className="font-display font-black text-white text-4xl">{s.val}</div>
                  <div className="font-mono text-[9px] text-cyan mt-1 uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate('facilities')}
              className="border border-white/30 text-white hover:bg-white/10 font-medium text-sm px-7 py-3.5 flex items-center gap-3 transition-colors w-fit"
            >
              Tour the Facility
              <ArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* ── GLOBAL PRESENCE ── */}
      <section className="bg-navy-mid py-24 border-y border-border-dark">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel text="Global Reach" />
              <h2 className="font-display font-bold text-white text-4xl lg:text-5xl uppercase leading-tight mb-6">
                Manufacturing for<br />the World
              </h2>
              <p className="text-steel leading-relaxed mb-8">
                Supplying certified aerospace components to customers across 25+ countries on 5 continents. Our export-compliant processes and ITAR-ready documentation enable seamless delivery to any global program.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { val: '25+', label: 'Countries' },
                  { val: '5', label: 'Continents' },
                  { val: '120+', label: 'Global Clients' },
                ].map(s => (
                  <div key={s.label} className="border-l border-cyan/30 pl-4">
                    <div className="font-display font-bold text-white text-4xl">{s.val}</div>
                    <div className="font-mono text-[9px] text-cyan mt-1 uppercase tracking-widest">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* SVG World map placeholder */}
            <div className="relative bg-navy border border-border-dark p-8 aspect-[16/9]">
              <div className="font-mono text-[9px] text-steel uppercase tracking-widest mb-4">Global Operations Network</div>
              {/* Simplified world grid */}
              <svg viewBox="0 0 400 200" className="w-full h-full opacity-60">
                <defs>
                  <pattern id="mapgrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0,180,216,0.15)" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="400" height="200" fill="url(#mapgrid)"/>
                {/* Simplified continent outlines */}
                <path d="M60 60 Q80 40 120 50 Q140 45 150 65 Q145 90 120 100 Q90 105 70 90 Z" fill="none" stroke="rgba(0,180,216,0.3)" strokeWidth="1"/>
                <path d="M155 40 Q200 30 240 45 Q260 50 265 80 Q260 110 230 120 Q200 125 175 110 Q155 95 155 75 Z" fill="none" stroke="rgba(0,180,216,0.3)" strokeWidth="1"/>
                <path d="M270 50 Q310 35 350 50 Q370 60 365 90 Q355 115 330 120 Q300 125 280 110 Q265 95 270 70 Z" fill="none" stroke="rgba(0,180,216,0.3)" strokeWidth="1"/>
                <path d="M40 120 Q60 110 80 120 Q90 130 85 150 Q80 165 60 165 Q40 160 35 145 Z" fill="none" stroke="rgba(0,180,216,0.3)" strokeWidth="1"/>
                {/* Dots for key locations */}
                {[
                  [200, 65], [300, 58], [110, 55], [360, 62], [60, 60], [230, 120],
                ].map(([cx, cy], i) => (
                  <g key={i}>
                    <circle cx={cx} cy={cy} r="3" fill="#00B4D8" opacity="0.9"/>
                    <circle cx={cx} cy={cy} r="6" fill="none" stroke="#00B4D8" strokeWidth="0.5" opacity="0.4"/>
                  </g>
                ))}
                {/* Lines connecting dots */}
                <line x1="200" y1="65" x2="300" y2="58" stroke="rgba(0,180,216,0.2)" strokeWidth="0.5" strokeDasharray="3 3"/>
                <line x1="110" y1="55" x2="200" y2="65" stroke="rgba(0,180,216,0.2)" strokeWidth="0.5" strokeDasharray="3 3"/>
                <line x1="200" y1="65" x2="360" y2="62" stroke="rgba(0,180,216,0.2)" strokeWidth="0.5" strokeDasharray="3 3"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="bg-off py-24">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel text="Case Studies" />
              <h2 className="font-display font-bold text-navy text-4xl lg:text-5xl uppercase leading-tight">
                Programs We've<br />Delivered
              </h2>
            </div>
            <button
              onClick={() => navigate('resources')}
              className="flex items-center gap-2 text-blue font-mono text-[11px] uppercase tracking-widest hover:text-navy transition-colors shrink-0"
            >
              All Case Studies <ArrowRight className="w-3 h-3" />
            </button>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {[
              {
                tag: 'Commercial Aviation',
                client: 'Undisclosed Tier-1 OEM',
                title: 'A320neo Wing Panel Kit Supply',
                result: '18-month, 480-part delivery program with 98.9% on-time rate and zero customer escapes.',
                metric1: ['480', 'Parts Delivered'],
                metric2: ['98.9%', 'On-Time Rate'],
                img: 'photo-1674897537555',
              },
              {
                tag: 'Defense',
                client: 'Hindustan Aeronautics Limited',
                title: 'LCA Tejas Mk1A Structural Components',
                result: 'Selected as Tier-2 supplier for fuselage frames and access panels under the 83-aircraft HAL program.',
                metric1: ['83', 'Aircraft Program'],
                metric2: ['0', 'Defect Escapes'],
                img: 'photo-1469289759076',
              },
            ].map(cs => (
              <button
                key={cs.title}
                onClick={() => navigate('resources')}
                className="text-left bg-navy group overflow-hidden hover:ring-1 hover:ring-cyan/30 transition-all"
              >
                <div className="aspect-[16/7] overflow-hidden relative">
                  <img
                    src={`https://images.unsplash.com/${cs.img}?w=800&h=350&fit=crop&auto=format`}
                    alt={cs.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4 font-mono text-[9px] text-cyan uppercase tracking-widest border border-cyan/30 px-2 py-1 bg-navy/60 backdrop-blur">
                    {cs.tag}
                  </div>
                </div>
                <div className="p-8">
                  <div className="font-mono text-[9px] text-steel uppercase tracking-widest mb-2">Client: {cs.client}</div>
                  <h3 className="font-display font-bold text-white text-2xl uppercase leading-tight mb-3 group-hover:text-cyan transition-colors">
                    {cs.title}
                  </h3>
                  <p className="text-steel text-sm leading-relaxed mb-6">{cs.result}</p>
                  <div className="flex items-center gap-8 border-t border-border-dark pt-5">
                    {[cs.metric1, cs.metric2].map(([val, lbl]) => (
                      <div key={lbl}>
                        <div className="font-display font-bold text-cyan text-3xl">{val}</div>
                        <div className="font-mono text-[9px] text-steel uppercase tracking-wider mt-1">{lbl}</div>
                      </div>
                    ))}
                    <div className="ml-auto flex items-center gap-2 text-cyan/0 group-hover:text-cyan transition-colors">
                      <span className="font-mono text-[10px] uppercase tracking-wider">Read Case Study</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── LATEST NEWS ── */}
      <section className="bg-navy py-24" ref={revealNews.ref}>
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel text="Latest News" />
              <h2 className="font-display font-bold text-white text-4xl lg:text-5xl uppercase leading-tight">
                News &<br />Announcements
              </h2>
            </div>
            <button
              onClick={() => navigate('resources')}
              className="flex items-center gap-2 text-cyan font-mono text-[11px] uppercase tracking-widest hover:text-white transition-colors shrink-0"
            >
              All News <ArrowRight className="w-3 h-3" />
            </button>
          </div>
          <div className="grid lg:grid-cols-3 gap-px bg-border-dark">
            {news.map((article, i) => (
              <button
                key={article.title}
                onClick={() => navigate('resources')}
                className={`bg-navy-mid text-left p-8 hover:bg-navy-light transition-colors group reveal ${revealNews.visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[9px] text-steel uppercase tracking-widest">{article.date}</span>
                  <div className="w-1 h-1 bg-border-dark" />
                  <span className="font-mono text-[9px] text-cyan uppercase tracking-widest border border-cyan/25 px-2 py-0.5">{article.tag}</span>
                </div>
                <h3 className="font-display font-bold text-white text-xl uppercase leading-tight mb-3 group-hover:text-cyan transition-colors">
                  {article.title}
                </h3>
                <p className="text-steel text-sm leading-relaxed mb-6">{article.excerpt}</p>
                <div className="flex items-center gap-2 text-cyan/50 group-hover:text-cyan transition-colors">
                  <span className="font-mono text-[10px] uppercase tracking-wider">Read Article</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAREERS HIGHLIGHT ── */}
      <section className="bg-blue py-20">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <div className="font-mono text-[9px] text-white/50 uppercase tracking-[0.22em] mb-3">Join Our Team</div>
              <h2 className="font-display font-bold text-white text-4xl lg:text-5xl uppercase leading-tight">
                Build the Future<br />of Aerospace
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="grid grid-cols-3 gap-8">
                {[
                  { val: '28', label: 'Open Roles' },
                  { val: '500+', label: 'Team Members' },
                  { val: '12', label: 'Departments' },
                ].map(s => (
                  <div key={s.label}>
                    <div className="font-display font-bold text-white text-3xl">{s.val}</div>
                    <div className="font-mono text-[9px] text-white/60 uppercase tracking-widest mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate('careers')}
                className="bg-white text-blue hover:bg-off font-medium text-sm px-8 py-4 flex items-center gap-3 transition-colors shrink-0"
              >
                View Open Positions
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-navy py-28 blueprint-grid">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 text-center">
          <div className="font-mono text-[9px] text-cyan uppercase tracking-[0.22em] mb-6">Ready to Work Together?</div>
          <h2 className="font-display font-black text-white text-5xl lg:text-7xl xl:text-8xl uppercase leading-none tracking-tight mb-6">
            Request a<br />Quote Today
          </h2>
          <p className="text-steel max-w-xl mx-auto leading-relaxed mb-12">
            Submit your engineering drawings, specifications, and delivery requirements. Our team responds within 48 hours with a detailed technical and commercial proposal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('quote')}
              className="bg-cyan hover:bg-cyan/90 text-navy font-bold text-sm px-10 py-4 flex items-center gap-3 transition-colors"
            >
              Submit RFQ
              <ArrowRight />
            </button>
            <button
              onClick={() => navigate('contact')}
              className="border border-white/20 text-white hover:bg-white/5 font-medium text-sm px-10 py-4 transition-colors"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
