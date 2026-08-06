import { useState } from 'react'
import type { Page } from '../App'

interface Props { navigate: (page: Page) => void }

function AR() {
  return <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
}

const depts = ['All Departments', 'Engineering', 'Manufacturing', 'Quality', 'Business Development', 'Operations']

const openings = [
  { dept: 'Engineering', title: 'Senior Aerospace Structures Engineer', loc: 'Hyderabad, India', type: 'Full-time', exp: '6–12 years', skills: ['CATIA V5', 'FEM/FEA', 'AS9100D'] },
  { dept: 'Manufacturing', title: '5-Axis CNC Machinist (Senior)', loc: 'Hyderabad, India', type: 'Full-time', exp: '5–10 years', skills: ['DMU 85', 'CATIA CAM', 'Ti/Inconel'] },
  { dept: 'Quality', title: 'Quality Engineer – AS9100D', loc: 'Hyderabad, India', type: 'Full-time', exp: '4–8 years', skills: ['AS9100D', 'CMM', 'NADCAP'] },
  { dept: 'Engineering', title: 'Composite Design & Manufacturing Engineer', loc: 'Hyderabad, India', type: 'Full-time', exp: '3–7 years', skills: ['CFRP Lay-up', 'Autoclave', 'CATIA'] },
  { dept: 'Business Development', title: 'Aerospace Business Development Manager – Europe', loc: 'Remote / Hybrid', type: 'Full-time', exp: '8–15 years', skills: ['OEM Relations', 'RFQ Process', 'Tier-1 Supply'] },
  { dept: 'Manufacturing', title: 'Sheet Metal Fabricator – Aerospace', loc: 'Hyderabad, India', type: 'Full-time', exp: '3–6 years', skills: ['Laser Cut', 'TIG Welding', 'MIL-spec'] },
  { dept: 'Quality', title: 'NDT Level III Technician', loc: 'Hyderabad, India', type: 'Full-time', exp: '5–10 years', skills: ['UT', 'RT', 'NADCAP'] },
  { dept: 'Operations', title: 'Production Planning & Scheduling Engineer', loc: 'Hyderabad, India', type: 'Full-time', exp: '3–6 years', skills: ['ERP/MRP', 'Lean', 'AS9100D'] },
]

const benefits = [
  { title: 'Competitive Compensation', desc: 'Market-leading salary, performance bonus, and ESOP for senior roles.' },
  { title: 'Aerospace Training', desc: 'Sponsored certifications — AS9100D, CATIA, NADCAP, and professional engineering programs.' },
  { title: 'Work on Cutting-Edge Programs', desc: 'Direct exposure to active defense, space, and commercial aviation programs.' },
  { title: 'Health & Wellness', desc: 'Comprehensive family health insurance, annual health check, and wellness allowance.' },
  { title: 'Flexible Work Policy', desc: 'Hybrid working for engineering and business roles; flexible hours for production staff.' },
  { title: 'Career Growth', desc: 'Clear advancement tracks from Technician to Lead Engineer to Department Head.' },
]

