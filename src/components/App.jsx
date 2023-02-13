import React, { Component } from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
// import { ContactList } from './ContactList/ContactList';
// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // const hasSameContact = contacts.find()
    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.setState({
      contacts: [...this.state.contacts, contact],
    });
  };

  handleSearch = event => {
    event.preventDefault();
    const { value } = event.target;
    this.setState({ filter: value });
  };

  render() {
    return (
      <>
        <div className={css.boxApp}>
          <Section title="Phonebook">
            <form onSubmit={this.handleSubmit}>
              <label>name</label>
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handleChange}
              />
              <label>number</label>
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.handleChange}
              />
              <button type="submit">Add contact</button>
            </form>
          </Section>
          <Section title="Contacts">
            <p>Find contacts by name</p>
            <input
              type="text"
              value={this.state.filter}
              onChange={this.handleSearch}
            />
            <ul>
              {this.state.contacts
                .filter(contact => {
                  const { filter } = this.state;
                  if (!filter) {
                    return true;
                  }
                  const lowerName = contact.name.toLowerCase();
                  const lowerFilter = this.state.filter.toLowerCase();
                  return lowerName.includes(lowerFilter);
                })
                .map(contact => (
                  <li key={contact.id}>
                    {contact.name}: {contact.number}
                  </li>
                ))}
            </ul>
          </Section>
        </div>
      </>
    );
  }
}
