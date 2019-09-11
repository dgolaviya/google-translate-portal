import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Loader from 'react-loader-advanced';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class AddMessageForm extends Component {
  state = {
    en: undefined,
    de: undefined,
    zh: undefined,
    es: undefined,
    fr: undefined,
    msgId: undefined,
    validated: false,
    isLoading: false
  }
  onTranslate = () => {
    if (this.state.en) {
      this.setState({ isLoading: true });
      const variables = [];
      let index = 1;
      const text = this.state.en.replace(/{\w*}/g, (match) => {
        variables.push(match);
        return index++;
      });
      axios.get(`http://localhost:8050/messages/translate?text=${text}`).then(res => {
        const pattern = /1|2|3|4|5/g;
        res.data.en = res.data.en.replace(pattern, (match) => variables[match - 1]);
        res.data.fr = res.data.fr.replace(pattern, (match) => variables[match - 1]);
        res.data.de = res.data.de.replace(pattern, (match) => variables[match - 1]);
        res.data.zh = res.data.zh.replace(pattern, (match) => variables[match - 1]);
        res.data.es = res.data.es.replace(pattern, (match) => variables[match - 1]);
        this.setState({ ...res.data, isLoading: false });
      });
    }
  }
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  onMessageAdd = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const message = {
      en: this.state.en,
      fr: this.state.fr,
      de: this.state.de,
      zh: this.state.zh,
      es: this.state.es,
      msgId: this.state.msgId
    };
    this.setState({ en: undefined, msgId: undefined });
    console.log(this.state);
    if (form.checkValidity()) {
      axios.post('http://localhost:8050/messages/', message).then(res => {
        this.props.addNewMessage(res.data);
      });
    }
  }
  render() {
    return (
      <div style={{ marginBottom: '10px' }}>
        <Form
          noValidate
          validated={this.state.validated}
          onSubmit={this.onMessageAdd}
        >
          <fieldset className="border p-2">
            <legend className="w-auto">Add Messages</legend>
            <Loader show={this.state.isLoading} message={<FontAwesomeIcon size="3x" icon="spinner" />}>
              <Form.Group as={Row}>
                <Form.Label column sm={2}>Message Id</Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    required
                    name="msgId"
                    value={this.state.msgId}
                    onChange={this.onChange}
                    placeholder="Type Message Id" />
                  <Form.Control.Feedback type="invalid">Message Id cannot be empty.</Form.Control.Feedback>
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>English(en)</Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    required
                    name="en"
                    value={this.state.en}
                    onChange={this.onChange}
                    placeholder="Type english message here"
                  />
                  <Form.Control.Feedback type="invalid">English message cannot be empty.</Form.Control.Feedback>
                </Col>
                <Col>
                  <Button onClick={() => this.onTranslate()}>Translate</Button>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={2}>French(fr)</Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    disabled
                    required
                    name="fr"
                    value={this.state.fr}
                    plaintext
                  />
                  <Form.Control.Feedback type="invalid">French Message cannot be empty.</Form.Control.Feedback>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={2}>German(de)</Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    disabled
                    required
                    name="de"
                    value={this.state.de}
                    plaintext
                  />
                  <Form.Control.Feedback type="invalid">German message cannot be empty.</Form.Control.Feedback>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={2}>Spanish(es)</Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    required
                    disabled
                    name="es"
                    value={this.state.es}
                    plaintext
                  />
                  <Form.Control.Feedback type="invalid">Spanish message cannot be empty.</Form.Control.Feedback>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={2}>Chinese Simplified(zh)</Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    required
                    disabled
                    name="zh"
                    value={this.state.zh}
                    plaintext
                  />
                  <Form.Control.Feedback type="invalid">Chinese message cannot be empty.</Form.Control.Feedback>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button type="submit">Add Message</Button>
                </Col>
              </Form.Group>
            </Loader>
          </fieldset>
        </Form>
      </div>
    );
  }
}

export default AddMessageForm;
