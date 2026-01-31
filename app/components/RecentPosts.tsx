'use client';

import Link from 'next/link';

const recentPosts = [
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
    id: 'importance-of-education',
    title: 'The Importance Of Education',
    date: 'September 8, 2025',
    category: 'Student- Lifeskills',
    excerpt: 'At 22.2%, Karnataka\'s secondary level school dropout rate is above the national average. This startling figure for Classes 9 and 10…'
  },
];

export default function RecentPosts() {
  return (
    <aside style={{
      width: '350px',
      padding: '20px',
      borderLeft: '1px solid #e5e7eb',
      overflowY: 'auto'
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
        gap: '24px'
      }}>
        {recentPosts.map((post) => (
          <article
            key={post.id}
            style={{
              paddingBottom: '24px',
              borderBottom: '1px solid #e5e7eb'
            }}
          >
            <div style={{
              fontSize: '12px',
              color: '#6b7280',
              marginBottom: '8px'
            }}>
              {post.date} | {post.category}
            </div>
            
            <Link 
              href={`/posts/${post.id}`}
              style={{
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                marginBottom: '8px',
                cursor: 'pointer',
                color: '#111827'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}
              >
                {post.title}
              </h3>
            </Link>
            
            <p style={{
              fontSize: '14px',
              color: '#4b5563',
              lineHeight: '1.6',
              marginBottom: '8px'
            }}>
              {post.excerpt}
            </p>
            
            <Link 
              href={`/posts/${post.id}`}
              style={{
                fontSize: '14px',
                color: '#2563eb',
                fontWeight: '500',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
            >
              READ MORE
            </Link>
          </article>
        ))}
      </div>
    </aside>
  );
}