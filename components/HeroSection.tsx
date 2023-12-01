import useTranslation from "next-translate/useTranslation";
import SocialIcons from "./SocialIcons";
import Image from 'next/image'



const HeroSection = () => {

  const { t, lang } = useTranslation();

  return (
    <div className='flex gap-8 pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:bg-black/40' id='hero'>
      {/* Left column */}
      <div className="w-min h-min">
        <div className="columns-2 flex gap-4 items-center">
          <h2 className="uppercase w-min">{t('common:sub-title')}</h2>
          <p className="lined-text uppercase">CODE</p>
        </div>
          <h1 className="font-archivoBlank">{t('common:name')}</h1>
          <h2 className="uppercase text-center">{t('common:at-the-moment')}</h2>
      </div>
      {/* Right column */}
      <div className="w-min h-min hidden md:max-2xl:block">
        <div className="flex columns-3 justify-center gap-2 items-center">
          <div className="flex-col">
          <Image
            src="/assets/arrow.svg"
            className="dark:invert"
            alt="My SVG"
            width={70}
            height={70}
          />
          </div>
          <div className="flex-col">
            <h3 className="archivoBlack">UTC*</h3>
            <h3>[+1H]</h3>
          </div>
          <div className="flex-col">
            <p className="lined-text">{t('common:based-in')}</p>
          </div>
        </div>
        <h1 className="font-archivoBlack">{t('common:lastName')}</h1>
        <div className="flex flex-row-reverse">
          <SocialIcons />
        </div>
        <div className="flex flex-row-reverse">
          <p className="text-4xl md:text-2xl lg:text-4xl xl:max-2xl:text-5xl pt-3">****</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;