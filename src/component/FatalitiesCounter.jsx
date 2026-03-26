import { useState, useEffect } from 'react';
import Counter from './Counter';

export default function FatalitiesCounter() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    // Set up interval to increment at 30-second (30000ms) intervals
    const interval = setInterval(() => {
      setValue(prevValue => {
        // Random increment between 1 and 15
        const randomIncrement = Math.floor(Math.random() * 15) + 1;
        const newValue = prevValue + randomIncrement;
        
        // Keep within bounds (0-999)
        return Math.min(newValue, 999);
      });
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Set up interval to reset counter every 5 minutes
    const resetInterval = setInterval(() => {
      setValue(0);
    }, 300000); // 5 minutes

    return () => clearInterval(resetInterval);
  }, []);

  return (
    <div style={{
      padding: '80px 40px',
      backgroundColor: '#000000',
      position: 'relative',
      zIndex: 1,
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          color: '#ffffff',
          textAlign: 'center',
          marginBottom: '40px',
          letterSpacing: '1px'
        }}>
          Fatalities Worldwide Due to Fuel Tank Explosion and Fire
        </h2>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          flexWrap: 'wrap'
        }}>
          <Counter
            value={value}
            places={[100, 10, 1]}
            fontSize={80}
            padding={5}
            gap={30}
            textColor="white"
            fontWeight={900}
            digitPlaceHolders={false}
          />
        </div>

        <p style={{
          fontSize: '16px',
          color: '#cccccc',
          marginTop: '30px',
          fontStyle: 'italic',
          opacity: 0.8
        }}>
          This counter updates every 5 minutes to reflect estimated fatalities due to fuel tank explosions and fires worldwide.
        </p>
      </div>
    </div>
  );
}
