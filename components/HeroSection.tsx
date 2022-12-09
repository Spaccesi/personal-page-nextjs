import ParticleImage, { forces, ParticleOptions } from "react-particle-image";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import SocialIcons from "./SocialIcons";
import useWindowSize from "../lib/UseWindowSize";



const HeroSection = () => {

  const { t, lang } = useTranslation();

  const round = (n: number, step = 20) => Math.ceil(n / step) * step;

  const size = useWindowSize();

  const options = {
    scale: size.height/230 > 3 ? size.height/230 : 3,
    width: size.height/230 > 3 ? size.height : 3*200,
    hight: size.height
  }

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
      return options.scale - ((255 - magnitude) / 255) * 1.5;
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

  return (
    <div className='h-screen w-screen px-2 pb-2 md:pt-36 lg:pt-42 pt-32'>
      <div className="h-full flex flex-col max-w-md relative z-10" id='hero'>
        <h1 className="mb-2 md:mt-10">Agustín Spaccesi</h1>
        <h2 className="uppercase">{t('common:sub-title')}</h2>
        <p className="max-w-xs my-auto font-whatever text-2xl skew-2"><Link href="">{t('common:at-the-moment')}</Link></p>
        <div className="hidden md:flex">
          <SocialIcons />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 z-0">
        <ParticleImage
          src={"/foto.png"}
          scale={options.scale}
          width={options.width}
          height={options.hight}
          entropy={15}
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