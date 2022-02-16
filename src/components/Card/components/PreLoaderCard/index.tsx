import React from "react";
import ContentLoader from "react-content-loader";

export default function PreLoaderCard(props) {
  return (
    <ContentLoader
      height={250}
      width={250}
      primaryColor="#d9d9d9"
      secondaryColor="#ecebeb"
      {...props}
    >
      <circle cx="125" cy="85" r="60" />
      <rect x="45" y="155" rx="3" ry="3" width="171" height="8" />
      <rect x="70" y="175" rx="3" ry="3" width="123" height="7" />
    </ContentLoader>
  );
}
