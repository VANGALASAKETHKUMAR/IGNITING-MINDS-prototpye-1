import type { Page } from '../App'
import logoImg from '../imports/image.png'

interface Props {
  navigate: (page: Page) => void
}

export default function Footer({ navigate }: Props) {
  return (
    <footer className="bg-[#040810] border-t border-border-dark">
      <div className="max-w-[1440px] mx-auto px-6 xl:px-12">

        {/* Top bar */}
        <div className="py-10 border-b border-border-dark flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <span className="font-mono text-[10px] text-steel uppercase tracking-widest">Certifications</span>
            {['AS9100D', 'ISO 9001:2015', 'NADCAP', 'DGCA Approved'].map(cert => (
              <span key={cert} className="font-mono text-[10px] text-cyan border border-cyan/25 px-3 py-1.5 tracking-wider">
                {cert}
              </span>
            ))}
          </div>
          <button
            onClick={() => navigate('quote')}
            className="bg-blue hover:bg-blue-light text-white font-medium text-sm px-8 py-3 flex items-center gap-2 transition-colors shrink-0"
          >
            Request a Quote
            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </button>
        </div>

        {/* Main grid */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <button onClick={() => navigate('home')} className="flex items-center gap-2 mb-6">
              <img
                src={logoImg}
                alt="Igniting Minds Aerospace"
                className="h-9 w-auto object-contain"
              />
              <div className="font-mono text-[8.5px] text-steel tracking-[0.22em] uppercase border-l border-border-dark pl-2">
                Aerospace
              </div>
            </button>
            <p className="text-steel text-sm leading-relaxed max-w-xs mb-8">
              Precision aerospace manufacturing and engineering solutions trusted by global OEMs, defense organizations, and space programs.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { label: 'LI', title: 'LinkedIn' },
                { label: 'TW', title: 'Twitter' },
                { label: 'YT', title: 'YouTube' },
              ].map(s => (
                <button key={s.label} title={s.title} className="w-8 h-8 border border-border-dark flex items-center justify-center font-mono text-[10px] text-steel hover:text-cyan hover:border-cyan transition-colors">
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="font-mono text-[9px] text-steel uppercase tracking-[0.22em] mb-5">Company</div>
            <ul className="space-y-3">
              {[
                { l: 'About Us', p: 'about' as Page },
                { l: 'Leadership', p: 'about' as Page },
                { l: 'Our Facilities', p: 'facilities' as Page },
                { l: 'Quality Assurance', p: 'quality' as Page },
                { l: 'Careers', p: 'careers' as Page },
                { l: 'News & Media', p: 'resources' as Page },
              ].map(item => (
                <li key={item.l}>
                  <button
                    onClick={() => navigate(item.p)}
                    className="text-sm text-steel hover:text-white transition-colors text-left"
                  >
                    {item.l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <div className="font-mono text-[9px] text-steel uppercase tracking-[0.22em] mb-5">Capabilities</div>
            <ul className="space-y-3">
              {[
                '5-Axis CNC Machining',
                'Sheet Metal Fabrication',
                'Composite Manufacturing',
                'Assembly & Integration',
                'Surface Treatment',
                'NDT & CMM Inspection',
              ].map(item => (
                <li key={item}>
                  <button
                    onClick={() => navigate('capabilities')}
                    className="text-sm text-steel hover:text-white transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-mono text-[9px] text-steel uppercase tracking-[0.22em] mb-5">Contact</div>
            <div className="space-y-5 text-sm">
              <div>
                <div className="font-mono text-[9px] text-steel uppercase tracking-wider mb-1">Headquarters</div>
                <p className="text-steel leading-relaxed">
                  Plot 42, TSIIC Aerospace Park<br />
                  Adibatla, Hyderabad — 501506<br />
                  Telangana, India
                </p>
              </div>
              <div>
                <div className="font-mono text-[9px] text-steel uppercase tracking-wider mb-1">Email</div>
                <p className="text-cyan">contact@ignitingminds.aero</p>
              </div>
              <div>
                <div className="font-mono text-[9px] text-steel uppercase tracking-wider mb-1">Phone</div>
                <p className="text-steel">+91 40 4000 0100</p>
              </div>
            </div>
            <button
              onClick={() => navigate('contact')}
              className="mt-6 w-full border border-blue/60 text-cyan font-mono text-[10px] uppercase tracking-widest py-3 hover:bg-blue/10 transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border-dark py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[9px] text-steel tracking-wider">
            © 2024 IGNITING MINDS AEROSPACE PVT. LTD. — ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-5 flex-wrap justify-center">
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Sitemap'].map(item => (
              <button key={item} className="font-mono text-[9px] text-steel hover:text-white transition-colors tracking-wider">
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
