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

const certs = [
  { code: 'AS9100D', name: 'Aerospace Quality Management System', body: 'Bureau Veritas Certification', scope: 'Design, manufacture and supply of precision aerospace components', year: '2019', renewal: '2025' },
  { code: 'ISO 9001:2015', name: 'Quality Management Systems', body: 'TÜV Rheinland India', scope: 'Manufacturing of precision machined, fabricated and composite components', year: '2020', renewal: '2026' },
  { code: 'NADCAP', name: 'Special Process Accreditation', body: 'Performance Review Institute (PRI)', scope: 'Heat Treatment, Non-Destructive Testing (UT, RT, PT, MT)', year: '2021', renewal: 'Rolling 18-month' },
  { code: 'DGCA MOA', name: 'Maintenance Organization Approval', body: 'Directorate General of Civil Aviation', scope: 'Structural repair and component overhaul for CAR 145 operations', year: '2021', renewal: '2027' },
]

const processes = [
  { step: '01', title: 'Contract Review & DFM', desc: 'Every new part number goes through Design for Manufacturability review, drawing interpretation, and FMEA before a single chip is cut.' },
  { step: '02', title: 'Incoming Material Inspection', desc: 'All raw materials verified to mill certificate, chemical composition, and mechanical properties before release to production.' },
  { step: '03', title: 'In-Process Control (SPC)', desc: 'Statistical Process Control applied to critical characteristics with real-time monitoring and automatic hold triggers.' },
  { step: '04', title: 'First Article Inspection', desc: 'AS9102 FAI completed on every new part and after any significant process change. Full ballooned drawing and measurement record.' },
  { step: '05', title: 'CMM & NDT Verification', desc: 'Zeiss CMM dimensional verification and NADCAP-accredited NDT (UT, RT, PT, MT) before any delivery.' },
  { step: '06', title: 'Certificate of Conformance', desc: 'Every shipment is accompanied by a CoC, material certifications, test reports, and full traceability to serial number or lot.' },
]

