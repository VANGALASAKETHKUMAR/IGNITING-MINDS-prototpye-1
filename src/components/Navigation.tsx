import { useState, useEffect } from 'react'
import type { Page } from '../App'
import logoImg from '../imports/image.png'

interface Props {
  currentPage: Page
  navigate: (page: Page) => void
}

const capabilityItems = [
  { label: '5-Axis CNC Machining', sub: 'Titanium, Inconel, aluminium alloys' },
  { label: 'Sheet Metal Fabrication', sub: 'Laser cut, hydroform, weld' },
  { label: 'Composite Manufacturing', sub: 'CFRP, fiberglass, prepreg layup' },
  { label: 'Assembly & Integration', sub: 'Structural & systems assembly' },
  { label: 'Surface Treatment', sub: 'Anodize, HVOF, primer & topcoat' },
  { label: 'NDT & CMM Inspection', sub: 'X-ray, UT, eddy current, CMM' },
]

const productItems = [
  { label: 'Airframe Structures', sub: 'Ribs, spars, frames, fuselage skins' },
  { label: 'Engine Components', sub: 'Casings, brackets, exhaust ducts' },
  { label: 'UAV Systems', sub: 'Fixed-wing & multirotor platforms' },
  { label: 'Ground Support Equipment', sub: 'Jigs, fixtures, tooling assemblies' },
  { label: 'Defense Systems', sub: 'Mission-critical precision components' },
  { label: 'Space Hardware', sub: 'Satellite & launch vehicle structures' },
]

