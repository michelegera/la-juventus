import styled from "styled-components";

export const Container = styled.footer`
  background: #000;
  text-align: center;
  padding: 1rem;
  font-size: 0.875rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

export const Disclaimer = styled.p`
  color: #999;
`;

export const Sponsor = styled.a`
  background: transparent;
  border: 1px solid #ff2850;
  color: #ff2850;
  padding: 0.5rem 1rem;
  display: inline-block;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover {
    background: #ff2850;
    color: #000;
    transition: all 250ms ease-in-out;
  }
`;

export const Hashtag = styled.p`
  color: #fff;
`;
