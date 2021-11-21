import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logOutUser } from "../redux/auth/auth-operation";

export function Navigation() {
  const dispatch = useDispatch();
  return (
    <div>
      <NavLink style={{ marginRight: "20px" }} to="/login">
        login
      </NavLink>
      <NavLink style={{ marginRight: "20px" }} to="/registration">
        registration
      </NavLink>
      <NavLink style={{ marginRight: "20px" }} to="/contacts">
        contacts
      </NavLink>
      <button onClick={() => dispatch(logOutUser())} type="button">
        LogOut
      </button>
    </div>
  );
}
