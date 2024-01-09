import React from "react";
import classes from "./index.module.scss";

const cssVariables = {
  breakpoints: {
    s: 768,
    m: 1024,
    l: 1440,
  },
  colors: {
    base0: "rgb(255, 255, 255)",
    base100: "rgb(235, 235, 235)",
    base500: "rgb(128, 128, 128)",
    base850: "rgb(34, 34, 34)",
    base1000: "rgb(0, 0, 0)",
    error500: "rgb(255, 111, 118)",
  },
};

const { breakpoints } = cssVariables;

export const Image: React.FC<any> = (props) => {
  console.log("l", "guess");

  const {
    imgClassName,
    onClick,
    onLoad: onLoadFromProps,
    resource,

    fill,
    src: srcFromProps,
    alt: altFromProps,
  } = props;

  const [isLoading, setIsLoading] = React.useState(true);

  let width: number | undefined;
  let height: number | undefined;
  let alt = altFromProps;
  let src: any = srcFromProps || "";

  if (!src && resource && typeof resource !== "string") {
    const {
      width: fullWidth,
      height: fullHeight,
      filename: fullFilename,
      alt: altFromResource,
    } = resource;

    width = fullWidth;
    height = fullHeight;
    alt = altFromResource;

    const filename = fullFilename;

    src = `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${filename}`;
  }

  // NOTE: this is used by the browser to determine which image to download at different screen sizes
  const sizes = Object.entries(breakpoints)
    .map(([, value]) => `(max-width: ${value}px) ${value}px`)
    .join(", ");

  return (
    <img
      className={[isLoading && classes.placeholder, classes.image, imgClassName]
        .filter(Boolean)
        .join(" ")}
      src={resource}
      alt={alt || ""}
      onClick={onClick}
      onLoad={() => {
        setIsLoading(false);
        if (typeof onLoadFromProps === "function") {
          onLoadFromProps();
        }
      }}
      // fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      sizes={sizes}
      // priority={priority}
    />
  );
};
