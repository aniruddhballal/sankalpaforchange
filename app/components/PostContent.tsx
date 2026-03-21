'use client';

import React from 'react';

interface PostContentProps {
    content: string;
}

export default function PostContent({ content }: PostContentProps) {
    // Split content by double newlines to get paragraphs
    const sections = content.split('\n\n');

    const renderSection = (section: string, index: number) => {
        const trimmedSection = section.trim();

        // Check if it's a bullet list (starts with • or ✔️)
        if (trimmedSection.includes('\n•') || trimmedSection.includes('\n✔️')) {
            const lines = trimmedSection.split('\n');
            const beforeList = lines[0];
            const listItems = lines.slice(1).filter(line => line.trim().startsWith('•') || line.trim().startsWith('✔️'));

            return (
                <div key={index} style={{ marginBottom: '24px' }}>
                    {beforeList && (
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#374151',
                            marginBottom: '12px'
                        }}>
                            {beforeList}
                        </p>
                    )}
                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0
                    }}>
                        {listItems.map((item, i) => (
                            <li key={i} style={{
                                fontSize: '16px',
                                lineHeight: '1.8',
                                color: '#374151',
                                marginBottom: '8px',
                                paddingLeft: '4px'
                            }}>
                                {item.trim()}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }

        // Check if it's a quote (wrapped in quotes)
        if (trimmedSection.startsWith('"') && trimmedSection.endsWith('"')) {
            return (
                <blockquote key={index} style={{
                    fontSize: '18px',
                    fontStyle: 'italic',
                    color: '#1f2937',
                    borderLeft: '4px solid #3b82f6',
                    paddingLeft: '20px',
                    marginBottom: '24px',
                    marginTop: '24px'
                }}>
                    {trimmedSection}
                </blockquote>
            );
        }

        // Check if it's bold text (contains 𝗕𝗼𝗹𝗱 unicode or all caps emphasis)
        if (trimmedSection.includes('𝗢𝗻𝗲') || trimmedSection.includes('𝗰𝗿𝗲𝗮𝘁𝗶𝗻𝗴') || trimmedSection.includes('𝗿𝗲𝗰𝗲𝗻𝘁')) {
            return (
                <p key={index} style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    lineHeight: '1.8',
                    color: '#1f2937',
                    marginBottom: '24px'
                }}>
                    {trimmedSection}
                </p>
            );
        }

        // Check if it's HTML content (e.g., img tag)
        if (trimmedSection.includes('<img')) {
            return (
                <div key={index} style={{ marginBottom: '24px' }} dangerouslySetInnerHTML={{ __html: trimmedSection }} />
            );
        }

        // Regular paragraph
        return (
            <p key={index} style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#374151',
                marginBottom: '20px'
            }}>
                {trimmedSection}
            </p>
        );
    };

    return (
        <div>
            {sections.map((section, index) => renderSection(section, index))}
        </div>
    );
}