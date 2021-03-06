import styled from "styled-components";

export const ContainerCardDescription = styled.div`
  text-align: center;
  padding-top: 100px;
`;
interface Propsname {
  name: string | undefined | any;
}
export const NavbarDescription = styled.ul<Propsname>`
  margin: 0;
  padding: 0;
  margin-left: 100px;
  display: flex;
  align-items: center;

  li {
    position: relative;
    list-style: none;
    width: 20px;
    height: 20px;
    background-color: #777;
    margin: 0 20px;
    border-radius: 50%;
    transition: 0.5s;
    cursor: pointer;
  }
  li:hover {
    background-color: #3ea1db;
    box-shadow: 0 0 0 4px white, 0 0 0 6px #3ea1db;

    div {
      visibility: visible;
      opacity: 1;
      transform: translateX(-50%) translateY(-10px);
    }
  }
`;
export const ContainerDescription = styled.div`
  width: 350px;
  word-wrap: break-word;
  position: absolute;
  bottom: 55px;
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  box-sizing: border-box;
  border: 2px solid #3ea1db;
  border-radius: 4px;
  visibility: hidden;
  opacity: 0;
  transition: 0.5s;
  transform: translateX(-50%) translateY(0px);

  max-width: 100ch;
  max-height: 20ch;
  overflow-y: auto;
  text-overflow: ellipsis;
  white-space: pre-wrap;

  &::-webkit-scrollbar {
    width: 12px; /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: white; /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #87cefa; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 3px solid #87cefa; /* creates padding around scroll thumb */
  }

  p {
    line-height: 20px;
    color: #3ea1db;
    -webkit-line-clamp: 10; /* number of lines to show */
    -webkit-box-orient: horizontal;
  }
`;
export const TextName = styled.p`
  margin-bottom: 5px;
  width: 110px;
  text-transform: capitalize;
  margin-left: -120px;
`;
