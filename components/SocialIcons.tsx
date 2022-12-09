import { SiLinkedin, SiInstagram, SiWhatsapp, SiGithub } from "react-icons/si";
import {HiMail} from 'react-icons/hi'
import Link from "next/link";

const SocialIcons = () => {
  return (
    <div className='grid-rows-1 grid-flow-col flex gap-8 justify-start'>
      <Link href={`https://www.linkedin.com/in/${process.env.LINKEDIN}/`} className="hover:scale-110">
        <SiLinkedin size={24}/>
      </Link>
      <Link href={`https://github.com/${process.env.GITHUB}/`} className="hover:scale-110">
        <SiGithub size={24}/>
      </Link>
      <Link href={`https://wa.me/${process.env.WHATSAPP}/`} className="hover:scale-110">
        <SiWhatsapp size={24}/>
      </Link>
      <Link href={`mailto:${process.env.EMAIL}`} className="hover:scale-110">
        <HiMail size={24}/>
      </Link>
    </div>
  );
}

export default SocialIcons;