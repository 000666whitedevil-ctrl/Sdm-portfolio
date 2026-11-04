import { useState } from 'react';
import { ArrowDown, ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';

const worlds = [
  { number: '01', name: 'The Soul', note: 'The person beyond the ambition', mark: '01 / HUMAN' },
  { number: '02', name: 'The Scholar', note: 'Mathematics, questions and research', mark: '02 / INQUIRY' },
  { number: '03', name: 'The Leader', note: 'People, projects and collective action', mark: '03 / IMPACT' },
  { number: '04', name: 'The Educator', note: 'Learning that moves in both directions', mark: '04 / LEARNING' },
  { number: '05', name: 'The Visionary', note: 'Ideas taking shape, one step at a time', mark: '05 / POSSIBILITY' },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Shiv Dutt Mishra home">S<span>M</span><i>.</i></a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
        <a href="#top" onClick={() => setOpen(false)}>Home</a>
        <a href="#intro" onClick={() => setOpen(false)}>About</a>
        <a href="#journey" onClick={() => setOpen(false)}>My journey</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </nav>
      <a className="header-contact" href="mailto:sdmishra1000@gmail.com">LET'S CONNECT <ArrowUpRight size={14} /></a>
    </header>
  );
}

function App() {
  return (
    <div id="top" className="portfolio">
      <div className="ambient-glow" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <Header />
      <main>
        <section className="hero">
          <div className="hero-kicker"><span className="live-dot" /> A PERSONAL JOURNEY IN FIVE DIMENSIONS <span className="kicker-line" /> NEW DELHI, INDIA</div>
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">MATHEMATICS <b>·</b> RESEARCH <b>·</b> HUMAN IMPACT</p>
              <h1>Shiv Dutt<br /><em>Mishra.</em></h1>
              <p className="hero-statement">A curious mind, shaped by mathematics, drawn to people, and always becoming.</p>
              <p className="hero-description">I’m exploring the connections between analytical thinking, meaningful education, research and ideas that can make a difference.</p>
              <div className="hero-actions">
                <a className="primary-link" href="#journey">EXPLORE MY JOURNEY <ArrowUpRight size={16} /></a>
                <a className="secondary-link" href="#intro">A LITTLE ABOUT ME <ArrowDown size={14} /></a>
              </div>
            </div>
            <div className="hero-portrait">
              <div className="portrait-arch">
                <div className="portrait-image-wrap">
                  <img className="portrait-image" src="/assets/hero-portrait.webp" alt="Portrait of Shiv Dutt Mishra" onError={(event) => { event.currentTarget.style.display = 'none'; }} />
                  <div className="portrait-fallback">
                    <span className="fallback-initials">S<span>.</span>M</span>
                    <span className="fallback-caption">THE PERSON BEHIND THE IDEAS</span>
                  </div>
                </div>
                <span className="portrait-index">FIG. 01 <i>—</i> SHIV DUTT MISHRA</span>
              </div>
              <div className="portrait-orbit orbit-a" />
              <div className="portrait-orbit orbit-b" />
              <div className="portrait-seal"><Sparkles size={17} /><span>CURIOUS<br />BY NATURE</span></div>
            </div>
          </div>
          <div className="hero-foot">
            <span>SCROLL TO DISCOVER</span><span className="scroll-track"><i /></span><span>01 <b>/</b> 05</span>
          </div>
        </section>

        <section className="intro-section" id="intro">
          <div className="section-label"><span>01</span> A NOTE ABOUT ME</div>
          <div className="intro-content">
            <h2>Not one title.<br /><em>Many dimensions.</em></h2>
            <div className="intro-copy">
              <p className="intro-lead">I’m interested in what happens when curiosity meets purpose.</p>
              <p>My academic foundation is in mathematics. Alongside it, I’ve found myself drawn to research, education, community initiatives and the possibilities of technology. This space brings those threads together—not as a finished story, but as a record of a journey still unfolding.</p>
              <a className="inline-link" href="#journey">DISCOVER THE FIVE WORLDS <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </section>

        <section className="worlds-section" id="journey">
          <div className="worlds-heading">
            <div><div className="section-label"><span>02</span> THE JOURNEY</div><h2>Five worlds.<br /><em>One evolving story.</em></h2></div>
            <p>Every person contains more than one story. Explore the dimensions that continue to shape mine.</p>
          </div>
          <div className="world-list">
            {worlds.map((world) => (
              <div className="world-row" key={world.number}>
                <span className="world-number">{world.number}</span>
                <div className="world-name"><h3>{world.name}</h3><p>{world.note}</p></div>
                <span className="world-mark">{world.mark}</span>
                <span className="world-arrow"><ArrowUpRight size={19} /></span>
              </div>
            ))}
          </div>
          <p className="worlds-note">THE DOORS OPEN IN THE NEXT CHAPTER <span>✳</span></p>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-label"><span>03</span> THE NEXT CHAPTER</div>
          <h2>Let's make<br /><em>something matter.</em></h2>
          <div className="contact-bottom">
            <p>For thoughtful conversations, collaborations and opportunities.</p>
            <a className="primary-link" href="mailto:sdmishra1000@gmail.com">GET IN TOUCH <ArrowUpRight size={16} /></a>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/shiv-dutt-mishra-8b5315372" target="_blank" rel="noreferrer">LINKEDIN <ArrowUpRight size={13} /></a>
            <a href="https://github.com/000666whitedevil-ctrl" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={13} /></a>
            <a href="mailto:sdmishra1000@gmail.com">EMAIL <ArrowUpRight size={13} /></a>
          </div>
        </section>
      </main>
      <footer className="footer"><a className="wordmark" href="#top">S<span>M</span><i>.</i></a><span>AN OPEN-ENDED STORY · NEW DELHI, INDIA</span><span>© 2026 SHIV DUTT MISHRA</span></footer>
    </div>
  );
}

export default App;
