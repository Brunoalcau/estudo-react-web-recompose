import React from 'react';
import styled,  {css} from 'styled-components';

export const Photo = styled.div.attrs({
  color: props => props.color || props.theme.text,
  size: props => props.size || '15',
  weight: props => props.weight || 'normal',
  align: props => props.align || 'center'
})`
  color: ${props => props.color};
  text-align: ${props => props.align};
  background: ${props => props.theme.danger};
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
  align-items: center;  
  ${props =>
    props.secondary &&
    css`
    color: ${props => props.theme.textSecondary};
  `}

  ${props =>
    props.inverted &&
    css`
    color: ${props => props.theme.textInverted};
  `}

  ${props =>
    props.danger &&
    css`
    color: ${props => props.theme.danger};
  `}

  ${props =>
    props.success &&
    css`
    color: ${props => props.theme.success};
  `}

  ${props =>
    props.warning &&
    css`
    color: ${props => props.theme.warning};
  `}
`;
