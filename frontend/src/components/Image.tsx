import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Aspect-locked, lazy-loaded image. Pass `webp` to serve a modern source
 *  with the `src` as fallback. The wrapper reserves space via aspect-ratio so
 *  layout never shifts while the image streams in. */
export function Image({
  src,
  webp,
  alt,
  aspect = "16/9",
  eager = false,
  className,
  imgClassName,
}: {
  src: string;
  webp?: string;
  alt: string;
  /** CSS aspect-ratio, e.g. "16/9", "4/3", "1/1" */
  aspect?: string;
  /** opt out of lazy loading for above-the-fold media */
  eager?: boolean;
  className?: string;
  imgClassName?: string;
}) {
  const img = (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      draggable={false}
      className={cn("h-full w-full object-cover", imgClassName)}
    />
  );
  return (
    <div className={cn("overflow-hidden", className)} style={{ aspectRatio: aspect }}>
      {webp ? (
        <picture>
          <source srcSet={webp} type="image/webp" />
          {img}
        </picture>
      ) : (
        img
      )}
    </div>
  );
}

/** Surface-1 framed panel for media — the Linear "screenshot in a dark frame"
 *  pattern: hairline border, surface lift, rounded-xl, inner padding. Drop an
 *  <Image/> (or any visual) inside. */
export function MediaFrame({
  children,
  className,
  caption,
}: {
  children: ReactNode;
  className?: string;
  caption?: string;
}) {
  return (
    <figure className={cn("rounded-xl border border-hairline bg-surface p-2 md:p-3", className)}>
      <div className="overflow-hidden rounded-lg">{children}</div>
      {caption && (
        <figcaption className="px-2 pt-2 text-center text-xs text-subtle">{caption}</figcaption>
      )}
    </figure>
  );
}
