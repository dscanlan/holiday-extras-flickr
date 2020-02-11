import React, { FC } from "react";
import { Container, Link, Span } from "./Title.styles";
import { TitleProps } from "./Title.interface";

const Title: FC<TitleProps> = ({ link, author_id, author, title }) => {
  const trimmedAuthor = author
    .replace('nobody@flickr.com ("', "")
    .replace('")', "");

  return (
    <Container>
      <Link large href={link}>
        <Span>{title}</Span>
      </Link>{" "}
      <Span>by</Span>
      <Link href={`https://www.flickr.com/photos/${author_id}`}>
        <Span>{trimmedAuthor}</Span>
      </Link>
    </Container>
  );
};

export default Title;
