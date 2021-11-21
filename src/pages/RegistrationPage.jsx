import { useReducer } from "react";
import { useDispatch } from "react-redux";

import { registrationUser } from "../redux/auth/auth-operation";

const initialState = {
  name: "",
  email: "",
  password: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return { ...state, [action.type]: action.payload };
    case "email":
      return { ...state, [action.type]: action.payload };
    case "password":
      return { ...state, [action.type]: action.payload };
    default:
      return state;
  }
}

export function RegistrationPage() {
  const [state, setState] = useReducer(reducer, initialState);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    dispatch(registrationUser(state));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={(e) =>
          setState({ type: e.target.name, payload: e.target.value })
        }
      />
      <input
        type="text"
        name="email"
        value={state.email}
        onChange={(e) =>
          setState({ type: e.target.name, payload: e.target.value })
        }
      />
      <input
        type="password"
        name="password"
        value={state.password}
        onChange={(e) =>
          setState({ type: e.target.name, payload: e.target.value })
        }
      />
      <div>
        <button type="submit">Registration</button>
      </div>
    </form>
  );
}
