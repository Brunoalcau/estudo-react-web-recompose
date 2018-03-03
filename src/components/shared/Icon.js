import React from 'react';
import styled, {css} from 'styled-components';
import {omit} from 'lodash';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {compose, setPropTypes, withProps} from 'recompose';
import faAngleUp from '@fortawesome/fontawesome-free-solid/faAngleUp';
import faComment from '@fortawesome/fontawesome-free-solid/faComment';


import {string} from 'prop-types';

fontawesome.library.add(faAngleUp, faComment);

const enhancedIcon = compose(
  withProps(({icon}) => ({
    icon: icon 
  }))
)(props => <FontAwesomeIcon {...omit(props,['success', 'danger', 'warning', 'secondary'])} />);
export const Icon = styled(enhancedIcon).attrs({
  size: props => props.size || '2x',
  color: props => props.coor || props.theme.text
})`
  color: ${props => props.color};
  ${props =>
    props.success &&
    css`
    color: ${props => props.theme.success};
  `}

  ${props =>
    props.danger &&
    css`
    color: ${props => props.theme.danger};
  `}

  ${props =>
    props.warning &&
    css`
    color: ${props => props.theme.warning};
  `}

  ${props =>
    props.secondary &&
    css`
    color: ${props => props.theme.textSecondary};
  `}
`;
