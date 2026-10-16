import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import type { PhotoSlot } from "@/content/site";

type Props = {
  slot: PhotoSlot;
  className?: string;
  style?: CSSProperties;
  sizes: string;
  priority?: boolean;
  children?: ReactNode;
};

/** Foto real quando `slot.src` existe; senão, o placeholder listrado do design. */
export function Photo({ slot, className = "", style, sizes, priority, children }: Props) {
  return (
    <div className={`photo ${slot.src ? "has-img" : ""} ${className}`} style={style} data-reveal>
      {slot.src ? (
        <Image
          src={slot.src}
          alt={slot.alt}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectFit: "cover", objectPosition: slot.position ?? "center" }}
        />
      ) : (
        <span className="photo-label" role="img" aria-label={slot.alt}>
          {slot.label}
        </span>
      )}
      {children}
    </div>
  );
}
