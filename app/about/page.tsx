import Header from '../components/Header';
import RecentPosts from '../components/RecentPosts';

export default function About() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Header />

            <div style={{
                flex: 1,
                display: 'flex'
            }}>
                <main style={{
                    flex: 1,
                    padding: '40px 60px',
                    maxWidth: '900px',
                    margin: '0 auto'
                }}>
                    <h1 style={{
                        fontSize: '36px',
                        fontWeight: 'bold',
                        marginBottom: '30px'
                    }}>
                        About Us
                    </h1>

                    <div style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#374151'
                    }}>
                        <p style={{ marginBottom: '20px' }}>
                            In the fast-paced world we live in, the emotional and psychological needs of children are often overlooked. For many young minds, especially those growing up in under-resourced environments, navigating school, relationships, and self-understanding can be overwhelming. Without early support, they may struggle silently — their potential clouded by anxiety, isolation, or lack of guidance.
                        </p>

                        <p style={{ marginBottom: '20px' }}>
                            At Sankalpa For Change, we believe every child deserves the chance to grow in confidence, resilience, and self-awareness. Established as a trust, our organization is rooted in the belief that empowered children create empowered societies. Our vision is simple yet profound: To create a better society by nurturing human potential, particularly in young children.
                        </p>

                        <h2 style={{
                            fontSize: '28px',
                            fontWeight: 'bold',
                            marginTop: '40px',
                            marginBottom: '20px'
                        }}>
                            Our Journey
                        </h2>

                        <p style={{ marginBottom: '20px' }}>
                            Sankalpa For Change began as a heartfelt initiative by a group of educators and counselors who recognized the widening gap between children's academic lives and their emotional well-being. Since our inception, we have worked closely with schools and communities to create meaningful support systems for children. Whether through school-based programs or counselling, our focus remains consistent: equipping children with practical life skills and emotional tools to thrive in a complex world.
                        </p>

                        <h2 style={{
                            fontSize: '28px',
                            fontWeight: 'bold',
                            marginTop: '40px',
                            marginBottom: '20px'
                        }}>
                            Our Core Programs and Services
                        </h2>

                        <h3 style={{
                            fontSize: '20px',
                            fontWeight: '600',
                            marginTop: '24px',
                            marginBottom: '12px'
                        }}>
                            Life Skills Coaching
                        </h3>
                        <p style={{ marginBottom: '20px' }}>
                            Our age-appropriate life skills sessions cover communication, emotional regulation, problem-solving, decision-making, and goal-setting. These are designed to enhance children's confidence and interpersonal relationships.
                        </p>

                        <h3 style={{
                            fontSize: '20px',
                            fontWeight: '600',
                            marginTop: '24px',
                            marginBottom: '12px'
                        }}>
                            Mentoring and Group Programs
                        </h3>
                        <p style={{ marginBottom: '20px' }}>
                            Children facing significant social or emotional difficulties are offered structured mentoring — individually and in peer groups — to help them rediscover connection, belonging, and purpose.
                        </p>

                        <h3 style={{
                            fontSize: '20px',
                            fontWeight: '600',
                            marginTop: '24px',
                            marginBottom: '12px'
                        }}>
                            Substance Addiction Awareness for Youth
                        </h3>
                        <p style={{ marginBottom: '20px' }}>
                            We conduct interactive awareness programs for youth to educate them about the risks of substance abuse, empowering them with the knowledge and confidence to make healthy life choices. These sessions are grounded in real-life scenarios, peer discussion, and preventive strategies.
                        </p>

                        <h3 style={{
                            fontSize: '20px',
                            fontWeight: '600',
                            marginTop: '24px',
                            marginBottom: '12px'
                        }}>
                            Stress Management for Mental Well-being
                        </h3>
                        <p style={{ marginBottom: '20px' }}>
                            Our programs focus on building essential life skills while helping participants identify personal stressors and develop healthy coping strategies. Through engaging, participatory activities, we empower children, teens, and adults to manage stress effectively and build emotional resilience.
                        </p>

                        <h3 style={{
                            fontSize: '20px',
                            fontWeight: '600',
                            marginTop: '24px',
                            marginBottom: '12px'
                        }}>
                            Collaborative Programs
                        </h3>
                        <p style={{ marginBottom: '20px' }}>
                            We run collaborative programs on topics such as menstrual hygiene, child rights, and key legal protections to foster awareness and self-advocacy among adolescent girls. These sessions are often conducted in partnership with healthcare professionals and legal educators.
                        </p>

                        <h2 style={{
                            fontSize: '28px',
                            fontWeight: 'bold',
                            marginTop: '40px',
                            marginBottom: '20px'
                        }}>
                            Our Values
                        </h2>

                        <p style={{ marginBottom: '12px' }}>
                            <strong>Integrity:</strong> We are committed to honesty, transparency, and ethical action in all that we do.
                        </p>

                        <p style={{ marginBottom: '12px' }}>
                            <strong>Compassion:</strong> We believe in meeting every child and family with deep empathy and respect.
                        </p>

                        <p style={{ marginBottom: '12px' }}>
                            <strong>Collaboration:</strong> We work with local communities, educators, and mental health professionals to maximize our impact.
                        </p>
                    </div>
                </main>

                <RecentPosts />
            </div>
        </div>
    );
}