export default function Navigation({ currentPage, navigate }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [megaMenu, setMegaMenu] = useState<null | 'capabilities' | 'products'>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const link = (label: string, page: Page) => (
    <button
      key={page}
      onClick={() => navigate(page)}
      className={`text-sm font-medium tracking-wide transition-colors duration-150 whitespace-nowrap ${
        currentPage === page ? 'text-cyan' : 'text-steel hover:text-white'
      }`}
    >
      {label}
    </button>
  )

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy/95 backdrop-blur border-b border-border-dark shadow-lg shadow-black/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <button onClick={() => navigate('home')} className="flex items-center gap-2 shrink-0">
              <img
                src={logoImg}
                alt="Igniting Minds Aerospace"
                className="h-8 w-auto object-contain"
              />
              <div className="font-mono text-[8.5px] text-steel tracking-[0.22em] uppercase border-l border-border-dark pl-2">
                Aerospace
              </div>
            </button>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-7">
              {link('About', 'about')}

              {/* Capabilities dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setMegaMenu('capabilities')}
                onMouseLeave={() => setMegaMenu(null)}
              >
                <button
                  className={`text-sm font-medium tracking-wide flex items-center gap-1.5 transition-colors duration-150 ${
                    currentPage === 'capabilities' ? 'text-cyan' : 'text-steel hover:text-white'
                  }`}
                >
                  Capabilities
                  <svg viewBox="0 0 12 12" className={`w-2.5 h-2.5 transition-transform duration-200 ${megaMenu === 'capabilities' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 4l4 4 4-4" />
                  </svg>
                </button>

                {megaMenu === 'capabilities' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[520px] pt-3">
                    <div className="bg-navy-mid border border-border-dark shadow-2xl shadow-black/50">
                    <div className="p-5">
                      <div className="font-mono text-[9px] text-steel uppercase tracking-[0.22em] mb-4 pb-3 border-b border-border-dark">
                        Manufacturing Capabilities
                      </div>
                      <div className="grid grid-cols-2 gap-px bg-border-dark">
                        {capabilityItems.map(item => (
                          <button
                            key={item.label}
                            onClick={() => { navigate('capabilities'); setMegaMenu(null) }}
                            className="bg-navy-mid text-left p-3.5 hover:bg-navy-light transition-colors group"
                          >
                            <div className="text-[13px] font-medium text-white group-hover:text-cyan transition-colors leading-tight">
                              {item.label}
                            </div>
                            <div className="font-mono text-[10px] text-steel mt-1">{item.sub}</div>
                          </button>
                        ))}
                      </div>
                      <div className="mt-4 pt-3 border-t border-border-dark">
                        <button
                          onClick={() => { navigate('capabilities'); setMegaMenu(null) }}
                          className="font-mono text-[10px] text-cyan hover:text-white transition-colors uppercase tracking-widest flex items-center gap-2"
                        >
                          View All Capabilities
                          <svg viewBox="0 0 16 16" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M3 8h10M9 4l4 4-4 4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  </div>
                )}
              </div>

              {/* Products dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setMegaMenu('products')}
                onMouseLeave={() => setMegaMenu(null)}
              >
                <button
                  className={`text-sm font-medium tracking-wide flex items-center gap-1.5 transition-colors duration-150 ${
                    currentPage === 'products' ? 'text-cyan' : 'text-steel hover:text-white'
                  }`}
                >
                  Products
                  <svg viewBox="0 0 12 12" className={`w-2.5 h-2.5 transition-transform duration-200 ${megaMenu === 'products' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 4l4 4 4-4" />
                  </svg>
                </button>

                {megaMenu === 'products' && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[520px] pt-3">
                      <div className="bg-navy-mid border border-border-dark shadow-2xl shadow-black/50">                    <div className="p-5">
                      <div className="font-mono text-[9px] text-steel uppercase tracking-[0.22em] mb-4 pb-3 border-b border-border-dark">
                        Product Lines
                      </div>
                      <div className="grid grid-cols-2 gap-px bg-border-dark">
                        {productItems.map(item => (
                          <button
                            key={item.label}
                            onClick={() => { navigate('products'); setMegaMenu(null) }}
                            className="bg-navy-mid text-left p-3.5 hover:bg-navy-light transition-colors group"
                          >
                            <div className="text-[13px] font-medium text-white group-hover:text-cyan transition-colors leading-tight">
                              {item.label}
                            </div>
                            <div className="font-mono text-[10px] text-steel mt-1">{item.sub}</div>
                          </button>
                        ))}
                      </div>
                      <div className="mt-4 pt-3 border-t border-border-dark">
                        <button
                          onClick={() => { navigate('products'); setMegaMenu(null) }}
                          className="font-mono text-[10px] text-cyan hover:text-white transition-colors uppercase tracking-widest flex items-center gap-2"
                        >
                          View All Products
                          <svg viewBox="0 0 16 16" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M3 8h10M9 4l4 4-4 4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  </div>
                )}
              </div>

              {link('Industries', 'industries')}
              {link('Quality', 'quality')}
              {link('Facilities', 'facilities')}
              {link('Resources', 'resources')}
              {link('Careers', 'careers')}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('contact')}
                className="hidden lg:block text-sm text-steel hover:text-white transition-colors tracking-wide"
              >
                Contact
              </button>
              <button
                onClick={() => navigate('quote')}
                className="hidden lg:flex items-center gap-2 bg-blue hover:bg-blue-light text-white text-[13px] font-medium px-5 py-2.5 transition-colors duration-150 tracking-wide"
              >
                Request a Quote
                <svg viewBox="0 0 16 16" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </button>

              {/* Mobile toggle */}
              <button
                className="lg:hidden text-white p-1"
                onClick={() => setMobileOpen(o => !o)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 6h16M4 12h16M4 18h10" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-navy-mid border-t border-border-dark">
            <div className="px-6 py-4">
              {(
                [
                  ['About', 'about'],
                  ['Capabilities', 'capabilities'],
                  ['Products', 'products'],
                  ['Industries', 'industries'],
                  ['Quality', 'quality'],
                  ['Facilities', 'facilities'],
                  ['Resources', 'resources'],
                  ['Careers', 'careers'],
                  ['Contact', 'contact'],
                ] as [string, Page][]
              ).map(([label, page]) => (
                <button
                  key={page}
                  onClick={() => { navigate(page); setMobileOpen(false) }}
                  className="flex w-full items-center justify-between py-3.5 text-sm text-steel hover:text-white transition-colors border-b border-border-dark last:border-0"
                >
                  {label}
                  <svg viewBox="0 0 16 16" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 8h6M8 5l3 3-3 3" />
                  </svg>
                </button>
              ))}
              <button
                onClick={() => { navigate('quote'); setMobileOpen(false) }}
                className="mt-5 w-full bg-blue text-white text-sm font-medium py-3.5 tracking-wide"
              >
                Request a Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
