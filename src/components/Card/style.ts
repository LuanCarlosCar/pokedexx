import { Link } from "react-router-dom";
import styled from "styled-components";
interface propsImg {
  fundo: string;
}
export const ContainerCard = styled.div`
  text-align: center;
  border-radius: 1.875rem;
  transition: 0.5s;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background-color: #dcdcdc;
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
  width: 12.5rem;
  height: 12.5rem;

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
