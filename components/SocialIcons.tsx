import { SiLinkedin, SiInstagram, SiWhatsapp, SiGithub } from "react-icons/si";
import {HiMail} from 'react-icons/hi'
import Link from "next/link";

const SocialIcons = () => {
  return (
    <div className='grid-rows-1 grid-flow-col flex gap-8 justify-start'>
      <Link href={'https://www.linkedin.com/in/agustinspaccesi/'}>
        <SiLinkedin size={24}/>
      </Link>
      <Link href={'https://github.com/Spaccesi'}>
        <SiGithub size={24}/>
      </Link>
      <Link href={'https://wa.me/34695496544'}>
        <SiWhatsapp size={24}/>
      </Link>
      <Link href={'mailto:agustin@spaccesi.com'}>
        <HiMail size={24}/>
      </Link>
    </div>
  );
}

export default SocialIcons;