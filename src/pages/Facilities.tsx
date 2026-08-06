import type { Page } from '../App'

interface Props { navigate: (page: Page) => void }

function AR() {
  return <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
}

const bays = [
  { num: '01', name: 'CNC Machining Bay', area: '12,000 sq ft', machines: '18 CNC machines', img: 'photo-1740209475472', detail: '5-axis DMU-series machining centers, in-process Renishaw probing, swarf management, and climate-controlled environment for tight-tolerance work.' },
  { num: '02', name: 'Sheet Metal Shop', area: '6,000 sq ft', machines: '6 kW fiber laser, CNC press brake', img: 'photo-1666618090858', detail: 'Dedicated sheet metal fabrication area with laser cutting, press braking, hydroforming cell, and MIG/TIG welding stations.' },
  { num: '03', name: 'Composite Manufacturing', area: '4,500 sq ft', machines: '4m autoclave, OOA cure', img: 'photo-1469289759076', detail: 'Temperature-controlled lay-up room (18°C, <50% RH), 4-meter autoclave, vacuum bagging stations, and post-cure trimming area.' },
  { num: '04', name: 'Assembly Bays', area: '8,000 sq ft', machines: '3 × dedicated bays', img: 'photo-1581091212991', detail: 'Three 2,600 sq ft structural assembly bays with overhead gantry cranes, assembly jigs, drill templates, and sealant application stations.' },
  { num: '05', name: 'Surface Treatment Plant', area: '5,000 sq ft', machines: 'NADCAP-accredited', img: 'photo-1598621961279', detail: 'NADCAP-accredited surface treatment facility including anodizing tanks (Type I, II, III), chemical conversion, HVOF thermal spray, and spray painting booth.' },
  { num: '06', name: 'Quality & Metrology Lab', area: '2,500 sq ft', machines: 'Zeiss CMM + NDT', img: 'photo-1713371398484', detail: 'Climate-controlled metrology laboratory with Zeiss Contura CMM, digital X-ray, phased array UT, eddy current, and liquid penetrant inspection stations.' },
]

