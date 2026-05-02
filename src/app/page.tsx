"use client";

import { useEffect, useRef } from "react";

const activities = [
  {
    id: "3cfebf4e-bc6e-4c49-a02a-87312f78ed6d",
    number: "01",
    title: "Rijksmuseum + Luxury Cruise",
    subtitle: "Combo Deal — Save 10%",
    description:
      "The ultimate Amsterdam experience. Explore world-renowned masterpieces at the Rijksmuseum, then unwind on a 1-hour luxury open boat cruise with an onboard bar.",
    duration: "Half day",
    intensity: "Relaxed",
    image: "https://picsum.photos/seed/museum/800/600",
  },
  {
    id: "914af995-3b58-44e4-9d1c-8bbf207149af",
    number: "02",
    title: "Morning Cruise",
    subtitle: "Canal Experience",
    description:
      "Start your day gliding through Amsterdam's iconic waterways. Watch the city wake up as golden light dances on historic canal houses.",
    duration: "1 hour",
    intensity: "Relaxed",
    image: "https://picsum.photos/seed/morning/800/600",
  },
];

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 17L17 7M17 7H7M17 7V17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a
          href="#"
          className="text-lg font-medium tracking-tight transition-opacity hover:opacity-70"
        >
          FLAGSHIP
        </a>
        <div className="hidden items-center gap-8 text-sm tracking-wide text-[#999] md:flex">
          <a href="#experiences" className="transition-colors hover:text-white">
            Experiences
          </a>
          <a href="#about" className="transition-colors hover:text-white">
            About
          </a>
          <a href="#contact" className="transition-colors hover:text-white">
            Contact
          </a>
        </div>
        <a
          href="?yetti-modal=true&activity=3cfebf4e-bc6e-4c49-a02a-87312f78ed6d"
          className="group flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-all hover:bg-[#ff4d00] hover:text-white"
        >
          Book Now
          <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1920&auto=format&fit=crop&q=80"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/70 to-[#050505]" />

      {/* Animated accent glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff4d00] opacity-[0.08] blur-[150px]" />

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        {/* Eyebrow */}
        <p className="animate-fade-in-up mb-6 text-sm font-medium uppercase tracking-[0.3em] text-[#ff4d00]">
          Amsterdam&apos;s Premier Adventures
        </p>

        {/* Main headline */}
        <h1 className="animate-fade-in-up delay-100 font-[family-name:var(--font-playfair)] text-5xl font-light leading-[1.1] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
          Discover
          <br />
          <span className="italic text-[#ff4d00]">Extraordinary</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-in-up delay-300 mx-auto mt-8 max-w-xl text-lg leading-relaxed text-[#888] md:text-xl">
          Curated experiences that transform the ordinary into the
          unforgettable. Where every moment becomes a masterpiece.
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-in-up delay-500 mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#experiences"
            className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-medium uppercase tracking-wider text-black transition-all hover:bg-[#ff4d00] hover:text-white"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Experiences
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
          <button className="group rounded-full border border-white/20 px-8 py-4 text-sm font-medium uppercase tracking-wider transition-all hover:border-white/50 hover:bg-white/5">
            <span className="flex items-center gap-2">
              Watch Film
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-in delay-700 absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-[#666]">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-12 w-px bg-gradient-to-b from-[#666] to-transparent" />
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  activity,
  index,
}: {
  activity: (typeof activities)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className={`animate-on-scroll grid gap-8 lg:grid-cols-2 lg:gap-16 ${
        isEven ? "" : "lg:[direction:rtl]"
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Image */}
      <div className="img-zoom relative aspect-[4/3] overflow-hidden rounded-2xl lg:[direction:ltr]">
        <img
          src={activity.image}
          alt={activity.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Number overlay */}
        <span className="absolute bottom-6 left-6 font-[family-name:var(--font-playfair)] text-7xl font-light italic text-white/20">
          {activity.number}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center lg:[direction:ltr]">
        <span className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[#ff4d00]">
          {activity.subtitle}
        </span>
        <h3 className="font-[family-name:var(--font-playfair)] text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
          {activity.title}
        </h3>
        <p className="mt-6 text-lg leading-relaxed text-[#888]">
          {activity.description}
        </p>

        {/* Meta info */}
        <div className="mt-8 flex gap-8">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#666]">
              Duration
            </span>
            <p className="mt-1 font-medium">{activity.duration}</p>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-[#666]">
              Intensity
            </span>
            <p className="mt-1 font-medium">{activity.intensity}</p>
          </div>
        </div>

        {/* Book button */}
        <button
          data-yetti-activity={activity.id}
          className="group mt-10 inline-flex w-fit items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-sm font-medium uppercase tracking-wider transition-all hover:border-[#ff4d00] hover:bg-[#ff4d00] hover:text-white"
        >
          Book This Experience
          <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  );
}

function Experiences() {
  return (
    <section id="experiences" className="relative px-6 py-32 md:py-40">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-20 text-center">
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-[#ff4d00]">
            Experiences
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
            Choose Your <span className="italic">Journey</span>
          </h2>
        </div>

        {/* Activity cards */}
        <div className="space-y-24 lg:space-y-40">
          {activities.map((activity, index) => (
            <ExperienceCard key={activity.id} activity={activity} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { number: "10K+", label: "Happy Explorers" },
    { number: "50+", label: "Unique Routes" },
    { number: "4.9", label: "Average Rating" },
    { number: "8", label: "Years of Excellence" },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-24">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#ff4d00]/5 via-transparent to-[#ff4d00]/5" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
            >
              <span className="font-[family-name:var(--font-playfair)] text-4xl font-light italic text-[#ff4d00] md:text-5xl lg:text-6xl">
                {stat.number}
              </span>
              <p className="mt-2 text-sm uppercase tracking-wider text-[#666]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FullWidthCTA() {
  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=1920&auto=format&fit=crop&q=80"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-6">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-xl">
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-[#ff4d00]">
              Limited Availability
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl font-light leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Book Your
              <br />
              <span className="italic text-[#ff4d00]">Amsterdam</span>
              <br />
              Experience
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#aaa]">
              Secure your spot on our most popular tours.
              Morning cruises and combo deals sell out fast during peak season.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="?yetti-modal=true&activity=3cfebf4e-bc6e-4c49-a02a-87312f78ed6d"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#ff4d00] px-8 py-4 text-sm font-medium uppercase tracking-wider text-white transition-all hover:bg-[#ff6b2c]"
              >
                Book Combo Deal
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="?yetti-modal=true&activity=914af995-3b58-44e4-9d1c-8bbf207149af"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/30 px-8 py-4 text-sm font-medium uppercase tracking-wider text-white transition-all hover:bg-white/10"
              >
                Morning Cruise
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        {/* Image grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="img-zoom aspect-[3/4] overflow-hidden rounded-2xl">
              <img
                src="https://picsum.photos/seed/arch/400/533"
                alt="Amsterdam architecture"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="img-zoom aspect-square overflow-hidden rounded-2xl">
              <img
                src="https://picsum.photos/seed/bikes/400/400"
                alt="Amsterdam bikes"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="mt-8 space-y-4">
            <div className="img-zoom aspect-square overflow-hidden rounded-2xl">
              <img
                src="https://picsum.photos/seed/water/400/400"
                alt="Amsterdam canals"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="img-zoom aspect-[3/4] overflow-hidden rounded-2xl">
              <img
                src="https://picsum.photos/seed/streets/400/533"
                alt="Amsterdam streets"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-[#ff4d00]">
            Our Story
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl font-light tracking-tight md:text-5xl">
            Crafting <span className="italic">Memories</span>
            <br />
            Since 2018
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-[#888]">
            We believe travel should transcend the ordinary. Our team of local
            experts curates experiences that reveal Amsterdam&apos;s soul—its hidden
            courtyards, untold stories, and secret pathways known only to those
            who truly belong here.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-[#888]">
            Every journey is designed with obsessive attention to detail,
            ensuring moments that linger in memory long after you&apos;ve returned
            home.
          </p>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-12 w-12 rounded-full border-2 border-[#050505] bg-[#222]"
                />
              ))}
            </div>
            <div>
              <p className="font-medium">Join 10,000+ explorers</p>
              <p className="text-sm text-[#666]">Who discovered the real Amsterdam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden px-6 py-32">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&auto=format&fit=crop&q=80"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#050505]/85" />

      {/* Glow effect */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 rounded-full bg-[#ff4d00] opacity-15 blur-[150px]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-light tracking-tight md:text-6xl lg:text-7xl">
          Ready to <span className="italic text-[#ff4d00]">Explore?</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-[#aaa]">
          Book your adventure today and experience Amsterdam like never before.
          Your extraordinary journey awaits.
        </p>

        <a
          href="?yetti-modal=true&activity=3cfebf4e-bc6e-4c49-a02a-87312f78ed6d"
          className="group mt-12 inline-flex items-center gap-3 rounded-full bg-[#ff4d00] px-10 py-5 text-sm font-medium uppercase tracking-wider text-white transition-all hover:bg-[#ff6b2c] animate-pulse-glow"
        >
          Book Your Experience
          <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-medium tracking-tight">FLAGSHIP</h3>
            <p className="mt-4 max-w-xs text-[#666]">
              Amsterdam&apos;s premier adventure company. Curating extraordinary
              experiences since 2018.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-[#666]">
              Explore
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#experiences" className="transition-colors hover:text-[#ff4d00]">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors hover:text-[#ff4d00]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#ff4d00]">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-[#666]">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="text-[#888]">hello@flagship.amsterdam</li>
              <li className="text-[#888]">+31 20 123 4567</li>
              <li className="text-[#888]">Amsterdam, Netherlands</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-[#666] md:flex-row">
          <p>&copy; 2024 Flagship Amsterdam. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">
              Instagram
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Twitter
            </a>
            <a href="#" className="transition-colors hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="relative">
      {/* Grain overlay for texture */}
      <div className="grain pointer-events-none fixed inset-0 z-50" />

      <Navbar />
      <Hero />
      <Experiences />
      <Stats />
      <FullWidthCTA />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
