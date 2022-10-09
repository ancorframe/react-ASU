import React from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Phonebook.styled';

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  nameId = nanoid();
  numberId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    if (
      this.props.contacts.find(
        i => i.name.toLowerCase() === this.state.name.toLowerCase()
      )
    ) {
      return alert(`${this.state.name} is already in contacts.`);
    }
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameId}>Name</label>
          <input
            type="text"
            name="name"
            id={this.nameId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleChange}
            value={this.state.name}
            required
          />

          <label htmlFor={this.numberId}>Number</label>
          <input
            type="tel"
            name="number"
            id={this.numberId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleChange}
            value={this.state.number}
            required
          />
          <button type="submit">Add Contact</button>
        </Form>
      </>
    );
  }
}