export default function Facilities({ navigate }: Props) {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-20 overflow-hidden min-h-[70vh] flex items-end">
        <img src="https://images.unsplash.com/photo-1740209475472-aa7d280f7452?w=1920&h=900&fit=crop&auto=format" alt="Manufacturing facility" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy" />
        <div className="relative max-w-[1440px] mx-auto w-full px-6 xl:px-12 pb-20 pt-32">
          <div className="font-mono text-[9px] text-steel uppercase tracking-widest mb-6 flex items-center gap-2">
            <button onClick={() => navigate('home')} className="hover:text-cyan transition-colors">Home</button>
            <span>/</span>
            <span className="text-cyan">Facilities</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-cyan" />
            <span className="font-mono text-[10px] text-cyan uppercase tracking-[0.2em]">Our Facilities</span>
          </div>
          <h1 className="font-display font-black text-white text-5xl lg:text-7xl uppercase leading-none tracking-tight mb-6">
            45,000 Sq Ft of<br />Advanced<br />Manufacturing
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-border-dark mt-10">
            {[
              { val: '45,000', unit: 'Sq Ft', label: 'Total Facility Area' },
              { val: '38', unit: 'Machines', label: 'CNC & Fabrication' },
              { val: '3', unit: 'Autoclaves', label: 'Composite Cure' },
              { val: 'TSIIC', unit: 'Location', label: 'Aerospace Park, Hyd' },
            ].map(s => (
              <div key={s.label}>
                <div className="font-display font-black text-white text-4xl">{s.val}</div>
                <div className="font-mono text-[9px] text-cyan mt-1 uppercase tracking-widest">{s.unit}</div>
                <div className="font-mono text-[9px] text-steel/70 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-off py-16 border-b border-border-light">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-blue" />
                <span className="font-mono text-[10px] text-blue uppercase tracking-[0.2em]">Location</span>
              </div>
              <h2 className="font-display font-bold text-navy text-3xl uppercase mb-4">TSIIC Aerospace Park, Hyderabad</h2>
              <p className="text-mid leading-relaxed max-w-xl">
                Located at TSIIC Aerospace Park in Adibatla, Hyderabad — India's designated aerospace manufacturing cluster under the National Civil Aviation Policy. The park provides dedicated infrastructure, uninterrupted power, and direct highway access for oversize cargo movements.
              </p>
            </div>
            <div className="space-y-4">
              {[
                ['Address', 'Plot 42, TSIIC Aerospace Park, Adibatla, Hyderabad — 501506'],
                ['Nearest Airport', 'Rajiv Gandhi International Airport, 22 km'],
                ['Road Access', 'NH-44, 8 km from Outer Ring Road'],
                ['Power Supply', '3-phase, 1MW dedicated feeder'],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="font-mono text-[9px] text-steel uppercase tracking-wider mb-1">{k}</div>
                  <div className="text-sm text-mid">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bay by bay */}
      <section className="bg-navy py-24">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-cyan" />
            <span className="font-mono text-[10px] text-cyan uppercase tracking-[0.2em]">Facility Tour</span>
          </div>
          <h2 className="font-display font-bold text-white text-4xl lg:text-5xl uppercase leading-tight mb-14">
            Six Integrated<br />Manufacturing Areas
          </h2>

          <div className="space-y-px">
            {bays.map((bay, i) => (
              <div key={bay.num} className={`grid lg:grid-cols-2 gap-0 group ${i % 2 === 0 ? '' : 'lg:[&>*:first-child]:order-2'}`}>
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={`https://images.unsplash.com/${bay.img}?w=800&h=450&fit=crop&auto=format`}
                    alt={bay.name}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4 font-mono text-[9px] text-cyan uppercase tracking-widest border border-cyan/30 px-2 py-1 bg-navy/70 backdrop-blur">
                    Bay {bay.num}
                  </div>
                </div>
                <div className="bg-navy-mid p-10 lg:p-14 flex flex-col justify-center">
                  <div className="font-mono text-[9px] text-steel uppercase tracking-widest mb-2">{bay.area} · {bay.machines}</div>
                  <h3 className="font-display font-bold text-white text-3xl uppercase mb-4">{bay.name}</h3>
                  <p className="text-steel leading-relaxed">{bay.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion */}
      <section className="bg-blue py-20">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="font-mono text-[9px] text-white/50 uppercase tracking-widest mb-3">Phase 3 — 2025/26</div>
              <h2 className="font-display font-bold text-white text-4xl uppercase mb-4">
                Expanding to 80,000 Sq Ft
              </h2>
              <p className="text-white/70 leading-relaxed">
                Phase 3 expansion will add a dedicated defense manufacturing wing, a second autoclave, 10 additional CNC machining centers, and a Class 1000 cleanroom for satellite assembly.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '80K', label: 'Total Sq Ft Post Expansion' },
                { val: '+10', label: 'New CNC Machines' },
                { val: '1 × 6m', label: 'New Autoclave' },
                { val: '2026', label: 'Target Completion' },
              ].map(s => (
                <div key={s.label} className="border border-white/20 p-5">
                  <div className="font-display font-bold text-white text-3xl">{s.val}</div>
                  <div className="font-mono text-[9px] text-white/60 mt-1 uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 text-center">
          <h2 className="font-display font-bold text-white text-4xl uppercase mb-4">Schedule a Facility Visit</h2>
          <p className="text-steel max-w-md mx-auto mb-8">We welcome OEM quality audits, customer site visits, and supplier qualification assessments.</p>
          <button onClick={() => navigate('contact')} className="bg-blue hover:bg-blue-light text-white font-medium text-sm px-8 py-4 flex items-center gap-2 mx-auto transition-colors">
            Request a Visit <AR />
          </button>
        </div>
      </section>
    </div>
  )
}
