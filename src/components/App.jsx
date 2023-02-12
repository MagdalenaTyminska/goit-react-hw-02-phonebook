import React, { Component } from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid';
import { Section } from 'components/Section/Section';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // filter: '',
    name: '',
    // number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // const { name, contacts} = this.state;
    const contact = {
      id: nanoid(),
      name: this.state.name,
      // number: this.state.number,
    };
    this.props.onSubmit({ ...this.state, contact });
  };

  render() {
    return (
      <>
        <div className={css.boxApp}>
          <Section title="Phonebook">
            <form>
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
                type="text"
                name="number"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handleChange}
              />
              <button type="submit">Add contact</button>
            </form>
          </Section>
          <Section title="Contacts"></Section>
        </div>
      </>
    );
  }
}
