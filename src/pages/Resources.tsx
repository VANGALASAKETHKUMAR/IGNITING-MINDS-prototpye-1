import { useState } from 'react'
import type { Page } from '../App'

interface Props { navigate: (page: Page) => void }

function AR() {
  return <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
}

const tabs = ['All', 'News', 'Case Studies', 'White Papers', 'Downloads']

const resources = [
  {
    type: 'News',
    date: 'NOV 15, 2024',
    title: 'Igniting Minds Achieves NADCAP Heat Treatment Accreditation',
    excerpt: 'Strengthening our special process credentials, the NADCAP accreditation for heat treatment further cements our position as a Tier-1 ready aerospace supplier capable of full in-house processing.',
    img: 'photo-1581091212991',
    readTime: '3 min read',
  },
  {
    type: 'Case Study',
    date: 'OCT 28, 2024',
    title: 'A320neo Wing Panel Kit: 480 Parts, 98.9% On-Time Over 18 Months',
    excerpt: 'How Igniting Minds Aerospace delivered a complex 480-part wing panel kit supply program for a European Tier-1 customer with zero customer escapes and an industry-leading delivery performance.',
    img: 'photo-1674897537555',
    readTime: '8 min read',
  },
  {
    type: 'News',
    date: 'OCT 10, 2024',
    title: 'Phase 2 Facility Expansion Complete: 30,000 Sq Ft of New Manufacturing Space',
    excerpt: 'Our Hyderabad campus expansion is complete. Phase 2 brings a dedicated composite manufacturing wing, a new 4-meter autoclave, cleanroom assembly bay, and expanded Zeiss CMM metrology lab.',
    img: 'photo-1740209475472',
    readTime: '4 min read',
  },
  {
    type: 'Case Study',
    date: 'SEP 20, 2024',
    title: 'LCA Tejas Mk1A: Structural Airframe Components for India\'s Fighter Program',
    excerpt: 'Selected as a Tier-2 supplier to HAL for the 83-aircraft Tejas Mk1A program, we manufacture precision-machined titanium airframe frames with zero defect delivery since program inception.',
    img: 'photo-1469289759076',
    readTime: '6 min read',
  },
  {
    type: 'White Paper',
    date: 'AUG 2024',
    title: 'Titanium Machining for Aerospace: A Practical Guide to High-Performance 5-Axis Strategies',
    excerpt: 'A technical white paper on optimized machining strategies for titanium aerospace components — covering tool selection, coolant management, vibration damping, and surface integrity verification.',
    img: 'photo-1666618090858',
    readTime: '12 min read',
  },
  {
    type: 'News',
    date: 'JUL 2024',
    title: 'Igniting Minds Selected for ISRO NewSpace Satellite Structural Program',
    excerpt: 'Awarded a contract for satellite primary structural panels under ISRO\'s NewSpace India Limited (NSIL) program, marking our entry into the orbital space hardware market.',
    img: 'photo-1520870121499',
    readTime: '3 min read',
  },
]

const downloads = [
  { name: 'Company Capability Statement', size: 'PDF · 2.4 MB', tag: 'Company Profile' },
  { name: 'AS9100D Certificate of Registration', size: 'PDF · 340 KB', tag: 'Quality' },
  { name: 'NADCAP Accreditation Certificate', size: 'PDF · 280 KB', tag: 'Quality' },
  { name: 'DGCA Maintenance Organization Approval', size: 'PDF · 510 KB', tag: 'Approvals' },
  { name: 'RFQ Submission Template', size: 'XLSX · 180 KB', tag: 'Forms' },
  { name: 'Supplier Quality Requirements (SQR)', size: 'PDF · 1.1 MB', tag: 'Quality' },
]