export default function Quality({ navigate }: Props) {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-50" />
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1666634157070-6fd830fb5672?w=1920&h=700&fit=crop&auto=format" alt="Quality inspection" className="w-full h-full object-cover opacity-[0.08]" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/40 to-navy" />
        </div>
        <div className="relative max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="font-mono text-[9px] text-steel uppercase tracking-widest mb-6 flex items-center gap-2">
            <button onClick={() => navigate('home')} className="hover:text-cyan transition-colors">Home</button>
            <span>/</span>
            <span className="text-cyan">Quality</span>
          </div>
          <SL text="Quality Assurance" />
          <h1 className="font-display font-black text-white text-5xl lg:text-7xl uppercase leading-none tracking-tight mb-6">
            Zero Defect.<br />Zero Compromise.
          </h1>
          <p className="text-steel max-w-2xl text-lg leading-relaxed">
            Our Quality Management System isn't a department — it's embedded in every process, every decision, and every part we deliver.
          </p>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="bg-blue py-16">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="max-w-3xl">
            <div className="font-mono text-[9px] text-white/50 uppercase tracking-widest mb-4">Quality Policy Statement</div>
            <blockquote className="font-display font-bold text-white text-2xl lg:text-3xl uppercase leading-snug">
              "Igniting Minds Aerospace is committed to delivering aerospace components that meet or exceed customer, statutory, and regulatory requirements — on time, every time, through continuous improvement of our Quality Management System."
            </blockquote>
            <div className="mt-6 font-mono text-[10px] text-white/60">— Vikram Reddy, CEO, Igniting Minds Aerospace</div>
          </div>
        </div>
      </section>

      {/* Key metrics */}
      <section className="bg-off py-20">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border-light">
            {[
              { val: '<0.1%', label: 'Rejection Rate', sub: '2023 Production Data' },
              { val: '0.005mm', label: 'Finest Tolerance', sub: 'CMM Verified' },
              { val: '100%', label: 'FAI Compliance', sub: 'Per AS9102' },
              { val: '0', label: 'Customer Escapes', sub: 'Since NADCAP Accreditation' },
            ].map(stat => (
              <div key={stat.label} className="bg-off p-8 lg:p-10">
                <div className="font-display font-black text-blue text-4xl lg:text-5xl mb-2">{stat.val}</div>
                <div className="font-mono text-[10px] text-navy uppercase tracking-widest">{stat.label}</div>
                <div className="font-mono text-[9px] text-mid/60 mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-navy py-24">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <SL text="Certifications & Accreditations" />
          <h2 className="font-display font-bold text-white text-4xl lg:text-5xl uppercase leading-tight mb-14">
            Globally Recognized<br />Standards
          </h2>
          <div className="grid lg:grid-cols-2 gap-px bg-border-dark">
            {certs.map(cert => (
              <div key={cert.code} className="bg-navy-mid p-8 hover:bg-navy-light transition-colors">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="font-display font-bold text-cyan text-3xl uppercase">{cert.code}</div>
                    <div className="font-mono text-[10px] text-steel mt-1 tracking-wider">{cert.name}</div>
                  </div>
                  <div className="border border-cyan/30 px-3 py-2 text-center shrink-0">
                    <div className="font-mono text-[8px] text-steel uppercase tracking-wider">Issued</div>
                    <div className="font-mono text-[11px] text-cyan mt-0.5">{cert.year}</div>
                  </div>
                </div>
                <div className="space-y-2.5">
                  {[
                    ['Certifying Body', cert.body],
                    ['Scope', cert.scope],
                    ['Next Renewal', cert.renewal],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-start gap-3">
                      <div className="font-mono text-[9px] text-steel/60 uppercase tracking-wider w-24 shrink-0 pt-0.5">{k}</div>
                      <div className="font-mono text-[11px] text-white">{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="bg-off py-24">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <SL text="Quality Process" />
          <h2 className="font-display font-bold text-navy text-4xl lg:text-5xl uppercase leading-tight mb-14">
            Built In, Not<br />Inspected In
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border-light">
            {processes.map(p => (
              <div key={p.step} className="bg-off p-8 hover:bg-off-dark transition-colors">
                <div className="font-mono text-[11px] text-blue font-semibold mb-4">{p.step}</div>
                <h3 className="font-display font-bold text-navy text-xl uppercase mb-3">{p.title}</h3>
                <p className="text-mid text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="bg-navy py-24">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SL text="Metrology Equipment" />
              <h2 className="font-display font-bold text-white text-4xl uppercase leading-tight mb-6">
                State-of-the-Art<br />Verification Lab
              </h2>
              <p className="text-steel leading-relaxed mb-8">
                Our metrology lab is equipped with the latest CMM and NDT equipment, all calibrated to NABL-accredited laboratories and traceable to national measurement standards.
              </p>
              <div className="space-y-3">
                {[
                  ['Zeiss Contura G2 RDS CMM', '700 × 700 × 600mm, ±0.001mm accuracy'],
                  ['Olympus OmniScan MX2', 'Phased array UT, eddy current'],
                  ['GE Inspection X-Ray', '320kV digital radiography'],
                  ['Faro Quantum Arm', 'Portable CMM, 1.2m reach, ±0.025mm'],
                  ['Vision Measuring System', 'Video metrology, 2D profiles'],
                  ['Surface Roughness Tester', 'Mitutoyo SJ-210, Ra to 0.005μm'],
                ].map(([eq, spec]) => (
                  <div key={eq} className="flex items-start gap-4 border-b border-border-dark pb-3">
                    <div className="w-1.5 h-1.5 bg-cyan mt-2 shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-white">{eq}</div>
                      <div className="font-mono text-[10px] text-steel mt-0.5">{spec}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden">
              <img src="https://images.unsplash.com/photo-1713371398484-cc4e4f6a262a?w=700&h=700&fit=crop&auto=format" alt="CMM inspection" className="w-full h-full object-cover opacity-75" />
              <div className="absolute inset-0 bg-gradient-to-tl from-navy/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue py-20">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-display font-bold text-white text-4xl uppercase">Download Quality Certifications</h2>
            <p className="text-white/70 mt-2">Access current certificates, quality manual, and audit reports.</p>
          </div>
          <div className="flex gap-4">
            <button onClick={() => navigate('quote')} className="bg-white text-blue hover:bg-off font-medium text-sm px-7 py-4 flex items-center gap-2 transition-colors">
              Request Documents <AR />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
