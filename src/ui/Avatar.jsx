// file: src/ui/Avatar.jsx
import Image from "next/image";

function Avatar({ src, width = 24, height = 24, alt = "User avatar", className = "" }) {
  // ensure we always pass numeric width/height when available
  return (
    <Image
      src={src || "/images/avatar.png"}
      width={width}
      height={height}
      className={["rounded-full ring-1 ring-secondary-300 ml-2", className].join(" ")}
      alt={alt}
    />
  );
}

export default Avatar;
