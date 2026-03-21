import Link from 'next/link';

const allPosts = [
    {
        id: 'math-has-no-bias',
        title: 'Math has no bias',
        date: 'October 4, 2025',
        category: 'Student- Lifeskills',
        excerpt: 'Today at school, something magical happened. Thanks to Sankalpa for Change, we had a fun and engaging math session led…'
    },
    {
        id: 'does-counselling-help-children',
        title: 'Does counselling help children?',
        date: 'October 4, 2025',
        category: 'Student- Lifeskills',
        excerpt: 'Yes, it absolutely does. Today, at a government school, counsellors from Sankalpa for Change held space for something powerful: Children speaking…'
    },
    {
        id: 'turning-study-into-habit',
        title: 'Turning Study into a Habit - One Step at a Time',
        date: 'October 4, 2025',
        category: 'Student- Lifeskills',
        excerpt: 'This week, we had the joy of engaging with 8th and 9th graders in a session on Study Skills —…'
    },
    {
        id: 'school-is-not-a-burden',
        title: 'School is not a burden',
        date: 'October 4, 2025',
        category: 'Student- Lifeskills',
        excerpt: 'At 22.2%, Karnataka\'s secondary level school dropout rate is above the national average. This startling figure for Classes 9 and 10…'
    },
    {
        id: 'mobile-addiction-discussions',
        title: 'Mobile Addiction Discussions',
        date: 'September 8, 2025',
        category: 'Student- Lifeskills',
        excerpt: 'Do school children need to be taught about the ill effects of mobile usage? Well, not really. During a recent workshop…'
    },
    {
        id: 'level-up-for-college',
        title: 'Level up for College',
        date: 'October 4, 2025',
        category: 'Student- Lifeskills',
        excerpt: 'Yesterday, Shubha and I, representing Sankalpa For Change, had the privilege of spending time with 11th and 12th grade girls…'
    },
    {
        id: 'study-skills-for-high-school',
        title: 'Study Skills for High School',
        date: 'October 4, 2025',
        category: 'Student- Lifeskills',
        excerpt: 'At Sankalpa For Change, we recently facilitated a session on two vital areas for students — Memory Skills and Time Management…'
    },
    {
        id: 'parental-workshop',
        title: 'Parental Workshop',
        date: 'October 4, 2025',
        category: 'Student- Lifeskills',
        excerpt: 'This week in Suvarna Badavane, I had the joy of co-facilitating a Positive Parenting Workshop with Shubha Dayanand…'
    },
];

export default function Posts() {
    return (
        <div className="main-content">
            <h1>Blog Posts</h1>
            <div className="posts-grid">
                {allPosts.map((post) => (
                    <div key={post.id} className="post-card">
                        <h2><Link href={`/posts/${post.id}`}>{post.title}</Link></h2>
                        <p style={{ fontSize: '0.9rem', color: 'var(--gray)' }}>{post.date} • {post.category}</p>
                        <p>{post.excerpt}</p>
                        <Link href={`/posts/${post.id}`} className="btn">Read More</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}