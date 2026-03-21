import Link from 'next/link';

const allPosts = [
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
    excerpt: 'Yes, it absolutely does. Today, at a government school, counsellors from Sankalpa for Change held space for something powerful: Children speaking…',
    image: '/images/does counselling help children.jpeg',
  },
  {
    id: 'turning-study-into-habit',
    title: 'Turning Study into a Habit - One Step at a Time',
    date: 'October 4, 2025',
    category: 'Student- Lifeskills',
    excerpt: 'This week, we had the joy of engaging with 8th and 9th graders in a session on Study Skills —…',
    image: '/images/turning study into a habit.jpeg',
  },
  {
    id: 'school-is-not-a-burden',
    title: 'School is not a burden',
    date: 'October 4, 2025',
    category: 'Student- Lifeskills',
    excerpt: 'At 22.2%, Karnataka\'s secondary level school dropout rate is above the national average. This startling figure for Classes 9 and 10…',
    image: '/images/school is not a burden.jpeg',
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
    excerpt: 'Yesterday, Shubha and I, representing Sankalpa For Change, had the privilege of spending time with 11th and 12th grade girls…',
    image: '/images/level up for college.jpeg',
  },
  {
    id: 'study-skills-for-high-school',
    title: 'Study Skills for High School',
    date: 'October 4, 2025',
    category: 'Student- Lifeskills',
    excerpt: 'At Sankalpa For Change, we recently facilitated a session on two vital areas for students — Memory Skills and Time Management…',
    image: '/images/study skills for high school.jpeg',
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

export default function Posts() {
  return (
    <div className="posts-page">
      <div className="posts-page-header">
        <div className="hero-eyebrow">All Articles</div>
        <h1 className="posts-page-title">Blog Posts</h1>
        <p className="posts-page-sub">Stories, reflections, and insights from our work in schools and communities.</p>
      </div>

      <div className="posts-page-grid">
        {allPosts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`} className="post-page-card">
            <div className="post-page-card-img">
              <img src={post.image} alt={post.title} className="card-real-img" />
            </div>
            <div className="post-page-card-body">
              <span className="article-tag-small">{post.category}</span>
              <h2 className="post-page-card-title">{post.title}</h2>
              <p className="post-page-card-excerpt">{post.excerpt}</p>
              <div className="card-meta-small">
                <span>{post.date}</span>
                <span className="read-more-inline">Read more →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}