import RecentPosts from '../../components/RecentPosts';
import PostContent from '../../components/PostContent';
import Link from 'next/link';

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
    content: `<img src="/images/math has no bias.jpeg" alt="Math has no bias" style="width:100%; max-width:700px; height:auto; margin-bottom:28px; border-radius:12px;" />

Today at school, something magical happened.

Thanks to Sankalpa for Change, we had a fun and engaging math session led by Sabitha Rama Pandit, who joined us all the way from the US. With her deep passion for education and experience running a special school, she brought a powerful message: Math isn't just numbers — it's a joyful, equal space for all learners.

She introduced our students to the 24 Game — a clever numbers game where players use basic operations to make 24. We divided the class into Boys vs Girls team, and the classroom lit up with excitement. There were cheers, strategy, and rapid calculations. (The girls won this round! 🎉)

What did the students learn?

✔️ Basic operations and multiplication tables
✔️ Quick thinking and logic
✔️ That math is for everyone — it doesn't care about your gender, background, or labels

Some fun facts we also explored:

• Math is a universal language — the same everywhere, in every culture
• Solving math problems activates both the logical and creative sides of the brain

Sabitha Rama closed the session with a powerful truth:
"Math doesn't discriminate. It treats everyone equally."

We're so grateful to her and Sankalpa for Change for making this day so memorable. Here's to more such moments where learning feels like play and every child feels seen.`,
  },
  'does-counselling-help-children': {
    id: 'does-counselling-help-children',
    title: '𝗗𝗼𝗲𝘀 𝗰𝗼𝘂𝗻𝘀𝗲𝗹𝗹𝗶𝗻𝗴 𝗵𝗲𝗹𝗽 𝗰𝗵𝗶𝗹𝗱𝗿𝗲𝗻?',
    date: 'October 4, 2025',
    category: 'Student- Lifeskills',
    content: `<img src="/images/does counselling help children.jpeg" alt="Does counselling help children" style="width:100%; max-width:700px; height:auto; margin-bottom:28px; border-radius:12px;" />

Yes, it absolutely does.

Today, at a government school, counsellors from Sankalpa for Change held space for something powerful:
Children speaking about their goals, their fears, and the setbacks they rarely say out loud.

When trust is built with care, something shifts.
A quiet kind of courage surfaces — and they begin to believe that asking for help is not weakness, but strength.

We gently reminded them today:
"Strong is the child who says — I need support."
"Brave is the one who doesn't bottle it up."

This is the heart of our work at Sankalpa For Change — creating safe spaces where children can reflect, express, and grow.

We believe that emotional wellbeing is just as important as academic success — and it begins with listening.`,
  },
  'turning-study-into-habit': {
    id: 'turning-study-into-habit',
    title: 'Turning Study into a Habit – One Step at a Time',
    date: 'October 4, 2025',
    category: 'Student- Lifeskills',
    content: `<img src="/images/turning study into a habit.jpeg" alt="Turning Study into a Habit" style="width:100%; max-width:700px; height:auto; margin-bottom:28px; border-radius:12px;" />

This week, we had the joy of engaging with 8th and 9th graders in a session on Study Skills — and what an insightful time it turned out to be!

Through discussions, storytelling (thank you Reshma & Shubha !), and reflection activities, students began identifying what actually works for them:

✅ Studying at the same time every day builds rhythm
✅ Not every subject needs equal time, but all deserve attention
✅ Revision isn't a luxury — it's a must (at least once a week!)
✅ Even 'easy' subjects require consistency
✅ And most importantly: studying needs to become a habit, not a chore

Using a simple "Study Score" activity, the students evaluated their current practices — and were surprised at the room for growth.

Helping students discover their own strategies is far more powerful than handing them a generic rulebook. When the learning feels personal, it sticks.`,
  },
  'school-is-not-a-burden': {
    id: 'school-is-not-a-burden',
    title: 'School is not a burden',
    date: 'October 4, 2025',
    category: 'Student- Lifeskills',
    content: `<img src="/images/school is not a burden.jpeg" alt="School is not a burden" style="width:100%; max-width:700px; height:auto; margin-bottom:28px; border-radius:12px;" />
<img src="/images/the importance of education 1.jpeg" alt="The importance of education 1" style="width:100%; max-width:700px; height:auto; margin-bottom:28px; border-radius:12px;" />
<img src="/images/the importance of education 2.jpeg" alt="The importance of education 2" style="width:100%; max-width:700px; height:auto; margin-bottom:28px; border-radius:12px;" />

At 22.2%, Karnataka's secondary level school dropout rate is above the national average.
This startling figure for Classes 9 and 10 in 2023–24 places the state among the highest in the country.

But numbers alone don't tell the whole story. Behind every statistic is a child—often at a crossroads, facing difficult choices.

This week, through Sankalpa For Change, we held a life skills session with students from Classes 8 and 9, asking some essential questions:

• Why is school important?
• Why continue education?
• And what can we do when education is interrupted?

What followed was a moving, real conversation.
Students shared their dreams, their doubts, and even quotes that inspired them.

One student quietly said:
"The roots of education are bitter, but the fruit is sweet."

A powerful reminder that while the journey may be tough, what lies ahead is worth it.

Another shift happened toward the end of the session. A deeper realisation took root in the room —
"Education is not preparation for life; education is life itself."

We closed with the reminder that knowledge is a treasure no one can steal.

And for many in the room, school began to feel not like a burden — but like a bridge.

𝗢𝗻𝗲 𝘀𝗲𝘀𝘀𝗶𝗼𝗻 𝗺𝗮𝘆 𝗻𝗼𝘁 𝘀𝗼𝗹𝘃𝗲 𝗲𝘃𝗲𝗿𝘆𝘁𝗵𝗶𝗻𝗴. 𝗕𝘂𝘁 𝗶𝘁 𝗰𝗮𝗻 𝗽𝗹𝗮𝗻𝘁 𝗮 𝘀𝗲𝗲𝗱.
A seed of self-worth, possibility, and hope.`,
  },
  'mobile-addiction-discussions': {
    id: 'mobile-addiction-discussions',
    title: 'Mobile Addiction Discussions',
    date: 'September 8, 2025',
    category: 'Student- Lifeskills',
    content: `<img src="/images/mobile addiction discussions 1.webp" alt="Mobile addiction discussions 1" style="width:100%; max-width:700px; height:auto; margin-bottom:28px; border-radius:12px;" />
<img src="/images/mobile addiction discussions 2.webp" alt="Mobile addiction discussions 2" style="width:100%; max-width:700px; height:auto; margin-bottom:28px; border-radius:12px;" />

"Do school children need to be taught about the ill effects of mobile usage?"

Well, not really.

During a 𝗿𝗲𝗰𝗲𝗻𝘁 𝘄𝗼𝗿𝗸𝘀𝗵𝗼𝗽 𝗰𝗼𝗻𝗱𝘂𝗰𝘁𝗲𝗱 𝗯𝘆 Sankalpa For Change with 8th and 9th grade students at a government school, we asked this very question. And what we heard was truly eye-opening.

Without any prompting, the children responded:

• Eye pain
• Hand strain
• Loss of focus
• Wasted time
• Headaches
• And one even warned — "It can be dangerous if a mobile bursts!"

They also spoke about addiction.

When we flipped the question and asked about the benefits of mobile phones, they shared:

• Access to class notes
• Learning new skills or concepts

Their conclusion was simple yet wise:
"It's just a tool. Use common sense, set a timer, and stick to the purpose."

We went in thinking we'd teach something.
But we walked out realizing we have learnt more, that children are already aware.

What they really need is not more instructions, but safe spaces to think aloud, share, and be heard.

This workshop was co-facilitated by our wonderful team — Reshma S Bhat, Divya Hariprasad, Shubha Dayanand, and Jayashree Gururaj — and it reaffirmed why we do what we do at Sankalpa For Change.

Let's continue 𝗰𝗿𝗲𝗮𝘁𝗶𝗻𝗴 𝘀𝗽𝗮𝗰𝗲𝘀 𝘁𝗵𝗮𝘁 𝗶𝗻𝘃𝗶𝘁𝗲 𝗱𝗶𝗮𝗹𝗼𝗴𝘂𝗲, not just direction.

Because sometimes, the best lessons come from those we aim to teach.`,
  },
  'level-up-for-college': {
    id: 'level-up-for-college',
    title: 'Level up for College',
    date: 'October 4, 2025',
    category: 'Student- Lifeskills',
    content: `<img src="/images/level up for college.jpeg" alt="Level up for College" style="width:100%; max-width:700px; height:auto; margin-bottom:28px; border-radius:12px;" />

Yesterday, Shubha and I, representing Sankalpa For Change, had the privilege of spending time with 11th and 12th grade girls at a Government School in Mandya — talking about what it means to level up and take that step toward college.

We explored:
• Creative & critical thinking through hands-on activities
• Role plays on how to handle negative peer pressure
• Honest conversations on the risks of alcohol and the power of informed choices

We closed with few challenging rope activities — that taught students that hope is real, and no challenge is impossible.

What struck me most was the energy in the room — these young women are curious, bold, and eager to imagine bigger futures for themselves. By the end of the session, they walked away not just with helpline numbers, but also with a little more belief in themselves.

Empowering girls through life skills is not just about education; it's about giving them tools to navigate choices, challenges, and opportunities with confidence.

A heartfelt thanks to the school management and to Reshu Bhat for the support and encouragement that made this session meaningful.`,
  },
  'study-skills-for-high-school': {
    id: 'study-skills-for-high-school',
    title: 'Study Skills for High School',
    date: 'October 4, 2025',
    category: 'Student- Lifeskills',
    content: `<img src="/images/study skills for high school.jpeg" alt="Study Skills for High School" style="width:100%; max-width:700px; height:auto; margin-bottom:28px; border-radius:12px;" />

At Sankalpa For Change, we recently facilitated a session on two vital areas for students — Memory Skills and Time Management — with our 8th and 9th graders.

In the Memory Skills segment, we introduced the SQ3R technique (Survey, Question, Read, Recall, Review) and guided students in creating mind maps to organize and retain information better. The response was enthusiastic, with students realizing how these tools could make studying more structured and effective.

In the Time Management activity, students created pie charts of their daily routines. This exercise gave them a visual picture of how they spend their time. A memorable moment was when one student noticed that her day was completely filled with tasks, leaving very little time for rest — a powerful insight into the need for balance.
The session was practical, reflective, and impactful — helping students not just with academics, but with life skills they will carry forward.`,
  },
  'parental-workshop': {
    id: 'parental-workshop',
    title: 'Parental Workshop',
    date: 'October 4, 2025',
    category: 'Student- Lifeskills',
    content: `<img src="/images/parental workshop.jpeg" alt="Parental Workshop" style="width:100%; max-width:700px; height:auto; margin-bottom:28px; border-radius:12px;" />

This week in Suvarna Badavane, I had the joy of co-facilitating a Positive Parenting Workshop with Shubha Dayanand, through Sankalpa For Change.

The session brought together a beautiful mix—new parents, parents of teenagers, and even grandparents. For 1.5 hours, the hall was alive with reflection, laughter, and honest sharing.

We explored positive parenting styles, do's and don'ts, and most importantly, stepped into a child's world through activities designed to highlight their problems and unspoken needs.
💬 Parents shared openly—one spoke about the struggle of balancing work and parenting, another reflected on how comparison unknowingly hurts children.
💬 A trainer called the session "very interesting."
💬 And the overall feedback was heartening—participants found the activities "wonderful" and "insightful."

What I carried back was this: Parenting is less about control and more about connection. When parents pause to listen, love, and care, children feel seen—and that changes everything. Grateful to Sankalpa For Change, to Shubha, and to every participant who made the session meaningful.`,
  },
};

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = posts[id];

  if (!post) {
    return (
      <div className="not-found">
        <h1>Post not found</h1>
        <Link href="/" className="btn-primary">Go Home</Link>
      </div>
    );
  }

  return (
    <div className="post-page-layout">
      <article className="post-article">
        <div className="post-article-header">
          <Link href="/posts" className="post-back-link">← Back to all stories</Link>
          <span className="article-tag">{post.category}</span>
          <h1 className="post-article-title">{post.title}</h1>
          <div className="post-article-meta">
            <span>{post.date}</span>
            <span className="card-meta-dot"></span>
            <span>{post.category}</span>
          </div>
        </div>
        <PostContent content={post.content} />
        <div className="post-article-footer">
          <Link href="/posts" className="btn-outline">← All Stories</Link>
          <Link href="/" className="btn-primary">Back to Home</Link>
        </div>
      </article>

      <RecentPosts />
    </div>
  );
}