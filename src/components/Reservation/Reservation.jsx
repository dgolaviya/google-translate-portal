import React, { Component } from 'react';

class MiniFormik extends Component {
  state = {
    values: this.props.initialValues || {},
    touched: {},
    errors: {}
  }
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState(prevState => ({
      values: { ...prevState.values, [name]: value }
    }));
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.values);
  }

  handleBlur = (event) => {
    const target = event.target;
    const name = target.name;

    this.setState(prevState => ({
      touched: { ...prevState.touched, [name]: true }
    }));
  }
  render() {
    return this.props.children({
      ...this.state,
      handleInputChange: this.handleInputChange,
      handleBlur: this.handleBlur,
      handleSubmit: this.handleSubmit
    });
  }
}


class Reservation extends React.Component {

  render() {
    return (
      <MiniFormik
        initialValues={{
          isGoing: true,
          numberOfGuests: 3
        }}
        onSubmit={values => alert(JSON.stringify(values, null, 2))}
      >
        {(props) => {
          const { handleInputChange, handleBlur, values, handleSubmit } = props;
          return (
            <form onSubmit={handleSubmit}>
              <label>
                Is going:
                <input
                  name="isGoing"
                  type="checkbox"
                  checked={values.isGoing}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                />
              </label>
              <br />
              <label>
                Number of guests:
                <input
                  name="numberOfGuests"
                  type="number"
                  value={values.numberOfGuests}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                />
              </label>
              <pre>{JSON.stringify(props, null, 2)}</pre>
            </form>);
        }}
      </MiniFormik>
    );
  }
}

export default Reservation;