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

const caps = [
  {
    id: '01',
    title: '5-Axis CNC Machining',
    tagline: 'Sub-micron precision on complex aerospace geometries',
    desc: 'Our 5-axis machining center operates a fleet of 18 DMU-series machines capable of complete part machining in a single setup. We routinely produce complex aerospace geometries in titanium, Inconel, aluminium alloys, and stainless steel to tolerances of ±0.005mm.',
    img: 'photo-1740209475472',
    specs: [
      ['Machines', '18 × DMU 85 / 125 monoBLOCK'],
      ['Work Envelope', 'Up to 1500 × 1000 × 700mm'],
      ['Spindle Speed', 'Up to 18,000 RPM'],
      ['Positioning Accuracy', '±0.002mm'],
      ['Materials', 'Ti-6Al-4V, Inconel 718, 7075-T6, 15-5PH'],
      ['Programming', 'CATIA V5 / NX CAM'],
    ],
    items: ['Complex multi-face machining in single setup', 'In-process probing and auto-compensation', 'DCC CMM verification post-machining', 'Full 3D model-based definition (MBD) workflow'],
  },
  {
    id: '02',
    title: 'Sheet Metal Fabrication',
    tagline: 'Precision forming of aerostructure panels and assemblies',
    desc: 'Our sheet metal shop combines high-power fiber laser cutting, CNC press brakes, and hydroforming to produce complex formed panels, brackets, skins, and enclosures to tight aerospace tolerances.',
    img: 'photo-1666618090858',
    specs: [
      ['Laser Cutting', '6kW fiber laser, 4000 × 2000mm'],
      ['Forming', 'CNC press brake, 300T capacity'],
      ['Hydroforming', 'Up to 10,000 psi fluid pressure'],
      ['Thickness Range', '0.4mm to 12mm'],
      ['Materials', 'Al 2024, 7075, Ti sheet, CRES'],
      ['Welding', 'TIG, MIG, plasma, resistance'],
    ],
    items: ['Flat pattern development from CATIA models', 'Matched-hole drilling and edge preparation', 'Sealant application per AMS 2270', 'Full dimensional report to drawing'],
  },
  {
    id: '03',
    title: 'Composite Manufacturing',
    tagline: 'CFRP and hybrid composite structures for primary aerostructures',
    desc: 'Our composite shop is equipped with a 4-meter autoclave, out-of-autoclave (OOA) cure capability, and a temperature-controlled lay-up room. We manufacture primary and secondary composite structures from pre-preg and wet layup processes.',
    img: 'photo-1469289759076',
    specs: [
      ['Autoclave', '4m × 2m, 8 bar, 200°C'],
      ['OOA Capability', 'LRTM, RTM, VARI processes'],
      ['Materials', 'Toray, Hexcel, SGL CFRP pre-preg'],
      ['NDT Post-Cure', 'Ultrasonic C-scan, radiography'],
      ['Cores', 'Nomex, aluminium honeycomb, foam'],
      ['Surface Finish', 'Class A to flight quality'],
    ],
    items: ['Autoclave cure per OEM material specs', 'Controlled lay-up room at 18°C, <50% RH', 'Post-cure bond integrity by UT C-scan', 'Co-cured and co-bonded assemblies'],
  },
  {
    id: '04',
    title: 'Assembly & Integration',
    tagline: 'Structural and systems assembly of complex multi-part assemblies',
    desc: 'Our assembly bay handles structural assembly of large aerostructure kits and systems integration of complex multi-part assemblies. We work from engineering data packages, tooling concepts, and ICD documents to deliver complete assemblies ready for functional test.',
    img: 'photo-1598621961279',
    specs: [
      ['Bay Area', '3 × 1,200 sq m assembly bays'],
      ['Tooling', 'Custom jigs, fixtures, drill templates'],
      ['Fastening', 'Lockbolt, Hi-Lok, blind rivet, NAS'],
      ['Sealing', 'PR-1776, EC-776, AMS 2270'],
      ['Interfaces', 'Shim fitting, spot-facing, reaming'],
      ['Documentation', 'Full IPC / traveler traceability'],
    ],
    items: ['AS9102 First Article Inspection (FAI)', 'Matched-drill assembly processes', 'Interface fit verification and shimming', 'Electrical bonding and continuity checks'],
  },
  {
    id: '05',
    title: 'Surface Treatment',
    tagline: 'NADCAP-accredited coatings and surface finishing',
    desc: 'Our NADCAP-accredited surface treatment plant provides a full range of aerospace-qualified coatings and finishing processes. Every process is controlled to MIL, AMS, and customer-specific specifications with full traceability.',
    img: 'photo-1666634157070',
    specs: [
      ['Anodizing', 'Type I, II, III hard anodize'],
      ['Chemical Film', 'Alodine 1200S, TCP process'],
      ['Thermal Spray', 'HVOF, plasma spray WC-Co, Al2O3'],
      ['Primer', 'Epoxy primer per MIL-PRF-23377'],
      ['Topcoat', 'Polyurethane, MIL-PRF-85285'],
      ['Accreditation', 'NADCAP Heat Treatment & NDT'],
    ],
    items: ['Full process control documentation', 'Test panels per every batch', 'Thickness measurement and adhesion test', 'Certificate of conformance with every order'],
  },
  {
    id: '06',
    title: 'NDT & CMM Inspection',
    tagline: 'Zero-compromise dimensional verification and NDE',
    desc: 'Our quality lab is equipped with a Zeiss Contura CMM, X-ray radiography, ultrasonic immersion testing, eddy current, and liquid penetrant inspection. All critical features are verified to part drawing and engineering specification.',
    img: 'photo-1581091212991',
    specs: [
      ['CMM', 'Zeiss Contura G2 RDS, 700×700×600mm'],
      ['X-Ray', 'Real-time digital radiography, 320kV'],
      ['UT Immersion', 'Olympus Panametrics, 1–25 MHz'],
      ['Eddy Current', 'Olympus OmniScan MX2'],
      ['Penetrant', 'Level III PT/MT technicians'],
      ['Accreditation', 'NADCAP NDT accreditation'],
    ],
    items: ['First Article Inspection to AS9102', 'In-process SPC statistical control', 'GD&T measurement per ASME Y14.5', '100% dimensional verification on first articles'],
  },
]

