import { styled } from "styled-components";

type Item = {
  id: string;
  name: string;
};
type Props = {
  items: Item[];
  onTabClick: (id: string) => void;
  activeId: string;
};

type TabProps = Item & {
  isActive: boolean;
  onClick: (id: string) => void;
};

export const TabsPanel: React.FC<Props> = ({ items, activeId, onTabClick}) => {
  return (
    <TabsPanelWrapper>
      {items.map(({ id, name }) => (
        <Tab key={id} id={id} name={name} isActive={id === activeId} onClick={onTabClick}/>
      ))}
    </TabsPanelWrapper>
  );
};
const Tab: React.FC<TabProps> = ({ id, name, isActive, onClick }) => {
  return (
    <TabWrapper $isActive={isActive}>
      <TabButton type="button" onClick = {() => onClick(id)}>{name}</TabButton>
    </TabWrapper>
  );
};

const TabWrapper = styled.li<{ $isActive: boolean }>`
  display: block;
  box-sizing: border-box;
  border-bottom: ${({ $isActive }) => {
    return $isActive && '2px solid black';
  }};
`;
 
const TabButton = styled.button`
  all: unset;
  cursor: pointer;

  &:hover {
    color: #213efa;
  }
`;

const TabsPanelWrapper = styled.ul`
  all: unset;
  display: flex;
  line-height: 50px;
  font-size: 20px;
  border-bottom: 1px solid #c5c9d7;
  margin: 0 5%;
`;
