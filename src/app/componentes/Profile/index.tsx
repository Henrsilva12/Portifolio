import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./styles.css";

const ProfileImage = ({ src, alt, width, height }) => {
  return (
    <div className="profileWrapper">
      <div className="profileImageContainer">
        <Image src={src} alt={alt} width={width} height={height} />
      </div>
      <div className="socialIcons">
        <a
          href="https://github.com/seu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://linkedin.com/in/seu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
    </div>
  );
};

export default ProfileImage;
