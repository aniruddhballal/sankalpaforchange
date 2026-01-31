import Link from 'next/link';
import { FaYoutube, FaFacebook, FaXTwitter, FaInstagram } from 'react-icons/fa6';

const socialLinks = [
    { icon: FaYoutube, url: 'https://youtube.com', label: 'YouTube' },
    { icon: FaFacebook, url: 'https://facebook.com', label: 'Facebook' },
    { icon: FaXTwitter, url: 'https://x.com', label: 'X' },
    { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
];

export default function Header() {
    return (
        <header style={{
            padding: '20px 40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #e5e7eb'
        }}>
            <h1 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                margin: 0
            }}>
                Sankalpa For Change
            </h1>

            <div style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'center'
            }}>
                {socialLinks.map((social) => (
                    <Link
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        style={{
                            fontSize: '24px',
                            color: '#374151',
                            transition: 'color 0.2s'
                        }}
                    >
                        <social.icon />
                    </Link>
                ))}
            </div>
        </header>
    );
}