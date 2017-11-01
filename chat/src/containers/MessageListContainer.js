import React, {Component} from 'react';
import {connect} from 'react-redux';
import MessageList from '../components/MessageList';

class MessageListContainer extends Component {

	render() {
		
		return 
	}
}

const mapStateToProps = (state) => {
	return state.get('messages');
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps)(MessageListContainer);