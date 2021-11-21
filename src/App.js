import { Route, Routes } from "react-router";

// import ContactForm from "./components/ContactForm";
// import ContactList from "./components/ContactList";
// import Filter from "./components/Filter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contacts/contacts-operetions";

import { Navigation } from "./components/Navigation";
import { ContactsPages } from "./pages/ContactsPages";
import { RegistrationPage } from "./pages/RegistrationPage";
import { LoginPage } from "./pages/LoginPage";
import { refreshUser } from "./redux/auth/auth-operation";

import style from "./App.module.css";

function App() {
  const isLoading = useSelector((state) => state.contacts.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <Navigation />
      <Routes>
        <Route path="registration" element={<RegistrationPage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="contacts" element={<ContactsPages />}></Route>
      </Routes>

      {isLoading && <h1>Loading...</h1>}
    </div>
  );
}

export default App;
