import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import shortid from "shortid";

import { addContact } from "../../redux/contacts/contacts-operetions";
import { getContactsList } from "../../redux/contacts/contacts-selectors";

import style from "./ContactForm.module.scss";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChangeName = ({ target }) => {
    setName(target.value);
  };
  const handleChangeNumber = ({ target }) => {
    setNumber(target.value);
  };

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addContacts({ name, number });
    resetForm();
  };

  const dispatch = useDispatch();
  const contactsList = useSelector(getContactsList);

  const addContacts = ({ name, number }) => {
    if (contactsList.some((contact) => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      // id: shortid.generate(),
      name,
      number,
    };

    dispatch(addContact(contact));
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label className={style.label}>
        Name
        <input
          onChange={handleChangeName}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          className={style.input}
          required
        />
      </label>

      <label className={style.label}>
        Number
        <input
          onChange={handleChangeNumber}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          className={style.input}
          required
        />
      </label>

      <button type="submit" className={style.button}>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
