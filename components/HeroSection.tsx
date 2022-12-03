import ParticleImage from "./ParticleImage";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

const HeroSection = () => {
  const { t, lang } = useTranslation();

  return (
    <div className="h-full flex flex-col max-w-md" id='hero'>
      <h1 className="mb-2 md:mt-20">Agustín Spaccesi</h1>
      <h2 className="uppercase">{t('common:sub-title')}</h2>
      <p className="uppercase mt-auto max-w-xs"><Link href="">{t('common:at-the-moment')}</Link></p>
      <h2 className="uppercase mt-auto">{t('common:based-in')}</h2>
    </div>
  );
}

export default HeroSection;