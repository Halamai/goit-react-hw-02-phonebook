import React, { Component } from "react";

import { v4 as uuidv4 } from "uuid";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (addNewContact) => {
    if (this.isContactExist(addNewContact.name))
      return alert(`${addNewContact.name} is already in contacts`);

    this.setState((prev) => {
      return {
        contacts: [...prev.contacts, { id: uuidv4(), ...addNewContact }],
      };
    });
  };
  onHandleFilter = (e) => {
    this.setState({ filter: e.target.value });
  };
  // console.log(e);
  isContactExist = (name) =>
    this.state.contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

  getOnHandleFilter = () =>
    this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  onDeleteContact = (e) => {
    const id = e.target.id;

    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>

        <Filter
          onHandleFilter={this.onHandleFilter}
          filter={this.state.filter}
        />
        <ContactList
          getOnHandleFilter={this.getOnHandleFilter()}
          onDeleteContact={this.onDeleteContact}
        />
      </>
    );
  }
}

export default App;
