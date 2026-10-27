import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import type { ProjectImage } from "@/content/projects";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { SafeImage } from "./SafeImage";

/** Gallery figure that opens a full-screen view when tapped. */
export function GalleryFigure({ image, index }: { image: ProjectImage; index: number }) {
  const { t } = useI18n();
  return (
    <Dialog.Root>
      <figure className="reveal group">
        <Dialog.Trigger asChild>
          <button
            type="button"
            className="tech-frame block w-full overflow-hidden border border-border bg-card"
            aria-label={t.gallery.enlarge(image.caption)}
          >
            <SafeImage
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="aspect-[4/3] h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
            />
          </button>
        </Dialog.Trigger>
        <figcaption className="mt-3 flex gap-3 text-sm text-muted-foreground">
          <span className="label-mono shrink-0 pt-0.5 text-primary">
            {String(index + 1).padStart(2, "0")}
          </span>
          {image.caption}
        </figcaption>
      </figure>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed inset-0 z-[70] flex flex-col items-center justify-center p-4 outline-none md:p-10">
          <Dialog.Title className="sr-only">{image.caption}</Dialog.Title>
          <Dialog.Description className="sr-only">{image.alt}</Dialog.Description>
          <Dialog.Close
            className="absolute end-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-border-strong text-foreground hover:border-primary hover:text-primary"
            aria-label={t.gallery.close}
          >
            <X className="h-5 w-5" />
          </Dialog.Close>
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-[80vh] w-auto max-w-full border border-border object-contain"
          />
          <p className="label-mono mt-5 max-w-xl text-center text-muted-foreground">{image.caption}</p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
