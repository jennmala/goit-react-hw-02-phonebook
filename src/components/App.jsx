import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Form } from 'components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';

import { Container, MainTitle, Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const normalizedName = data.name.toLowerCase();
    const sameContacts = this.state.contacts.reduce(
      (total, contact) =>
        (total =
          contact.name.toLowerCase() === normalizedName ? total + 1 : total),
      0
    );

    if (!sameContacts) {
      const newContact = {
        id: nanoid(),
        name: data.name,
        number: data.number,
      };

      this.setState(({ contacts }) => ({
        contacts: [...contacts, newContact],
      }));
    } else {
      alert(data.name + ' is already in contacts.');
    }
  };

  changeFilter = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.getFilteredContacts();

    return (
      <Container>
        <MainTitle>Phonebook</MainTitle>

        <Form onSubmit={this.addContact} />

        <Title>Contacts</Title>

        <Filter filter={this.state.filter} onFilterChange={this.changeFilter} />

        {visibleContacts.length ? (
          <Contacts
            contactList={visibleContacts}
            onDeleteBtn={this.deleteContact}
          />
        ) : (
          <p>There are no contacts</p>
        )}
      </Container>
    );
  }
}
