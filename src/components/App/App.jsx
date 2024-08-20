import { useState } from 'react'
import './App.css'
import contacts from '../../contacts.json'


export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList items={contacts}/>
    </div>

  )
}