export default function Resources({ navigate }: Props) {
  const [activeTab, setActiveTab] = useState('All')
  const filtered = activeTab === 'All' ? resources : resources.filter(r => r.type === activeTab.replace('s', '').replace('White Paper', 'White Paper'))

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-50" />
        <div className="relative max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="font-mono text-[9px] text-steel uppercase tracking-widest mb-6 flex items-center gap-2">
            <button onClick={() => navigate('home')} className="hover:text-cyan transition-colors">Home</button>
            <span>/</span>
            <span className="text-cyan">Resources</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-cyan" />
            <span className="font-mono text-[10px] text-cyan uppercase tracking-[0.2em]">Resources</span>
          </div>
          <h1 className="font-display font-black text-white text-5xl lg:text-7xl uppercase leading-none tracking-tight mb-6">
            News, Insights<br />& Case Studies
          </h1>
          <p className="text-steel max-w-2xl text-lg leading-relaxed">
            Technical articles, program case studies, company news, and downloadable resources from the Igniting Minds Aerospace team.
          </p>
        </div>
      </section>

      {/* Tab filter */}
      <section className="bg-navy-mid border-b border-border-dark">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="flex items-center gap-0 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`shrink-0 font-mono text-[9px] uppercase tracking-widest px-5 py-4 border-r border-border-dark transition-colors ${
                  activeTab === tab ? 'text-cyan bg-navy-light' : 'text-steel hover:text-white hover:bg-navy-light'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resource grid */}
      <section className="bg-navy py-16">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-3 gap-px bg-border-dark">
            {(activeTab === 'Downloads' ? [] : filtered).map((item, i) => (
              <button
                key={item.title}
                className={`bg-navy-mid text-left group hover:bg-navy-light transition-colors ${i === 0 && activeTab === 'All' ? 'lg:col-span-2 lg:row-span-2' : ''}`}
              >
                <div className={`overflow-hidden relative ${i === 0 && activeTab === 'All' ? 'aspect-[16/7]' : 'aspect-video'}`}>
                  <img
                    src={`https://images.unsplash.com/${item.img}?w=700&h=400&fit=crop&auto=format`}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 font-mono text-[8px] text-cyan border border-cyan/30 px-2 py-1 bg-navy/70 uppercase tracking-wider">
                    {item.type}
                  </div>
                </div>
                <div className={i === 0 && activeTab === 'All' ? 'p-10' : 'p-6'}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-[9px] text-steel uppercase tracking-widest">{item.date}</span>
                    <div className="w-px h-3 bg-border-dark" />
                    <span className="font-mono text-[9px] text-steel uppercase tracking-widest">{item.readTime}</span>
                  </div>
                  <h3 className={`font-display font-bold text-white uppercase leading-tight mb-3 group-hover:text-cyan transition-colors ${i === 0 && activeTab === 'All' ? 'text-3xl' : 'text-lg'}`}>
                    {item.title}
                  </h3>
                  <p className="text-steel text-sm leading-relaxed mb-4">{item.excerpt}</p>
                  <div className="flex items-center gap-2 text-cyan/50 group-hover:text-cyan transition-colors">
                    <span className="font-mono text-[10px] uppercase tracking-wider">Read More</span>
                    <AR />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Downloads section */}
          {(activeTab === 'Downloads' || activeTab === 'All') && (
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-cyan" />
                <span className="font-mono text-[10px] text-cyan uppercase tracking-[0.2em]">Downloads</span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border-dark">
                {downloads.map(dl => (
                  <button
                    key={dl.name}
                    className="bg-navy-mid p-6 text-left flex items-start gap-4 hover:bg-navy-light transition-colors group"
                  >
                    <div className="w-10 h-12 border border-border-dark flex items-center justify-center shrink-0 group-hover:border-cyan transition-colors">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-steel group-hover:text-cyan transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 16V8M8 12l4 4 4-4M5 20h14" />
                        <rect x="3" y="3" width="18" height="14" rx="1" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-mono text-[8px] text-cyan uppercase tracking-wider mb-1">{dl.tag}</div>
                      <div className="text-sm font-medium text-white group-hover:text-cyan transition-colors leading-snug mb-1">{dl.name}</div>
                      <div className="font-mono text-[9px] text-steel">{dl.size}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-off py-20">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="border border-border-light p-10 lg:p-14 max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-blue" />
              <span className="font-mono text-[10px] text-blue uppercase tracking-[0.2em]">Newsletter</span>
            </div>
            <h2 className="font-display font-bold text-navy text-4xl uppercase mb-3">Stay Informed</h2>
            <p className="text-mid mb-6">Quarterly updates on aerospace manufacturing, quality standards, and company news from the Igniting Minds team.</p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="your@company.com"
                className="flex-1 bg-white border border-border-light px-4 py-3 text-sm text-navy placeholder-mid/50 focus:outline-none focus:border-blue"
              />
              <button className="bg-navy hover:bg-navy-light text-white font-medium text-sm px-6 py-3 transition-colors shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
