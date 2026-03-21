'use client';

import React from 'react';

interface PostContentProps {
  content: string;
}

export default function PostContent({ content }: PostContentProps) {
  const sections = content.split('\n\n');

  const renderSection = (section: string, index: number) => {
    const trimmedSection = section.trim();

    // Bullet list — lines starting with •
    if (trimmedSection.includes('\n•')) {
      const lines = trimmedSection.split('\n');
      const beforeList = lines[0].startsWith('•') ? null : lines[0];
      const listItems = lines.filter(line => line.trim().startsWith('•'));

      return (
        <div key={index} className="post-section">
          {beforeList && <p className="post-paragraph">{beforeList}</p>}
          <ul className="post-list">
            {listItems.map((item, i) => (
              <li key={i} className="post-list-item">
                {item.trim().replace(/^•\s*/, '')}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    // Blockquote — wrapped in quotes
    if (trimmedSection.startsWith('"') && trimmedSection.endsWith('"')) {
      return (
        <blockquote key={index} className="post-blockquote">
          {trimmedSection}
        </blockquote>
      );
    }

    // Bold unicode emphasis paragraphs
    if (trimmedSection.includes('𝗢𝗻𝗲') || trimmedSection.includes('𝗰𝗿𝗲𝗮𝘁𝗶𝗻𝗴') || trimmedSection.includes('𝗿𝗲𝗰𝗲𝗻𝘁')) {
      return (
        <p key={index} className="post-paragraph post-bold-para">
          {trimmedSection}
        </p>
      );
    }

    // HTML content (img tags)
    if (trimmedSection.includes('<img')) {
      return (
        <div key={index} className="post-image-wrap" dangerouslySetInnerHTML={{ __html: trimmedSection }} />
      );
    }

    // Regular paragraph
    return (
      <p key={index} className="post-paragraph">
        {trimmedSection}
      </p>
    );
  };

  return (
    <div className="post-content-body">
      {sections.map((section, index) => renderSection(section, index))}
    </div>
  );
}