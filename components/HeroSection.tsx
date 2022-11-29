import ParticleImage from "./ParticleImage";
import useTranslation from "next-translate/useTranslation";

const HeroSection = () => {
  const { t, lang } = useTranslation();

  return (
    <div className="px-2 w-full relative h-full" id='hero'>
      <div className="h-full flex flex-col relative pt-10 gap-2">
        <h1>Agustín<br/>Spaccesi</h1>
        <h2 className="uppercase">{t('common:sub-title')}</h2>
        <p className=" absolute bottom-[30%]">Changing sport management in <br />football clubs at Clunnity <br />at the momment</p>
        <h2 className="uppercase absolute bottom-2">{t('common:based-in')}</h2>
      </div>
      <div className="absolute top-0 right-0 z-0 h-full">
        <ParticleImage />
      </div>
    </div>
  );
}

export default HeroSection;