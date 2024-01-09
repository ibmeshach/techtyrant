import React from "react";

import { Button, Props as ButtonProps } from "../Button";
import { Link } from "react-router-dom";

type CMSLinkType = {
  type?: any;
  url?: any;
  newTab?: boolean;
  reference?: {
    value: any;
  };
  label?: string;
  appearance?: any;
  children?: React.ReactNode;
  className?: string;
  invert?: ButtonProps["invert"];
};

export const CMSLink: React.FC<CMSLinkType> = ({
  type,
  url,
  newTab,
  reference,
  label,
  appearance,
  children,
  className,
  invert,
}) => {
  const href = type === "reference" ? reference?.value : url;

  if (!href) return null;

  if (!appearance) {
    const newTabProps = newTab
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

    if (href || url) {
      return (
        <Link {...newTabProps} to={href || url} className={className}>
          {label && label}
          {children && children}
        </Link>
      );
    }
  }

  return (
    <Button
      className={className}
      newTab={newTab}
      href={href}
      appearance={appearance}
      label={label}
      invert={invert}
    />
  );
};
