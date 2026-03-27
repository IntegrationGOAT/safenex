import React from 'react';
import ReactDOM from 'react-dom/client';
import BorderGlow from './component/BorderGlow';
import Navbar from './component/Navbar';
import FatalitiesCounter from './component/FatalitiesCounter';
import ServicesSection from './component/ServicesSection';
import TeamSection from './component/TeamSection';
import bgVideo from './assets/bg.mp4';
import './style.css';

function App() {
  return (
    <div style={{ backgroundColor: '#000000' }}>
      {/* Hero Section - Fixed viewport */}
      <div id="hero" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0, backgroundColor: '#000000' }}>
        <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
          {/* Video Background */}
          <video
            autoPlay
            muted
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0
            }}
          >
            <source src={bgVideo} type="video/mp4" />
          </video>

          {/* Dark overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1
          }} />
        </div>
        
        {/* Gradient blend at bottom - Larger */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '250px',
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1))',
          pointerEvents: 'none',
          zIndex: 5
        }} />
        
        <Navbar />
      </div>

      {/* Cards Section - Starts below hero */}
      <div id="about" style={{ marginTop: '100vh', padding: '80px 40px', backgroundColor: '#000000', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', color: '#ffffff', textAlign: 'center', marginBottom: '60px', letterSpacing: '1px' }}>
            How SafeNex Works
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', gridAutoRows: '360px' }}>
            {/* Card 1 */}
            <BorderGlow
              edgeSensitivity={53}
              glowColor="40 80 80"
              backgroundColor="#0a0015"
              borderRadius={28}
              glowRadius={56}
              glowIntensity={2}
              coneSpread={37}
              colors={['#c084fc', '#f472b6', '#38bdf8']}
            >
              <div style={{ padding: '1.5em', animation: 'cardFadeIn 0.8s ease-out 0.1s both', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <h3 style={{ fontSize: '28px', fontWeight: 'bold', color: '#ffffff', marginBottom: '12px', margin: 0 }}>What is Emulsification...?</h3>
                <p style={{ fontSize: '18px', color: '#cccccc', lineHeight: '1.5', margin: '0.5em 0 0 0', flexGrow: 1, overflow: 'hidden' }}>
                 Emulsification is the process of mixing two immiscible liquids (like oil and water) into a stable mixture. Soap helps by reducing surface tension and forming a stable emulsion. In SAFENEX, emulsification reduces fuel flammability.
                </p>
              </div>
            </BorderGlow>

            {/* Card 2 */}
            <BorderGlow
              edgeSensitivity={53}
              glowColor="40 80 80"
              backgroundColor="#0a0015"
              borderRadius={28}
              glowRadius={56}
              glowIntensity={2}
              coneSpread={37}
              colors={['#c084fc', '#f472b6', '#38bdf8']}
            >
              <div style={{ padding: '1.5em', animation: 'cardFadeIn 0.8s ease-out 0.2s both', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <h3 style={{ fontSize: '28px', fontWeight: 'bold', color: '#ffffff', marginBottom: '12px', margin: 0 }}>Saponification</h3>
                <p style={{ fontSize: '18px', color: '#cccccc', lineHeight: '1.5', margin: '0.5em 0 0 0', flexGrow: 1, overflow: 'hidden' }}>
                  Alkaline hydrolysis of fats/oils with NaOH produces soap and glycerol. Reaction: Triglyceride + 3NaOH → Glycerol + Soap. Soap acts as an emulsifier.
                </p>
              </div>
            </BorderGlow>

            {/* Card 3 */}
            <BorderGlow
              edgeSensitivity={53}
              glowColor="40 80 80"
              backgroundColor="#0a0015"
              borderRadius={28}
              glowRadius={56}
              glowIntensity={2}
              coneSpread={37}
              colors={['#c084fc', '#f472b6', '#38bdf8']}
            >
              <div style={{ padding: '1.5em', animation: 'cardFadeIn 0.8s ease-out 0.3s both', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <h3 style={{ fontSize: '28px', fontWeight: 'bold', color: '#ffffff', marginBottom: '12px', margin: 0 }}>Working Equations</h3>
                <div style={{ fontSize: '18px', color: '#cccccc', lineHeight: '1.4', margin: '0.5em 0 0 0', flexGrow: 1, overflow: 'hidden' }}>
                  <p style={{ margin: '0 0 4px 0' }}>Triglyceride + 3NaOH → Glycerol + Soap</p>
                  <p style={{ margin: '4px 0' }}>RCOONa → RCOO⁻ + Na⁺</p>
                  <p style={{ margin: '4px 0' }}>Fuel + Water + Emulsifier → Emulsion</p>
                  <p style={{ margin: '4px 0 0 0' }}>2C₈H₁₈ + 25O₂ → 16CO₂ + 18H₂O</p>
                </div>
              </div>
            </BorderGlow>
            

            {/* Card 4 */}
            <BorderGlow
              edgeSensitivity={53}
              glowColor="40 80 80"
              backgroundColor="#0a0015"
              borderRadius={28}
              glowRadius={56}
              glowIntensity={2}
              coneSpread={37}
              colors={['#c084fc', '#f472b6', '#38bdf8']}
            >
              <div style={{ padding: '1.5em', animation: 'cardFadeIn 0.8s ease-out 0.4s both', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                <h3 style={{ fontSize: '44px', fontWeight: 'bold', color: '#ffffff', marginBottom: '12px', margin: 0 }}>View Our Archives</h3>
                <p style={{ fontSize: '20px', color: '#cccccc', lineHeight: '1.5', margin: '0.5em 0 0 0' }}>
                  Overview of reports and demos
                  <br/>
                  <a href="https://drive.google.com" target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: '500' }}>View →</a>
                </p>
              </div>
            </BorderGlow>

            {/* Card 5 */}
            <BorderGlow
              edgeSensitivity={53}
              glowColor="40 80 80"
              backgroundColor="#0a0015"
              borderRadius={28}
              glowRadius={56}
              glowIntensity={2}
              coneSpread={37}
              colors={['#c084fc', '#f472b6', '#38bdf8']}
            >
              <div style={{ padding: '1.5em', animation: 'cardFadeIn 0.8s ease-out 0.5s both', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#ffffff', marginBottom: '12px', margin: 0 }}>Advanced Technology</h3>
                <div style={{ fontSize: '16px', color: '#cccccc', lineHeight: '1.4', margin: '0.5em 0 0 0', flexGrow: 1 }}>
                  <p style={{ margin: '0 0 4px 0' }}>• Arduino Mega</p>
                  <p style={{ margin: '4px 0' }}>• Flame Sensors</p>
                  <p style={{ margin: '4px 0' }}>• Emulsification</p>
                  <p style={{ margin: '4px 0 0 0' }}>• AI & IoT</p>
                </div>
              </div>
            </BorderGlow>

            {/* Card 6 */}
            <BorderGlow
              edgeSensitivity={53}
              glowColor="40 80 80"
              backgroundColor="#0a0015"
              borderRadius={28}
              glowRadius={56}
              glowIntensity={2}
              coneSpread={37}
              colors={['#c084fc', '#f472b6', '#38bdf8']}
            >
              <div style={{ padding: '1.5em', animation: 'cardFadeIn 0.8s ease-out 0.6s both', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#ffffff', marginBottom: '12px', margin: 0 }}>Future Prospects</h3>
                <div style={{ fontSize: '16px', color: '#cccccc', lineHeight: '1.4', margin: '0.5em 0 0 0', flexGrow: 1 }}>
                  <p style={{ margin: '0 0 4px 0' }}>• Smart vehicle integration</p>
                  <p style={{ margin: '4px 0' }}>• Industrial safety</p>
                  <p style={{ margin: '4px 0' }}>• Better emulsifiers</p>
                  <p style={{ margin: '4px 0' }}>• Cost optimization</p>
                </div>
              </div>
            </BorderGlow>
          </div>
        </div>
      </div>

      {/* Fatalities Counter Section */}
      <FatalitiesCounter />

      {/* Services Section with Spotlight Cards */}
      <div id="services">
        <ServicesSection />
      </div>

      {/* Team Section with Profile Cards */}
      <TeamSection />

      {/* Footer */}
      <footer style={{
        backgroundColor: '#000000',
        borderTop: '2px solid #333333',
        padding: '40px 20px',
        textAlign: 'center',
        marginTop: '80px',
        position: 'relative',
        zIndex: 10
      }}>
        <p style={{
          fontSize: '16px',
          fontWeight: '500',
          color: '#ffffff',
          margin: '0',
          paddingBottom: '10px'
        }}>
          © SafeNex. All rights reserved 2026.
        </p>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
