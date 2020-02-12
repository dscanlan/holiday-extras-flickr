import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 40px;
  background-color: #f2f4f6;
  position: fixed;
  top: 0px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dcdfe4;
  box-shadow: 0px 2px 4px rgb(34, 45, 56, 0.1);
`;

export const Input = styled.input`
  width: 200px;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 3px;
  border: 0px;
  border-radius: 4px;
  font-weight: 400;
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  :focus {
    outline: none;
  }
`;
export const Label = styled.label``;
