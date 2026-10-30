import Image from "next/image";
import { memo } from "react";
import { BRAND_LOGO } from "@/lib/assets";

type BrandLogoProps = {
  priority?: boolean;
};

function BrandLogoComponent({ priority = false }: BrandLogoProps) {
  return (
    <a className="brand" href="#top" aria-label="AVENX, retour en haut">
      <Image src={BRAND_LOGO} alt="" width={34} height={34} priority={priority} />
      AVENX
    </a>
  );
}

export const BrandLogo = memo(BrandLogoComponent);
