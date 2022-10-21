import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Title } from './Phonebook.styled';

export const Phonebook = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  const formSubmit = data => {
    const id = nanoid();
    const obj = { ...data, id };

    setContacts(prev => [...prev, obj]);
  };

  const filterByName = () => {
    return contacts.filter(i => {
      return i.name.toLowerCase().includes(filter);
    });
  };

  const filterValue = data => {
    setFilter(data);
  };

  const onDelete = id => {
    setContacts(prev => prev.filter(i => i.id !== id.target.id));
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Title>Phonebook </Title>
      <ContactForm onSubmit={formSubmit} contacts={contacts} />
      <Title>Contacts</Title>
      <Filter valueIn={filter} valueOut={filterValue} />
      <ContactList
        list={filter ? filterByName() : contacts}
        onClick={onDelete}
      />
    </>
  );
};

// export class Phonebook extends React.Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   formSubmit = data => {
//     const id = nanoid();
//     const obj = { ...data, id };
//     this.setState(prevState => ({
//       contacts: prevState.contacts.concat([obj]),
//     }));
//   };

//   filterByName = () => {
//     return this.state.contacts.filter(i => {
//       return i.name.toLowerCase().includes(this.state.filter);
//     });
//   };

//   filter = data => {
//     this.setState({ filter: data });
//   };

//   onDelete = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(i => i.id !== id.target.id),
//     }));
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsetContacts = JSON.parse(contacts);
//     if (parsetContacts) {
//       this.setState({ contacts: parsetContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     return (
//       <>
//         <Title>Phonebook </Title>
//         <ContactForm
//           onSubmit={this.formSubmit}
//           contacts={this.state.contacts}
//         />
//         <Title>Contacts</Title>
//         <Filter valueIn={this.state.filter} valueOut={this.filter} />
//         <ContactList
//           list={this.state.filter ? this.filterByName() : this.state.contacts}
//           onClick={this.onDelete}
//         />
//       </>
//     );
//   }
// }
