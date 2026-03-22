import type { MetadataRoute } from 'next';

const postIds = [
  'math-has-no-bias',
  'does-counselling-help-children',
  'turning-study-into-habit',
  'school-is-not-a-burden',
  'mobile-addiction-discussions',
  'level-up-for-college',
  'study-skills-for-high-school',
  'parental-workshop',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sankalpaforchange.com';

  const staticPages = [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/posts`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
  ];

  const postPages = postIds.map(id => ({
    url: `${base}/posts/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...postPages];
}