import React from 'react';
import {List} from 'immutable';
import Message from './Message';

const MessageList = ({messages}) => {
	const messageList = messages.map(
		(message, i) => (
			<Message key={i} message={message} />
		)
	);

	return (
		<div>
			{messageList}
		</div>
	)
}

export const MessageList;