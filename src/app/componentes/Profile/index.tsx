import Image from "next/image";
import "./styles.css";

const ProfileImage = ({ src, alt, width, height }) => {
  return (
    <div className="profileImageContainer">
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default ProfileImage;
