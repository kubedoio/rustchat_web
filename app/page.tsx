'use client';

import React, { useState, useEffect } from 'react';

/**
 * RUSTCHAT MARKETING SITE
 * 
 * Technical Stack: Next.js + Tailwind CSS
 * Design: Modern, Futuristic, High-Performance
 * 
 * This is a single-file implementation of the RustChat marketing site.
 */

// --- Icons (Simple Inline SVGs) ---

const IconCuts = {
  Rust: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  Mattermost: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  OpenSource: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a10 10 0 0 1 10 10" />
    </svg>
  ),
  Shield: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Fast: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  Github: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  Sun: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  ),
  Moon: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  ),
  ChevronRight: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),
  Terminal: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  ),
  Users: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
};

// --- Main Page Component ---

export default function RustChatLanding() {
  const [darkMode, setDarkMode] = useState(true);

  // Toggle theme effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Open Source', href: '#open-source' },
    { name: 'Docs', href: 'https://docs.rustchat.io' },
  ];

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'bg-midnight text-gray-100' : 'bg-white text-gray-900'}`}>

      {/* 3.1 Sticky Header */}
      <header className={`fixed top-0 w-full z-50 border-b backdrop-blur-md transition-colors ${darkMode ? 'bg-midnight/80 border-gray-800' : 'bg-white/80 border-gray-200'}`}>
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-accent-purple to-accent-teal shadow-lg shadow-accent-purple/20`}>
              <IconCuts.Rust />
            </div>
            <span className="text-xl font-bold tracking-tight">RustChat</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent-teal ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              aria-label="Toggle Theme"
            >
              {darkMode ? <IconCuts.Sun /> : <IconCuts.Moon />}
            </button>
            <a
              href="https://github.com/kubedoio/rustchat"
              className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              <IconCuts.Github />
              <span>GitHub</span>
            </a>
            <a
              href="https://app.rustchat.io"
              className="px-5 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-accent-purple to-accent-teal text-white hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-md shadow-accent-purple/25 inline-flex items-center"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      <main className="pt-16">

        {/* 3.2 Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-40">
          {/* Subtle Glow Backgrounds */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent-purple/10 blur-[120px] rounded-full -z-10 pointer-events-none opacity-50 dark:opacity-100" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-teal/10 blur-[100px] rounded-full -z-10 pointer-events-none" />

          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-teal/30 bg-accent-teal/5 text-accent-teal text-xs font-bold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-teal opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-teal"></span>
                </span>
                1.0 Release Coming Soon
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
                The Performance of <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-teal">Rust</span>. <br />
                The Freedom of <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-purple">Open Source</span>.
              </h1>
              <p className={`text-xl leading-relaxed max-w-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                RustChat is the 100% open-source, self-hosted, and Mattermost Mobile App-compatible chat server. Fast, safe, and built for teams who own their stack.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 rounded-xl text-lg font-bold bg-gradient-to-r from-accent-purple to-accent-teal text-white shadow-xl shadow-accent-purple/20 hover:scale-105 active:scale-95 transition-all">
                  Run RustChat
                </button>
                <a href="#how-it-works" className={`px-8 py-4 rounded-xl text-lg font-bold border transition-all hover:bg-opacity-50 ${darkMode ? 'border-gray-700 bg-gray-800 text-white hover:bg-gray-700' : 'border-gray-200 bg-gray-50 text-gray-900 hover:bg-gray-100'}`}>
                  Connect Mattermost Mobile App
                </a>
              </div>

              <ul className="space-y-3 pt-6">
                {[
                  "Works with original Mattermost Mobile App (iOS/Android)",
                  "Written in high-performance Async Rust (Axum, Tokio)",
                  "Built-in Playbooks for incident response",
                  "No feature gates, no cloud lock-in, forever free"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="text-accent-teal"><IconCuts.ChevronRight /></div>
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3.2 Visual Mock */}
            <div className="relative group animate-fade-up px-4 md:px-0" style={{ animationDelay: '200ms' }}>
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-purple to-accent-teal rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className={`relative rounded-2xl border overflow-hidden shadow-2xl ${darkMode ? 'bg-midnight-lighter border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
                {/* Mock UI Header */}
                <div className={`px-4 py-3 border-b flex items-center justify-between ${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-100 border-gray-200'}`}>
                  <div className="flex gap-1.5 ">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="text-xs font-medium text-gray-500 tracking-wider">RUSTCHAT DESKTOP</div>
                  <div className="w-6 h-6 rounded bg-gray-700/30"></div>
                </div>

                {/* Mock Messages */}
                <div className="p-6 space-y-6 min-h-[400px]">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-purple flex items-center justify-center text-white font-bold shrink-0">JD</div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold">John Doe</span>
                        <span className="text-[10px] text-gray-500 uppercase">10:45 AM</span>
                      </div>
                      <p className={`p-4 rounded-2xl rounded-tl-none border ${darkMode ? 'bg-gray-800/50 border-gray-700 text-gray-300' : 'bg-white border-gray-100 text-gray-700 shadow-sm'}`}>
                        Hey team! Just finished deploying the new RustChat instance. The latency is incredible. 🚀
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-teal flex items-center justify-center text-white font-bold shrink-0">AL</div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold">Alice Low</span>
                        <span className="text-[10px] text-gray-500 uppercase">10:46 AM</span>
                      </div>
                      <p className={`p-4 rounded-2xl rounded-tl-none border ${darkMode ? 'bg-gray-800/50 border-gray-700 text-gray-300' : 'bg-white border-gray-100 text-gray-700 shadow-sm'}`}>
                        Confirmed! I connected my Mattermost Mobile App iOS in seconds. Everything just works. Plus, the Playbook feature is a game changer for our ops.
                      </p>
                      <div className="flex gap-2">
                        <span className={`px-2 py-0.5 rounded text-xs border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'}`}>👍 12</span>
                        <span className={`px-2 py-0.5 rounded text-xs border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'}`}>🦀 8</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Badges Overlay */}
                <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col gap-3">
                  <div className="px-4 py-2 bg-accent-purple/90 text-white rounded-full text-sm font-bold shadow-lg backdrop-blur-sm transform rotate-3 hover:rotate-0 transition-transform cursor-pointer">
                    Mattermost Mobile App Ready
                  </div>
                  <div className="px-4 py-2 bg-emerald-500/90 text-white rounded-full text-sm font-bold shadow-lg backdrop-blur-sm transform -rotate-2 hover:rotate-0 transition-transform cursor-pointer">
                    100% Open Source
                  </div>
                  <div className="px-4 py-2 bg-accent-teal/90 text-white rounded-full text-sm font-bold shadow-lg backdrop-blur-sm transform rotate-1 hover:rotate-0 transition-transform cursor-pointer">
                    Self-Host Forever
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3.3 “Why RustChat?” – Key Benefits */}
        <section id="features" className={`py-24 ${darkMode ? 'bg-midnight-lighter' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-6">Built for the Modern Developer</h2>
              <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Engineered with performance and freedom in mind. No compromises on security or ownership.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Mattermost Mobile App Compatible",
                  desc: "Connect the official Mattermost Mobile App to RustChat and keep chatting – no new client needed.",
                  icon: <IconCuts.Mattermost />
                },
                {
                  title: "Own Your Data",
                  desc: "Run locally, in K8s, or the cloud. Your messages and files stay under your control, always.",
                  icon: <IconCuts.Shield />
                },
                {
                  title: "Rust-Powered Speed",
                  desc: "Blazing fast performance with sub-millisecond API response times and minimal memory footprint.",
                  icon: <IconCuts.Fast />
                },
                {
                  title: "Forever Open",
                  desc: "Licensed under MIT/Apache. No enterprise tiers, no feature gates, no artificial limits.",
                  icon: <IconCuts.OpenSource />
                }
              ].map((benefit, i) => (
                <div key={i} className={`p-8 rounded-2xl border transition-all hover:-translate-y-2 hover:shadow-2xl hover:border-accent-purple/50 ${darkMode ? 'bg-midnight border-gray-800' : 'bg-white border-gray-200'}`}>
                  <div className="w-12 h-12 rounded-xl bg-accent-purple/10 text-accent-purple flex items-center justify-center mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3.4 Use Cases Section */}
        <section id="use-cases" className="py-24 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2 space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">Tailored for Every <br /><span className="text-accent-teal">Chat Environment</span></h2>
                <div className="space-y-6">
                  {[
                    {
                      label: "For Dev & Ops Teams",
                      desc: "Perfect for ChatOps, automated CI/CD notifications, and high-stakes incident response with integrated Playbooks.",
                      bullets: ["Slash commands", "Webhook support", "Real-time logs"]
                    },
                    {
                      label: "For Families & Communities",
                      desc: "A safe, private, and free alternative to Discord or WhatsApp. Host it on a Raspberry Pi or low-cost VPS.",
                      bullets: ["End-to-end privacy", "Low resource usage", "Easy setup"]
                    },
                    {
                      label: "For Enterprise Migrations",
                      desc: "Drop-in replacement for Mattermost Mobile App-compatible infrastructure without losing your mobile users or learning new APIs.",
                      bullets: ["RBAC support", "S3 Storage", "Audit readiness"]
                    }
                  ].map((useCase, i) => (
                    <div key={i} className="group cursor-default">
                      <h3 className={`text-xl font-bold mb-2 transition-colors group-hover:text-accent-purple`}>{useCase.label}</h3>
                      <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{useCase.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {useCase.bullets.map((b, bi) => (
                          <span key={bi} className={`text-xs px-2 py-1 rounded border ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-400' : 'bg-gray-100 border-gray-200 text-gray-600'}`}>
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-1/2 relative">
                <div className={`aspect-square max-w-[500px] border-4 p-8 rounded-[40px] relative overflow-hidden ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-100 bg-gray-50'}`}>
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/10 to-transparent"></div>
                  <div className="relative z-10 space-y-6">
                    <div className={`p-4 rounded-xl border ${darkMode ? 'bg-midnight border-gray-700' : 'bg-white border-gray-100 shadow-sm'}`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded bg-emerald-500/20 text-emerald-500 flex items-center justify-center"><IconCuts.Shield /></div>
                        <span className="font-bold">Playbook Active</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded border-2 border-emerald-500 bg-emerald-500"></div>
                          <span className="text-sm">Identify source of latency</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded border-2 border-accent-purple"></div>
                          <span className="text-sm">Notify infrastructure team</span>
                        </div>
                      </div>
                    </div>
                    <div className={`p-4 rounded-xl border opacity-60 scale-95 origin-left ${darkMode ? 'bg-midnight border-gray-700' : 'bg-white border-gray-100 shadow-sm'}`}>
                      <div className="h-4 w-3/4 bg-gray-700 rounded mb-2"></div>
                      <div className="h-3 w-1/2 bg-gray-700 rounded"></div>
                    </div>
                    <div className="flex justify-center py-4">
                      <IconCuts.Users />
                    </div>
                  </div>
                </div>
                {/* Accent Decor */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-teal/20 blur-2xl rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 3.5 “How It Works” – Mattermost Client Compatibility */}
        <section id="how-it-works" className={`py-24 ${darkMode ? 'bg-midnight-lighter' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">How It Works</h2>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>3 minutes from zero to chat.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {/* Connector Line */}
              <div className={`hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-0.5 z-0 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}></div>

              {[
                { step: 1, title: "Deploy Server", desc: "Run a single Docker command or K8s chart." },
                { step: 2, title: "Open Official App", desc: "Use the Mattermost Mobile App on iOS or Android." },
                { step: 3, title: "Set Your URL", desc: "Point the app to your RustChat domain." },
                { step: 4, title: "Start Chatting", desc: "Real-time messages, files, and more." }
              ].map((item, i) => (
                <div key={i} className="relative z-10 text-center px-4">
                  <div className="w-12 h-12 rounded-full bg-accent-teal text-white flex items-center justify-center font-bold text-xl mx-auto mb-6 shadow-lg shadow-accent-teal/20">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                </div>
              ))}
            </div>

            <div className={`mt-20 p-8 rounded-3xl border text-center max-w-4xl mx-auto ${darkMode ? 'bg-midnight border-accent-teal/20' : 'bg-white border-gray-200'}`}>
              <div className="flex flex-wrap justify-center gap-8 items-center text-sm font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span>Async Rust Backend (Axum)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-teal"></div>
                  <span>Mattermost Mobile App /api/v4 Compatible</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-purple"></div>
                  <span>WebSocket Real-time Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3.6 Feature Overview Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center lg:text-left">Full Featured. Zero Gating.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Channels & DMs", desc: "Public channels, private groups, and one-on-one direct messages." },
                { title: "Threads & Reactions", desc: "Keep conversations organized with deep threads and expressive reactions." },
                { title: "Real-time Presence", desc: "Typing indicators, online status, and unread counters across all devices." },
                { title: "S3 Storage", desc: "Integrated support for AWS S3, MinIO, and Ceph RGW for file uploads." },
                { title: "Advanced RBAC", desc: "Granular roles: System Admin, Organization Admin, and Team Members." },
                { title: "Integration Hooks", desc: "Inbound and outbound webhooks to connect your favorite dev tools." }
              ].map((f, i) => (
                <div key={i} className={`p-6 rounded-xl border transition-colors ${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}`}>
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <span className="text-accent-teal"><IconCuts.ChevronRight /></span>
                    {f.title}
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3.7 “100% Open Source, Never Locked In” */}
        <section id="open-source" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-accent-purple/5 -z-10"></div>
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">100% Open Source. <br />No Artificial Limits.</h2>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                RustChat is committed to remaining completely open source. We don't believe in "Open Core" where the most useful features are hidden behind a paywall.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">✓</div>
                  <p>All messaging features included by default</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">✓</div>
                  <p>Self-host on any infrastructure</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">✓</div>
                  <p>Clear Apache 2.0 / MIT licensing</p>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <button className={`px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-all ${darkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
                  <IconCuts.Github />
                  <span>Star on GitHub</span>
                </button>
                <button className={`px-6 py-3 rounded-lg font-bold border transition-all ${darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-200 hover:bg-gray-100'}`}>
                  Read the Code
                </button>
              </div>
            </div>

            <div className={`p-1 rounded-2xl border shadow-2xl ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'}`}>
              <div className={`rounded-xl overflow-hidden font-mono text-sm ${darkMode ? 'bg-midnight text-accent-teal' : 'bg-white text-emerald-600 shadow-inner'}`}>
                <div className={`px-4 py-2 flex items-center justify-between border-b ${darkMode ? 'bg-gray-900 border-gray-800 text-gray-400' : 'bg-gray-50 border-gray-100'}`}>
                  <span>src/api/auth.rs</span>
                  <span className="text-xs">RUST</span>
                </div>
                <pre className="p-6 overflow-x-auto">
                  {`#[axum::debug_handler]
pub async fn login_handler(
    State(state): State<AppState>,
    Json(payload): Json<LoginRequest>,
) -> Result<impl IntoResponse, AppError> {
    let user = state.db.find_user(&payload.username).await?;
    
    if !user.verify_password(&payload.password) {
        return Err(AppError::Unauthorized);
    }
    
    Ok(Json(AuthToken::new(user.id)))
}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* 3.8 “Quick Start” Section */}
        <section className={`py-24 ${darkMode ? 'bg-midnight-lighter' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Quick Start</h2>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Launch your instance in minutes.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Docker Compose",
                  cmd: "docker compose up -d",
                  desc: "Ideal for testing and simple self-hosting environments."
                },
                {
                  title: "Kubernetes",
                  cmd: "helm install rustchat kubedo/rustchat",
                  desc: "Scale horizontally with our official Helm chart."
                },
                {
                  title: "Bare Metal",
                  cmd: "./rustchat-server --config config.yaml",
                  desc: "Direct execution for maximum performance and control."
                }
              ].map((box, i) => (
                <div key={i} className={`p-8 rounded-2xl border flex flex-col justify-between ${darkMode ? 'bg-midnight border-gray-800' : 'bg-white border-gray-200 shadow-sm'}`}>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{box.title}</h3>
                    <p className={`text-sm mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{box.desc}</p>
                  </div>
                  <div className={`p-4 rounded-lg font-mono text-xs flex items-center justify-between ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
                    <code>{box.cmd}</code>
                    <button className="text-accent-teal hover:underline px-2">Copy</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3.9 Community & Contributing */}
        <section className="py-24 text-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl font-bold">Join the Community</h2>
              <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                RustChat is driven by its contributors. Join us on GitHub to report issues, suggest features, or contribute code.
              </p>
              <div className="flex flex-center justify-center gap-6">
                <div className="p-4 rounded-full bg-accent-purple/10 text-accent-purple hover:scale-110 transition-transform cursor-pointer">
                  <IconCuts.Github />
                </div>
                <div className="p-4 rounded-full bg-accent-teal/10 text-accent-teal hover:scale-110 transition-transform cursor-pointer">
                  <IconCuts.Terminal />
                </div>
                <div className="p-4 rounded-full bg-blue-500/10 text-blue-500 hover:scale-110 transition-transform cursor-pointer">
                  <IconCuts.Users />
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* 3.10 Footer */}
      <footer className={`py-12 border-t ${darkMode ? 'bg-midnight border-gray-800 text-gray-500' : 'bg-white border-gray-200 text-gray-400'}`}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2 md:col-span-1 space-y-4">
              <div className="flex items-center gap-2 text-white">
                <div className="w-6 h-6 rounded flex items-center justify-center bg-gradient-to-br from-accent-purple to-accent-teal">
                  <IconCuts.Rust />
                </div>
                <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>RustChat</span>
              </div>
              <p className="text-sm">High-performance, 100% open-source team collaboration.</p>
            </div>
            <div>
              <h5 className={`font-bold text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Resources</h5>
              <ul className="text-sm space-y-3">
                <li><a href="https://docs.rustchat.io" className="hover:text-accent-teal">Documentation</a></li>
                <li><a href="#" className="hover:text-accent-teal">GitHub Repository</a></li>
                <li><a href="#" className="hover:text-accent-teal">API v1 Spec</a></li>
              </ul>
            </div>
            <div>
              <h5 className={`font-bold text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Community</h5>
              <ul className="text-sm space-y-3">
                <li><a href="#" className="hover:text-accent-teal">Discussions</a></li>
                <li><a href="#" className="hover:text-accent-teal">Issues</a></li>
                <li><a href="#" className="hover:text-accent-teal">Contributors</a></li>
              </ul>
            </div>
            <div>
              <h5 className={`font-bold text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Legal</h5>
              <ul className="text-sm space-y-3">
                <li><a href="#" className="hover:text-accent-teal">MIT License</a></li>
                <li><a href="#" className="hover:text-accent-teal">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800/30 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>© {new Date().getFullYear()} RustChat / Kubedo.io</p>
            <p className="max-w-[400px] text-center md:text-right italic">
              RustChat is not affiliated with Mattermost, Inc. Mattermost is a trademark of its respective owner.
            </p>
          </div>
        </div>
      </footer>

      {/* Global Style Inject (Animations) */}
      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
        }
      `}</style>

    </div>
  );
}
