import { styled } from "styled-components";

type Props = {
    children: string;
    disabled?: boolean;
    onClick: () => void;
}

export const Button: React.FC<Props> = ({children, disabled, onClick}) => {
    return <ButtonWrapper type ="button" disabled={disabled} onClick={() => onClick()}>{children}</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
all:unset;
cursor: pointer;
border: 1px solid white;
border-radius: 4px;
padding: 5px 10px;
background: blue;
color: white;

&:disabled {
    cursor: none;
    opasity: 0.67;
    color: gray;
}
`;