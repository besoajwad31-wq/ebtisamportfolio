import { useState, type ImgHTMLAttributes } from "react";
import { ImageOff } from "lucide-react";

/** Image that shows a calm placeholder instead of a broken icon if the file is missing. */
export function SafeImage({ className = "", alt, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const [failed, setFailed] = useState(false);
  if (failed || !props.src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`bg-blueprint flex items-center justify-center bg-card text-muted-foreground ${className}`}
      >
        <ImageOff className="h-6 w-6 opacity-60" aria-hidden="true" />
      </div>
    );
  }
  return <img {...props} alt={alt} className={className} onError={() => setFailed(true)} decoding="async" />;
}
