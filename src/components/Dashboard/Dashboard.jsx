import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './styles.css';
import ContentRouter from './ContentRouter';

class Dashboard extends Component {
  state = {
    panelName: undefined
  }
  onMessageClick = (panelName) => {
    this.setState({ panelName: panelName });
  }
  render() {
    return (
      <Container fluid style={{ height: '100vh' }}>
        <Row style={{ height: '100%' }}>
          <Col style={{ backgroundColor: 'rgba(0,123,255,.5)', color: 'white' }} xs={2}>
            <div onClick={() => this.onMessageClick('Messages')} className="d-flex flex-row align-items-center custom-button">
              <Col xs={1}><FontAwesomeIcon icon="envelope" /></Col>
              <Col>Messages</Col>
            </div>
            <div onClick={() => this.onMessageClick('Operations')} className="d-flex flex-row align-items-center custom-button">
              <Col xs={1}><FontAwesomeIcon icon="wrench" /></Col>
              <Col>Operations</Col>
            </div>
            <div onClick={() => this.onMessageClick('Parts')} className="d-flex flex-row align-items-center custom-button">
              <Col xs={1}><FontAwesomeIcon icon="cogs" /></Col>
              <Col>Parts</Col>
            </div>
            <div onClick={() => this.onMessageClick('Tools')} className="d-flex flex-row align-items-center custom-button">
              <Col xs={1}><FontAwesomeIcon icon="screwdriver" /></Col>
              <Col>Tools</Col>
            </div>
            <div onClick={() => this.onMessageClick('Data Collections')} className="d-flex flex-row align-items-center custom-button">
              <Col xs={1}><FontAwesomeIcon icon="comments" /></Col>
              <Col>Data Collections</Col>
            </div>
          </Col>
          <Col xs={10}><ContentRouter panelName={this.state.panelName} /></Col>
        </Row>
      </Container>
    )
  }
}

export default Dashboard
