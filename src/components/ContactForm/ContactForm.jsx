import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContact({ name, number });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          placeholder="Enter name"
          required
          className={styles.input}
        />
        <input
          type="tel"
          name="number"
          value={number}
          onChange={this.handleChange}
          placeholder="Enter number"
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
export default ContactForm;
