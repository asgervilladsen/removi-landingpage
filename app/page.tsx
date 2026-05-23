import Image from 'next/image';
import AnimateIn from './components/AnimateIn';
import StickyProduct from './components/StickyProduct';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Product />
        <Team />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}


function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-white">
      <div className="max-w-3xl flex flex-col items-center gap-7">
        <AnimateIn direction="fade" delay={0}>
          <p className="text-xs font-medium uppercase tracking-[0.18em]" style={{ color: '#27B9B6' }}>
            Remote Vitals Solutions
          </p>
        </AnimateIn>
        <AnimateIn direction="up" delay={100}>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight" style={{ color: '#1d1d1f' }}>
            The heart,<br />
            <span style={{ color: '#27B9B6' }}>monitored continuously.</span>
          </h1>
        </AnimateIn>
        <AnimateIn direction="up" delay={200}>
          <p className="text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: '#6e6e73' }}>
            Removi develops a wrist-worn ECG device enabling continuous cardiac monitoring
            and early detection of atrial fibrillation — wherever the patient is.
          </p>
        </AnimateIn>
        <AnimateIn direction="up" delay={320}>
          <a
            href="#contact"
            className="mt-2 px-9 py-3.5 rounded-full font-medium text-sm text-white transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#E151B2' }}
          >
            Get in touch
          </a>
        </AnimateIn>
        <AnimateIn direction="fade" delay={500} className="mt-16 w-full max-w-2xl">
          <div style={{ opacity: 0.15 }}>
            <EkgLine />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

