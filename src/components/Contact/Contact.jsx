import React from "react";
import { useState } from "react";


export default function Contact({name, number}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleContent = () => {
      setIsOpen(!isOpen);
    };

    return (
    <div>
        <p>{name}</p>
        <p>{number}</p>
        <button onClick={toggleContent}>Delete</button>
    </div>
    )
}