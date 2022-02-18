import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerHeader = styled.header`
  position: fixed;
  width: 30vw;
  height: 100vh;
  background-image: linear-gradient(#574ae8, #3ea1db);
  font-family: "Poppins", sans-serif;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    color: white;
    margin-top: 1rem;
  }

  img {
    margin-top: 1rem;
    width: 10.9375rem; // 175px;
    border-radius: 150px;
  }
`;
export const ContainerAvatar = styled.div`
  p {
    margin-top: 0.5rem;
    font-weight: 500;
    font-size: 1rem;
    color: white;
  }
`;
export const ContainerNav = styled.nav`
  margin-top: 2rem;
  // box-sizing: border-box;
  ul {
    list-style: none;
  }

  li {
    padding: 0.625rem 0;
    margin-top: 0.5rem;
    transition: 0.5s;
    position: relative;
  }
  // li:last-child{
  //     position: absolute;
  //     bottom: 0;
  //      margin: auto;
  //  }
`;
export const LinkPage = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  font-size: 1.6625rem;
  color: white;
  display: block;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 100%;
    background-color: white;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: 0.5s ease;
  }
  &:hover {
    color: black;
    &:before {
      width: 100%;
    }
  }
`;
