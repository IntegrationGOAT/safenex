import SpotlightCard from './SpotlightCard';
import './ServicesSection.css';

export default function ServicesSection() {
  return (
    <div style={{
      padding: '80px 40px',
      backgroundColor: '#000000',
      position: 'relative',
      zIndex: 1
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ marginBottom: '60px', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#ffffff',
            marginBottom: '20px',
            letterSpacing: '1px'
          }}>
            How SafeNex Protects Lives
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#cccccc',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            SafeNex combines simple sensors, microcontroller logic and fluid mechanics to stop fires before they start. Below are the core services the system delivers when a crash occurs.
          </p>
        </div>

        {/* Collage Grid */}
        <div className="services-collage">
          {/* Large card - Impact Detection */}
          <SpotlightCard
            className="card-large card-1"
            spotlightColor="rgba(255, 107, 107, 0.3)"
          >
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '16px',
                margin: 0
              }}>
                Impact Detection
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#cccccc',
                lineHeight: '1.6',
                flexGrow: 1,
                marginTop: '16px'
              }}>
                <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </SpotlightCard>

          {/* Medium card - Decision & Trigger */}
          <SpotlightCard
            className="card-medium card-2"
            spotlightColor="rgba(100, 200, 255, 0.3)"
          >
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '16px',
                margin: 0
              }}>
                Decision & Trigger
              </h3>
              <p style={{
                fontSize: '15px',
                color: '#cccccc',
                lineHeight: '1.6',
                flexGrow: 1,
                marginTop: '12px'
              }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </SpotlightCard>

          {/* Small card - Alert & Logging */}
          <SpotlightCard
            className="card-small card-3"
            spotlightColor="rgba(144, 238, 144, 0.3)"
          >
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '12px',
                margin: 0
              }}>
                Alert & Logging
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#cccccc',
                lineHeight: '1.6',
                flexGrow: 1,
                marginTop: '12px'
              }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.
              </p>
            </div>
          </SpotlightCard>

          {/* Feature list card 1 */}
          <SpotlightCard
            className="card-small card-4"
            spotlightColor="rgba(200, 132, 252, 0.3)"
          >
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '12px',
                margin: 0
              }}>
                System Features
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#cccccc',
                lineHeight: '1.6',
                flexGrow: 1,
                marginTop: '12px'
              }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
            </div>
          </SpotlightCard>

          {/* Feature list card 2 */}
          <SpotlightCard
            className="card-small card-5"
            spotlightColor="rgba(255, 193, 7, 0.3)"
          >
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '12px',
                margin: 0
              }}>
                Technical Specs
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#cccccc',
                lineHeight: '1.6',
                flexGrow: 1,
                marginTop: '12px'
              }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
            </div>
          </SpotlightCard>

          {/* Feature list card 3 */}
          <SpotlightCard
            className="card-small card-6"
            spotlightColor="rgba(76, 175, 80, 0.3)"
          >
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '12px',
                margin: 0
              }}>
                Integration
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#cccccc',
                lineHeight: '1.6',
                flexGrow: 1,
                marginTop: '12px'
              }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
            </div>
          </SpotlightCard>

          {/* Mission / About Card */}
          <SpotlightCard
            className="card-large card-7"
            spotlightColor="rgba(233, 30, 99, 0.3)"
          >
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '20px',
                margin: 0
              }}>
                Our Mission
              </h3>
              <p style={{
                fontSize: '18px',
                color: '#cccccc',
                lineHeight: '1.8',
                fontStyle: 'italic',
                flexGrow: 1,
                marginTop: '12px'
              }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
}
