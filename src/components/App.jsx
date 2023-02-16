import React, { Component } from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

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

  handleSubmit = ({ event, name, number }) => {
    event.preventDefault();
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    const nameExist = this.state.contacts.find(
      contact => contact.name === name
    );
    const numberExist = this.state.contacts.find(
      contact => contact.number === number
    );

    if (nameExist) {
      alert(`${name} is already in contacts`);
    } else if (numberExist) {
      alert(`This number ${number} is already in contacts`);
    } else
      this.setState({
        contacts: [...this.state.contacts, contact],
      });
  };

  handleSearch = event => {
    event.preventDefault();
    const { value } = event.target;
    this.setState({ filter: value });
  };

  handleRemove = event => {
    const { contacts } = this.state;
    const filtered = contacts.filter(contact => contact.id !== event.target.id);
    this.setState({ contacts: filtered });
  };

  render() {
    return (
      <>
        <div className={css.boxApp}>
          <Section title="Phonebook">
            <ContactForm onSubmit={this.handleSubmit} />
          </Section>
          <Section title="Contacts">
            <Filter
              handleSearch={this.handleSearch}
              filter={this.state.filter}
            />
            <ContactList
              handleRemove={this.handleRemove}
              contacts={this.state.contacts}
              filter={this.state.filter}
            />
          </Section>
        </div>
      </>
    );
  }
}
