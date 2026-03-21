import Link from 'next/link';
import RecentPosts from './components/RecentPosts';

export default function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Welcome to Sankalpa For Change</h1>
        <p>Empowering communities through education, life skills, and positive change.</p>
        <Link href="/about" className="btn">Learn More About Us</Link>
      </section>

      <div className="main-content">
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Latest Posts</h2>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <div style={{ flex: 1 }}>
            <div className="posts-grid">
              {/* Featured post or summary */}
              <div className="post-card">
                <h2>Our Mission</h2>
                <p>Sankalpa For Change is dedicated to providing quality education and life skills training to underprivileged communities, fostering positive change and empowerment.</p>
                <Link href="/about">Read More</Link>
              </div>
            </div>
          </div>
          <RecentPosts />
        </div>
      </div>
    </div>
  );
}