export default function Capabilities({ navigate }: Props) {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-50" />
        <div className="relative max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="font-mono text-[9px] text-steel uppercase tracking-widest mb-6 flex items-center gap-2">
            <button onClick={() => navigate('home')} className="hover:text-cyan transition-colors">Home</button>
            <span>/</span>
            <span className="text-cyan">Capabilities</span>
          </div>
          <SL text="Manufacturing Capabilities" />
          <h1 className="font-display font-black text-white text-5xl lg:text-7xl uppercase leading-none tracking-tight mb-6">
            Precision At<br />Every Process
          </h1>
          <p className="text-steel max-w-2xl text-lg leading-relaxed">
            Six integrated manufacturing capabilities — all under AS9100D quality control, all configured for the specific demands of aerospace-grade production.
          </p>
        </div>
      </section>

      {/* Quick nav */}
      <section className="bg-navy-mid border-b border-border-dark">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="flex items-center gap-0 overflow-x-auto">
            {caps.map(c => (
              <a key={c.id} href={`#cap-${c.id}`} className="shrink-0 font-mono text-[9px] text-steel hover:text-cyan uppercase tracking-widest px-4 py-4 border-r border-border-dark hover:bg-navy-light transition-colors">
                {c.id} {c.title.split(' ').slice(0, 2).join(' ')}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Capability detail sections */}
      {caps.map((cap, i) => (
        <section
          key={cap.id}
          id={`cap-${cap.id}`}
          className={`py-24 ${i % 2 === 0 ? 'bg-navy' : 'bg-off'}`}
        >
          <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
            <div className={`grid lg:grid-cols-2 gap-16 items-start ${i % 2 !== 0 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <div>
                <div className="font-mono text-[9px] text-cyan uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="text-steel/50">{cap.id}</span>
                  <div className="w-8 h-px bg-cyan/30" />
                  Capability
                </div>
                <h2 className={`font-display font-bold text-4xl lg:text-5xl uppercase leading-tight mb-2 ${i % 2 === 0 ? 'text-white' : 'text-navy'}`}>
                  {cap.title}
                </h2>
                <p className={`font-mono text-[11px] uppercase tracking-widest mb-6 ${i % 2 === 0 ? 'text-cyan' : 'text-blue'}`}>{cap.tagline}</p>
                <p className={`leading-relaxed mb-8 ${i % 2 === 0 ? 'text-steel' : 'text-mid'}`}>{cap.desc}</p>

                {/* Spec table */}
                <div className={`border ${i % 2 === 0 ? 'border-border-dark' : 'border-border-light'} mb-8`}>
                  {cap.specs.map(([k, v], j) => (
                    <div key={k} className={`flex items-start gap-4 px-4 py-3 ${j % 2 === 0 ? (i % 2 === 0 ? 'bg-navy-mid' : 'bg-off-dark') : ''} border-b last:border-0 ${i % 2 === 0 ? 'border-border-dark' : 'border-border-light'}`}>
                      <div className={`font-mono text-[10px] uppercase tracking-wider w-32 shrink-0 ${i % 2 === 0 ? 'text-steel/60' : 'text-mid/60'}`}>{k}</div>
                      <div className={`font-mono text-[11px] ${i % 2 === 0 ? 'text-white' : 'text-navy'}`}>{v}</div>
                    </div>
                  ))}
                </div>

                {/* Key items */}
                <ul className="space-y-2 mb-8">
                  {cap.items.map(item => (
                    <li key={item} className={`flex items-start gap-3 text-sm ${i % 2 === 0 ? 'text-steel' : 'text-mid'}`}>
                      <div className="w-4 h-4 border border-cyan flex items-center justify-center shrink-0 mt-0.5">
                        <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 text-cyan" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M2 6l3 3 5-5" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <button onClick={() => navigate('quote')} className={`flex items-center gap-2 font-medium text-sm px-7 py-3.5 transition-colors ${i % 2 === 0 ? 'bg-blue hover:bg-blue-light text-white' : 'bg-navy hover:bg-navy-light text-white'}`}>
                  Request Capability Quote <AR />
                </button>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden bg-navy">
                  <img
                    src={`https://images.unsplash.com/${cap.img}?w=800&h=600&fit=crop&auto=format`}
                    alt={cap.title}
                    className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className={`absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 ${i % 2 === 0 ? 'border-cyan/60' : 'border-blue/60'}`} />
                <div className={`absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 ${i % 2 === 0 ? 'border-cyan/60' : 'border-blue/60'}`} />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-navy py-20 blueprint-grid">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 text-center">
          <h2 className="font-display font-bold text-white text-5xl uppercase mb-4">Ready to Manufacture?</h2>
          <p className="text-steel max-w-lg mx-auto mb-8">Submit your drawings and specifications for a technical and commercial proposal within 48 hours.</p>
          <div className="flex items-center justify-center gap-4">
            <button onClick={() => navigate('quote')} className="bg-cyan hover:bg-cyan/90 text-navy font-bold text-sm px-8 py-4 flex items-center gap-2 transition-colors">
              Request a Quote <AR />
            </button>
            <button onClick={() => navigate('contact')} className="border border-white/20 text-white hover:bg-white/5 font-medium text-sm px-8 py-4 transition-colors">
              Talk to Our Engineers
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
