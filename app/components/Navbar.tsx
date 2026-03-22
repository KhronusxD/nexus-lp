"use client";

import { useState, useRef } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: -999, y: -999, visible: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = headerRef.current!.getBoundingClientRect();
    setSpotlight({ x: e.clientX - rect.left, y: e.clientY - rect.top, visible: true });
  };

  return (
    <nav className="fixed inset-x-0 top-4 z-50 mx-auto w-full max-w-6xl px-4 md:px-6">
      <div
        ref={headerRef}
        className="flex h-14 items-center justify-between px-4 md:px-6 glass-topbar rounded-2xl overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setSpotlight((s) => ({ ...s, visible: false }))}
        style={{ position: "relative" }}
      >
        {/* Mouse spotlight */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-500"
          style={{
            opacity: spotlight.visible ? 1 : 0,
            background: `radial-gradient(280px circle at ${spotlight.x}px ${spotlight.y}px,
              rgba(0,206,209,0.07) 0%,
              rgba(50,205,50,0.04) 40%,
              transparent 70%)`,
          }}
        />
        {/* Logo */}
        <a href="#" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-horizontal.png" alt="Nexus" className="h-8 w-auto" />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {[
            { label: "Produto", href: "#produto" },
            { label: "Preços", href: "#precos" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}

          <a href="#depoimentos" className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors duration-200">
            Depoimentos
          </a>

          <a href="#faq" className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors duration-200">
            FAQ
          </a>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-3">
          <a href="https://nexus-lilac-iota.vercel.app/login" className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors duration-200">
            Entrar
          </a>
          <a href="https://nexus-lilac-iota.vercel.app/login" className="btn-primary-gradient text-white text-sm font-semibold px-4 h-9 rounded-lg inline-flex items-center gap-2 active:scale-95">
            Começar grátis
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menu"
        >
          {mobileOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-14 z-40 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(10,10,12,0.97)", backdropFilter: "blur(20px)" }}
      >
        <div className="flex flex-col p-6 gap-4">
          <a href="#produto" className="text-base text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors" onClick={() => setMobileOpen(false)}>
            Produto
          </a>
          <a href="#precos" className="text-base text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors" onClick={() => setMobileOpen(false)}>
            Preços
          </a>
          <a href="#depoimentos" className="text-base text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors" onClick={() => setMobileOpen(false)}>
            Depoimentos
          </a>
          <a href="#faq" className="text-base text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors" onClick={() => setMobileOpen(false)}>
            FAQ
          </a>
          <hr className="border-[var(--border)]" />
          <a href="https://nexus-lilac-iota.vercel.app/login" className="text-base text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors">
            Entrar
          </a>
          <a href="https://nexus-lilac-iota.vercel.app/login" className="btn-primary-gradient text-white text-sm font-semibold px-4 h-9 rounded-lg w-fit inline-flex items-center">
            Começar grátis
          </a>
        </div>
      </div>
    </nav>
  );
}
