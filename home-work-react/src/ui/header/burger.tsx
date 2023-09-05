import styled from "styled-components";

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const Hamburger = (props: Props) => (
  <StyledHamburger open={props.open} onClick={() => props.setOpen(!props.open)}>
    <div />
    <div />
    <div />
  </StyledHamburger>
);

const StyledHamburger = styled.button<{ open: boolean }>`
  position: relative;
  width: 2rem;
  height: 2rem;
  padding: 0;
  background: transparent;

  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  border: none;
  cursor: pointer;
  outline: none;
  z-index: 1;

  div {
    position: relative;
    width: 2rem;
    height: 0.25rem;
    transition: all 0.3s linear;
    transform-origin: 1px;
    background: #c4e9ff;

    &:first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export default Hamburger;