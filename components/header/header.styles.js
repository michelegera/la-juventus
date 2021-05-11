import styled from "styled-components";

import J from "./logo.svg";

export const Container = styled.header`
  background: #000;
  color: #fff;
  text-align: center;
  padding: 1rem 0;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

export const Logo = styled(J)`
  width: 48px;
`;
