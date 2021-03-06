import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux';

//import LoggedView from '../View';
import { openPinnedMessages, closePinnedMessages } from '../../actions/pinnedMessages';
import { togglePinRequest } from '../../actions/messages';


// import PropTypes from 'prop-types';

// import ActionSheet from 'react-native-actionsheet';

// import styles from './styles';

// import Message from '../../containers/message';

const PIN_INDEX = 0;
const CANCEL_INDEX = 1;
const options = ['Unpin', 'Cancel'];

@connect(
	state => ({
		messages: state.pinnedMessages.messages,
		user: state.login.user,
		baseUrl: state.settings.Site_Url || state.server ? state.server.server : ''
	}),
	dispatch => ({
		openPinnedMessages: rid => dispatch(openPinnedMessages(rid)),
		closePinnedMessages: () => dispatch(closePinnedMessages()),
		togglePinRequest: message => dispatch(togglePinRequest(message))
	})
)

export default class LoggedView extends React.Component{
	render(){
		retturn(
			<View>
				<Text>
				LoggedView
				</Text>
			</View>
		)
	}
}
// export default class PinnedMessagesView extends LoggedView {
// 	static propTypes = {
// 		navigation: PropTypes.object,
// 		messages: PropTypes.array,
// 		user: PropTypes.object,
// 		baseUrl: PropTypes.string,
// 		openPinnedMessages: PropTypes.func,
// 		closePinnedMessages: PropTypes.func,
// 		togglePinRequest: PropTypes.func
// 	}

// 	constructor(props) {
// 		super('PinnedMessagesView', props);
// 		this.state = {
// 			message: {}
// 		};
// 	}

// 	componentDidMount() {
// 		this.props.openPinnedMessages(this.props.navigation.state.params.rid);
// 	}

// 	componentWillUnmount() {
// 		this.props.closePinnedMessages();
// 	}

// 	onLongPress = (message) => {
// 		this.setState({ message });
// 		this.actionSheet.show();
// 	}

// 	handleActionPress = (actionIndex) => {
// 		switch (actionIndex) {
// 			case PIN_INDEX:
// 				this.props.togglePinRequest(this.state.message);
// 				break;
// 			default:
// 				break;
// 		}
// 	}

// 	renderEmpty = () => (
// 		<View style={styles.listEmptyContainer}>
// 			<Text>No pinned messages</Text>
// 		</View>
// 	)

// 	renderItem = ({ item }) => (
// 		<Message
// 			item={item}
// 			style={styles.message}
// 			reactions={item.reactions}
// 			user={this.props.user}
// 			baseUrl={this.props.baseUrl}
// 			Message_TimeFormat='MMMM Do YYYY, h:mm:ss a'
// 			onLongPress={this.onLongPress}
// 		/>
// 	)

// 	render() {
// 		if (this.props.messages.length === 0) {
// 			return this.renderEmpty();
// 		}
// 		return (
// 			[
// 				<FlatList
// 					key='pinned-messages-view-list'
// 					data={this.props.messages}
// 					renderItem={this.renderItem}
// 					style={styles.list}
// 					keyExtractor={item => item._id}
// 				/>,
// 				<ActionSheet
// 					key='pinned-messages-view-action-sheet'
// 					ref={o => this.actionSheet = o}
// 					title='Actions'
// 					options={options}
// 					cancelButtonIndex={CANCEL_INDEX}
// 					onPress={this.handleActionPress}
// 				/>
// 			]
// 		);
// 	}
// }
