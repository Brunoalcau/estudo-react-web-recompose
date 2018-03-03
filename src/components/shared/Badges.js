import React from 'react';
import styled, {css} from 'styled-components';

export const Badges = styled.div.attrs({
  'background-color': props => props.color || props.theme.success,
  align: props => props.align || 'center'
})`
  background: ${props => props['background-color']};
  text-align: ${props => props.align};
  border-radius: 30px;
  width: 15%;
  margin-left: 10px;
  margin-right: 10px;
  padding: 5px;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
`;
