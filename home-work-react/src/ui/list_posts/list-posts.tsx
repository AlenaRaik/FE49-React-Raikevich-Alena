import { styled } from "styled-components";
import { CardProps } from "../cards/card-props";
import { BigCard } from "../cards/big-card";
import { cardArray } from "../../arrayData";
import { MiddleCard } from "../cards/middle-card";
import { SmallCard } from "../cards/small-card";

type ListPostCardProps = {
  value: CardProps[];
};
export const ListCard: React.FC<ListPostCardProps> = (
  props: ListPostCardProps
) => {
  return (
    <div>
      <Container>
        <WraperList>
          <BigList>
            <BigCard value={cardArray[0]}></BigCard>
            <MiddleList>
              <MiddleCard value={cardArray[1]}></MiddleCard>
              <MiddleCard value={cardArray[2]}></MiddleCard>
              <MiddleCard value={cardArray[3]}></MiddleCard>
              <MiddleCard value={cardArray[4]}></MiddleCard>
            </MiddleList>
          </BigList>
          <SmallList>
            <SmallCard value={cardArray[5]}></SmallCard>
            <SmallCard value={cardArray[6]}></SmallCard>
            <SmallCard value={cardArray[7]}></SmallCard>
            <SmallCard value={cardArray[8]}></SmallCard>
            <SmallCard value={cardArray[9]}></SmallCard>
          </SmallList>
        </WraperList>
      </Container>
    </div>
  );
};

const MiddleList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 3%;
`;
const Container = styled.div``;
const WraperList = styled.div`
  display: flex;
`;
const BigList = styled.div`
  width: 150%;
`;
const SmallList = styled.div``;
