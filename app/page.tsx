import Link from 'next/link';
import { Sprout, Handshake, Heart, Globe } from 'lucide-react';
import { FaYoutube, FaFacebook, FaXTwitter, FaInstagram } from 'react-icons/fa6';

const previewPosts = [
  {
    id: 'math-has-no-bias',
    title: 'Math has no bias',
    date: 'October 4, 2025',
    category: 'Student- Lifeskills',
    excerpt: 'Today at school, something magical happened. Thanks to Sankalpa for Change, we had a fun and engaging math session led…',
    image: '/images/math has no bias.jpeg',
  },
  {
    id: 'does-counselling-help-children',
    title: 'Does counselling help children?',
    date: 'October 4, 2025',
    category: 'Student- Lifeskills',
    excerpt: 'Yes, it absolutely does. Today, at a government school, counsellors from Sankalpa for Change held space for something powerful…',
    image: '/images/does counselling help children.jpeg',
  },
  {
    id: 'school-is-not-a-burden',
    title: 'School is not a burden',
    date: 'October 4, 2025',
    category: 'Student- Lifeskills',
    excerpt: "At 22.2%, Karnataka's secondary level school dropout rate is above the national average. Behind every statistic is a child — often at a crossroads, facing difficult choices.",
    image: '/images/school is not a burden.jpeg',
  },
];

export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="hero-fullimg">
        <img
          src="/images/parental workshop.jpeg"
          alt="Sankalpa For Change — community session"
          className="hero-fullimg-photo"
        />
        <div className="hero-fullimg-overlay"></div>
        <div className="hero-fullimg-content">
          <div className="hero-eyebrow">Education · Wellbeing · Change</div>
          <h1 className="hero-heading">
            Equipping children to <em>thrive</em> in a complex world
          </h1>
          <p className="hero-body">
            We bridge the gap between academic life and emotional well-being — working closely with schools and communities to build meaningful support for every child.
          </p>
          <div className="hero-actions">
            <Link href="/posts" className="btn-primary">Read Our Stories</Link>
            <Link href="/about" className="btn-outline-white">About Us →</Link>
          </div>
        </div>
      </section>

      {/* MISSION STRIP */}
      <div className="mission-strip">
        <span className="mission-strip-icon"><Sprout size={20} strokeWidth={1.75} /></span>
        <p>
          <strong>Our resolve:</strong> Every child deserves the emotional tools and life skills to navigate their world with confidence, compassion, and resilience.
        </p>
      </div>

      {/* LATEST STORIES — 3 posts */}
      <section className="home-posts-section">
        <div className="section-header">
          <h2 className="section-title">Latest Stories</h2>
          <Link href="/posts" className="section-link">All stories →</Link>
        </div>
        <div className="posts-grid-home">
          {previewPosts.map((post) => (
            <Link key={post.id} href={`/posts/${post.id}`} className="article-card">
              <div className="article-card-img">
                <img src={post.image} alt={post.title} className="card-real-img" />
              </div>
              <div className="article-card-body">
                <span className="article-tag-small">{post.category}</span>
                <h3 className="article-card-title">{post.title}</h3>
                <p className="article-card-excerpt">{post.excerpt}</p>
                <div className="card-meta-small">
                  <span>{post.date}</span>
                  <span className="read-more-inline">Read more →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT TEASER */}
      <div className="about-teaser">
        <div className="about-teaser-text">
          <h2 className="about-teaser-heading">
            Started by people who <em>listened</em>
          </h2>
          <p>
            Sankalpa For Change began as a heartfelt initiative by a group of educators and counselors who recognized the widening gap between children&apos;s academic lives and their emotional well-being. Since our inception, we have worked closely with schools and communities to create meaningful support systems for children.
          </p>
          <Link href="/about" className="btn-primary">Learn More About Us →</Link>
        </div>
        <div className="about-teaser-values">
          <div className="value-card">
            <div className="value-icon"><Handshake size={20} strokeWidth={1.75} /></div>
            <div className="value-title">Integrity</div>
            <div className="value-desc">Honesty, transparency, and ethical action in all that we do.</div>
          </div>
          <div className="value-card">
            <div className="value-icon"><Heart size={20} strokeWidth={1.75} /></div>
            <div className="value-title">Compassion</div>
            <div className="value-desc">Meeting every child and family with deep empathy and respect.</div>
          </div>
          <div className="value-card">
            <div className="value-icon"><Globe size={20} strokeWidth={1.75} /></div>
            <div className="value-title">Collaboration</div>
            <div className="value-desc">Working with communities, educators, and mental health professionals.</div>
          </div>
        </div>
      </div>

      {/* SOCIAL BAR */}
      <div className="social-bar">
        <span className="social-bar-label">Follow our journey</span>
        <div className="social-bar-links">
          <a href="https://www.youtube.com/@SankalpaForChange" target="_blank" rel="noopener noreferrer" className="social-btn">
            <FaYoutube size={16} className="social-btn-icon s-yt" />YouTube
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-btn">
            <FaFacebook size={16} className="social-btn-icon s-fb" />Facebook
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-btn">
            <FaXTwitter size={16} className="social-btn-icon s-x" />X
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn">
            <FaInstagram size={16} className="social-btn-icon s-ig" />Instagram
          </a>
        </div>
      </div>

    </div>
  );
}