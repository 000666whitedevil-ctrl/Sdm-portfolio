import { useEffect, useState } from 'react';
import {
  ArrowDown, ArrowRight, ArrowUpRight, Asterisk, BookOpen,
  BriefcaseBusiness, Github, GraduationCap, Linkedin, Mail,
  Menu, MoveUpRight, X, Code2, Lightbulb, Sparkles
} from 'lucide-react';

const navItems = [
  ['01', 'About', '#about'],
  ['02', 'Focus', '#focus'],
  ['03', 'Work', '#work'],
  ['04', 'Journey', '#journey'],
  ['05', 'Contact', '#contact'],
];

const projects = [
  {
    number: '01',
    type: 'COMMUNITY · EDUCATION',
    title: 'Project Tejas',
    description: 'A learning initiative focused on making quality education and technology more accessible to underserved children.',
    tag: 'Education',
  },
  {
    number: '02',
    type: 'DIGITAL EMPOWERMENT',
    title: 'Digital Diksha',
    description: 'A digital-literacy initiative helping people build confidence with essential digital tools and everyday technology.',
    tag: 'Technology',
  },
  {
    number: '03',
    type: 'COMMUNITY · SUSTAINABILITY',
    title: 'Project Panchtatva',
    description: 'Awareness and action around sustainability, environmental responsibility and the five elements of nature.',
    tag: 'Impact',
  },
  {
    number: '04',
    type: 'WOMEN EMPOWERMENT',
    title: 'Project Astitva',
    description: 'An initiative creating space for conversations around identity, agency and women’s empowerment.',
    tag: 'People',
  },
];