export default function Careers({ navigate }: Props) {
  const [activeDept, setActiveDept] = useState('All Departments')
  const filtered = activeDept === 'All Departments' ? openings : openings.filter(o => o.dept === activeDept)

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
            <span className="text-cyan">Careers</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-cyan" />
            <span className="font-mono text-[10px] text-cyan uppercase tracking-[0.2em]">Careers</span>
          </div>
          <h1 className="font-display font-black text-white text-5xl lg:text-7xl uppercase leading-none tracking-tight mb-6">
            Build the Future<br />of Aerospace
          </h1>
          <p className="text-steel max-w-2xl text-lg leading-relaxed">
            Join a team of 500+ engineers and technicians working on programs that matter — from India's indigenous fighter jet to commercial aviation and orbital satellites.
          </p>
          <div className="mt-10 flex items-center gap-8 border-t border-border-dark pt-8">
            {[
              { val: '28', label: 'Open Roles' },
              { val: '12', label: 'Departments' },
              { val: '4.6/5', label: 'Glassdoor Rating' },
            ].map(s => (
              <div key={s.label}>
                <div className="font-display font-bold text-white text-4xl">{s.val}</div>
                <div className="font-mono text-[9px] text-cyan mt-1 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="bg-off py-24">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-blue" />
                <span className="font-mono text-[10px] text-blue uppercase tracking-[0.2em]">Our Culture</span>
              </div>
              <h2 className="font-display font-bold text-navy text-4xl uppercase mb-6">Engineers Who Build. Engineers Who Lead.</h2>
              <p className="text-mid leading-relaxed mb-4">
                At Igniting Minds, engineering isn't a department — it's the entire culture. Every decision is made with precision, evidence, and a commitment to quality that would survive a customer audit.
              </p>
              <p className="text-mid leading-relaxed mb-8">
                We invest heavily in our people: sponsored training, conference attendance, certification support, and a clear path from technician to team lead to department head. We've promoted 40+ engineers internally in the last two years.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: '40+', label: 'Internal Promotions (2023)' },
                  { val: '94%', label: 'Employee Retention Rate' },
                  { val: '₹2.5L+', label: 'Avg. Training Budget / Person' },
                  { val: '3.2 yrs', label: 'Avg. Tenure' },
                ].map(s => (
                  <div key={s.label} className="border-l-2 border-blue pl-4">
                    <div className="font-display font-bold text-blue text-2xl">{s.val}</div>
                    <div className="font-mono text-[9px] text-mid mt-1 uppercase tracking-wider">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=800&h=600&fit=crop&auto=format" alt="Team culture" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-navy py-24">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-cyan" />
            <span className="font-mono text-[10px] text-cyan uppercase tracking-[0.2em]">Benefits</span>
          </div>
          <h2 className="font-display font-bold text-white text-4xl uppercase mb-12">What We Offer</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border-dark">
            {benefits.map(b => (
              <div key={b.title} className="bg-navy-mid p-8 hover:bg-navy-light transition-colors">
                <div className="w-2 h-2 bg-cyan mb-5" />
                <h3 className="font-display font-bold text-white text-xl uppercase mb-3">{b.title}</h3>
                <p className="text-steel text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job listings */}
      <section className="bg-off py-24">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-blue" />
            <span className="font-mono text-[10px] text-blue uppercase tracking-[0.2em]">Open Positions</span>
          </div>
          <h2 className="font-display font-bold text-navy text-4xl uppercase mb-8">Current Openings</h2>

          {/* Dept filter */}
          <div className="flex items-center gap-2 flex-wrap mb-8">
            {depts.map(dept => (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={`font-mono text-[9px] uppercase tracking-widest px-4 py-2 border transition-colors ${
                  activeDept === dept
                    ? 'bg-navy text-cyan border-navy'
                    : 'text-mid border-border-light hover:border-navy hover:text-navy'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          <div className="space-y-px bg-border-light">
            {filtered.map(job => (
              <button
                key={job.title}
                onClick={() => navigate('contact')}
                className="w-full bg-off hover:bg-white transition-colors p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left group border-b border-border-light last:border-0"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-mono text-[8px] text-cyan border border-cyan/30 px-2 py-0.5 uppercase tracking-wider">{job.dept}</span>
                    <span className="font-mono text-[8px] text-steel border border-border-light px-2 py-0.5 uppercase tracking-wider">{job.type}</span>
                  </div>
                  <h3 className="font-display font-bold text-navy text-xl uppercase group-hover:text-blue transition-colors mb-2">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="font-mono text-[9px] text-mid flex items-center gap-1.5">
                      <svg viewBox="0 0 16 16" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="8" cy="6" r="3"/><path d="M2 14c0-4 2.7-6 6-6s6 2 6 6"/></svg>
                      {job.loc}
                    </span>
                    <span className="font-mono text-[9px] text-mid">{job.exp} experience</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <div className="hidden sm:flex flex-wrap gap-1.5">
                    {job.skills.map(s => (
                      <span key={s} className="font-mono text-[8px] bg-border-light text-mid px-2 py-1">{s}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-blue group-hover:gap-3 transition-all">
                    <span className="font-mono text-[10px] uppercase tracking-wider">Apply</span>
                    <AR />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Spontaneous application */}
      <section className="bg-blue py-20">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h2 className="font-display font-bold text-white text-4xl uppercase">Don't See Your Role?</h2>
            <p className="text-white/70 mt-2 max-w-lg">We're always interested in exceptional aerospace engineers. Send us a spontaneous application and we'll keep your profile on file.</p>
          </div>
          <button onClick={() => navigate('contact')} className="bg-white text-blue hover:bg-off font-medium text-sm px-7 py-4 flex items-center gap-2 transition-colors shrink-0">
            Send Open Application <AR />
          </button>
        </div>
      </section>
    </div>
  )
}
