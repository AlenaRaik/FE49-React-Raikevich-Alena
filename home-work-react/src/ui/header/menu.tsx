
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { RefObject, useEffect, useRef, useState } from "react";
import Hamburger from "./burger";
import { TabsPanel } from "../tabs/tabs";

const nameUser: string = "Artem Malkin";

const useOnClickOutside = (
  ref: RefObject<HTMLDivElement>,
  closeMenu: () => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target &&
        ref.current.contains(event.target as Node)
      ) {
        return;
      }
      closeMenu();
    };

    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, closeMenu]);
};

function NameUser(props: { name: string }) {
  return <span>{props.name}</span>;
}
function InitUser(props: { name: string }) {
  return (
    <span>
      {props.name
        .split(" ", 2)
        .map((word) => word[0])
        .join("")
        .toUpperCase()}
    </span>
  );
}

type MenuProps = {};

export const Menu: React.FC<MenuProps> = (props: MenuProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  const tabItems = [
    { id: "1", name: "All" },
    { id: "2", name: "My favorites" },
    { id: "3", name: "Popular" },
  ];

  const [activeTabId, setActiveTabId] = useState(tabItems[0].id);

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <Header>
        <Burger>
          <Hamburger open={open} setOpen={setOpen} />
        </Burger>
        <Search>
          <SearchInpyt placeholder="Search..." />
          <SearchLink><FontAwesomeIcon icon={faXmark} /></SearchLink>
        </Search>
        <ButtonSearch>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </ButtonSearch>
        <User>
          <StyledButton>
            <InitUser name={nameUser} />
          </StyledButton>
          <StyledLink>
            <NameUser name={nameUser} />
          </StyledLink>
        </User>
      </Header>

      <StyledMenu open={open}>
        <StyledButton>
          <InitUser name={nameUser} />
        </StyledButton>
        <StyledLink onClick={() => close()}>
          <NameUser name={nameUser} />
        </StyledLink>
      </StyledMenu>

      <TabsPanel
        items={[
          { id: "1", name: "All" },
          { id: "2", name: "My favorites" },
          { id: "3", name: "Popular" },
        ]}
        activeId={activeTabId}
        onTabClick={setActiveTabId}
      />
    </div>
  );
};

const StyledMenu = styled.nav<{ open: boolean }>`
  width: 30%;
  position: relative;
  background-color: #3a20ff;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
`;

const StyledLink = styled.a`
  padding: 0 2rem;
  font-size: 1rem;
  color: #c4e9ff;
  text-decoration: none;
`;

const StyledButton = styled.div`
  font-size: 1rem;
  color: #c4e9ff;
  background-color: #6872ff;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchInpyt = styled.input`
  width: 90%;
  height: 2.5rem;
  background-color: #6872ff;
  color: white;
  border: none;
  padding-left: 5%;
  text-align: left;
`;

const ButtonSearch = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  background-color: #0000ff;
  color: #c4e9ff;
`;

const User = styled.div`
  border-left: 1px solid #6872ff;
  width: 20%;
  height: 2.5rem;
  background-color: #0000ff;
  display: flex;
  align-items: center;
  justify-content: right;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0000ff;
`;

const Burger = styled.div`
  width: 2.5rem;
  margin: auto;
  background-color: #0000ff;
`;

const Search = styled.div`
  width: 70%;
  display: flex;
  background-color: #6872ff;
  color: white;
  align-items: center;
  justify-content: center;
`;

const SearchLink = styled.a`
  cursor: pointer;
`;
