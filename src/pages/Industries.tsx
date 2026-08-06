import type { Page } from '../App'

interface Props { navigate: (page: Page) => void }

function AR() {
  return <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
}

const industries = [
  {
    id: '01',
    title: 'Commercial Aviation',
    sub: 'Narrowbody & Widebody Programs',
    img: 'photo-1674897537555',
    desc: 'We supply certified airframe structures, interior structural components, and precision machined parts to Tier-1 suppliers of major commercial aircraft programs. Our AS9100D-controlled processes and proven delivery performance make us a reliable Tier-2 partner.',
    programs: ['A320neo family (CFM LEAP components)', 'B737 MAX nacelle structures', 'Regional jet (ATR, Embraer) brackets', 'Business jet (Bombardier, Gulfstream) panels'],
    stats: [['Tier-1 Customers', '12+'], ['Parts On-Program', '480+'], ['On-Time Rate', '98.9%']],
  },
  {
    id: '02',
    title: 'Defense & Military',
    sub: 'Mission-Critical Aerospace Systems',
    img: 'photo-1520870121499',
    desc: 'Defense programs demand absolute precision and zero tolerance for failure. We are DGCA-approved and work within ITAR-compliant processes for defense-classified components. Our experience spans fighter aircraft, surveillance systems, and missile programs.',
    programs: ['LCA Tejas Mk1A structural components (HAL)', 'MALE/HALE UAV airframe structures', 'Short-range missile body sections', 'Defense helicopter (ALH Dhruv) brackets'],
    stats: [['Defense Programs', '8 active'], ['Classified Parts', 'ITAR Ready'], ['Defect Escapes', 'Zero']],
  },
  {
    id: '03',
    title: 'Space & Satellites',
    sub: 'Launch Vehicles & Orbital Platforms',
    img: 'photo-1469289759076',
    desc: 'Space hardware operates in the harshest environment imaginable. Our ultra-clean assembly bays, CFRP composite capability, and high-precision machining make us a trusted supplier for small satellite structures, launch vehicle components, and ground support equipment.',
    programs: ['Small satellite (50–500kg class) primary structure', 'ISRO PSLV secondary payload adapters', 'OneWeb-class constellation panels', 'Space debris mitigation hardware'],
    stats: [['Space Programs', '4 active'], ['Clean Class', 'ISO 7 Cleanroom'], ['Mass Accuracy', '<0.5% target']],
  },
  {
    id: '04',
    title: 'Helicopter & Rotorcraft',
    sub: 'Structural & Dynamic Components',
    img: 'photo-1540575861501',
    desc: 'Rotorcraft require a unique combination of lightweight structures and high-fatigue-life components. We manufacture tail boom structures, airframe frames, composite rotor fairings, and precision machined dynamic components for civil and military helicopter programs.',
    programs: ['ALH Dhruv helicopter structural frames', 'Light Utility Helicopter (LUH) components', 'Civil helicopter (AW139, EC135) accessories', 'Unmanned rotorcraft airframe structures'],
    stats: [['Helicopter OEMs', '6 customers'], ['Dynamic Parts', 'Fatigue-tested'], ['Finish', 'Epoxy primer + topcoat']],
  },
  {
    id: '05',
    title: 'UAV & Autonomous Systems',
    sub: 'Fixed-Wing, VTOL & Multirotor Platforms',
    img: 'photo-1514598800938',
    desc: 'The UAV sector demands rapid development cycles, lightweight structures, and multi-material manufacturing. We design and manufacture complete airframe structures, integrate payloads, and deliver certified platforms for defense, surveillance, and commercial applications.',
    programs: ['MALE-class fixed-wing surveillance UAV', 'VTOL cargo delivery platform', 'Tactical mini-UAV strike airframe', 'Agricultural spray multirotor structure'],
    stats: [['UAV Programs', '11 delivered'], ['Lightest Platform', '3.2 kg MTOW'], ['Max Wingspan', '5.8 m']],
  },
  {
    id: '06',
    title: 'MRO & Aftermarket',
    sub: 'Repair, Overhaul & Spare Parts',
    img: 'photo-1598621961279',
    desc: 'Aircraft don\'t stop needing parts once they enter service. Our DGCA-approved maintenance organization provides certified repair, overhaul, and spare parts supply for structural components, machined parts, and composite panels across commercial and military fleets.',
    programs: ['Structural repair per SRM', 'Composite repair (wet layup, prepreg)', 'Machined spare parts on-demand', 'AOG expedite capability'],
    stats: [['DGCA Approval', 'MOA-2021-0042'], ['AOG Response', '<72 hrs'], ['Repair Programs', '35+ types']],
  },
]

