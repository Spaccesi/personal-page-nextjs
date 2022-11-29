import useTranslation from 'next-translate/useTranslation'

const ExperienceSection = () => {

  const { t, lang } = useTranslation('common');

  const experience = [
    {
      title: t('title'),
      year: '2021',
      description: 'Clunnity'
    }
  ]

  return (
    <div id='experience' className="w-full h-screen items-center justify-center flex">
      {experience.map((link, idx) => (
        <h1 key={idx}>{link.title}</h1>
      ))}
    </div>
  );
}

export default ExperienceSection;