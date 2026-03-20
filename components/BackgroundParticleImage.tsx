import ParticleImage, { forces, ParticleOptions } from 'react-particle-image';
import { useWindowSize } from '@/hooks/useWindowSize';

const PARTICLE_CONFIG = {
  SCALE_DIVISOR: 230,
  MIN_SCALE: 3,
  ENTROPY: 15,
  MAX_PARTICLES: 4200,
  MAGNITUDE_THRESHOLD: 10,
  COLOR_STEP: 30,
  MASS: 40,
  FRICTION: 0.15,
  MOTION_FORCE_RADIUS: 40,
  TOUCH_FORCE_RADIUS: 45,
} as const;

const BackgroundParticleImage = () => {
  const { width, height } = useWindowSize();

  const round = (n: number, step = 20) => Math.ceil(n / step) * step;

  const scale = Math.max(
    height / PARTICLE_CONFIG.SCALE_DIVISOR,
    PARTICLE_CONFIG.MIN_SCALE
  );

  const particleOptions: ParticleOptions = {
    filter: ({ x, y, image }) => {
      const pixel = image.get(x, y);
      const magnitude = (pixel.r + pixel.g + pixel.b) / 3;
      return magnitude > PARTICLE_CONFIG.MAGNITUDE_THRESHOLD;
    },
    color: ({ x, y, image }) => {
      const pixel = image.get(x, y);
      return `rgba(
        ${round(pixel.r, PARTICLE_CONFIG.COLOR_STEP)},
        ${round(pixel.g, PARTICLE_CONFIG.COLOR_STEP)},
        ${round(pixel.b, PARTICLE_CONFIG.COLOR_STEP)},
        ${round(pixel.a, PARTICLE_CONFIG.COLOR_STEP) / 255}
      )`;
    },
    radius: ({ x, y, image }) => {
      const pixel = image.get(x, y);
      const magnitude = (pixel.r + pixel.g + pixel.b) / 3;
      return scale - ((255 - magnitude) / 255) * 1.5;
    },
    mass: () => PARTICLE_CONFIG.MASS,
    friction: () => PARTICLE_CONFIG.FRICTION,
  };

  const motionForce = (x: number, y: number) =>
    forces.disturbance(x, y, PARTICLE_CONFIG.MOTION_FORCE_RADIUS);

  const touchForce = (x: number, y: number) =>
    forces.disturbance(x, y, PARTICLE_CONFIG.TOUCH_FORCE_RADIUS);

  return (
    <div className='flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-50 pointer-events-auto h-screen bg-[#f9f9f9] text-[#1b1b1b] tracking-wide dark:bg-black dark:text-gray-100'>
      <ParticleImage
        src='/foto.png'
        scale={scale}
        width={width}
        height={height}
        entropy={PARTICLE_CONFIG.ENTROPY}
        maxParticles={PARTICLE_CONFIG.MAX_PARTICLES}
        particleOptions={particleOptions}
        mouseMoveForce={motionForce}
        touchMoveForce={touchForce}
        backgroundColor='rgba(0,0,0,0)'
      />
    </div>
  );
};

export default BackgroundParticleImage;