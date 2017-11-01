import React from 'react';

const Message = ({time, username, content}) => {
	return (
		<div>
			<span>{time}</span>
			<span>{username}</span>
			<span>{content}</span>
		</div>
	);
}

export default Message;