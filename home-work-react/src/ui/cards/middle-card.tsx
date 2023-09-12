import {
    faBookmark,
    faThumbsDown,
    faThumbsUp,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { useState } from "react";
  import { styled } from "styled-components";
  import { CardProps } from "./card-props";
  
  type BigPostCardProps = {
    postCard: CardProps;
  };
  
  export const MiddleCard: React.FC<BigPostCardProps> = (
    props: BigPostCardProps
  ) => {
    const [isLiked, setLiked] = useState<boolean>(false);
    const [isDisliked, setDisliked] = useState<boolean>(false);
  
    function dislike() {
      if (isLiked) {
        props.postCard.like--;
      }
      setDisliked(!isDisliked);
      setLiked(false);
      if(isDisliked) {props.postCard.dislike--;}
      else props.postCard.dislike++;
    }
    function like() {
      if (isDisliked) {
        props.postCard.dislike--;
      }
      setLiked(!isLiked);
      setDisliked(false);
      if(isLiked) {props.postCard.like--;}
      else props.postCard.like++;
    }
    return (
      <div>
        <MiddlCard>
          <CardData>
          <ImageCard>
              <img src={props.postCard.image} alt="#"></img>
            </ImageCard>
            <TextData>
              <p>{props.postCard.date}</p>
              <Header>{props.postCard.title}</Header>
            </TextData>
          </CardData>
          <CommandString>
            <WrapperLike>
              <ButtonLike onClick={() => like()}>
                {isLiked ? ( 
                  <FontAwesomeIcon icon={faThumbsUp} color="black" />
                ) : (
                  <FontAwesomeIcon icon={faThumbsUp} />
                )}
              </ButtonLike>
              <p>{props.postCard.like}</p>
              <ButtonDislike onClick={() => dislike()}>
                {isDisliked ? (
                  <FontAwesomeIcon icon={faThumbsDown} color="black" />
                ) : (
                  <FontAwesomeIcon icon={faThumbsDown} />
                )}
              </ButtonDislike>
              <p>{props.postCard.dislike}</p>
            </WrapperLike>
            <WrapperOther>
              <ButtonPoints>...</ButtonPoints>
              <ButtonBookmark>
                <FontAwesomeIcon icon={faBookmark} />
              </ButtonBookmark>
            </WrapperOther>
          </CommandString>
        </MiddlCard>
      </div>
    );
  };
  const WrapperLike = styled.div`
    display: flex;
    align-items: center;
  `;
  const WrapperOther = styled.div``;
  const MiddlCard = styled.div`
    width: 30%;
    padding: 3%;
  `;
  const CommandString = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  const ImageCard = styled.div`
  height: 13rem;`;
  const CardData = styled.div`
  `;
  const Header = styled.h2`
    color: #000000;
    font-size: 18px;
  `;
  
  const TextData = styled.div`
    text-align: left;
    width: 90%;
    color: #989aa8;
    padding: 1%;
  `;
  const ButtonLike = styled.button`
    width: 2rem;
    height: 2rem;
    color: #c7c9d5;
  `;
  const ButtonDislike = styled.button`
    width: 2rem;
    height: 2rem;
    color: #c7c9d5;
  `;
  const ButtonBookmark = styled.button`
    width: 2rem;
    height: 2rem;
    color: #c7c9d5;
    &:hover {
      color: #333333;
    }
  `;
  
  const ButtonPoints = styled.button`
    width: 2rem;
    height: 2rem;
    color: #c7c9d5;
    font-size: 28px;
    &:hover {
      color: #333333;
    }
  `;
  