function Reveal({ children, className = '', delay = 0 }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    node.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return <div data-reveal style={{ '--reveal-delay': `${delay}ms` }} className={className}>{children}</div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Shiv Dutt Mishra home">SDM<span>®</span></a>
      <nav className={open ? 'nav-links nav-open' : 'nav-links'}>
        {navItems.map(([n, label, href]) => (
          <a key={n} href={href} onClick={() => setOpen(false)}><small>{n}</small>{label}</a>
        ))}
      </nav>
      <a className="header-cta" href="#contact">LET’S TALK <ArrowUpRight size={14} /></a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

function App() {
  useEffect(() => {
    const onScroll = () => document.documentElement.style.setProperty('--scroll', window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div id="top" className="app-shell">
      <div className="grain" />
      <Header />

      <main>
        <section className="hero section-wrap">
          <div className="hero-meta">
            <span><i className="status-dot" /> AVAILABLE FOR MEANINGFUL WORK</span>
            <span>NEW DELHI, INDIA · 2026</span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <Reveal>
                <p className="eyebrow"><span className="eyebrow-line" /> MATHEMATICS · EDUCATION · TECHNOLOGY</p>
                <h1>Curious mind.<br /><em>Intentional</em> work<span className="orange-dot">.</span></h1>
                <p className="hero-description">I’m Shiv Dutt Mishra — exploring the space where analytical thinking, meaningful education and human-centred ideas meet.</p>
                <div className="hero-actions">
                  <a className="button button-primary" href="#work">EXPLORE MY WORK <ArrowUpRight size={16} /></a>
                  <a className="text-link" href="#about">A LITTLE ABOUT ME <ArrowDown size={15} /></a>
                </div>
              </Reveal>
            </div>
            <Reveal className="hero-visual" delay={120}>
              <div className="portrait-frame">
                <div className="portrait-orbit orbit-one" />
                <div className="portrait-orbit orbit-two" />
                <div className="portrait-placeholder">
                  <span className="portrait-monogram">S<span>.</span></span>
                  <span className="portrait-caption">PORTRAIT / 001</span>
                  <span className="portrait-note">A photograph<br />will live here.</span>
                </div>
                <div className="portrait-stamp"><Asterisk size={22} /><span>THINK<br />DEEPLY</span></div>
              </div>
              <span className="visual-index">FIG. 01 — THE PERSON BEHIND THE IDEAS</span>
            </Reveal>
          </div>
          <div className="hero-bottom">
            <span>SCROLL TO DISCOVER</span><div className="scroll-line"><span /></div><span>01 / 05</span>
          </div>
        </section>

        <section id="about" className="about section-wrap section-pad">
          <Reveal><p className="eyebrow"><span className="eyebrow-line" /> 01 — THE PERSON</p></Reveal>
          <div className="about-grid">
            <Reveal className="about-image-wrap">
              <div className="about-image">
                <div className="hands-mark"><span>HANDS</span><Asterisk size={34} /><span>IN MOTION</span></div>
                <p>AN IMAGE THAT<br />SAYS MORE THAN WORDS.</p>
              </div>
              <span className="image-caption">A STUDY IN CURIOSITY · 2026</span>
            </Reveal>
            <Reveal className="about-copy" delay={100}>
              <h2>More than a<br /><em>single discipline.</em></h2>
              <p className="large-copy">I like understanding how things work — and finding ways to make that understanding useful to people.</p>
              <p>My foundation is in mathematics, but my interests reach into education, research, technology and community-building. I’m drawn to ideas that solve real problems, make knowledge more accessible and create room for people to grow.</p>
              <a href="#journey" className="underlined-link">GET TO KNOW MY JOURNEY <ArrowUpRight size={15} /></a>
            </Reveal>
          </div>
        </section>

        <section id="focus" className="focus-section section-pad">
          <div className="section-wrap">
            <Reveal><div className="section-heading"><p className="eyebrow"><span className="eyebrow-line" /> 02 — AREAS OF FOCUS</p><span className="heading-aside">WHAT KEEPS ME EXPLORING</span></div></Reveal>
            <Reveal><h2 className="section-title">Different lenses.<br /><em>One curious mind.</em></h2></Reveal>
            <div className="focus-grid">
              <Reveal className="focus-card"><span className="card-number">01 / THINK</span><div className="focus-icon"><BookOpen /></div><h3>Mathematics<br />& Research</h3><p>Finding structure in complexity, asking better questions and learning to think with precision.</p><span className="card-arrow"><ArrowUpRight /></span></Reveal>
              <Reveal className="focus-card" delay={80}><span className="card-number">02 / TEACH</span><div className="focus-icon"><GraduationCap /></div><h3>Education<br />& Learning</h3><p>Making ideas understandable, creating better learning experiences and widening access to knowledge.</p><span className="card-arrow"><ArrowUpRight /></span></Reveal>
              <Reveal className="focus-card" delay={160}><span className="card-number">03 / BUILD</span><div className="focus-icon"><Code2 /></div><h3>Technology<br />& Ideas</h3><p>Exploring digital tools and building practical platforms around real human needs.</p><span className="card-arrow"><ArrowUpRight /></span></Reveal>
              <Reveal className="focus-card" delay={240}><span className="card-number">04 / CONTRIBUTE</span><div className="focus-icon"><Lightbulb /></div><h3>Community<br />& Impact</h3><p>Working with people, turning intent into action and contributing to initiatives that matter.</p><span className="card-arrow"><ArrowUpRight /></span></Reveal>
            </div>
          </div>
        </section>

        <section id="work" className="work section-wrap section-pad">
          <Reveal><div className="section-heading"><p className="eyebrow"><span className="eyebrow-line" /> 03 — SELECTED WORK</p><span className="heading-aside">IDEAS INTO ACTION</span></div></Reveal>
          <div className="work-intro"><Reveal><h2 className="section-title">Work with<br /><em>purpose.</em></h2></Reveal><Reveal><p className="work-intro-copy">A selection of initiatives connected by a simple belief: thoughtful work should create value beyond itself.</p></Reveal></div>
          <div className="project-list">
            {projects.map((project) => <Reveal key={project.number} className="project-row">
              <span className="project-number">{project.number}</span>
              <div className="project-main"><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p></div>
              <span className="project-tag">{project.tag}</span><span className="project-arrow"><ArrowUpRight /></span>
            </Reveal>)}
          </div>
          <p className="work-footnote"><Sparkles size={14} /> MORE COLLABORATIONS AND INDEPENDENT EXPLORATIONS IN PROGRESS.</p>
        </section>

        <section id="journey" className="journey section-pad">
          <div className="section-wrap">
            <Reveal><p className="eyebrow"><span className="eyebrow-line" /> 04 — THE JOURNEY</p></Reveal>
            <div className="journey-grid">
              <Reveal><h2 className="section-title">Always<br /><em>becoming.</em></h2><p className="journey-lead">A path shaped by learning, service and the willingness to begin again.</p></Reveal>
              <div className="timeline">
                <Reveal className="timeline-item"><span className="timeline-year">ACADEMICS</span><div><h3>University of Delhi</h3><p>Mathematics · B.Sc. (Hons.)</p><small>Building a rigorous foundation in mathematical thinking.</small></div></Reveal>
                <Reveal className="timeline-item"><span className="timeline-year">COMMUNITY</span><div><h3>Nivedan Foundation</h3><p>Core Team · Technology & Projects</p><small>Contributing to education, digital literacy and community initiatives.</small></div></Reveal>
                <Reveal className="timeline-item"><span className="timeline-year">ONGOING</span><div><h3>Research & Exploration</h3><p>Mathematics · Learning · Technology</p><small>Connecting ideas across disciplines and turning curiosity into work.</small></div></Reveal>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section-wrap section-pad">
          <Reveal><p className="eyebrow"><span className="eyebrow-line" /> 05 — START A CONVERSATION</p></Reveal>
          <Reveal><h2>Good things begin<br />with <em>a hello.</em></h2></Reveal>
          <div className="contact-bottom">
            <p>Have an idea, an opportunity or a question worth exploring?<br />I’d be glad to hear from you.</p>
            <a className="contact-mail" href="mailto:hello@example.com">LET’S CONNECT <ArrowUpRight /></a>
          </div>
          <div className="social-row">
            <span>FIND ME AROUND THE WEB</span>
            <div><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LINKEDIN <ArrowUpRight size={12} /></a><a href="https://github.com/000666whitedevil-ctrl" target="_blank" rel="noreferrer"><Github size={16} /> GITHUB <ArrowUpRight size={12} /></a><a href="mailto:hello@example.com"><Mail size={16} /> EMAIL <ArrowUpRight size={12} /></a></div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap"><a className="wordmark" href="#top">SDM<span>®</span></a><span>MADE WITH CURIOSITY, IN NEW DELHI.</span><a href="#top">BACK TO TOP ↑</a><span>© 2026 SHIV DUTT MISHRA</span></footer>
    </div>
  );
}

export default App;