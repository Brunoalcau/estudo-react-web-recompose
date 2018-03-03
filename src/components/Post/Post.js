import React from 'react';
import styled, {css} from 'styled-components';
import {isNumber} from 'lodash';
import {object} from 'prop-types';
import {
  compose,
  withProps,
  pure,
  setPropTypes
} from 'recompose';

// local
import {
  LinkButton,
  Button,
  Text,
  Badges,
  Icon,
  Photo
} from '../shared';

const enhanced = compose(
  setPropTypes({
    item: object.isRequired
  }),
  pure
);

export const Post = enhanced(({item}) => {
  console.log(item);
  return(
    <Wrapper>
      <Button>
        {item.upvotes}
      </Button>
      <WrapperRight>
        <LinkButtonCustom size={11} weight={600}>
          {item.meta.url}
        </LinkButtonCustom>
        <WrapperTitle>
          <Text size={25}>
            {item.meta.title}
          </Text>  
        </WrapperTitle>
        <WrapperDescriptions>
          <Badges>
            <Text size={11} inverted>
              {item.category}
            </Text>
          </Badges>
          <Separator />
          <LinkButtonCustom warning weight={500} href="#">
            <PhotoCustom>
              <Text inverted size={11} weight={600}>N</Text>
            </PhotoCustom>
            <Text warning size={11} decoration="underline">{item.meta.author}</Text>
          </LinkButtonCustom>
          <TextCustom secondary size={11}>43 minutes ago</TextCustom>
          <SeparatorBall />
          <LinkButton warning weight={500} size={11} href="#">
            <IconCustom warning icon="comment" size="1x"/>
            <Text warning size={11} decoration="underline">{item.comments} Comments</Text>
          </LinkButton>
        </WrapperDescriptions>
      </WrapperRight>
    </Wrapper>
  );
});


const Wrapper = styled.div`
  display: flex;
  flex-dicrection: row;
  margin: 20px;
`;
const WrapperRight = styled.div`
  padding: 5px;
`;

const WrapperTitle = styled.div`
  padding-left: 10px;
  padding-bottom: 3px;
`;

const LinkButtonCustom = LinkButton.extend`
  display: flex;
  color: #ddd;
  margin-top: 10px;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    cursor: pointer;
  }
`;

const WrapperDescriptions =  styled.div`
  display: flex;
  flex-dicrection: row;
  align-items: center;
`;

const Separator = styled.div`
  height: 25px;
  border-left: 2px solid ${props => props.theme.border};
`;

const SeparatorBall = styled.div`
  height: 7px;
  border-left: 6px solid ${props => props.theme.border};
  margin-left: 10px;
  margin-top: 3px;
  border-radius: 30px;
`;

const IconCustom = Icon.extend`
  margin-right: 5px;
  margin-top: 2px;
`;

const PhotoCustom = Photo.extend`
  margin-right: 5px;
`; 

const TextCustom = Text.extend`
  padding-left: 5px;
  padding-top: 3px;
`;
// https://www.w3schools.com/css/paris.jpg