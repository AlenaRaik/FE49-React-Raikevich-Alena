import { styled } from "styled-components";

type Props = {
  children: string;
};

export const Title: React.FC<Props> = ({ children }) => { 
    return <TitleWrapper>{children}</TitleWrapper>
};

const TitleWrapper = styled.h1`
  font-size: 40px;
  color: #333;
`;