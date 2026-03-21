import Link from 'next/link';
import RecentPosts from './components/RecentPosts';

const featuredPost = {
  id: 'school-is-not-a-burden',
  title: 'School is not a burden',
  date: 'October 4, 2025',
  category: 'Student- Lifeskills',
  excerpt: 'At 22.2%, Karnataka\'s secondary level school dropout rate is above the national average. Behind every statistic is a child — often at a crossroads, facing difficult choices. This week, a life skills session changed the room.',
  image: '/images/school is not a burden.jpeg',
};

const gridPosts = [
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
    id: 'turning-study-into-habit',
    title: 'Turning Study into a Habit - One Step at a Time',
    date: 'October 4, 2025',
    category: 'Student- Lifeskills',
    excerpt: 'This week, we had the joy of engaging with 8th and 9th graders in a session on Study Skills…',
    image: '/images/turning study into a habit.jpeg',
  },
  {
    id: 'mobile-addiction-discussions',
    title: 'Mobile Addiction Discussions',
    date: 'September 8, 2025',
    category: 'Student- Lifeskills',
    excerpt: 'Do school children need to be taught about the ill effects of mobile usage? Well, not really. During a recent workshop…',
    image: '/images/mobile addiction discussions 1.webp',
  },
  {
    id: 'level-up-for-college',
    title: 'Level up for College',
    date: 'October 4, 2025',
    category: 'Student- Lifeskills',
    excerpt: 'Yesterday, Shubha and I had the privilege of spending time with 11th and 12th grade girls in Mandya…',
    image: '/images/level up for college.jpeg',
  },
  {
    id: 'parental-workshop',
    title: 'Parental Workshop',
    date: 'October 4, 2025',
    category: 'Student- Lifeskills',
    excerpt: 'This week in Suvarna Badavane, I had the joy of co-facilitating a Positive Parenting Workshop with Shubha Dayanand…',
    image: '/images/parental workshop.jpeg',
  },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-split">
        <div className="hero-text">
          <div className="hero-eyebrow">Education · Wellbeing · Change</div>
          <h1 className="hero-heading">
            Equipping children to <em>thrive</em> in a complex world
          </h1>
          <p className="hero-body">
            We bridge the gap between academic life and emotional well-being — working closely with schools and communities to build meaningful support for every child.
          </p>
          <div className="hero-actions">
            <Link href="/posts" className="btn-primary">Read Our Stories</Link>
            <Link href="/about" className="btn-outline">About Us →</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-visual-bg"></div>
          <div className="hero-visual-pattern"></div>
          <div className="hero-stats">
            <div className="hero-mission-block">
              <div className="hero-mission-label">Our Vision</div>
              <p className="hero-mission-text">
                To create a better society by nurturing human potential, particularly in young children.
              </p>
            </div>
            <div className="hero-mission-block">
              <div className="hero-mission-label">Our Focus</div>
              <p className="hero-mission-text">
                Equipping children with practical life skills and emotional tools to thrive in a complex world.
              </p>
            </div>
            <div className="hero-stat-row-real">
              <div className="stat-mini"><div className="stat-mini-num">X</div><div className="stat-mini-label">Schools</div></div>
              <div className="stat-mini"><div className="stat-mini-num">X</div><div className="stat-mini-label">Workshops</div></div>
              <div className="stat-mini"><div className="stat-mini-num">X</div><div className="stat-mini-label">Communities</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION STRIP */}
      <div className="mission-strip">
        <span className="mission-strip-icon">🌱</span>
        <p>
          <strong>Our resolve:</strong> Every child deserves the emotional tools and life skills to navigate their world with confidence, compassion, and resilience.
        </p>
      </div>

      {/* LATEST POSTS */}
      <section className="home-posts-section">
        <div className="section-header">
          <h2 className="section-title">Latest Stories</h2>
          <Link href="/posts" className="section-link">All stories →</Link>
        </div>

        {/* Featured post */}
        <Link href={`/posts/${featuredPost.id}`} className="featured-card">
          <div className="featured-card-img">
            <img src={featuredPost.image} alt={featuredPost.title} className="card-real-img" />
          </div>
          <div className="featured-card-body">
            <span className="article-tag">Field Story</span>
            <h2 className="featured-card-title">{featuredPost.title}</h2>
            <p className="featured-card-excerpt">{featuredPost.excerpt}</p>
            <div className="card-meta">
              <span>{featuredPost.date}</span>
              <span className="card-meta-dot"></span>
              <span>{featuredPost.category}</span>
            </div>
            <span className="read-more">Read story →</span>
          </div>
        </Link>

        {/* Grid */}
        <div className="posts-grid-home">
          {gridPosts.map((post) => (
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
            <div className="value-icon">🤝</div>
            <div className="value-title">Integrity</div>
            <div className="value-desc">Honesty, transparency, and ethical action in all that we do.</div>
          </div>
          <div className="value-card">
            <div className="value-icon">💛</div>
            <div className="value-title">Compassion</div>
            <div className="value-desc">Meeting every child and family with deep empathy and respect.</div>
          </div>
          <div className="value-card">
            <div className="value-icon">🌐</div>
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
            <span className="social-dot s-yt"></span>YouTube
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-btn">
            <span className="social-dot s-fb"></span>Facebook
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-btn">
            <span className="social-dot s-x"></span>X
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn">
            <span className="social-dot s-ig"></span>Instagram
          </a>
        </div>
      </div>
    </div>
  );
}