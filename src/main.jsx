import React from 'react';
import ReactDOM from 'react-dom/client';
import BorderGlow from './component/BorderGlow';
import Navbar from './component/Navbar';
import FatalitiesCounter from './component/FatalitiesCounter';
import ServicesSection from './component/ServicesSection';
import './style.css';

function App() {
  return (
    <div style={{ backgroundColor: '#000000' }}>
      {/* Hero Section - Fixed viewport */}
      <div id="hero" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0, backgroundColor: '#000000' }}>
        <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
          {/* Animated Background Orbs */}
          <div style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(200, 132, 252, 0.3), transparent)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            animation: 'floatOrb1 8s ease-in-out infinite',
            top: '-20%',
            left: '-10%',
            pointerEvents: 'none'
          }} />
          <div style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(100, 200, 255, 0.2), transparent)',
            borderRadius: '50%',
            filter: 'blur(70px)',
            animation: 'floatOrb2 10s ease-in-out infinite',
            bottom: '-10%',
            right: '-5%',
            pointerEvents: 'none'
          }} />
          <div style={{
            position: 'absolute',
            width: '350px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(200, 150, 255, 0.25), transparent)',
            borderRadius: '50%',
            filter: 'blur(75px)',
            animation: 'floatOrb3 12s ease-in-out infinite',
            top: '30%',
            right: '5%',
            pointerEvents: 'none'
          }} />
        </div>
        
        {/* Center Content - Stays in place */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: 10,
          width: '90%',
          maxWidth: '800px',
          pointerEvents: 'none'
        }}>
          <h1 style={{
            fontSize: '72px',
            fontWeight: 'bold',
            color: '#ffffff',
            margin: '0 0 24px 0',
            letterSpacing: '2px'
          }}>SafeNex</h1>
          
          <p style={{
            fontSize: '18px',
            color: '#ffffff',
            margin: '0',
            lineHeight: '1.6',
            fontWeight: '300',
            opacity: 0.9
          }}>
            To reduce post-accident fatalities and property loss by providing an automatic, low-cost solution that prevents fuel tank fires through smart emulsification.
          </p>
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
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
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
              <div style={{ padding: '2em', animation: 'cardFadeIn 0.8s ease-out 0.1s both' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#ffffff', marginBottom: '16px' }}>What is Emulsification...?</h3>
                <p style={{ fontSize: '14px', color: '#cccccc', lineHeight: '1.6', margin: '0' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
              <div style={{ padding: '2em', animation: 'cardFadeIn 0.8s ease-out 0.2s both' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#ffffff', marginBottom: '16px' }}>Saponification</h3>
                <p style={{ fontSize: '14px', color: '#cccccc', lineHeight: '1.6', margin: '0' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
              <div style={{ padding: '2em', animation: 'cardFadeIn 0.8s ease-out 0.3s both' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#ffffff', marginBottom: '16px' }}>Working Equations</h3>
                <p style={{ fontSize: '14px', color: '#cccccc', lineHeight: '1.6', margin: '0' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
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
              <div style={{ padding: '2em', animation: 'cardFadeIn 0.8s ease-out 0.4s both' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#ffffff', marginBottom: '16px' }}>View our Archives</h3>
                <p style={{ fontSize: '14px', color: '#cccccc', lineHeight: '1.6', margin: '0' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/><br/>
                  <a href="#" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: '500' }}>View it here →</a>
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
              <div style={{ padding: '2em', animation: 'cardFadeIn 0.8s ease-out 0.5s both' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#ffffff', marginBottom: '16px' }}>Advanced Technology</h3>
                <p style={{ fontSize: '14px', color: '#cccccc', lineHeight: '1.6', margin: '0' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                </p>
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
              <div style={{ padding: '2em', animation: 'cardFadeIn 0.8s ease-out 0.6s both' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#ffffff', marginBottom: '16px' }}>Future Prospects</h3>
                <p style={{ fontSize: '14px', color: '#cccccc', lineHeight: '1.6', margin: '0' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                </p>
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

      {/* Contact Section */}
      <div id="contact" style={{ padding: '80px 40px', backgroundColor: '#000000', position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', color: '#ffffff', marginBottom: '20px', letterSpacing: '1px' }}>Get in Touch</h2>
          <p style={{ fontSize: '18px', color: '#cccccc', lineHeight: '1.6' }}>Contact us for more information about SafeNex and how we can help protect lives.</p>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
