import React, { FC } from "react";
import { Tag, Container, Title } from "./Tags.styles";
import { TagProps } from "./Tags.interface";

const Tags: FC<TagProps> = ({ tags }) => {
  const tagsArray = tags.split(" ");

  return (
    <Container>
      <Title>Tags:</Title>
      {tagsArray.map(tag => tag && <Tag key={tag}>{tag}</Tag>)}
    </Container>
  );
};

export default Tags;
