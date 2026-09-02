import Image from "next/image";
import markSrc from "@/public/brand/mark-transparent.png";

export function LogoMark({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image src={markSrc} alt="VibeScript" priority={priority} className={`object-contain ${className ?? ""}`} />
  );
}
