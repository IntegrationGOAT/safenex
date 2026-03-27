import './TeamSection.css';
import JeetImg from '../assets/Jeet.jpg';
import SomiliImg from '../assets/soumili.jpeg';
import AnishImg from '../assets/ANISH DE.jpg';
import AryakaImg from '../assets/arya.jpeg';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Jeet',
      role: 'AI & Tech Lead',
      colors: '#1cc2ff 0%, #ff261b 100%',
      image: JeetImg
    },
    {
      name: 'Somili',
      role: 'Model Design & Graphic Lead',
      colors: '#1cffa4 0%, #00d4ff 100%',
      image: SomiliImg
    },
    {
      name: 'Anish',
      role: 'Creator and R&D Lead',
      colors: '#ff261b 0%, #ff6b9d 100%',
      image: AnishImg
    },
    {
      name: 'Aryaka',
      role: 'Prototype & Analytics Lead',
      colors: '#00d4ff 0%, #7b61ff 100%',
      image: AryakaImg
    }
  ];

  return (
    <div id="contact" style={{ padding: '80px 40px', backgroundColor: '#000000', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          color: '#ffffff',
          textAlign: 'center',
          marginBottom: '20px',
          letterSpacing: '1px'
        }}>
          Meet Our Team
        </h2>
        <p style={{
          fontSize: '18px',
          color: '#cccccc',
          textAlign: 'center',
          lineHeight: '1.6',
          marginBottom: '60px'
        }}>
          The passionate minds behind SafeNex, working to make transportation safer for everyone.
        </p>

        <div className="team-cards-container">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="team-card"
              style={{
                '--gradient-color': member.colors
              }}
            >
              <div className="card-image-wrapper">
                <img src={member.image} alt={member.name} className="profile-image" />
                <div className="image-placeholder">
                  <span></span>
                </div>
              </div>
              <div className="card-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Media Section */}
        <div style={{
          marginTop: '80px',
          paddingTop: '60px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#ffffff',
            marginBottom: '30px',
            letterSpacing: '1px'
          }}>
            Connect With Us
          </h3>

          <div className="social-buttons-container">
            {/* WhatsApp */}
            <a href="https://wa.me/9064704626" target="_blank" rel="noopener noreferrer" className="social-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.268.743 4.371 1.998 6.09L0 24l6.087-1.886c1.686 1.182 3.742 1.886 5.913 1.886 6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.919 0-3.752-.578-5.263-1.549l-.377-.235-3.911 1.21 1.232-3.861-.24-.384A9.968 9.968 0 0 1 2 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10z"/>
                <path d="M16.675 13.604c-.283-.144-1.674-.827-1.933-.922-.26-.095-.448-.142-.637.143-.19.284-.733.921-.898 1.11-.165.189-.33.213-.613.071-.282-.142-1.196-.44-2.282-1.407-.844-.751-1.414-1.68-1.58-1.962-.164-.283-.017-.436.124-.577.128-.128.284-.332.426-.497.141-.165.188-.284.284-.473.095-.189.048-.354-.024-.495-.072-.142-.637-1.54-.875-2.108-.23-.552-.464-.477-.637-.486-.165-.008-.354-.008-.543-.008-.19 0-.496.071-.756.355-.26.283-.992.969-.992 2.369 0 1.4 1.016 2.748 1.158 2.937.142.189 2.001 3.061 4.851 4.285.679.291 1.206.466 1.617.596.68.217 1.3.186 1.791.113.546-.081 1.681-.687 1.917-1.351.236-.665.236-1.233.165-1.351-.073-.119-.26-.189-.543-.332" />
              </svg>
              <span>WhatsApp</span>
            </a>

            {/* X (Twitter) */}
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.207-6.807-5.967 6.807H2.882l7.432-8.492-8.168-10.686h6.914l4.729 6.25 5.433-6.25m-1.161 17.52h1.833L7.084 4.126H5.117" />
              </svg>
              <span>X</span>
            </a>

            {/* Facebook */}
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="social-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Facebook</span>
            </a>

            {/* GitHub */}
            <a href="https://github.com/IntegrationGOAT/safenex" target="_blank" rel="noopener noreferrer" className="social-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>

            {/* YouTube */}
            <a href="https://youtu.be/BSErYhbnLpU?si=Z5cNoHWgEx9YF7zU" target="_blank" rel="noopener noreferrer" className="social-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>YouTube</span>
            </a>

            {/* Telegram */}
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="social-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a11.955 11.955 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.365-1.35.348-.436-.017-1.273-.241-1.896-.44-.764-.25-1.368-.408-1.315-.68.027-.14.113-.341.337-.534a12.719 12.719 0 0 1 1.671-1.688c.859-.637 1.636-1.193 1.635-1.193.01-1.166 2.206-1.083 3-1.083.593 0 1.041.043 1.141.063z" />
              </svg>
              <span>Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
