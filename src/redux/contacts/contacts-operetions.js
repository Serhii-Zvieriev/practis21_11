import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const { data } = await axios.get("/contacts");
    return data;
  }
);

// export const deleteContact = createAsyncThunk(
//   "contacts/deleteContact",
//   async (idContact) => {
//     const {
//       data: { id },
//     } = await axios.delete(`/contacts/${idContact}`);
//     return id;
//   }
// );

//============= END mockapi =============

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (idContact) => {
    await axios.delete(`/contacts/${idContact}`);
    return idContact;
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact) => {
    const { data } = await axios.post("/contacts", contact);
    return data;
  }
);
