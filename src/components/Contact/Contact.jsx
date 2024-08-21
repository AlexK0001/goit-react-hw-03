import React from "react";
import { useState } from "react";
import contact from '../../contacts.json'
import css from './Contact.module.css'

export default function Contact( {contact}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleContent = () => {
      setIsOpen(!isOpen);
    };

    return (
    <div className={css.container} key={contact.id}>
      <div className={css.text}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
        <button className={css.btn} onClick={toggleContent}>Delete</button>
    </div>
    )
}