import { useState } from 'react'
import type { Page } from '../App'

interface Props { navigate: (page: Page) => void }

type Step = 1 | 2 | 3 | 4

const stepLabels = [
  { n: 1, label: 'Contact Details' },
  { n: 2, label: 'Program Requirements' },
  { n: 3, label: 'Part Information' },
  { n: 4, label: 'Review & Submit' },
]

export default function RequestQuote({ navigate }: Props) {
  const [step, setStep] = useState<Step>(1)
  const [submitted, setSubmitted] = useState(false)

  const [contact, setContact] = useState({ name: '', title: '', company: '', country: '', email: '', phone: '' })
  const [program, setProgram] = useState({ industry: '', program: '', platform: '', deliveryDate: '', quantity: '', currency: 'USD', budget: '', exportControl: '', notes: '' })
  const [parts, setParts] = useState({ partNumber: '', partName: '', material: '', process: '', tolerance: '', finish: '', qty: '', drawingRev: '', hasDwg: 'yes' })

  const inputClass = "w-full bg-navy border border-border-dark px-4 py-3 text-sm text-white placeholder-steel/40 focus:outline-none focus:border-cyan transition-colors"
  const labelClass = "font-mono text-[9px] text-steel uppercase tracking-widest block mb-2"
  const selectClass = `${inputClass} appearance-none cursor-pointer`

  const next = () => { if (step < 4) setStep((step + 1) as Step) }
  const prev = () => { if (step > 1) setStep((step - 1) as Step) }
  const submit = () => setSubmitted(true)

  if (submitted) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center px-6 pt-20">
        <div className="max-w-lg w-full text-center">
          <div className="w-16 h-16 border border-cyan flex items-center justify-center mx-auto mb-8">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-cyan" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="font-mono text-[9px] text-cyan uppercase tracking-widest mb-4">RFQ Submitted Successfully</div>
          <h1 className="font-display font-bold text-white text-5xl uppercase mb-4">Quote Request Received</h1>
          <p className="text-steel leading-relaxed mb-4">
            Thank you for your RFQ submission. Our engineering and commercial team will review your requirements and respond with a detailed technical and commercial proposal.
          </p>
          <div className="border border-border-dark p-6 mb-8">
            <div className="font-mono text-[9px] text-steel uppercase tracking-wider mb-2">Reference Number</div>
            <div className="font-display font-bold text-cyan text-3xl">RFQ-2024-{Math.floor(Math.random() * 9000) + 1000}</div>
            <div className="font-mono text-[9px] text-steel mt-2">Expected response within 48 business hours</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => navigate('home')} className="bg-blue hover:bg-blue-light text-white font-medium text-sm px-7 py-3.5 transition-colors">Return to Home</button>
            <button onClick={() => { setSubmitted(false); setStep(1) }} className="border border-border-dark text-steel hover:text-white font-medium text-sm px-7 py-3.5 transition-colors">Submit Another RFQ</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-navy min-h-screen">
      {/* Header */}
      <section className="relative pt-32 pb-12 border-b border-border-dark">
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        <div className="relative max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="font-mono text-[9px] text-steel uppercase tracking-widest mb-6 flex items-center gap-2">
            <button onClick={() => navigate('home')} className="hover:text-cyan transition-colors">Home</button>
            <span>/</span>
            <span className="text-cyan">Request a Quote</span>
          </div>
          <h1 className="font-display font-black text-white text-5xl lg:text-7xl uppercase leading-none tracking-tight mb-4">Request a Quote</h1>
          <p className="text-steel max-w-xl">Complete the form below. We respond to all RFQs within 48 business hours with a detailed technical and commercial proposal.</p>
        </div>
      </section>

      {/* Step progress */}
      <div className="border-b border-border-dark bg-navy-mid">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="flex items-stretch overflow-x-auto">
            {stepLabels.map(s => (
              <button
                key={s.n}
                onClick={() => { if (s.n < step) setStep(s.n as Step) }}
                className={`flex items-center gap-3 px-6 py-4 border-r border-border-dark shrink-0 transition-colors ${
                  s.n === step ? 'bg-blue' : s.n < step ? 'hover:bg-navy-light cursor-pointer' : 'opacity-40 cursor-default'
                }`}
              >
                <div className={`w-6 h-6 flex items-center justify-center text-xs font-mono font-semibold border ${
                  s.n < step ? 'border-cyan bg-cyan/10 text-cyan' : s.n === step ? 'border-white text-white' : 'border-border-dark text-steel'
                }`}>
                  {s.n < step ? (
                    <svg viewBox="0 0 12 12" className="w-3 h-3 text-cyan" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 6l3 3 5-5"/></svg>
                  ) : s.n}
                </div>
                <span className={`font-mono text-[9px] uppercase tracking-wider whitespace-nowrap ${s.n === step ? 'text-white' : s.n < step ? 'text-steel' : 'text-steel/50'}`}>{s.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Form body */}
      <div className="max-w-[1440px] mx-auto px-6 xl:px-12 py-16">
        <div className="max-w-3xl">

          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="font-display font-bold text-white text-3xl uppercase mb-8">Your Contact Information</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div><label className={labelClass}>Full Name *</label><input required value={contact.name} onChange={e => setContact({...contact, name: e.target.value})} type="text" placeholder="Dr. Rajesh Kumar" className={inputClass}/></div>
                <div><label className={labelClass}>Job Title *</label><input required value={contact.title} onChange={e => setContact({...contact, title: e.target.value})} type="text" placeholder="VP Engineering" className={inputClass}/></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div><label className={labelClass}>Company / Organization *</label><input required value={contact.company} onChange={e => setContact({...contact, company: e.target.value})} type="text" placeholder="Safran Aircraft Engines" className={inputClass}/></div>
                <div>
                  <label className={labelClass}>Country *</label>
                  <select required value={contact.country} onChange={e => setContact({...contact, country: e.target.value})} className={selectClass}>
                    <option value="">Select country...</option>
                    {['India', 'United States', 'United Kingdom', 'France', 'Germany', 'Japan', 'Singapore', 'UAE', 'Canada', 'Australia', 'Other'].map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div><label className={labelClass}>Email Address *</label><input required value={contact.email} onChange={e => setContact({...contact, email: e.target.value})} type="email" placeholder="r.kumar@safran.com" className={inputClass}/></div>
                <div><label className={labelClass}>Phone (with country code)</label><input value={contact.phone} onChange={e => setContact({...contact, phone: e.target.value})} type="tel" placeholder="+33 1 60 00 00 00" className={inputClass}/></div>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="font-display font-bold text-white text-3xl uppercase mb-8">Program Requirements</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Industry Sector *</label>
                  <select required value={program.industry} onChange={e => setProgram({...program, industry: e.target.value})} className={selectClass}>
                    <option value="">Select sector...</option>
                    {['Commercial Aviation', 'Defense & Military', 'Space & Satellites', 'Helicopter & Rotorcraft', 'UAV & Autonomous', 'MRO & Aftermarket', 'Other'].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div><label className={labelClass}>Program / Project Name *</label><input required value={program.program} onChange={e => setProgram({...program, program: e.target.value})} type="text" placeholder="A320neo Production" className={inputClass}/></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div><label className={labelClass}>Platform / Aircraft</label><input value={program.platform} onChange={e => setProgram({...program, platform: e.target.value})} type="text" placeholder="Airbus A320neo" className={inputClass}/></div>
                <div><label className={labelClass}>Required Delivery Date</label><input value={program.deliveryDate} onChange={e => setProgram({...program, deliveryDate: e.target.value})} type="date" className={inputClass}/></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div><label className={labelClass}>Annual Quantity (approx.)</label><input value={program.quantity} onChange={e => setProgram({...program, quantity: e.target.value})} type="text" placeholder="500 sets / year" className={inputClass}/></div>
                <div>
                  <label className={labelClass}>Export Control Classification</label>
                  <select value={program.exportControl} onChange={e => setProgram({...program, exportControl: e.target.value})} className={selectClass}>
                    <option value="">Unknown / Not applicable</option>
                    <option>ITAR Controlled</option>
                    <option>EAR Controlled</option>
                    <option>Dual-use (EU)</option>
                    <option>No export controls</option>
                  </select>
                </div>
              </div>
              <div>
                <label className={labelClass}>Additional Program Notes</label>
                <textarea value={program.notes} onChange={e => setProgram({...program, notes: e.target.value})} rows={4} placeholder="Special requirements, quality standards, customer-specific specifications..." className={`${inputClass} resize-none`}/>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="font-display font-bold text-white text-3xl uppercase mb-8">Part Information</h2>
              <div className="border border-cyan/20 p-6 mb-4">
                <div className="font-mono text-[9px] text-cyan uppercase tracking-widest mb-2">Drawing Upload</div>
                <p className="text-steel text-sm mb-4">Upload your engineering drawings (PDF, DXF, STEP) for a more accurate quotation. Maximum file size: 50 MB.</p>
                <div className="border-2 border-dashed border-border-dark hover:border-cyan/50 transition-colors p-8 text-center cursor-pointer">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-steel mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 16V8M8 12l4-4 4 4M5 20h14" />
                    <rect x="3" y="3" width="18" height="14" rx="1" />
                  </svg>
                  <div className="font-mono text-[10px] text-steel uppercase tracking-widest">Click or drag files to upload</div>
                  <div className="font-mono text-[9px] text-steel/50 mt-1">PDF · STEP · DXF · IGES · up to 50MB</div>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <div className="font-mono text-[9px] text-steel">Do you have drawings?</div>
                  {['yes', 'no'].map(v => (
                    <button key={v} onClick={() => setParts({...parts, hasDwg: v})} className={`font-mono text-[9px] px-3 py-1 uppercase tracking-wider border transition-colors ${parts.hasDwg === v ? 'border-cyan text-cyan' : 'border-border-dark text-steel hover:border-steel'}`}>
                      {v === 'yes' ? 'Yes, I have drawings' : 'No, describe requirements'}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div><label className={labelClass}>Part Number</label><input value={parts.partNumber} onChange={e => setParts({...parts, partNumber: e.target.value})} type="text" placeholder="AE-WR-0042-001" className={inputClass}/></div>
                <div><label className={labelClass}>Part Name / Description *</label><input required value={parts.partName} onChange={e => setParts({...parts, partName: e.target.value})} type="text" placeholder="Wing Rib — Station 3" className={inputClass}/></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div><label className={labelClass}>Material Specification</label><input value={parts.material} onChange={e => setParts({...parts, material: e.target.value})} type="text" placeholder="Ti-6Al-4V per AMS 4928" className={inputClass}/></div>
                <div>
                  <label className={labelClass}>Manufacturing Process *</label>
                  <select required value={parts.process} onChange={e => setParts({...parts, process: e.target.value})} className={selectClass}>
                    <option value="">Select process...</option>
                    {['CNC Machining', 'Sheet Metal Fabrication', 'Composite Manufacturing', 'Assembly & Integration', 'Surface Treatment', 'Multiple Processes', 'Other'].map(p => <option key={p}>{p}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div><label className={labelClass}>Critical Tolerance</label><input value={parts.tolerance} onChange={e => setParts({...parts, tolerance: e.target.value})} type="text" placeholder="±0.01mm" className={inputClass}/></div>
                <div><label className={labelClass}>Surface Finish Required</label><input value={parts.finish} onChange={e => setParts({...parts, finish: e.target.value})} type="text" placeholder="Ra 1.6μm + anodize" className={inputClass}/></div>
                <div><label className={labelClass}>Quantity Required *</label><input required value={parts.qty} onChange={e => setParts({...parts, qty: e.target.value})} type="text" placeholder="12 pcs / month" className={inputClass}/></div>
              </div>
            </div>
          )}

          {/* Step 4: Review */}
          {step === 4 && (
            <div className="space-y-8">
              <h2 className="font-display font-bold text-white text-3xl uppercase mb-8">Review & Submit</h2>
              {[
                { title: 'Contact Information', data: [['Name', contact.name], ['Title', contact.title], ['Company', contact.company], ['Country', contact.country], ['Email', contact.email], ['Phone', contact.phone || '—']] },
                { title: 'Program Requirements', data: [['Industry', program.industry], ['Program', program.program], ['Platform', program.platform || '—'], ['Delivery', program.deliveryDate || '—'], ['Annual Qty', program.quantity || '—'], ['Export Control', program.exportControl || 'Not specified']] },
                { title: 'Part Information', data: [['Part Number', parts.partNumber || '—'], ['Part Name', parts.partName], ['Material', parts.material || '—'], ['Process', parts.process], ['Tolerance', parts.tolerance || '—'], ['Qty Required', parts.qty]] },
              ].map(section => (
                <div key={section.title} className="border border-border-dark">
                  <div className="bg-navy-mid px-6 py-3 flex items-center justify-between border-b border-border-dark">
                    <div className="font-mono text-[10px] text-steel uppercase tracking-widest">{section.title}</div>
                  </div>
                  <div className="p-6 grid sm:grid-cols-2 gap-4">
                    {section.data.map(([k, v]) => (
                      <div key={k}>
                        <div className="font-mono text-[8px] text-steel/60 uppercase tracking-wider mb-0.5">{k}</div>
                        <div className="text-sm text-white">{v || '—'}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-3">
                <input type="checkbox" required id="terms" className="mt-1 accent-cyan" />
                <label htmlFor="terms" className="text-sm text-steel">
                  I confirm the information provided is accurate and agree to the <span className="text-cyan">Terms of Use</span> and <span className="text-cyan">Privacy Policy</span>. I understand that Igniting Minds Aerospace may contact me regarding this enquiry.
                </label>
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-border-dark">
            <button
              onClick={prev}
              className={`border border-border-dark text-steel hover:text-white hover:border-steel font-medium text-sm px-6 py-3 transition-colors flex items-center gap-2 ${step === 1 ? 'invisible' : ''}`}
            >
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 rotate-180" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              Previous
            </button>
            <div className="font-mono text-[9px] text-steel uppercase tracking-wider">Step {step} of 4</div>
            {step < 4 ? (
              <button
                onClick={next}
                className="bg-blue hover:bg-blue-light text-white font-medium text-sm px-8 py-3 flex items-center gap-2 transition-colors"
              >
                Next Step
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </button>
            ) : (
              <button
                onClick={submit}
                className="bg-cyan hover:bg-cyan/90 text-navy font-bold text-sm px-8 py-3 flex items-center gap-2 transition-colors"
              >
                Submit RFQ
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
