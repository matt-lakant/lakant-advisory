export default function LakantAdvisoryPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight text-xl">lakant<span className="text-neutral-400"> advisory</span></a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#services" className="hover:opacity-70">Services</a>
            <a href="#approach" className="hover:opacity-70">Approach</a>
            <a href="#outcomes" className="hover:opacity-70">Outcomes</a>
            <a href="#credentials" className="hover:opacity-70">Credentials</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-2xl border px-3 py-1.5 text-sm hover:bg-neutral-50">Get in touch</a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs border rounded-full px-3 py-1 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
              Independent Advisor — Technology & Data Strategy
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              Accelerate AI & data initiatives<br className="hidden md:block" /> with measurable business impact
            </h1>
            <p className="mt-5 text-neutral-600 max-w-xl">
              I partner with asset managers, financial institutions, and technology‑driven organizations to design AI roadmaps, deliver proof‑of‑concepts, and modernize data architecture and workflows — from strategy through execution.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:opacity-90">Request a consultation</a>
              <a href="https://www.lakant.io" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm hover:bg-neutral-50">Visit lakant.io (product)</a>
            </div>
            <div className="mt-6 text-xs text-neutral-500">
              Previously at FactSet & Goldman Sachs — 20+ years leading global technology transformation.
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-3xl border p-6 shadow-sm">
              <p className="text-sm font-medium mb-3">At a glance</p>
              <ul className="space-y-3 text-sm text-neutral-700">
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-neutral-900"/>AI strategy, data architecture, workflow automation</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-neutral-900"/>Global leadership of 100+ professionals</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-neutral-900"/>Financial services & investment research expertise</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-neutral-900"/>Founder of lakant.io — next‑gen data aggregation platform</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t bg-neutral-50/40">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="md:flex items-end justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Services</h2>
            <p className="text-sm text-neutral-600 mt-2 md:mt-0">Focused, outcome‑driven engagements. Mix & match as needed.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'AI Strategy & Roadmaps',
                body: 'Assess readiness, identify high‑value use cases, prioritize initiatives, and define a pragmatic adoption plan with governance & KPIs.'
              },
              {
                title: 'Proof‑of‑Concepts & Accelerators',
                body: 'Design and deliver rapid prototypes to validate impact, de‑risk investments, and scale into production when value is proven.'
              },
              {
                title: 'Data Architecture Modernization',
                body: 'Evolve platforms for scalability and reliability — pipelines, integration, quality, lineage, access, and cloud‑native patterns.'
              },
              {
                title: 'Workflow Automation & Optimization',
                body: 'Automate repetitive processes and orchestrate end‑to‑end flows to boost productivity and reduce operational risk.'
              },
              {
                title: 'Technology Transformation Advisory',
                body: 'Target operating model design, build/buy/partner decisions, risk management, regulatory alignment, and program governance.'
              },
              {
                title: 'Change Management & Adoption',
                body: 'Stakeholder alignment, enablement & training, communications, OKRs, and measurement to embed change that sticks.'
              }
            ].map((card) => (
              <div key={card.title} className="rounded-3xl border bg-white p-6 shadow-sm hover:shadow transition">
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-neutral-700">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Approach</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: 'Discover',
                body: 'Short diagnostic to align on goals, constraints, and success metrics. Inventory of data assets, workflows, and risk areas.'
              },
              {
                title: 'Design',
                body: 'Co‑create the roadmap, operating model, and reference architecture. Select candidates for fast‑track POCs/accelerators.'
              },
              {
                title: 'Deliver',
                body: 'Execute with clear governance and OKRs. Train teams, instrument KPIs, and hand over with playbooks and next steps.'
              }
            ].map((step, idx) => (
              <div key={step.title} className="rounded-3xl border p-6">
                <div className="text-xs text-neutral-500 mb-2">Step {idx + 1}</div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-700">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section id="outcomes" className="bg-neutral-50/60 border-y">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Measurable Outcomes</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-sm text-neutral-800">
            <li className="rounded-2xl border bg-white p-4">Reduced cycle time in research & reporting workflows by automating data preparation and validation.</li>
            <li className="rounded-2xl border bg-white p-4">Improved decision‑making with transparent data lineage, quality checks, and auditability.</li>
            <li className="rounded-2xl border bg-white p-4">Faster time‑to‑value through targeted POCs and reusable accelerators.</li>
            <li className="rounded-2xl border bg-white p-4">Lower run costs via right‑sized cloud adoption and resilient architectures.</li>
          </ul>
        </div>
      </section>

      {/* Credentials */}
      <section id="credentials">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Credentials</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-3xl border p-6">
              <h3 className="font-semibold mb-2">Experience</h3>
              <p className="text-sm text-neutral-700">20+ years leading global technology transformation at FactSet and Goldman Sachs. Built lakant.io, a next‑generation data aggregation platform for asset managers.</p>
            </div>
            <div className="rounded-3xl border p-6">
              <h3 className="font-semibold mb-2">Focus Domains</h3>
              <p className="text-sm text-neutral-700">Asset management, investment research, portfolio analytics, performance attribution, ESG integration, customer service operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Let&apos;s talk about your next initiative</h2>
              <p className="mt-3 text-neutral-300 max-w-xl">Tell me about your goals and constraints. I&apos;ll respond with a pragmatic plan and a clear first step.</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
                <a href="mailto:mattcorn@gmail.com" className="rounded-2xl bg-white text-neutral-900 px-5 py-3 text-center font-medium hover:opacity-90">Email Matthieu</a>
                <a href="https://www.linkedin.com/in/mcornet/" target="_blank" rel="noreferrer" className="rounded-2xl border border-neutral-700 px-5 py-3 text-center hover:bg-neutral-800">Connect on LinkedIn</a>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-3xl border border-neutral-800 p-6">
                <h3 className="font-semibold mb-3">Services (top 5)</h3>
                <ul className="space-y-2 text-neutral-200 text-sm">
                  <li>Management Consulting</li>
                  <li>IT Consulting</li>
                  <li>Business Consulting</li>
                  <li>Change Management</li>
                  <li>Executive Coaching / Training</li>
                </ul>
                <p className="text-xs text-neutral-400 mt-4">Looking for the platform? Visit <a href="https://www.lakant.io" target="_blank" rel="noreferrer" className="underline">lakant.io</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-neutral-500 flex flex-col md:flex-row items-center md:justify-between gap-2">
          <span>© {new Date().getFullYear()} Lakant Advisory</span>
          <div className="flex items-center gap-4">
            <a href="mailto:mattcorn@gmail.com" className="hover:opacity-70">mattcorn@gmail.com</a>
            <a href="https://www.linkedin.com/in/mcornet/" target="_blank" rel="noreferrer" className="hover:opacity-70">LinkedIn</a>
            <a href="https://www.lakant.io" target="_blank" rel="noreferrer" className="hover:opacity-70">lakant.io</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
