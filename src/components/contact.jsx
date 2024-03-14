import { useState } from 'react';
import './style.css';

function Contact() {
  const [Name, setName] = useState('');
  const [Message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { contact, value } = e.target;
    return contact === 'Contact' ? setName(value) : setMessage(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // this should be where their information will be stored and sent
    
  };

  return (
    <div className="container text-center">
      <h1>
        Please fill out your information here
      </h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={Name}
          name="Name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={Message}
          name="Message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;