import Image from "next/image";
import { memo } from "react";
import { BRAND_LOGO } from "@/lib/assets";

type BrandLogoProps = {
  priority?: boolean;
  className?: string;
};

function BrandLogoComponent({ priority = false, className = "" }: BrandLogoProps) {
  return (
    <Image
      src={BRAND_LOGO}
      alt="AVENX"
      width={120}
      height={36}
      className={`h-auto max-h-9 w-auto object-contain ${className}`}
      priority={priority}
    />
  );
}

export const BrandLogo = memo(BrandLogoComponent);
