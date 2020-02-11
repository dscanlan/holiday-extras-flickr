import React, { FC } from "react";
import { Container, Input, Label } from "./Header.styles";
import { HeaderProps } from "./Header.interface";

const Header: FC<HeaderProps> = ({ onChange, searchString }) => {
  return (
    <Container>
      <Label htmlFor="search">
        <Input
          id="search"
          value={searchString}
          placeholder="search"
          onChange={e => onChange(e.target.value)}
        />
      </Label>
    </Container>
  );
};

export default Header;
