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

  addContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    const sameContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );

    // const amountOfSameContacts = this.state.contacts.reduce(
    //   (total, contact) =>
    //     (total =
    //       contact.name.toLowerCase() === normalizedName ? total + 1 : total),
    //   0
    // );

    if (sameContact) {
      alert(name + ' is already in contacts.');
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
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
