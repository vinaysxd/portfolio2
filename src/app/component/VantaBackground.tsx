'use client'; // Important for client-side rendering in Next.js App Router

import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three'; // Import Three.js
import HALO from 'vanta/dist/vanta.halo.min'; // Import the desired Vanta effect

const VantaBackground = (props: any) => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef(null); // Ref to attach the Vanta effect to

  useEffect(() => {
    // Initialize Vanta effect when the component mounts and if it's not already initialized
    if (!vantaEffect) {
      setVantaEffect(HALO({
        el: vantaRef.current, // Target the ref's current DOM element
        THREE: THREE, // Pass Three.js to Vanta
         
         
      }));
    }

    // Clean up the Vanta effect when the component unmounts
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]); // Re-run effect if vantaEffect changes

  return (
    <div ref={vantaRef} style={{
        width: '100%',
        height: '100vh', 
        position: 'relative',
        backgroundColor: 'transparent', 
      }}>
      {/* This div will be the background for the Vanta animation */}
     <div style={{
          zIndex: 1,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          color: '#fff',
          fontSize: '2rem',
          fontWeight: 'bold',
        }}>
       <span className='text-5xl'>VINAY SOUNDERRAJ<br/> <span className='text-xl'>Frontend Developer | React.js & React Native Specialist</span></span>
       
     </div>
    </div>
  );
};

export default VantaBackground;