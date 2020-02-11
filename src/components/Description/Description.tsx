import React, { FC } from "react";
import { Container } from "./Description.styles";
import { DescriptionProps } from "./Description.interface";

const Description: FC<DescriptionProps> = ({ text }) => {
  return (
    <Container dangerouslySetInnerHTML={{ __html: text || "" }}></Container>
  );
};

export default Description;
