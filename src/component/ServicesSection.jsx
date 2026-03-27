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
            fontSize: '56px',
            fontWeight: 'bold',
            color: '#ffffff',
            marginBottom: '20px',
            letterSpacing: '1px'
          }}>
            How SafeNex Protects Lives
          </h2>
          <p style={{
            fontSize: '22px',
            color: '#cccccc',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Safenex combines simple sensors, microcontroller logic and fluid mechanics to stop fires before they start. Below are the core services the system delivers when a crash occurs.
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
                How SafeNex Works
              </h3>
              <p style={{
                fontSize: '18px',
                color: '#cccccc',
                lineHeight: '1.6',
                flexGrow: 1,
                marginTop: '16px'
              }}>
                SafeNex combines advanced flame detection sensors with microcontroller logic to identify fires instantly. When an accident occurs and fire is detected, the system automatically triggers a specialized pump that releases an emulsifying fluid into the fuel tank. An agitation motor then mixes this solution to reduce flammability and prevent fire propagation. This innovative approach uses the science of emulsification to isolate oil droplets, making fuel inherently safer and protecting both the vehicle and passengers from post-accident fires and explosions.
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
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '16px',
                margin: 0
              }}>
                Decision & Trigger
              </h3>
              <p style={{
                fontSize: '18px',
                color: '#cccccc',
                lineHeight: '1.6',
                flexGrow: 1,
                marginTop: '12px'
              }}>
                The microcontroller activates a specialized pump that releases emulsifying fluid into the fuel tank. An agitation motor then mixes the solution to reduce flammability and prevent fire propagation.
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
                fontSize: '26px',
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '12px',
                margin: 0
              }}>
                Alert & Logging
              </h3>
              <p style={{
                fontSize: '18px',
                color: '#cccccc',
                lineHeight: '1.6',
                flexGrow: 1,
                marginTop: '12px'
              }}>
                Instant notifications alert drivers and emergency services when fire is detected, enabling rapid response and safe evacuation.
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
                fontSize: '26px',
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '12px',
                margin: 0
              }}>
                System Features
              </h3>
              <p style={{
                fontSize: '18px',
                color: '#cccccc',
                lineHeight: '1.6',
                flexGrow: 1,
                marginTop: '12px'
              }}>
                Automated detection, intelligent fluid dispersion, continuous monitoring, and real-time alert system for comprehensive protection.
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
                fontSize: '26px',
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '12px',
                margin: 0
              }}>
                Technical Specs
              </h3>
              <p style={{
                fontSize: '18px',
                color: '#cccccc',
                lineHeight: '1.6',
                flexGrow: 1,
                marginTop: '12px'
              }}>
                Precision sensors, microcontroller logic, high-capacity fluid pump, and advanced agitation motor for maximum reliability.
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
                fontSize: '26px',
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '12px',
                margin: 0
              }}>
                Integration
              </h3>
              <p style={{
                fontSize: '18px',
                color: '#cccccc',
                lineHeight: '1.6',
                flexGrow: 1,
                marginTop: '12px'
              }}>
                Seamlessly integrated with existing vehicle systems for automatic activation and zero manual intervention required.
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
                Our Vision
              </h3>
              <p style={{
                fontSize: '18px',
                color: '#cccccc',
                lineHeight: '1.8',
                fontStyle: 'italic',
                flexGrow: 1,
                marginTop: '12px'
              }}>
                To revolutionize vehicle safety by delivering an intelligent, autonomous fire suppression system that protects lives and property in the critical moments following an accident.
              </p>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
}
