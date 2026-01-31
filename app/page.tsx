import Header from './components/Header';
import RecentPosts from './components/RecentPosts';

export default function Home() {
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
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px'
        }}>
          <h1 style={{
            fontSize: '32px',
            fontWeight: 'bold'
          }}>
            Hi, This is Sankalpa for Change!
          </h1>
          <a 
            href="/about"
            style={{
              fontSize: '18px',
              color: '#2563eb',
              textDecoration: 'underline',
              cursor: 'pointer'
            }}
          >
            About Us
          </a>
        </main>
        
        <RecentPosts />
      </div>
    </div>
  );
}