export default function Industries({ navigate }: Props) {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-50" />
        <div className="relative max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="font-mono text-[9px] text-steel uppercase tracking-widest mb-6 flex items-center gap-2">
            <button onClick={() => navigate('home')} className="hover:text-cyan transition-colors">Home</button>
            <span>/</span>
            <span className="text-cyan">Industries</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-cyan" />
            <span className="font-mono text-[10px] text-cyan uppercase tracking-[0.2em]">Industries Served</span>
          </div>
          <h1 className="font-display font-black text-white text-5xl lg:text-7xl uppercase leading-none tracking-tight mb-6">
            Serving Critical<br />Sectors Globally
          </h1>
          <p className="text-steel max-w-2xl text-lg leading-relaxed">
            Six industry verticals where precision, reliability, and quality are not optional — they are mission requirements. We are trusted by leading organizations in each.
          </p>
        </div>
      </section>

      {/* Industry detail sections */}
      {industries.map((ind, i) => (
        <section key={ind.id} className={`py-24 ${i % 2 === 0 ? 'bg-off' : 'bg-navy'}`}>
          <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
            <div className={`grid lg:grid-cols-2 gap-16 items-start ${i % 2 !== 0 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              {/* Image */}
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/${ind.img}?w=800&h=600&fit=crop&auto=format`}
                    alt={ind.title}
                    className={`w-full h-full object-cover transition-transform duration-700 hover:scale-105 ${i % 2 === 0 ? 'opacity-85' : 'opacity-70'}`}
                  />
                  {i % 2 !== 0 && <div className="absolute inset-0 bg-gradient-to-r from-navy/40 to-transparent" />}
                </div>
                <div className="absolute top-4 left-4 font-mono text-[9px] text-cyan border border-cyan/30 px-3 py-1.5 bg-navy/80 uppercase tracking-widest">
                  {ind.id} / {ind.sub}
                </div>
                {/* Stat chips at bottom */}
                <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 gap-px bg-border-dark">
                  {ind.stats.map(([label, val]) => (
                    <div key={label} className={`p-3 text-center ${i % 2 === 0 ? 'bg-navy/90' : 'bg-navy-mid/90'} backdrop-blur`}>
                      <div className="font-display font-bold text-cyan text-lg">{val}</div>
                      <div className="font-mono text-[8px] text-steel mt-0.5 tracking-wider">{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="font-mono text-[9px] text-cyan uppercase tracking-widest mb-3">Industry {ind.id}</div>
                <h2 className={`font-display font-bold text-4xl lg:text-5xl uppercase leading-tight mb-3 ${i % 2 === 0 ? 'text-navy' : 'text-white'}`}>
                  {ind.title}
                </h2>
                <p className={`font-mono text-[11px] uppercase tracking-wider mb-6 ${i % 2 === 0 ? 'text-blue' : 'text-cyan'}`}>{ind.sub}</p>
                <p className={`leading-relaxed mb-8 ${i % 2 === 0 ? 'text-mid' : 'text-steel'}`}>{ind.desc}</p>
                <div className={`mb-8 border-l-2 pl-5 ${i % 2 === 0 ? 'border-blue' : 'border-cyan'}`}>
                  <div className={`font-mono text-[9px] uppercase tracking-widest mb-3 ${i % 2 === 0 ? 'text-steel' : 'text-steel/60'}`}>Representative Programs</div>
                  <ul className="space-y-2">
                    {ind.programs.map(p => (
                      <li key={p} className={`text-sm flex items-start gap-2 ${i % 2 === 0 ? 'text-mid' : 'text-steel'}`}>
                        <div className={`w-1 h-1 mt-2 shrink-0 ${i % 2 === 0 ? 'bg-blue' : 'bg-cyan/60'}`} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => navigate('quote')}
                  className={`flex items-center gap-2 font-medium text-sm px-7 py-3.5 transition-colors ${
                    i % 2 === 0 ? 'bg-navy hover:bg-navy-light text-white' : 'bg-blue hover:bg-blue-light text-white'
                  }`}
                >
                  Request a Quote <AR />
                </button>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-blue py-20">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h2 className="font-display font-bold text-white text-4xl uppercase">Your Industry. Our Capability.</h2>
            <p className="text-white/70 mt-2 max-w-lg">Every aerospace sector has unique demands. Let our engineering team show you how we meet yours.</p>
          </div>
          <div className="flex gap-4">
            <button onClick={() => navigate('quote')} className="bg-white text-blue hover:bg-off font-medium text-sm px-7 py-4 flex items-center gap-2 transition-colors">
              Submit RFQ <AR />
            </button>
            <button onClick={() => navigate('contact')} className="border border-white/30 text-white hover:bg-white/10 font-medium text-sm px-7 py-4 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
