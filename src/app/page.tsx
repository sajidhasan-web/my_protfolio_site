'use client'

import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

/* Inline SVG icons (no external dependency) */
const IconWhatsApp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20.52 3.48A11.88 11.88 0 0 0 12 0C5.373 0 .036 4.69.036 10.48c0 1.84.47 3.62 1.36 5.2L0 24l8.6-2.26a11.73 11.73 0 0 0 3.4.52c6.627 0 12-4.686 12-10.48 0-2.8-1.08-5.42-3.08-7.98z" />
    <path d="M17.6 14.2c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.69.15-.2.3-.77.97-.95 1.17-.18.2-.36.22-.66.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2 0-.37-.02-.51-.02-.14-.69-1.66-.94-2.27-.25-.6-.5-.52-.69-.53l-.59-.01c-.2 0-.52.07-.8.37-.28.3-1.08 1.04-1.08 2.56 0 1.52 1.11 2.99 1.27 3.2.17.22 2.2 3.33 5.32 4.67 3.12 1.34 3.12.9 3.68.84.57-.07 1.77-.72 2.02-1.41.25-.7.25-1.31.17-1.41-.07-.1-.28-.15-.58-.3z" />
  </svg>
)

const IconTelegram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M21.66 3.32c-.23-.34-.59-.55-.99-.6l-18-.01c-.41 0-.8.22-1.03.56-.23.34-.25.77-.05 1.13l2.87 5.81 1.75 3.54 1.05 2.12c.04.09.1.17.17.24.15.14.34.21.54.21.12 0 .25-.03.36-.1.38-.24 5.28-3.2 6.23-3.76 1.1-.64 2.15-1.22 3.23-1.84.17-.1.35-.22.48-.38.33-.38.37-.93.11-1.38l-5.37-7.85c-.27-.4-.8-.62-1.29-.54-.66.1-10.18 2.14-10.18 2.14s-1.9.5-2.1.56c-.2.06-.36.24-.42.45-.06.21.02.44.2.57 0 0 3.2 2.4 4.34 3.27.27.2.6.31.94.31.31 0 .62-.1.87-.27 0 0 5.94-3.74 6.26-3.94.26-.17.52-.34.77-.51 1.18-.81 3.04-2.09 3.65-2.5.3-.2.5-.55.52-.93.02-.38-.07-.76-.28-1.06z" />
  </svg>
)

const IconMessenger = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 0C5.371 0 0 4.925 0 11.0c0 2.95 1.212 5.64 3.21 7.63V24l4.06-2.25C10.12 22.1 11.05 22.28 12 22.28 18.63 22.28 24 17.36 24 11S18.63 0 12 0zM8 11.5l3-3 4 4 5-5-7 7-4-4-3 3v-2z" />
  </svg>
)

const IconUpwork = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20.81 7.18c-.31-.9-1.02-1.62-1.92-1.92-1.14-.39-2.6-.62-4.26-.62H9.07C6.52 4.64 4.8 6.18 3.78 8.36c-.86 1.83-.86 3.87 0 5.7.91 2.18 3.62 3.72 6.17 3.72h4.56c.87 0 1.72-.12 2.5-.35 1.16-.33 2.06-1.09 2.64-2.09.6-1.02.78-2.19.51-3.35-.28-1.18-1.09-2.09-2.2-2.53zM6.6 10.6c.42-.82 1.34-1.4 2.36-1.4.66 0 1.22.23 1.61.64.39.41.61.96.61 1.57 0 .61-.22 1.16-.61 1.57-.39.41-.95.64-1.61.64-.58 0-1.1-.17-1.5-.48-.4-.31-.68-.75-.87-1.28-.21-.58-.21-1.23 0-1.86z" />
  </svg>
)

export default function Page() {
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

  const socialLinks = [
    { name: 'WhatsApp', Icon: IconWhatsApp, url: 'https://wa.me/880XXXXXXXXX' },
    { name: 'Telegram', Icon: IconTelegram, url: 'https://t.me/yourusername' },
    { name: 'Messenger', Icon: IconMessenger, url: 'https://m.me/yourusername' },
    { name: 'Upwork', Icon: IconUpwork, url: 'https://www.upwork.com/yourusername' }
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

          {/* Hero */}
          <section className="bg-gray-900/50 border border-gray-700 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-bold mb-4">{heroTagline}</h2>
            <p className="text-gray-400 max-w-2xl">I help small businesses and ecommerce stores increase organic visibility using fast, measurable SEO strategies. Quick wins include technical fixes, on-page optimization, and keyword targeting that shows results fast.</p>
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

          {/* Contact / Social */}
          <section className="bg-gray-900/50 border border-gray-700 p-8 rounded-xl text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
            <p className="text-gray-400 mb-6">Reach me on any platform below for a free consultation!</p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((s, idx) => {
                const Icon = s.Icon
                return (
                  <a key={idx} href={s.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition">
                    <Icon style={{ width: 20, height: 20, color: '#06b6d4' }} /> <span className="ml-1">{s.name}</span>
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
