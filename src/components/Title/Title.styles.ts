import styled from "styled-components";

export const Container = styled.div`
  display: inline-flex;
  padding-top: 10px;
  width: 100%;
  height: 15px;
  font-size: 8px;
`;

export const Link = styled.a<{ large?: boolean }>`
  ${props =>
    props.large
      ? "font-size: 12px; padding-right: 3px;"
      : "font-size: 10px; padding-left: 2px"};
`;

export const Span = styled.span`
  max-width: 60px;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
  overflow: hidden;
  font-size: 10px;
`;
