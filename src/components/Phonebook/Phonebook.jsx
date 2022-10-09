import React from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Title } from './Phonebook.styled';

export class Phonebook extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmit = data => {
    data.id = nanoid();
    this.setState(prevState => ({
      contacts: prevState.contacts.concat([data]),
    }));
  };

  filterByName = () => {
    return this.state.contacts.filter(i => {
      return i.name.toLowerCase().includes(this.state.filter);
    });
  };

  filter = data => {
    this.setState({ filter: data });
  };

  onDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(i => i.id !== id.target.id),
    }));
  };

  render() {
    return (
      <>
        <Title>Phonebook </Title>
        <ContactForm
          onSubmit={this.formSubmit}
          contacts={this.state.contacts}
        />
        <Title>Contacts</Title>
        <Filter valueIn={this.state.filter} valueOut={this.filter} />
        <ContactList
          list={this.state.filter ? this.filterByName() : this.state.contacts}
          onClick={this.onDelete}
        />
      </>
    );
  }
}
