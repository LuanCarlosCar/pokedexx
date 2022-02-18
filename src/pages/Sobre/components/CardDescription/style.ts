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
    background-color: #86ff3b;
    box-shadow: 0 0 0 4px #333, 0 0 0 6px #86ff3b;

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
  border: 2px solid #d3d3d3;
  border-radius: 4px;
  visibility: hidden;
  opacity: 0;
  transition: 0.5s;
  transform: translateX(-50%) translateY(0px);
  p {
    line-height: 20px;
  }
`;
export const Textname = styled.p`
  margin-bottom: 5px;
  width: 110px;
  text-transform: capitalize;
  margin-left: -120px;
`;
