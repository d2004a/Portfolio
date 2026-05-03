import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, PresentationControls, ContactShadows, Text, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ position, rotation, scale, color, geometry }) => {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x += 0.002;
    meshRef.current.rotation.y += 0.003;
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2} position={position}>
      <mesh ref={meshRef} scale={scale} rotation={rotation} castShadow>
        <primitive object={geometry} attach="geometry" />
        <MeshTransmissionMaterial 
          backside 
          thickness={0.5} 
          roughness={0.1} 
          transmission={1} 
          ior={1.5} 
          chromaticAberration={0.05} 
          anisotropy={0.1} 
          color={color} 
        />
      </mesh>
    </Float>
  );
};

const Shapes = () => {
  return (
    <group position={[0, 0, 0]}>
      {/* Central big TorusKnot */}
      <FloatingShape 
        geometry={new THREE.TorusKnotGeometry(1, 0.3, 128, 32)} 
        position={[0, 0, 0]} 
        scale={1.2} 
        color="#7c3aed" 
      />
      
      {/* Surrounding smaller shapes */}
      <FloatingShape 
        geometry={new THREE.IcosahedronGeometry(1, 0)} 
        position={[-2.5, 1.5, -1]} 
        scale={0.6} 
        color="#38bdf8" 
      />
      
      <FloatingShape 
        geometry={new THREE.OctahedronGeometry(1, 0)} 
        position={[2, -1.5, 1]} 
        scale={0.5} 
        color="#ec4899" 
      />

      <FloatingShape 
        geometry={new THREE.TetrahedronGeometry(1, 0)} 
        position={[1.5, 2, -2]} 
        scale={0.4} 
        color="#22d3ee" 
      />
      
      <FloatingShape 
        geometry={new THREE.TorusGeometry(1, 0.4, 16, 100)} 
        position={[-1.5, -2, 0.5]} 
        scale={0.5} 
        color="#a855f7" 
      />
    </group>
  );
};

const HeroScene = () => {
  return (
    <div className="w-full h-[600px] absolute inset-0 z-0 pointer-events-none sm:pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#38bdf8" />
        
        <PresentationControls 
          global 
          rotation={[0.13, 0.1, 0]} 
          polar={[-0.4, 0.2]} 
          azimuth={[-1, 0.75]} 
          config={{ mass: 2, tension: 400 }} 
          snap={{ mass: 4, tension: 400 }}
        >
          <Shapes />
        </PresentationControls>

        <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default HeroScene;
