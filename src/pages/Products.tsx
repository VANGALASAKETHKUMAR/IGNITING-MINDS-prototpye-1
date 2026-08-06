import { useState } from 'react'
import type { Page } from '../App'

interface Props { navigate: (page: Page) => void }

function SL({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-6 h-px bg-cyan" />
      <span className="font-mono text-[10px] text-cyan uppercase tracking-[0.2em]">{text}</span>
    </div>
  )
}

function AR() {
  return <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
}

const categories = ['All', 'Airframe', 'Engine', 'UAV Systems', 'Defense', 'Space', 'GSE']

const products = [
  {
    cat: 'Airframe',
    tag: 'Airframe Structures',
    title: 'LCA Tejas Wing Rib Assembly',
    desc: 'Machined Ti-6Al-4V wing rib assembly — 200-part build kit, matched-drill fastener locations.',
    img: 'photo-1469289759076',
    specs: [['Material', 'Ti-6Al-4V'], ['Tolerance', '±0.01mm'], ['Qty / Set', '200 pcs'], ['Lead Time', '8 weeks']],
    prog: 'HAL LCA Tejas Mk1A',
  },
  {
    cat: 'Engine',
    tag: 'Engine Components',
    title: 'Gas Turbine Compressor Casing',
    desc: 'Multi-axis machined Inconel 718 compressor casing with precision bore and complex internal geometry.',
    img: 'photo-1540575861501',
    specs: [['Material', 'Inconel 718'], ['Tolerance', '±0.005mm'], ['Weight', '34 kg'], ['Lead Time', '12 weeks']],
    prog: 'Turbofan Engine Program',
  },
  {
    cat: 'UAV Systems',
    tag: 'UAV Systems',
    title: 'Long-Range Surveillance UAV',
    desc: 'CFRP composite fixed-wing airframe for 25kg MTOW MALE-class surveillance platform.',
    img: 'photo-1520870121499',
    specs: [['MTOW', '25 kg'], ['Wingspan', '4.2 m'], ['Endurance', '12 hrs'], ['Payload', '5 kg']],
    prog: 'Defense Reconnaissance',
  },
  {
    cat: 'Airframe',
    tag: 'Airframe Structures',
    title: 'A320neo Door Surround Frame',
    desc: 'Machined aluminium 7075-T651 door surround frame for narrow-body passenger aircraft.',
    img: 'photo-1674897537555',
    specs: [['Material', 'Al 7075-T651'], ['Tolerance', '±0.02mm'], ['Surface', 'Anodize Type III'], ['Lead Time', '6 weeks']],
    prog: 'A320neo Program',
  },
  {
    cat: 'Defense',
    tag: 'Defense Systems',
    title: 'Missile Airframe Body Section',
    desc: 'Precision-machined aluminium airframe body section for short-range surface-to-air missile.',
    img: 'photo-1469289759076',
    specs: [['Material', 'Al 2024-T351'], ['Circularity', '<0.01mm'], ['Finish', 'Hard anodize'], ['Classification', 'ITAR Controlled']],
    prog: 'Defense Program (Classified)',
  },
  {
    cat: 'Space',
    tag: 'Space Hardware',
    title: 'Satellite Structural Panel Assembly',
    desc: 'Aluminium honeycomb structural panel assembly for small satellite primary structure.',
    img: 'photo-1614726365952-510103b1bdb8',
    specs: [['Material', 'Al Honeycomb'], ['Mass', '2.1 kg'], ['Flatness', '<0.1mm'], ['Environment', 'Vac, -150 to +120°C']],
    prog: 'ISRO NewSpace Program',
  },
  {
    cat: 'GSE',
    tag: 'Ground Support Equipment',
    title: 'Wing Assembly Jig & Fixture',
    desc: 'Precision aircraft assembly jig for wing-fuselage interface alignment, modular steel construction.',
    img: 'photo-1598621961279',
    specs: [['Accuracy', '±0.05mm'], ['Material', 'Structural steel'], ['Coverage', 'Full wing span'], ['Type', 'Hard tooling']],
    prog: 'Regional Jet Program',
  },
  {
    cat: 'Engine',
    tag: 'Engine Components',
    title: 'Turbine Exhaust Duct',
    desc: 'Sheet metal + weld Inconel 625 exhaust duct assembly with integrated heat-shield provisions.',
    img: 'photo-1645418093090',
    specs: [['Material', 'Inconel 625'], ['Temp Rating', '980°C'], ['Wall Thickness', '0.9mm'], ['Lead Time', '10 weeks']],
    prog: 'Auxiliary Power Unit',
  },
]

