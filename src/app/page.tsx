'use client'

import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

// Importing react-icons for logos
import { FaWhatsapp, FaTelegram, FaFacebookMessenger } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'

export default function Home() {
  const name = 'Sajid Rahman'
  const role = 'SEO Specialist & Freelance Consultant'
  const location = 'Dhaka, Bangladesh'
  const heroTagline = 'Grow organic traffic, fix SEO issues fast, and convert visitors into customers.'
  const profileImage = '/profile.jpg'

  const initials = React.useMemo(() => {
    if (!name || typeof name !== 'string') return 'SN'
    const parts = name.trim().split(/\s+/)
    return (parts.map(p => p?.[0] || '').slice(0, 2).join('') || 'SN').toUpperCase()
  }, [name])

  const services = [
    { title: 'SEO Audit', price: '$50', bullets: ['1-page actionable PDF', 'Top 5 priority fixes', 'PageSpeed checks'] },
    { title: 'On-Page Optimization', price: '$150', bullets: ['Title & meta optimization', 'H1/H2 structure', 'Schema & internal linking'] },
    { title: 'Full SEO Setup', price: '$300', bullets: ['Keyword list (30)', 'RankMath/Yoast setup', '1-week monitoring'] }
  ]

  const portfolio = [
    { title: 'Local Cafe SEO Audit', desc: 'Improved local visibility with mock on-site fixes.', link: '#' },
    { title: 'eCommerce Keyword Pack', desc: 'Created 30 buyer-intent keywords for product pages.', link: '#' },
    { title: 'WordPress SEO Setup', desc: 'RankMath setup, sitemap, and indexing optimization.', link: '#' },
    { title: 'Blog SEO Optimization', desc: 'Mock optimization for faster indexing and better rankings.', link: '#' }
  ]

  // Social/contact links
  const socialLinks = [
    { name: 'WhatsApp', icon: FaWhatsapp, url: 'https://wa.me/880XXXXXXXXX' },
    { name: 'Telegram', icon: FaTelegram, url: 'https://t.me/yourusername' },
    { name: 'Messenger', icon: FaFacebookMessenger, url: 'https://m.me/yourusername' },
    { name: 'Upwork', icon: SiUpwork, url: 'https://www.upwork.com/yourusername' }
  ]

  return (
    <>
      <Head>
        <title>{`${name} — ${role}`}</title>
        <meta name="description" content={heroTagline} />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 font-sans">
        <div className="max-w-5xl mx-auto p-8">

          {/* Header */}
          <header className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-purple-700 rounded-lg font-bold text-gray-900 text-xl">
                {initials}
              </div>
              <div>
                <h1 className="text-xl font-semibold">{name}</h1>
                <p className="text-gray-400 text-sm">{role} • {location}</p>
              </div>
            </div>
            {profileImage && (
              <Image src={profileImage} alt={name} width={64} height={64} className="rounded-full" />
            )}
          </header>

          {/* Hero Section */}
          <section className="bg-gray-900/50 border border-gray-700 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-bold mb-4">{heroTagline}</h2>
            <p className="text-gray-400 max-w-2xl">
              I help small businesses and ecommerce stores increase organic visibility using fast, measurable SEO strategies. Quick wins include technical fixes, on-page optimization, and keyword targeting that shows results fast.
            </p>
          </section>

          {/* Services */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((s, idx) => (
                <div key={idx} className="bg-gray-900/40 border border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-xl font-semibold mb-2">{s.title}</h4>
                  <p className="text-cyan-400 font-bold mb-2">{s.price}</p>
                  <ul className="list-disc list-inside text-gray-300">
                    {s.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Portfolio */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Portfolio / Practice Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolio.map((p, idx) => (
                <a key={idx} href={p.link} target="_blank" rel="noopener noreferrer" className="block bg-gray-900/40 border border-gray-700 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
                  <p className="text-gray-300">{p.desc}</p>
                </a>
              ))}
            </div>
          </section>

          {/* Contact / Social Section */}
          <section className="bg-gray-900/50 border border-gray-700 p-8 rounded-xl text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
            <p className="text-gray-400 mb-6">Reach me on any platform below for a free consultation!</p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((s, idx) => {
                const Icon = s.icon
                return (
                  <a key={idx} href={s.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition">
                    <span className="text-cyan-400"><Icon /></span> {s.name}
                  </a>
                )
              })}
            </div>
          </section>

        </div>
      </main>
    </>
  )
}
