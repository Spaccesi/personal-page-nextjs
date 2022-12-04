import ParticleImage, { forces, ParticleOptions } from "react-particle-image";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

const round = (n: number, step = 20) => Math.ceil(n / step) * step;

const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    const magnitude = (pixel.r + pixel.g + pixel.b) / 3;
    return magnitude > 10;
  },
  color: ({ x, y, image }) => {
    const STEP = 30;
    const pixel = image.get(x, y);
    return `rgba(
      ${round(pixel.r, STEP)}, 
      ${round(pixel.g, STEP)}, 
      ${round(pixel.b, STEP)}, 
      ${round(pixel.a, STEP) / 255}
    )`;
  },
  // radius: () => Math.random() * 2 + 2.5,
  radius: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    const magnitude = (pixel.r + pixel.g + pixel.b) / 3;
    // Lighter colors will have smaller radius
    return 3 - ((255 - magnitude) / 255) * 1.5;
  },
  mass: () => 40,
  friction: () => 0.15,
};

const motionForce = (x: number, y:number) => {
  return forces.disturbance(x, y, 40)
}

const clinkForce = (x: number, y:number) => {
  return forces.disturbance(x, y, 45)
}

const HeroSection = () => {
  const { t, lang } = useTranslation();

  return (
    <div className='h-screen w-screen px-2 pb-2 md:pt-36 lg:pt-42 pt-32'>
      <div className="h-full flex flex-col max-w-md relative z-10" id='hero'>
        <h1 className="mb-2 md:mt-20">Agustín Spaccesi</h1>
        <h2 className="uppercase">{t('common:sub-title')}</h2>
        <p className="uppercase mt-auto max-w-xs"><Link href="">{t('common:at-the-moment')}</Link></p>
        <h2 className="uppercase mt-auto">{t('common:based-in')}</h2>
      </div>
      <div className="absolute bottom-0 right-0 z-0">
        <ParticleImage
          src={"/foto.png"}
          scale={3}
          height={650}
          width={800}
          entropy={10}
          maxParticles={4200}
          particleOptions={particleOptions}
          mouseMoveForce={motionForce}
          touchMoveForce={clinkForce}
          backgroundColor={'rgba(0,0,0,0)'}
        />
      </div>
    </div>
    
  );
}

export default HeroSection;