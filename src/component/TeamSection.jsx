import './TeamSection.css';
import JeetImg from '../assets/Jeet.jpg';
import SomiliImg from '../assets/Somili.jpeg';
import AnishImg from '../assets/ANISH DE.jpg';
import AryakaImg from '../assets/Aryaka.jpeg';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Jeet',
      role: 'Lorem Ipsum sit dolor amet',
      colors: '#1cc2ff 0%, #ff261b 100%',
      image: JeetImg
    },
    {
      name: 'Somili',
      role: 'Lorem Ipsum sit dolor amet',
      colors: '#1cffa4 0%, #00d4ff 100%',
      image: SomiliImg
    },
    {
      name: 'Anish',
      role: 'Lorem Ipsum sit dolor amet',
      colors: '#ff261b 0%, #ff6b9d 100%',
      image: AnishImg
    },
    {
      name: 'Aryaka',
      role: 'Lorem Ipsum sit dolor amet',
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
      </div>
    </div>
  );
}
