import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contacts-operetions";
import { getFilteredContacts } from "../../redux/contacts/contacts-selectors";

import style from "./ContactList.module.scss";

function ContactList() {
  const dispatch = useDispatch();

  const deleteContactFromId = ({ target }) =>
    dispatch(deleteContact(target.id));

  const contacts = useSelector(getFilteredContacts);

  return (
    <ul className={style.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            id={id}
            onClick={deleteContactFromId}
            className={style.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
