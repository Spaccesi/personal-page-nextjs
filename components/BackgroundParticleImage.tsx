import ParticleImage, { forces, ParticleOptions } from "react-particle-image";
import useTranslation from "next-translate/useTranslation";
import useWindowSize from "../lib/UseWindowSize";



const BackgroundParticleImage = () => {

  const { t, lang } = useTranslation();

  const round = (n: number, step = 20) => Math.ceil(n / step) * step;

  const size = useWindowSize();

  const options = {
    scale: size.height / 230 > 3 ? size.height / 230 : 3,
    width: size.width,
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

  const motionForce = (x: number, y: number) => {
    return forces.disturbance(x, y, 40)
  }

  const clinkForce = (x: number, y: number) => {
    return forces.disturbance(x, y, 45)
  }

  return (
    <div className="flex absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 -z-50 pointer-events-auto h-screen">
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
  );
}

export default BackgroundParticleImage;