import React from 'react';
import styled, {css} from 'styled-components';
import {isNumber} from 'lodash';
import {compose, withProps, pure} from 'recompose';
import {Icon} from './Icon';
import {Text} from './Text';

const enhancedButton = compose(
  pure
)(props => {
  return (
    <Wrapper>
      <button {...props}>
        <WrapperIcon>
          <IconCustom icon="angle-up" />
        </WrapperIcon>
      </button>
      <WrapperText>
        <Text size={25} weight={550}>{props.children}</Text>
      </WrapperText>
    </Wrapper>
  );
});

export const Button = styled(enhancedButton)`
  background: ${props => props.background || 'rgba(0,0,0,0)'};
  align-items: center;
  border: 0;
  justify-content: center;
  flex-direction: row;
  ${props =>
    props.success &&
    css`
    background: ${props => props.theme.success};
  `}

  ${props =>
    props.danger &&
    css`
    background: ${props => props.theme.danger};
  `}

  ${props =>
    props.warning &&
    css`
    background: ${props => props.theme.warning};
  `}
`;


const Wrapper = styled.div`
  border: 1px solid ${props => props.theme.border};
  width: 40px;
  margin: 10px;
  text-align: center;
  border-radius: ${props =>
    isNumber(props.borderRadius)
      ? props.borderRadius
      : props.theme.borderRadius}px;
`;
const WrapperIcon = styled.div`
  padding: 5px;
`;

const WrapperText = styled.div`
  border-top: 1px solid ${props => props.theme.border};
  text-align: center;
  padding: 5px;
`;

const IconCustom = Icon.extend`
  color: ${props => props.theme.danger}
`;