function EkgLine() {
  return (
    <svg viewBox="0 0 800 60" className="w-full" preserveAspectRatio="none">
      <polyline
        points="0,30 100,30 160,30 185,5 200,55 215,10 240,30 340,30 420,30 445,5 460,55 475,10 500,30 600,30 660,30 685,5 700,55 715,10 740,30 800,30"
        fill="none"
        stroke="#27B9B6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Problem() {
  return (
    <section className="py-32 px-6" style={{ backgroundColor: '#f5f5f7' }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <AnimateIn direction="left">
              <p className="text-xs font-medium uppercase tracking-[0.18em] mb-6" style={{ color: '#27B9B6' }}>
                The problem
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6" style={{ color: '#1d1d1f' }}>
                Atrial fibrillation is the silent epidemic of cardiology.
              </h2>
              <p className="leading-relaxed mb-4 text-base" style={{ color: '#6e6e73' }}>
                AFib is the most common cardiac arrhythmia — and one of the leading causes of stroke.
                The challenge: it is episodic. Patients are asymptomatic during clinical visits,
                yet experience dangerous episodes at home.
              </p>
              <p className="leading-relaxed text-base" style={{ color: '#6e6e73' }}>
                Current diagnostic tools require scheduled appointments and short monitoring windows.
                Meanwhile, hospitals face increasing pressure to discharge patients earlier —
                creating a growing population of home-hospitalized patients who need continuous care.
              </p>
            </AnimateIn>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { stat: '~30%', label: 'of strokes are caused by undetected atrial fibrillation', delay: 0 },
              { stat: '1 in 3', label: 'people over 55 will develop AFib in their lifetime', delay: 100 },
              { stat: '72h', label: 'maximum current standard ECG monitoring window', delay: 200 },
            ].map((item) => (
              <AnimateIn key={item.stat} direction="right" delay={item.delay}>
                <div
                  className="p-7 rounded-2xl bg-white"
                  style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                >
                  <div className="text-3xl font-bold mb-1.5" style={{ color: '#27B9B6' }}>
                    {item.stat}
                  </div>
                  <p className="text-sm" style={{ color: '#6e6e73' }}>{item.label}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Product() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto mb-20">
        <AnimateIn direction="up">
          <p className="text-xs font-medium uppercase tracking-[0.18em] mb-6" style={{ color: '#27B9B6' }}>
            The product
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 max-w-2xl" style={{ color: '#1d1d1f' }}>
            Continuous ECG. Wrist-worn. Clinically actionable.
          </h2>
          <p className="leading-relaxed max-w-xl text-base" style={{ color: '#6e6e73' }}>
            Removi's device captures ECG data continuously and streams it securely to
            clinical staff — enabling remote monitoring and automated arrhythmia detection.
          </p>
        </AnimateIn>
      </div>
      <StickyProduct />
    </section>
  );
}

const team = [
  {
    name: 'Asger Villadsen',
    role: 'Mechanical Engineer',
    tag: 'Founder',
  },
  {
    name: 'Rasmus Nørgaard',
    role: 'Biomedical Engineer',
    tag: 'Founder',
  },
  {
    name: 'Mads Tofte Gregers',
    role: 'PhD · Medical Health Advisor',
    tag: 'Advisor',
  },
];

function Team() {
  return (
    <section className="py-32 px-6" style={{ backgroundColor: '#f5f5f7' }}>
      <div className="max-w-5xl mx-auto">
        <AnimateIn direction="up">
          <p className="text-xs font-medium uppercase tracking-[0.18em] mb-6" style={{ color: '#27B9B6' }}>
            The team
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: '#1d1d1f' }}>
            Built at DTU.
          </h2>
          <p className="leading-relaxed max-w-xl mb-16 text-base" style={{ color: '#6e6e73' }}>
            We are a cross-disciplinary team from the Technical University of Denmark,
            combining expertise in medical technology, software engineering, and healthcare systems.
          </p>
        </AnimateIn>
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((person, i) => (
            <AnimateIn key={person.name} direction="up" delay={i * 100}>
              <div
                className="rounded-3xl p-8 bg-white flex flex-col items-center text-center gap-4"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white text-lg font-semibold"
                  style={{ backgroundColor: '#27B9B6' }}
                >
                  {person.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <p className="font-semibold text-base" style={{ color: '#1d1d1f' }}>{person.name}</p>
                  <p className="text-sm mt-1" style={{ color: '#6e6e73' }}>{person.role}</p>
                </div>
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={{ backgroundColor: '#27B9B615', color: '#27B9B6' }}
                >
                  {person.tag}
                </span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <AnimateIn direction="left">
          <p className="text-xs font-medium uppercase tracking-[0.18em] mb-6" style={{ color: '#27B9B6' }}>
            Partners & contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 max-w-2xl" style={{ color: '#1d1d1f' }}>
            We are looking for clinical and institutional partners.
          </h2>
          <p className="leading-relaxed max-w-xl mb-10 text-base" style={{ color: '#6e6e73' }}>
            If you are a clinician, hospital, investor, or research institution interested
            in remote cardiac monitoring — we would like to hear from you.
          </p>
          <a
            href="mailto:asg.villadsen@gmail.com"
            className="inline-block px-9 py-3.5 rounded-full font-medium text-sm text-white transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#E151B2' }}
          >
            Get in touch
          </a>
        </AnimateIn>

        <AnimateIn direction="up" delay={150}>
          <div
            className="mt-20 rounded-3xl p-12"
            style={{ backgroundColor: '#f5f5f7' }}
          >
            <p className="text-xs uppercase tracking-widest mb-10 text-center" style={{ color: '#6e6e73' }}>Partners</p>
            <div className="flex flex-wrap justify-center items-center gap-10">
              <div
                className="bg-white rounded-2xl px-8 py-6 flex items-center gap-4"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)', minWidth: '180px' }}
              >
                <Image
                  src="/dtu-skylab.png"
                  alt="DTU Skylab"
                  width={56}
                  height={56}
                  className="object-contain rounded-xl"
                />
                <div className="text-left">
                  <p className="font-semibold text-sm" style={{ color: '#1d1d1f' }}>DTU Skylab</p>
                  <p className="text-xs mt-0.5" style={{ color: '#6e6e73' }}>DTU's Innovation Hub</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#e8e8ed]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-xs" style={{ color: '#6e6e73' }}>
        <span className="font-semibold" style={{ color: '#1d1d1f' }}>Removi</span>
        <span>Remote Vitals Solutions</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
