import { SiLinkedin, SiInstagram, SiGithub, SiGmail } from "react-icons/si";
import Link from "next/link";

const SocialIcons = () => {
  return (
    <div className='flex gap-8 w-min pointer-events-auto'>
      {/* <Link href={``} className="hover:scale-110">
        <SiInstagram size={24}/>
      </Link> */}
      <Link href={`mailto:${process.env.EMAIL}`} className="hover:scale-110">
        <SiGmail size={24}/>
      </Link>
      <Link href={`https://github.com/${process.env.GITHUB}/`} className="hover:scale-110">
        <SiGithub size={24}/>
      </Link>
      <Link href={`https://www.linkedin.com/in/${process.env.LINKEDIN}/`} className="hover:scale-110">
        <SiLinkedin size={24}/>
      </Link>
    </div>
  );
}

export default SocialIcons;