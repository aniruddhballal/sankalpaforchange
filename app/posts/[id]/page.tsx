import Header from '../../components/Header';
import RecentPosts from '../../components/RecentPosts';

// This will be populated with actual post data
const posts: Record<string, {
    id: string;
    title: string;
    date: string;
    category: string;
    content: string;
}> = {
    'math-has-no-bias': {
        id: 'math-has-no-bias',
        title: 'Math has no bias',
        date: 'October 4, 2025',
        category: 'Student- Lifeskills',
        content: 'Full content will be added here...'
    },
    'does-counselling-help-children': {
        id: 'does-counselling-help-children',
        title: '𝗗𝗼𝗲𝘀 𝗰𝗼𝘂𝗻𝘀𝗲𝗹𝗹𝗶𝗻𝗴 𝗵𝗲𝗹𝗽 𝗰𝗵𝗶𝗹𝗱𝗿𝗲𝗻?',
        date: 'October 4, 2025',
        category: 'Student- Lifeskills',
        content: 'Full content will be added here...'
    },
    'turning-study-into-habit': {
        id: 'turning-study-into-habit',
        title: 'Turning Study into a Habit – One Step at a Time',
        date: 'October 4, 2025',
        category: 'Student- Lifeskills',
        content: 'Full content will be added here...'
    },
    'school-is-not-a-burden': {
        id: 'school-is-not-a-burden',
        title: 'School is not a burden',
        date: 'October 4, 2025',
        category: 'Student- Lifeskills',
        content: 'Full content will be added here...'
    },
    'importance-of-education': {
        id: 'importance-of-education',
        title: 'The Importance Of Education',
        date: 'September 8, 2025',
        category: 'Student- Lifeskills',
        content: 'Full content will be added here...'
    },
};

export default function PostPage({ params }: { params: { id: string } }) {
    const post = posts[params.id];

    if (!post) {
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <h1>Post not found</h1>
            </div>
        );
    }

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
                    <div style={{
                        fontSize: '14px',
                        color: '#6b7280',
                        marginBottom: '12px'
                    }}>
                        {post.date} | {post.category}
                    </div>

                    <h1 style={{
                        fontSize: '36px',
                        fontWeight: 'bold',
                        marginBottom: '30px',
                        color: '#111827'
                    }}>
                        {post.title}
                    </h1>

                    <article style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#374151'
                    }}>
                        {post.content}
                    </article>
                </main>

                <RecentPosts />
            </div>
        </div>
    );
}