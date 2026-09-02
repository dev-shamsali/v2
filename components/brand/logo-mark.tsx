import Image from "next/image";

/**
 * Navbar/footer icon mark: the maroon &amp; gold VS mark, cropped transparent
 * from the brand lockup. Works on both the beige and dark canvas.
 */
export function LogoMark({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/brand/vs-icon.png"
      alt="VibeScript"
      width={432}
      height={236}
      priority={priority}
      className={`object-contain ${className ?? ""}`}
    />
  );
}
