import React, { Component } from 'react'
import AddMessageForm from '../AddMessageForm';
import ResultTable from './ResultTable';
import axios from 'axios';
export class MessageView extends Component {
  state = {
    messages: []
  }
  addNewMessage = (newMessage) => {
    const updatedMessages = [newMessage];
    this.state.messages.forEach(message => {
      if(!(message.msgId === newMessage.msgId)) {
        updatedMessages.push(message);
      }
    })
    this.setState({messages: updatedMessages});
  }
  componentDidMount() {
    axios.get('http://localhost:8050/messages/all').then(res => {
      this.setState({ messages: res.data });
    });
  }
  render() {
    return (
      <>
        <AddMessageForm addNewMessage={this.addNewMessage} />
        <ResultTable messages={this.state.messages} />
      </>
    )
  }
}

export default MessageView
