import RecentPosts from './components/RecentPosts';
import Header from './components/Header';

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
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '32px',
          fontWeight: 'bold'
        }}>
          Hi, This is Sankalpa for Change!
        </main>
        
        <RecentPosts />
      </div>
    </div>
  );
}