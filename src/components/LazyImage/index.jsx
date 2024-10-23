import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function LazyImage({ src, alt, placeholder, ...props }) {
  return (
    <LazyLoadImage
      src={src}
      alt={alt || "image"}
      effect="blur"
      placeholderSrc={placeholder}
      {...props}
    />
  );
}
