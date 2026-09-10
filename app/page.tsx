import { ArrowDown, ArrowUpRight, Mail, Play } from 'lucide-react';

const work = [
  { src: '/work-05.png', alt: 'AI-generated editorial fashion portrait in warm brown tones', label: 'Editorial fashion' },
  { src: '/work-04.png', alt: 'AI-generated cafe drink advertisement', label: 'Food & beverage' },
  { src: '/work-09.png', alt: 'AI-generated miniature alchemist scene inside an animal skull', label: 'Concept worldbuilding' },
  { src: '/work-11.png', alt: 'AI-generated cinematic portrait and behind-the-scenes series', label: 'Cinematic characters' },
  { src: '/work-12.png', alt: 'AI-generated black-and-white celebrity editorial scene', label: 'Campaign storytelling' },
  { src: '/work-08.png', alt: 'AI-generated abstract environments and installation imagery', label: 'Abstract realism' },
];

const courses = [
  ['AI Video Creation 2026 Pro', '2,474 students', 'Runway, Sora, Veo, Wan', 'https://www.udemy.com/course/runway-ai-full-course-for-stunning-videos-ads-scenes/'],
  ['AI Animation Mastery', '1,155 students', 'Cinematic shots & consistency', 'https://www.udemy.com/course/ai-animation-mastery-sora-2-veo-31-wan-25-higgsfield/'],
  ['AI Presentation Mastery', '4.6 rating', 'ChatGPT, Canva & visual prompting', 'https://www.udemy.com/course/ai-presentation-mastery-chatgpt-canva-for-slide-creation/'],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Danial Roshanfekr, home">DR<span>.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a><a href="#services">Services</a><a href="#experience">Experience</a>
        </nav>
        <a className="header-cta" href="mailto:d.roshanfekr@gmail.com">Start a project <ArrowUpRight size={15} /></a>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow"><span /> Generative AI creator & educator</div>
        <h1>AI visuals that feel <em>art-directed,</em><br />not automated.</h1>
        <p className="hero-copy">I create cinematic AI video, realistic campaign imagery, and visual concepts for brands, studios, and creative teams.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="mailto:d.roshanfekr@gmail.com?subject=Project%20inquiry">Discuss a project <ArrowUpRight size={17} /></a>
          <a className="button button-light" href="#reel"><Play size={15} fill="currentColor" /> Watch showreel</a>
        </div>
        <div className="hero-meta" aria-label="Career highlights">
          <div><strong>3,963</strong><span>Udemy learners</span></div>
          <div><strong>174</strong><span>Instructor reviews</span></div>
          <div><strong>Remote</strong><span>Available worldwide</span></div>
        </div>
        <a className="scroll-cue" href="#work" aria-label="Scroll to selected work"><ArrowDown size={18} /></a>
      </section>

      <section className="section" id="work">
        <div className="section-heading">
          <div><span className="section-index">01</span><h2>Selected work</h2></div>
          <p>Every image shown here is AI-generated and developed through intentional prompting, iteration, composition, and finishing.</p>
        </div>
        <div className="work-grid">
          {work.map((item, index) => (
            <figure className={`work-card work-${index + 1}`} key={item.src}>
              <img src={item.src} alt={item.alt} loading={index > 1 ? 'lazy' : 'eager'} />
              <figcaption><span>{String(index + 1).padStart(2, '0')}</span>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="reel-section" id="reel">
        <div className="reel-copy">
          <span className="section-index">02</span>
          <h2>Motion, pacing,<br />and visual continuity.</h2>
          <p>A selection of AI-generated video work spanning cinematic scenes, branded content, and visual experimentation.</p>
        </div>
        <video controls preload="metadata" poster="/work-12.png">
          <source src="/danial-showreel-compatible.mp4" type="video/mp4" />
          Your browser does not support video playback.
        </video>
      </section>

      <section className="section services" id="services">
        <div className="section-heading">
          <div><span className="section-index">03</span><h2>What I can deliver</h2></div>
          <p>Focused, production-ready creative support. Available for a paid test, one-off campaign, or ongoing collaboration.</p>
        </div>
        <div className="service-list">
          <article><span>01</span><h3>AI video & animation</h3><p>Concepts, storyboards, shot prompts, image-to-video, character continuity, and polished short-form sequences.</p></article>
          <article><span>02</span><h3>Campaign visuals</h3><p>Product imagery, editorial portraits, ad concepts, and cohesive visual systems for social and digital campaigns.</p></article>
          <article><span>03</span><h3>Creative AI direction</h3><p>Tool selection, repeatable prompting workflows, visual quality control, and practical training for creative teams.</p></article>
          <article><span>04</span><h3>Rapid AI prototypes</h3><p>Fast experiments that combine generative AI with lightweight websites and interactive campaign concepts.</p></article>
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="experience-intro">
          <span className="section-index">04</span>
          <p className="kicker">Teaching sharpens the craft.</p>
          <h2>Practical AI education for nearly 4,000 learners.</h2>
          <p>My Udemy courses turn fast-moving creative tools into clear, project-based workflows across AI video, animation, imagery, prompting, and design.</p>
          <a href="https://www.udemy.com/user/danial-roshanfekr/" target="_blank" rel="noreferrer">View instructor profile <ArrowUpRight size={16} /></a>
        </div>
        <div className="course-list">
          {courses.map(([title, stat, detail, href], index) => (
            <a href={href} target="_blank" rel="noreferrer" key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{title}</h3><p>{detail}</p></div>
              <strong>{stat}</strong><ArrowUpRight size={18} />
            </a>
          ))}
        </div>
      </section>

      <footer>
        <div>
          <p>Available now for remote freelance work.</p>
          <h2>Have a visual idea?<br /><em>Let’s make it real.</em></h2>
        </div>
        <div className="footer-links">
          <a href="mailto:d.roshanfekr@gmail.com"><Mail size={17} /> d.roshanfekr@gmail.com</a>
          <a href="https://www.linkedin.com/in/danial-roshanfekr-a722641b5" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16} /></a>
          <a href="https://www.udemy.com/user/danial-roshanfekr/" target="_blank" rel="noreferrer">Udemy <ArrowUpRight size={16} /></a>
        </div>
        <p className="copyright">© 2026 Danial Roshanfekr. AI-generated work, human-directed.</p>
      </footer>
    </main>
  );
}
