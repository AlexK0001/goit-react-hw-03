import React from "react";
import Contact from "../Contact/Contact";
import contacts from '../../contacts.json';

export default function ContactList() {
    return (
        <div>
            {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
            ))}
        </div>
    )
}
