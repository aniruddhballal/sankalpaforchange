'use client';

const recentPosts = [
    {
        id: 1,
        title: 'Community Outreach Program Launch',
        date: 'Jan 28, 2026'
    },
    {
        id: 2,
        title: 'Volunteer Training Session',
        date: 'Jan 25, 2026'
    },
    {
        id: 3,
        title: 'Monthly Impact Report',
        date: 'Jan 20, 2026'
    },
    {
        id: 4,
        title: 'Fundraising Event Success',
        date: 'Jan 15, 2026'
    },
];

export default function RecentPosts() {
    return (
        <aside style={{
            width: '300px',
            padding: '20px',
            borderLeft: '1px solid #e5e7eb'
        }}>
            <h2 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                marginBottom: '20px'
            }}>
                Recent Posts
            </h2>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
            }}>
                {recentPosts.map((post) => (
                    <div
                        key={post.id}
                        style={{
                            padding: '12px',
                            borderRadius: '8px',
                            border: '1px solid #e5e7eb',
                            cursor: 'pointer',
                            transition: 'background-color 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        <h3 style={{
                            fontSize: '14px',
                            fontWeight: '600',
                            marginBottom: '4px'
                        }}>
                            {post.title}
                        </h3>
                        <p style={{
                            fontSize: '12px',
                            color: '#6b7280'
                        }}>
                            {post.date}
                        </p>
                    </div>
                ))}
            </div>
        </aside>
    );
}