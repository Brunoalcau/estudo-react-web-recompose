import React from 'react';
import {object, func} from 'prop-types';
import {
  compose,
  setPropTypes,
  lifecycle
} from 'recompose';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {map} from 'lodash';

// local
import {getLink} from '../../actions';
// import {
// 	Button,
// 	Badges,
// 	Text,
// 	LinkButton,
// 	Icon
// } from '../../components/shared';

import {
	Post
} from '../../components/Post';

const enhance = compose(
	connect(({link}) =>({
		link
	}),
	{
		getLink
	}),
	setPropTypes({
		getLink: func.isRequired,
		link: object.isRequired
	}),
	lifecycle({
		async componentWillMount() {
			await this.props.getLink();
		}
	})
);
export const Posts = enhance(({link}) => {
	return (
		<Wrapper>
			{map(link.allIndex, (item)=> <Post key={item} item={link.byIndex[item]} />)}
		</Wrapper>
	);
});


const Wrapper = styled.div``;
const List = styled.div`
	padding: 10;
`;