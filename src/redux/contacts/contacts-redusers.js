import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
  fetchContacts,
  deleteContact,
  addContact,
} from "./contacts-operetions";

// import { addContact } from "./contacts-actions";
import { filterReducers } from "../filter/filter-redusers";

const contactsListReducer = createReducer(
  [
    // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  {
    [fetchContacts.fulfilled]: (_, { payload }) => payload,
    [addContact.fulfilled]: (state, action) => [...state, action.payload],
    [deleteContact.fulfilled]: (state, action) =>
      state.filter((contact) => contact.id !== action.payload),
  }
);

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

export const contactsReducer = combineReducers({
  items: contactsListReducer,
  filter: filterReducers,
  loading,
});
