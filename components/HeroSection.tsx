import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import SocialIcons from './SocialIcons';

const HeroSection = () => {
  const { t } = useTranslation('common');

  return (
    <div className='flex gap-8 pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/40 dark:bg-black/40 w-min h-min' id='hero'>
      <div className='w-min h-min'>
        <div className='columns-2 flex gap-4 items-center'>
          <h2 className='uppercase w-min'>{t('sub-title')}</h2>
          <p className='lined-text uppercase'>{t('top-title')}</p>
        </div>
        <h1 className='font-archivoBlank'>{t('name')}</h1>
        <h2 className='uppercase text-center'>{t('at-the-moment')}</h2>
      </div>

      <div className='w-min h-min hidden md:block'>
        <div className='flex columns-3 justify-center gap-2 items-center'>
          <div className='flex-col relative aspect-square h-10 lg:h-14'>
            <Image
              src='/assets/arrow.svg'
              alt='Location indicator'
              fill
              className='dark:invert h-10 w-10'
            />
          </div>
          <div className='flex-col'>
            <h3 className='archivoBlack'>UTC*</h3>
            <h3>[+1H]</h3>
          </div>
          <div className='flex-col'>
            <p className='lined-text'>{t('based-in')}</p>
          </div>
        </div>
        <h1 className='font-archivoBlack'>{t('lastName')}</h1>
        <div className='flex flex-row-reverse'>
          <SocialIcons />
        </div>
        <div className='flex flex-row-reverse'>
          <p className='text-4xl md:text-2xl lg:text-4xl xl:max-2xl:text-5xl pt-3'>****</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;