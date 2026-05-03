export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Browser Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Simulate User Form<br />
          <span className="text-[#58a6ff]">Abandonment Patterns</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Use Playwright-powered browser sessions to replay realistic abandonment behaviors — slow typing, field hesitation, partial completion — and pinpoint exactly where your checkout loses customers.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $25/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to explore. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["Slow-type simulation","Field hesitation detection","Partial completion replay","Friction point heatmaps","Scenario builder","Playwright-backed"].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$25<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to stop losing conversions</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited test scenarios",
              "Realistic abandonment simulations",
              "Friction point analytics dashboard",
              "Playwright session recordings",
              "CSV & JSON export",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does the abandonment simulation work?</h3>
            <p className="text-sm text-[#8b949e]">We use Playwright to drive a real browser through your checkout form, mimicking human behaviors like slow keystroke cadence, pausing on specific fields, and stopping mid-form — the same patterns real users exhibit before abandoning.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Do I need to install anything on my site?</h3>
            <p className="text-sm text-[#8b949e]">No. You simply provide your checkout URL and configure the scenario in our dashboard. Our cloud-based Playwright runners handle everything — no code changes or tracking scripts required on your end.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">What kind of insights will I get?</h3>
            <p className="text-sm text-[#8b949e]">You'll receive a detailed report showing which fields caused the most hesitation, where users typically drop off, time-on-field metrics, and a friction score per form step — so you know exactly what to fix to improve conversion rates.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Form Stress Simulator. All rights reserved.
      </footer>
    </main>
  );
}
