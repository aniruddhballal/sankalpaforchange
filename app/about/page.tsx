import Image from 'next/image';

export default function About() {
  return (
    <div className="about-page">

      {/* ABOUT HERO */}
      <div className="about-hero">
        <div className="about-hero-inner">
          <div className="hero-eyebrow">Our Story</div>
          <h1 className="about-hero-heading">About Sankalpa For Change</h1>
          <p className="about-hero-sub">
            Rooted in the belief that empowered children create empowered societies.
          </p>
        </div>
      </div>

      <div className="about-content">

        {/* Intro */}
        <div className="about-intro">
          <p>
            In the fast-paced world we live in, the emotional and psychological needs of children are often overlooked. For many young minds, especially those growing up in under-resourced environments, navigating school, relationships, and self-understanding can be overwhelming. Without early support, they may struggle silently — their potential clouded by anxiety, isolation, or lack of guidance.
          </p>
          <p>
            At Sankalpa For Change, we believe every child deserves the chance to grow in confidence, resilience, and self-awareness. Established as a trust, our organization is rooted in the belief that empowered children create empowered societies. Our vision is simple yet profound: To create a better society by nurturing human potential, particularly in young children.
          </p>
        </div>

        {/* Journey */}
        <div className="about-section">
          <h2 className="about-section-title">Our Journey</h2>
          <p>
            Sankalpa For Change began as a heartfelt initiative by a group of educators and counselors who recognized the widening gap between children&apos;s academic lives and their emotional well-being. Since our inception, we have worked closely with schools and communities to create meaningful support systems for children. Whether through school-based programs or counselling, our focus remains consistent: equipping children with practical life skills and emotional tools to thrive in a complex world.
          </p>

          <div className="about-image-wrap">
            <img
              src="/images/about 1.jpeg"
              alt="Sankalpa For Change team working with children"
              className="about-image"
            />
          </div>
        </div>

        {/* Programs */}
        <div className="about-section">
          <h2 className="about-section-title">Our Core Programs and Services</h2>

          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">🎯</div>
              <h3 className="program-title">Life Skills Coaching</h3>
              <p className="program-desc">
                Our age-appropriate life skills sessions cover communication, emotional regulation, problem-solving, decision-making, and goal-setting. These are designed to enhance children&apos;s confidence and interpersonal relationships.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">🤝</div>
              <h3 className="program-title">Mentoring and Group Programs</h3>
              <p className="program-desc">
                Children facing significant social or emotional difficulties are offered structured mentoring — individually and in peer groups — to help them rediscover connection, belonging, and purpose.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">🛡️</div>
              <h3 className="program-title">Substance Addiction Awareness for Youth</h3>
              <p className="program-desc">
                We conduct interactive awareness programs for youth to educate them about the risks of substance abuse, empowering them with the knowledge and confidence to make healthy life choices. These sessions are grounded in real-life scenarios, peer discussion, and preventive strategies.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">🧘</div>
              <h3 className="program-title">Stress Management for Mental Well-being</h3>
              <p className="program-desc">
                Our programs focus on building essential life skills while helping participants identify personal stressors and develop healthy coping strategies. Through engaging, participatory activities, we empower children, teens, and adults to manage stress effectively and build emotional resilience.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">🌸</div>
              <h3 className="program-title">Collaborative Programs</h3>
              <p className="program-desc">
                We run collaborative programs on topics such as menstrual hygiene, child rights, and key legal protections to foster awareness and self-advocacy among adolescent girls. These sessions are often conducted in partnership with healthcare professionals and legal educators.
              </p>
            </div>
          </div>

          <div className="about-image-wrap">
            <img
              src="/images/about 2.webp"
              alt="Children participating in Sankalpa For Change programs"
              className="about-image"
            />
          </div>
        </div>

        {/* Values */}
        <div className="about-section">
          <h2 className="about-section-title">Our Values</h2>

          <div className="values-list">
            <div className="value-item">
              <div className="value-item-icon">✦</div>
              <div>
                <strong>Integrity:</strong> We are committed to honesty, transparency, and ethical action in all that we do.
              </div>
            </div>
            <div className="value-item">
              <div className="value-item-icon">✦</div>
              <div>
                <strong>Compassion:</strong> We believe in meeting every child and family with deep empathy and respect.
              </div>
            </div>
            <div className="value-item">
              <div className="value-item-icon">✦</div>
              <div>
                <strong>Collaboration:</strong> We work with local communities, educators, and mental health professionals to maximize our impact.
              </div>
            </div>
          </div>

          <div className="about-image-wrap">
            <img
              src="/images/about 3.jpeg"
              alt="Sankalpa For Change making a positive impact in communities"
              className="about-image"
            />
          </div>
        </div>

      </div>
    </div>
  );
}