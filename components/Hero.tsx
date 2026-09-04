const codeLines = [
  ['01', 'const', 'vision', ' = ', "'your next big move'"] ,
  ['02', 'const', 'strategy', ' = ', 'build(vision)'],
  ['03', '', '', '', ''],
  ['04', 'await', 'sunny', '.', 'ship({'],
  ['05', '', '  product:', "'remarkable',"],
  ['06', '', '  systems:', "'scalable',"],
  ['07', '', '  momentum:', "'unstoppable'",],
  ['08', '', '})', '', ''],
]

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <div className="hero-content page-shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> Sunny Software Solutions <span className="eyebrow-divider">/</span> AI-native studio</div>
          <h1 id="hero-title">Build what&apos;s <span className="text-gradient">next.</span></h1>
          <p className="hero-lede">We turn ambitious ideas into intelligent software, clear systems, and digital products people want to use.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Start a project <span aria-hidden="true">↗</span></a>
            <a className="button button-ghost" href="#work">See our work <span aria-hidden="true">→</span></a>
          </div>
          <div className="hero-proof"><span>Independent studio</span><span className="proof-divider" /><span>Built for momentum</span><span className="proof-divider" /><span>Based everywhere</span></div>
        </div>

        <div className="hero-visual" aria-label="A live preview of an intelligent product system" role="img">
          <div className="visual-orbit orbit-one" aria-hidden="true" />
          <div className="visual-orbit orbit-two" aria-hidden="true" />
          <div className="terminal-window">
            <div className="terminal-bar"><span className="window-dots"><i /><i /><i /></span><span>sunny / studio.ts</span><span className="terminal-status">● live</span></div>
            <div className="terminal-body">
              {codeLines.map(([number, keyword, variable, operator, value]) => <div className="code-line" key={number}><span className="line-number">{number}</span><span className="code-keyword">{keyword}</span><span className="code-variable">{variable}</span><span className="code-operator">{operator}</span><span className="code-value">{value}</span></div>)}
            </div>
            <div className="terminal-footer"><span className="pulse-line" /> <span>Building systems that compound</span><span className="footer-arrow">↗</span></div>
          </div>
          <div className="floating-badge badge-top"><span className="badge-icon">✦</span><span><strong>AI-native</strong><small>by default</small></span></div>
          <div className="floating-badge badge-bottom"><span className="badge-icon badge-green">↗</span><span><strong>Clarity</strong><small>over complexity</small></span></div>
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true"><span /> Scroll to explore</div>
    </section>
  )
}
