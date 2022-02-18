import { Link } from "react-router-dom";
import styled from "styled-components";
interface propsImg {
  fundo?: string;
}
export const ContainerCard = styled.div<propsImg>`
  text-align: center;
  border-radius: 1.875rem;
  transition: 0.5s;
  cursor: pointer;
  box-sizing: border-box;
  transition: 0ms.3;

  &:hover {
    box-shadow: inset 0 0 1em ${(props) => props.fundo},
      0 0 1em ${(props) => props.fundo};
    transform: translatey(-5%);

    img {
    }
  }
`;

export const StyleContainer = styled.div`
  border-radius: 1.875rem;
  padding: 0.3125rem;
  margin: 0.625rem;
  border: 0.125rem solid #ffff;
  box-sizing: border-box;
`;

export const PokeImage = styled.img`
  width: 11rem;
  height: 11rem;

  // box-sizing: border-box;
`;
export const TextTitle = styled.p`
  font-size: 1.5625rem;
  margin: 0;
  text-transform: capitalize;
  color: black;
`;

export const TextName = styled.p`
  color: #808080;
  margin-top: 0.125rem;
`;
export const LinkCard = styled(Link)`
  text-decoration: none;
`;
