import React, { FC, Suspense } from "react";
import { Container, Img } from "./Image.styles";
import { ImageProps } from "./Image.interface";
import logo from "../../logo.svg";

const Image: FC<ImageProps> = ({ url, title }) => {
  return (
    <Container>
      <Suspense fallback={<img src={logo} alt={title} />}>
        <Img src={url} alt={title} />
      </Suspense>
    </Container>
  );
};

export default Image;
