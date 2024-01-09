import type { ElementType, Ref } from "react";

export interface Props {
  src?: any; // for static media
  alt?: string;
  resource?: any; // for Payload media
  size?: string; // for NextImage only
  priority?: boolean; // for NextImage only
  fill?: boolean; // for NextImage only
  className?: string;
  imgClassName?: string;
  videoClassName?: string;
  htmlElement?: ElementType | null;
  onClick?: () => void;
  onLoad?: () => void;
  ref?: Ref<null | HTMLImageElement | HTMLVideoElement>;
}
