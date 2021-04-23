import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Container from './components/Container/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.string,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
  };

  // formSubmitHandler = data => {
  //   console.log('formSubmitHandler-data:', data);

  //   const todo = {
  //     id: uuidv4(),
  //     name: data.name,
  //     number: data.number,
  //   };

  //   const { contacts } = this.state;
  //   const isExistContacts = !!contacts.find(
  //     contact => contact.name === data.name,
  //   );
  //   !isExistContacts
  //     ? this.setState(prevState => ({
  //         contacts: [todo, ...prevState.contacts],
  //       }))
  //     : alert(`${data.name} is already in contacts`);
  // };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  render() {
    return (
      <Container>
        <div>
          <h1>Phonebook</h1>
          <ContactForm />

          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </Container>
    );
  }
}

export default App;