export default function Products({ navigate }: Props) {
  const [activeCat, setActiveCat] = useState('All')
  const filtered = activeCat === 'All' ? products : products.filter(p => p.cat === activeCat)

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-50" />
        <div className="relative max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="font-mono text-[9px] text-steel uppercase tracking-widest mb-6 flex items-center gap-2">
            <button onClick={() => navigate('home')} className="hover:text-cyan transition-colors">Home</button>
            <span>/</span>
            <span className="text-cyan">Products</span>
          </div>
          <SL text="Product Lines" />
          <h1 className="font-display font-black text-white text-5xl lg:text-7xl uppercase leading-none tracking-tight mb-6">
            Built for Critical<br />Applications
          </h1>
          <p className="text-steel max-w-2xl text-lg leading-relaxed">
            A representative portfolio of certified aerospace components, assemblies, and systems manufactured for global programs across commercial aviation, defense, and space sectors.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="bg-navy-mid border-b border-border-dark">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="flex items-center gap-0 overflow-x-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`shrink-0 font-mono text-[9px] uppercase tracking-widest px-5 py-4 border-r border-border-dark transition-colors ${
                  activeCat === cat ? 'text-cyan bg-navy-light' : 'text-steel hover:text-white hover:bg-navy-light'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="bg-navy py-16">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-border-dark">
            {filtered.map(product => (
              <button
                key={product.title}
                onClick={() => navigate('quote')}
                className="bg-navy-mid text-left group hover:bg-navy-light transition-colors duration-200"
              >
                <div className="aspect-[4/3] overflow-hidden bg-navy relative">
                  <img
                    src={`https://images.unsplash.com/${product.img}?w=500&h=375&fit=crop&auto=format`}
                    alt={product.title}
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 font-mono text-[8px] text-cyan border border-cyan/30 px-2 py-1 bg-navy/70 uppercase tracking-wider">
                    {product.tag}
                  </div>
                </div>
                <div className="p-5">
                  <div className="font-mono text-[8px] text-steel uppercase tracking-widest mb-1.5">{product.prog}</div>
                  <h3 className="font-display font-bold text-white text-lg uppercase leading-tight mb-2 group-hover:text-cyan transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-steel text-xs leading-relaxed mb-4">{product.desc}</p>
                  <div className="border-t border-border-dark pt-3 grid grid-cols-2 gap-2">
                    {product.specs.slice(0, 4).map(([k, v]) => (
                      <div key={k}>
                        <div className="font-mono text-[7px] text-steel/60 uppercase tracking-wider">{k}</div>
                        <div className="font-mono text-[9px] text-white mt-0.5">{v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-steel">No products in this category yet.</div>
          )}
        </div>
      </section>

      {/* Custom capability note */}
      <section className="bg-blue py-16">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-white text-4xl uppercase mb-4">
                Custom Manufacturing for Your Program
              </h2>
              <p className="text-white/70 leading-relaxed">
                Not all programs fit a catalog. Our engineering team works directly from your drawings, specifications, and MRD to develop a manufacturing plan tailored to your program requirements, quality standards, and delivery schedule.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => navigate('quote')} className="bg-white text-blue hover:bg-off font-medium text-sm px-7 py-4 flex items-center gap-2 transition-colors">
                Submit RFQ <AR />
              </button>
              <button onClick={() => navigate('capabilities')} className="border border-white/30 text-white hover:bg-white/10 font-medium text-sm px-7 py-4 transition-colors">
                View Capabilities
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
