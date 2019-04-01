import React from 'react';
import { Formik, Field, FieldArray, Form } from 'formik';
import { Row, Container, Col, Button } from 'react-bootstrap';
import './styles.css'
const initialValues = {
  friends: [
    {
      name: '',
      email: ''
    }
  ]
};

const Invitation = () => (
  <div className="invitation-container">
    <div className="inv-form">
      <h1>Invitation</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            alert(JSON.stringify(values))
          }, 500);
        }}
      >
        {({ values, isSubmitting }) => {
          return (
            <Form>
              <Container>
                <FieldArray name="friends">
                  {({ push, remove }) => (
                    <React.Fragment>
                      {values.friends && values.friends.length > 0 && values.friends.map((friend, index) => (
                        <Row>
                          <Col>
                            <Field name="friends[0].name">
                              {({ field }) => (
                                <input type="text" {...field} placeholder="Divyang Golaviya" />
                              )}
                            </Field>
                          </Col>
                          <Col>
                            <Field name="friends[0].email">
                              {({ field }) => (
                                <input type="email" {...field} placeholder="dgolaviya@ibaset.com" />
                              )}
                            </Field>
                          </Col>
                          <Col>
                            <Button onClick={() => remove(index)} size="sm">X</Button>
                          </Col>
                        </Row>
                      ))}
                      <Row className="my-2 justify-content-center">
                        <Col xs={6}>
                          <Button onClick={() => push({ name: '', email: '' })} block type="submit" variant="secondary">Add Friends</Button>
                        </Col>
                      </Row>
                    </React.Fragment>
                  )}
              </FieldArray>
                <Row className="justify-content-center">
                  <Col xs={6}>
                    <Button disabled={isSubmitting} block variant="success">Invite</Button>
                  </Col>
                </Row>
              </Container>
            </Form>
          );
        }}
      </Formik>
    </div>
  </div>
);

export default Invitation;
