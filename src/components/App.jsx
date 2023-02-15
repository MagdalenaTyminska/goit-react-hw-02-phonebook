import React, { Component } from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { InputField } from './ContactForm/InputField/InputField';
import { ContactForm } from './ContactForm/ContactForm';
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

    const nameExist = this.state.contacts.find(
      contact => contact.name === this.state.name
    );
    const numberExist = this.state.contacts.find(
      contact => contact.number === this.state.number
    );

    if (nameExist) {
      alert(`${this.state.name} is already in contacts`);
    } else if (numberExist) {
      alert(`This number ${this.state.number} is already in contacts`);
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
    console.log(event.target.id);
    const filtered = contacts.filter(contact => contact.id !== event.target.id);
    this.setState({ contacts: filtered });
  };

  render() {
    return (
      <>
        <div className={css.boxApp}>
          <Section title="Phonebook">
            <ContactForm onSubmit={this.handleSubmit} buttonLabel="Add contact">
              <InputField
                label="name"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я
                ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters,
                apostrophe, dash and spaces. For example Adrian, Jacob Mercer,
                Charles de Batz de Castelmore d'Artagnan"
                required="true"
                onChange={this.handleChange}
              />
              <InputField
                label="number"
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required="true"
                onChange={this.handleChange}
              />
            </ContactForm>
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
                    <button
                      id={contact.id}
                      type="button"
                      onClick={this.handleRemove}
                    >
                      {' '}
                      Delete{' '}
                    </button>
                  </li>
                ))}
            </ul>
          </Section>
        </div>
      </>
    );
  }
}
