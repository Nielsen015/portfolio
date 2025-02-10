import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Nielsen015" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/moses-nielsen/",
  },
  { icon: <FaXTwitter />, path: "https://x.com/moses_nielsen" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/nielsen.moses/" },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
