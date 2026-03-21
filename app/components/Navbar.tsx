'use client';

import Link from 'next/link';
import { FaYoutube, FaFacebook, FaXTwitter, FaInstagram } from 'react-icons/fa6';

const socialLinks = [
    { icon: FaYoutube, url: 'https://www.youtube.com/@SankalpaForChange', label: 'YouTube' },
    { icon: FaFacebook, url: 'https://facebook.com', label: 'Facebook' },
    { icon: FaXTwitter, url: 'https://x.com', label: 'X' },
    { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
];

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link href="/">
                <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>
                    Sankalpa For Change
                </h1>
            </Link>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/posts">Blog</Link>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {socialLinks.map((social) => (
                        <a
                            key={social.label}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'var(--gray)' }}
                            aria-label={social.label}
                        >
                            <social.icon size={20} />
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}