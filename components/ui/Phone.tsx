import Image from "next/image";
import { memo } from "react";

type PhoneProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

/** Capture d'écran de l'app dans un simple cadre de téléphone (pas de rotation ni de halo). */
function PhoneComponent({ src, alt, priority = false }: PhoneProps) {
  return (
    <div className="phone">
      <Image
        src={src}
        alt={alt}
        width={888}
        height={1771}
        sizes="(max-width: 760px) 60vw, 260px"
        priority={priority}
      />
    </div>
  );
}

export const Phone = memo(PhoneComponent);
