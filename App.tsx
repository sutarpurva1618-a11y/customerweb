import { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  Instagram,
  Home,
  Building2,
  Trees,
  Sparkles,
  UserRound,
  ShieldCheck,
  MessagesSquare,

  Menu,
  X,
  ChevronRight,
  Check,
} from 'lucide-react';
import {
  OWNER,
  PROPERTY_TYPES,
  LISTING_TYPES,
  BHK_OPTIONS,
  HERO_IMAGE,
  CATEGORY_IMAGES,
  ABOUT_IMAGE,
} from '@/lib/constants';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatModalOpen, setChatModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-charcoal-950 text-gray-200">
      {/* ── Header ─────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-charcoal-950/85 backdrop-blur-md border-b border-charcoal-700/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center">
            <span className="font-serif text-lg font-semibold tracking-tight text-gold-300 sm:text-xl">
              Dwarka<span className="text-gray-400">-real.estate</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#find-property">Find Property</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={OWNER.tel}
              className="hidden items-center gap-1.5 rounded-full border border-charcoal-600 px-4 py-2 text-sm font-medium text-gray-300 transition hover:border-gold-500/40 hover:text-gold-400 sm:flex"
            >
              <Phone className="h-3.5 w-3.5" /> Call
            </a>
            <button
              onClick={() => setChatModalOpen(true)}
              className="hidden items-center gap-1.5 rounded-full bg-gold-500 px-4 py-2 text-sm font-medium text-charcoal-950 transition hover:bg-gold-400 sm:flex"
            >
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-lg p-2 text-gray-300 md:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-charcoal-700/50 px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              <MobileLink href="#home" onClick={() => setMenuOpen(false)}>Home</MobileLink>
              <MobileLink href="#find-property" onClick={() => setMenuOpen(false)}>Find Property</MobileLink>
              <MobileLink href="#about" onClick={() => setMenuOpen(false)}>About</MobileLink>
              <MobileLink href="#contact" onClick={() => setMenuOpen(false)}>Contact</MobileLink>
            </div>
          </div>
        )}
      </header>

      {/* ── Hero ───────────────────────────────────────── */}
      <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Luxury modern home"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/95 via-charcoal-950/75 to-charcoal-950/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h1 className="animate-fade-up font-serif text-4xl font-medium leading-[1.1] text-white text-balance sm:text-5xl md:text-6xl">
              Find a Place You'll Love to Call Home.
            </h1>
            <p className="animate-fade-up delay-100 mt-5 text-base leading-relaxed text-gray-300 sm:text-lg">
              Tell us what you're looking for, and we'll help you explore the right property options.
            </p>
            <div className="animate-fade-up delay-200 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#find-property"
                className="flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-medium text-charcoal-950 transition hover:bg-gold-400"
              >
                <Home className="h-4 w-4" /> Find Your Property
              </a>
              <button
                onClick={() => setChatModalOpen(true)}
                className="flex items-center justify-center gap-2 rounded-full border border-gold-500/30 bg-charcoal-900/50 px-7 py-3.5 text-sm font-medium text-gold-300 backdrop-blur-sm transition hover:bg-charcoal-800"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </button>
              <a
                href={OWNER.tel}
                className="flex items-center justify-center gap-2 rounded-full border border-charcoal-600 bg-charcoal-900/50 px-7 py-3.5 text-sm font-medium text-gray-200 backdrop-blur-sm transition hover:border-gold-500/40 hover:text-gold-400"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Find Your Property ─────────────────────────── */}
      <section id="find-property" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeader
          label="Find Your Property"
          title="Two Ways to Get Started"
          subtitle="Choose the option that suits you best — both are quick and simple."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Option 1: Send Requirement Form */}
          <div className="flex flex-col rounded-2xl border border-gold-500/25 bg-charcoal-900 p-7 transition hover:border-gold-500/40 animate-fade-up">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/15 border border-gold-500/30">
              <Home className="h-7 w-7 text-gold-400" />
            </div>
            <h3 className="font-serif text-xl font-medium text-white">Send Requirement</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              Fill out a quick form with your property preferences. We will generate a pre-filled WhatsApp message with your details — just hit send.
            </p>
            <button
              onClick={() => document.getElementById('requirement-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-medium text-charcoal-950 transition hover:bg-gold-400"
            >
              <Home className="h-4 w-4" /> Open Form
            </button>
          </div>

          {/* Option 2: Call */}
          <div className="flex flex-col rounded-2xl border border-charcoal-700 bg-charcoal-900 p-7 transition hover:border-gold-500/40 animate-fade-up delay-100">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/15 border border-gold-500/30">
              <Phone className="h-7 w-7 text-gold-400" />
            </div>
            <h3 className="font-serif text-xl font-medium text-white">Call</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              Prefer to talk directly? Call Kaustubh now for a quick, personal conversation about your property needs.
            </p>
            <a
              href={OWNER.tel}
              className="mt-6 flex items-center justify-center gap-2 rounded-full border border-gold-500/30 bg-charcoal-850 px-6 py-3 text-sm font-medium text-gold-300 transition hover:bg-charcoal-800"
            >
              <Phone className="h-4 w-4" /> {OWNER.phone}
            </a>
          </div>
        </div>

        {/* Requirement Form */}
        <div id="requirement-form" className="mt-10 scroll-mt-24">
          <RequirementForm />
        </div>
      </section>

      {/* ── Property Categories ───────────────────────── */}
      <section id="categories" className="bg-charcoal-900 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Property Categories"
            title="Explore Property Types"
            subtitle="Whatever you're searching for, we can help you find it."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((cat, i) => (
              <div
                key={cat.title}
                className="group animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl border border-charcoal-700 bg-charcoal-850 transition hover:border-gold-500/30">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="mb-2 flex items-center gap-2 text-gold-400">
                      {cat.icon}
                      <h3 className="font-serif text-lg font-medium text-white">{cat.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400">{cat.desc}</p>
                    <a
                      href="#find-property"
                      className="mt-3 flex items-center gap-1 text-xs font-medium text-gold-500 transition hover:text-gold-300"
                    >
                      Enquire <ChevronRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ──────────────────────────────────────── */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative animate-fade-in">
            <div className="overflow-hidden rounded-2xl border border-charcoal-700">
              <img
                src={ABOUT_IMAGE}
                alt="Luxury property exterior"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 rounded-xl border border-gold-500/30 bg-charcoal-900 px-6 py-4 shadow-xl sm:-right-5">
              <p className="font-serif text-2xl font-medium text-gold-300">Kaustubh</p>
              <p className="text-xs text-gold-600">Your Real Estate Partner</p>
            </div>
          </div>
          <div className="animate-fade-up delay-200">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gold-400">
              About
            </p>
            <h2 className="font-serif text-3xl font-medium text-white text-balance sm:text-4xl">
              Real Estate, With a Personal Touch.
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-gray-400">
              <p>
                Kaustubh Nitin Sutar is a dedicated real estate professional serving the Dwarka region. He believes finding the right property should feel personal — not transactional.
              </p>
              <p>
                Rather than pushing listings, Kaustubh takes the time to understand what you truly need. Whether it is a family home, an investment plot, or a commercial space, he offers clear, honest guidance at every step.
              </p>
              <p>
                No pressure, no jargon — just straightforward communication and a genuine commitment to helping you make the right choice.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => setChatModalOpen(true)}
                className="flex items-center gap-2 rounded-full bg-gold-500 px-6 py-2.5 text-sm font-medium text-charcoal-950 transition hover:bg-gold-400"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Kaustubh
              </button>
              <a
                href={OWNER.tel}
                className="flex items-center gap-2 rounded-full border border-charcoal-600 px-6 py-2.5 text-sm font-medium text-gray-300 transition hover:border-gold-500/40 hover:text-gold-400"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Us ─────────────────────────────────────── */}
      <section id="why" className="bg-charcoal-900 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gold-400">
              Why Us
            </p>
            <h2 className="font-serif text-3xl font-medium text-white text-balance sm:text-4xl">
              Why Choose Dwarka-real.estate
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {WHY_US.map((item, i) => (
              <div
                key={item.title}
                className="animate-fade-up rounded-2xl border border-charcoal-700 bg-charcoal-850 p-8 text-center transition hover:border-gold-500/30"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/30 bg-gold-500/10">
                  {item.icon}
                </div>
                <h3 className="mb-3 font-serif text-xl font-medium text-gold-300">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ────────────────────────────────────── */}
      <section id="contact" className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        <SectionHeader
          label="Contact"
          title="Looking for the Right Property?"
          subtitle="Reach out — Kaustubh is ready to help you find it."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <ContactCard
            icon={<MessageCircle className="h-5 w-5" />}
            label="WhatsApp"
            value={OWNER.phone}
            href="#"
            onClick={() => setChatModalOpen(true)}
          />
          <ContactCard
            icon={<Phone className="h-5 w-5" />}
            label="Call"
            value={OWNER.phone}
            href={OWNER.tel}
          />
          <ContactCard
            icon={<Instagram className="h-5 w-5" />}
            label="Instagram"
            value={OWNER.instagramHandle}
            href={OWNER.instagram}
            external
          />
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────── */}
      <footer className="border-t border-charcoal-700/50 bg-charcoal-950">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="font-serif text-lg font-semibold text-gold-300">
                Dwarka<span className="text-gray-500">-real.estate</span>
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {OWNER.name} · {OWNER.phone}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setChatModalOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal-600 text-gray-400 transition hover:border-gold-500/40 hover:text-gold-400"
              >
                <MessageCircle className="h-4 w-4" />
              </button>
              <a
                href={OWNER.tel}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal-600 text-gray-400 transition hover:border-gold-500/40 hover:text-gold-400"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href={OWNER.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal-600 text-gray-400 transition hover:border-gold-500/40 hover:text-gold-400"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-charcoal-800 pt-6 text-center text-xs text-gray-600">
            © {new Date().getFullYear()} Dwarka-real.estate. All rights reserved.
          </div>
        </div>
      </footer>

      {/* ── Mobile bottom bar ──────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-30 flex items-stretch border-t border-charcoal-700/50 bg-charcoal-950/95 backdrop-blur-md md:hidden">
        <a
          href={OWNER.tel}
          className="flex flex-1 flex-col items-center gap-0.5 py-2.5 text-xs font-medium text-gray-300"
        >
          <Phone className="h-5 w-5" /> Call Now
        </a>
        <button
          onClick={() => setChatModalOpen(true)}
          className="flex flex-1 flex-col items-center gap-0.5 border-l border-charcoal-700/50 py-2.5 text-xs font-medium text-gold-400"
        >
          <MessageCircle className="h-5 w-5" /> WhatsApp
        </button>
      </div>

      <ChatModal open={chatModalOpen} onClose={() => setChatModalOpen(false)} />
    </div>
  );
}

// ── Requirement Form ──────────────────────────────────────
function RequirementForm() {
  const [name, setName] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [listingType, setListingType] = useState('');
  const [bhk, setBhk] = useState('');
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const [additional, setAdditional] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const lines = [
      '*New Property Requirement*',
      '',
      `Name: ${name || '—'}`,
      `Property Type: ${propertyType || '—'}`,
      `Looking to: ${listingType || '—'}`,
      `BHK: ${bhk || '—'}`,
      `Preferred Location: ${location || '—'}`,
      `Budget: ${budget || '—'}`,
      `Additional Requirements: ${additional || '—'}`,
    ];

    const message = encodeURIComponent(lines.join('\n'));
    const url = `https://wa.me/${OWNER.phoneRaw}?text=${message}`;
    window.open(url, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  if (submitted) {
    return (
      <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-gold-500/30 bg-charcoal-900 px-6 py-12 text-center animate-scale-in">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/15 border border-gold-500/30">
          <Check className="h-7 w-7 text-gold-400" />
        </div>
        <p className="font-serif text-xl font-medium text-gold-300">Opening WhatsApp...</p>
        <p className="mt-2 text-sm text-gray-400">
          Your requirement details have been filled in. Just hit send on WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 rounded-2xl border border-charcoal-700 bg-charcoal-900 p-6 shadow-lg sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Field label="Your Name">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Rahul Sharma"
              className="w-full rounded-lg border border-charcoal-600 bg-charcoal-850 px-4 py-2.5 text-sm text-white placeholder-gray-500 transition focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
            />
          </Field>
        </div>

        <Field label="Property Type">
          <Select
            value={propertyType}
            onChange={setPropertyType}
            options={[...PROPERTY_TYPES]}
            placeholder="Select type"
          />
        </Field>

        <Field label="Buy or Rent">
          <Select
            value={listingType}
            onChange={setListingType}
            options={[...LISTING_TYPES]}
            placeholder="Select"
          />
        </Field>

        <Field label="BHK">
          <Select
            value={bhk}
            onChange={setBhk}
            options={[...BHK_OPTIONS]}
            placeholder="Select BHK"
          />
        </Field>

        <Field label="Budget">
          <input
            type="text"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="e.g. ₹50L - ₹80L"
            className="w-full rounded-lg border border-charcoal-600 bg-charcoal-850 px-4 py-2.5 text-sm text-white placeholder-gray-500 transition focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
          />
        </Field>

        <div className="sm:col-span-2">
          <Field label="Preferred Location">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Dwarka Sector 12"
              className="w-full rounded-lg border border-charcoal-600 bg-charcoal-850 px-4 py-2.5 text-sm text-white placeholder-gray-500 transition focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
            />
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field label="Additional Requirements">
            <textarea
              value={additional}
              onChange={(e) => setAdditional(e.target.value)}
              placeholder="Any specific needs, preferences, or questions..."
              rows={3}
              className="w-full resize-none rounded-lg border border-charcoal-600 bg-charcoal-850 px-4 py-2.5 text-sm text-white placeholder-gray-500 transition focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
            />
          </Field>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 py-3.5 text-sm font-medium text-charcoal-950 transition hover:bg-gold-400"
      >
        <MessageCircle className="h-4 w-4" /> Send Requirement on WhatsApp
      </button>
    </form>
  );
}

// ── Data ──────────────────────────────────────────────────
const CATEGORIES = [
  {
    title: 'Residential',
    desc: 'Flats, apartments, villas, and bungalows for you and your family.',
    image: CATEGORY_IMAGES.Residential,
    icon: <Home className="h-5 w-5" />,
  },
  {
    title: 'Plots & Land',
    desc: 'Residential and commercial plots ready for construction.',
    image: CATEGORY_IMAGES['Plots & Land'],
    icon: <Trees className="h-5 w-5" />,
  },
  {
    title: 'Commercial',
    desc: 'Shops, offices, and commercial spaces for your business.',
    image: CATEGORY_IMAGES.Commercial,
    icon: <Building2 className="h-5 w-5" />,
  },
  {
    title: 'Custom Requirement',
    desc: 'Tell us exactly what you need — we will find it for you.',
    image: CATEGORY_IMAGES['Custom Requirement'],
    icon: <Sparkles className="h-5 w-5" />,
  },
];

const WHY_US = [
  {
    icon: <UserRound className="h-6 w-6 text-gold-400" />,
    title: 'Personalized Guidance',
    desc: 'Every client works directly with Kaustubh. No agents, no call centres — just honest, one-on-one advice tailored to your needs.',
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-gold-400" />,
    title: 'Wide Range of Requirements',
    desc: 'From residential flats to commercial spaces and land plots, we handle every type of property requirement with equal care.',
  },
  {
    icon: <MessagesSquare className="h-6 w-6 text-gold-400" />,
    title: 'Direct Communication',
    desc: 'Reach out on WhatsApp or phone anytime. Clear, prompt, and transparent communication at every step.',
  },
];

// ── Sub-components ───────────────────────────────────────
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-gray-300 transition hover:text-gold-400"
    >
      {children}
    </a>
  );
}

function MobileLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-sm font-medium text-gray-300 transition hover:text-gold-400"
    >
      {children}
    </a>
  );
}

function SectionHeader({ label, title, subtitle }: { label: string; title: string; subtitle: string }) {
  return (
    <div className="text-center">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gold-400">
        {label}
      </p>
      <h2 className="font-serif text-3xl font-medium text-white text-balance sm:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-gray-400">{subtitle}</p>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-500">
        {label}
      </label>
      {children}
    </div>
  );
}

function Select({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
  placeholder: string;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-lg border border-charcoal-600 bg-charcoal-850 px-4 py-2.5 text-sm text-white transition focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt} className="bg-charcoal-850">
          {opt}
        </option>
      ))}
    </select>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  external,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      onClick={onClick ? (e) => { e.preventDefault(); onClick(); } : undefined}
      className="group flex flex-col items-center gap-3 rounded-2xl border border-charcoal-700 bg-charcoal-900 p-6 transition hover:border-gold-500/30 hover:bg-charcoal-850"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400">
        {icon}
      </div>
      <div className="text-center">
        <p className="text-xs uppercase tracking-wider text-gray-500">{label}</p>
        <p className="mt-1 text-sm font-medium text-white">{value}</p>
      </div>
    </a>
  );
}

// ── Chat Modal ───────────────────────────────────────────
function ChatModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [requirement, setRequirement] = useState('');
  const [location, setLocation] = useState('');
  const [bhk, setBhk] = useState('');
  const [budget, setBudget] = useState('');

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      '*New Property Enquiry*',
      '',
      `Name: ${name || '—'}`,
      `Phone: ${phone || '—'}`,
      `Requirement: ${requirement || '—'}`,
      `Location: ${location || '—'}`,
      `BHK: ${bhk || '—'}`,
      `Budget: ${budget || '—'}`,
    ];
    const message = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${OWNER.phoneRaw}?text=${message}`, '_blank');
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-charcoal-950/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className="relative z-10 max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl border border-charcoal-700 bg-charcoal-900 p-6 shadow-2xl animate-scale-in sm:p-8">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 transition hover:text-gold-400"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500/15 border border-gold-500/30">
            <MessageCircle className="h-5 w-5 text-gold-400" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-medium text-white">Chat with our team</h3>
            <p className="text-xs text-gray-500">Please fill in your details to chat with our team.</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <Field label="Name">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full rounded-lg border border-charcoal-600 bg-charcoal-850 px-4 py-2.5 text-sm text-white placeholder-gray-500 transition focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                />
              </Field>
            </div>
            <div className="sm:col-span-2">
              <Field label="Phone">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full rounded-lg border border-charcoal-600 bg-charcoal-850 px-4 py-2.5 text-sm text-white placeholder-gray-500 transition focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                />
              </Field>
            </div>
            <Field label="Requirement">
              <Select
                value={requirement}
                onChange={setRequirement}
                options={[...PROPERTY_TYPES]}
                placeholder="Select type"
              />
            </Field>
            <Field label="BHK">
              <Select
                value={bhk}
                onChange={setBhk}
                options={[...BHK_OPTIONS]}
                placeholder="Select BHK"
              />
            </Field>
            <div className="sm:col-span-2">
              <Field label="Location">
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Dwarka Sector 12"
                  className="w-full rounded-lg border border-charcoal-600 bg-charcoal-850 px-4 py-2.5 text-sm text-white placeholder-gray-500 transition focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                />
              </Field>
            </div>
            <div className="sm:col-span-2">
              <Field label="Budget">
                <input
                  type="text"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="e.g. ₹50L - ₹80L"
                  className="w-full rounded-lg border border-charcoal-600 bg-charcoal-850 px-4 py-2.5 text-sm text-white placeholder-gray-500 transition focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                />
              </Field>
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 py-3 text-sm font-medium text-charcoal-950 transition hover:bg-gold-400"
          >
            <MessageCircle className="h-4 w-4" /> Continue to WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
